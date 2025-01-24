const { Octokit } = require("@octokit/rest");
const Repo = require("../../database/models/repo.model.js");
const bronzeBadge = require("../../badges/bronzeBadge.js");
const mailer = require("../../helpers/mailer.js");
const axios = require("axios");

/**
 * Calls the GitHub API to get the user info.
 * @param {*} octokit Octokit instance with autorization already set up
 * @returns A json object with `user_info` and `errors`
 */
const getUserInfo = async (octokit) => {
  try {
    // Authenticated user details
    const response = await octokit.users.getAuthenticated();
    const {
      data: { login, name, email, id },
    } = response;

    return {
      user_info: {
        login,
        name,
        email,
        id,
      },
      errors: [],
    };
  } catch (error) {
    return {
      user_info: null,
      errors: [error.message],
    };
  }
};

/**
 * Calls the GitHub API to get the user public repositories.
 * @param {*} octokit Octokit instance with autorization already set up
 * @returns A json object with `repositories` and `errors`
 */
const getUserRepositories = async (octokit) => {
  try {
    // Public repos they maintain, administer, or own
    let repos = [];
    let page = 1;
    let response = await octokit.repos.listForAuthenticatedUser({
      visibility: "public",
      per_page: 100,
      page,
    });

    while (response.data.length > 0) {
      repos = [...repos, ...response.data];
      page++;
      response = await octokit.repos.listForAuthenticatedUser({
        visibility: "public",
        per_page: 100,
        page,
      });
    }

    return {
      repositories: repos.map((repo) => {
        return {
          id: repo.id,
          fullName: repo.full_name,
        };
      }),
      errors: [],
    };
  } catch (error) {
    return {
      repositories: null,
      errors: "GitHub API returning no repository(ies).",
    };
  }
};

/**
 * Get the id and url of the provided repository path
 * @param {*} octokit An Octokit instance
 * @param {*} repositoryId The id of the repository
 * @returns A json object with `info` (the repository infos) and `errors`
 */
const getRepositoryInfo = async (octokit, repositoryId) => {
  try {
    const {
      data: { id, html_url, full_name },
    } = await octokit.request("GET /repositories/{repositoryId}", {
      repositoryId,
    });

    return {
      info: {
        id,
        url: html_url,
        fullName: full_name,
      },
      errors: [],
    };
  } catch (error) {
    return {
      info: null,
      errors: [error.message],
    };
  }
};

/**
 * Get the content and commit SHA of a file inside a repository
 * @param {*} octokit An Octokit instance
 * @param {*} repositoryFullName The full path to the repository
 * @param {*} filePath The path to the file inside the repository
 * @returns A json object with `file` (SHA and content) and `errors`
 */
const getFileContentAndSHA = async (octokit, repositoryFullName, filePath) => {
  try {
    const {
      data: { sha, content },
    } = await octokit.repos.getContent({
      owner: repositoryFullName.split("/")[0],
      repo: repositoryFullName.split("/")[1],
      path: filePath,
    });

    return {
      file: {
        sha,
        content: Buffer.from(content, "base64").toString(),
      },
      errors: [],
    };
  } catch (error) {
    return {
      file: null,
      errors: [error.message],
    };
  }
};
/**
 * Scans a list of repositories to try and apply for a badge
 * @param {*} userId Id of the user
 * @param {*} name Full name of the user
 * @param {*} email User email used to send them emails with the results
 * @param {*} repositoryIds List of repositories id to scan
 */
const scanRepositories = async (userId, name, email, repositoryIds) => {
  const octokit = new Octokit();
  let results = [];

  try {
    for (const repositoryId of repositoryIds) {
      const { info, errors: info_errors } = await getRepositoryInfo(
        octokit,
        repositoryId
      );
      if (info_errors.length > 0) {
        console.error(info_errors);
        continue;
      }
      const { file, errors: file_errors } = await getFileContentAndSHA(
        octokit,
        info.fullName,
        "DEI.md"
      );
      if (file_errors.length > 0) {
        results.push(`${info.url} does not have a DEI.md file`);
        continue;
      }

      try {
        // Check if the repo was badged before
        const existingRepo = await Repo.findOne({
          where: { githubRepoId: info.id, DEICommitSHA: file.sha },
        });

        // retrieve DEI template
        const template_content = await axios.get(
          "https://api.github.com/repos/badging/badging/contents/Template.DEI.md"
        );
        const template = Buffer.from(
          template_content.data.content,
          "base64"
        ).toString();

        console.log({
          repo: file.content,
          template_to_test: template,
        });

        if (file.content) {
          if (existingRepo) {
            // Compare the DEICommitSHA with the existing repo's DEICommitSHA
            if (existingRepo.DEICommitSHA !== file.sha) {
              bronzeBadge(
                userId,
                name,
                email,
                info.id,
                null,
                info.url,
                file.content,
                file.sha
              );
            } else {
              // Handle case when DEI.md file is not changed
              results.push(`${info.url} was already badged`);
            }
          } else if (file.content && file.content === template) {
            // check if file content is copy/paste from template
            results.push(
              `Please provide DEI information specific to ${info.url} by editing the template`
            );
          } else {
            // Repo not badged before, badge it
            bronzeBadge(
              userId,
              name,
              email,
              info.id,
              null,
              info.url,
              file.content,
              file.sha
            );
          }
        }
      } catch (error) {
        console.error(error.message);
      }
    }

    // Send one single email for generic errors while processing repositories
    // The `bronzeBadge` function will handle sending email for each project
    // with wether success or error messages
    if (results.length > 0) {
      mailer(email, name, "Bronze", null, null, results.join("\n"));
    }
  } catch (error) {
    console.error("Error: ", error.message);
  }

  return results;
};

module.exports = {
  getUserInfo,
  getUserRepositories,
  scanRepositories,
};
