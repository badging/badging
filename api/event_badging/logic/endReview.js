const calculateBadge = require("./calculate.badge.js");
const checkModerator = require("./checkModerator.js");

const endReview = async (octokit, payload) => {
  let resultsObj = await calculateBadge(octokit, payload);
  let message =
    "\n**Markdown Badge Link:**\n```\n" +
    resultsObj.markdownBadgeImage +
    "\n```" +
    "\n**HTML Badge Link:**\n```\n" +
    resultsObj.htmlBadgeImage +
    "\n```";

  // remove label
  await octokit.rest.issues.removeLabel({
    owner: payload.repository.owner.login,
    repo: payload.repository.name,
    issue_number: payload.issue.number,
    name: "review-begin",
  });

  // add label(s)
  await octokit.rest.issues.addLabels({
    owner: payload.repository.owner.login,
    repo: payload.repository.name,
    issue_number: payload.issue.number,
    labels: ["review-end"],
  });

  // comment out results and badge
  await octokit.rest.issues
    .createComment({
      owner: payload.repository.owner.login,
      repo: payload.repository.name,
      issue_number: payload.issue.number,
      body: resultsObj.markdownBadgeImage + message,
    })
    .then((res) => console.log(res.status))
    .catch((err) => console.error(err));

  // close issue
  if (checkModerator) {
    await octokit.rest.issues.update({
      owner: payload.repository.owner.login,
      repo: payload.repository.name,
      issue_number: payload.issue.number,
      state: "closed",
    });
  }
};

module.exports = endReview;
