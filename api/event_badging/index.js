const {
  welcome,
  getResults,
  // TODO: implement the help automation,
  endReview,
  assignChecklist,
  saveEvent,
} = require("./logic/index.js");

const eventBadging = async (name, octokit, payload) => {
  // perform actions on application issues only
  if (payload.issue.title.match(/event/i)) {
    // when applicant issue is open, welcome the applicant
    if (name === "issues" && payload.action === "opened") {
      welcome(octokit, payload);
    }

    // when issue is assigned, triger the assign algorithm
    if (name === "issues" && payload.action === "assigned") {
      assignChecklist(octokit, payload);
    }

    // comment commands
    if (name === "issue_comment" && payload.action === "created") {
      // get results
      if (payload.comment.body.match("/result")) {
        getResults(octokit, payload);
      }

      // end review
      if (payload.comment.body.match("/end")) {
        endReview(octokit, payload);
      }
    }

    // when issue is closed, update the readme with the event
    if (name === "issues" && payload.action === "closed") {
      saveEvent(octokit, payload);
    }
  } else if (
    name === "installation" &&
    payload.action === "new_permissions_accepted"
  ) {
    console.info("New permissions accepted");
  } else if (name === "*") {
    console.info(
      `Webhook: ${name}.${payload.action} not yet automated or needed`
    );
  }
};

module.exports = eventBadging;
