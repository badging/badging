const calculateBadge = require("./calculate.badge");

const getResults = async (octokit, payload) => {
  const resultsArray = await calculateBadge(octokit, payload);
  const message =
    "\nReview percentage: " +
    resultsArray.reviewResult +
    "\n" +
    "\nNumber of reviewers: " +
    resultsArray.reviewerCount +
    "\n";

  // comment results and badge on the issue
  await octokit.rest.issues
    .createComment({
      owner: payload.repository.owner.login,
      repo: payload.repository.name,
      issue_number: payload.issue.number,
      body: message,
    })
    .then((res) => console.log(res.status))
    .catch((err) => console.error(err));
};

module.exports = getResults;
