const augurAPI = require("../helpers/augurAPI");
const mailer = require("../helpers/mailer");
const saveRepo = require("../database/controllers/repo.controller");

const bronzeBadge = async (
  userId,
  userName,
  email,
  githubRepoId,
  gitlabRepoId,
  url,
  content,
  DEICommitSHA
) => {
  // Check for specific titles
  const titlesToCheck = [
    "Project Access",
    "Communication Transparency",
    "Newcomer Experiences",
    "Inclusive Leadership",
  ];
  const results = []; // capture the missing titles

  let hasAllTitles = true;

  for (const title of titlesToCheck) {
    if (!content.includes(title)) {
      results.push(`${title} is missing`);
      hasAllTitles = false;
    }
  }

  if (!hasAllTitles) {
    mailer(email, userName, "Bronze", null, null, results.join("\n"));
  } else if (hasAllTitles) {
    // email content
    const markdownLink =
      "![Bronze Badge](https://raw.githubusercontent.com/badging/badging/main/src/assets/images/badges/bronze-badge.svg)";
    const htmlLink =
      "&lt;img src=&quot;https://raw.githubusercontent.com/badging/badging/main/src/assets/images/badges/bronze-badge.svg&quot; alt=&quot;DEI Badging Bronze Badge&quot; /&gt;";

    // send email
    mailer(email, userName, "Bronze", markdownLink, htmlLink);

    // save repo to database and return repo id
    const repo_id = await saveRepo(
      githubRepoId,
      gitlabRepoId,
      DEICommitSHA,
      url,
      "Bronze",
      markdownLink,
      userId
    );

    // use repo id in augur api call
    const response = await augurAPI(repo_id, "bronze", url);
    console.log(response);
  }
};

module.exports = bronzeBadge;
