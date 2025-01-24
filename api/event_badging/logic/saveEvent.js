const { createEvent } = require("../../database/controllers/event.controller.js");
const calculateBadge = require("./calculate.badge.js");

const saveEvent = async (octokit, payload) => {
  let { assigned_badge, badge_URL } = await calculateBadge(octokit, payload); // get badge name

  const event_name = payload.issue.title.replace(/\[(.*?)\] /gi, "");
  let event_URL;
  if (payload.issue.title.includes("[Virtual Event]")) {
    event_URL = await payload.issue.body
      .slice(
        payload.issue.body.indexOf("- Link to the Event Website: "),
        payload.issue.body.indexOf(
          "- Provide verification that you are an event organizer: "
        ) - 2
      )
      .replace("- Link to the Event Website: ", "");
  }

  if (payload.issue.title.includes("[In-Person Event]")) {
    event_URL = await payload.issue.body
      .slice(
        payload.issue.body.indexOf("- Link to the Event Website: "),
        payload.issue.body.indexOf("- Are you an organizer ") - 2
      )
      .replace("- Link to the Event Website: ", "");
  }
  // get badge name
  const badge = {
    name: assigned_badge,
    badgeURL: badge_URL,
  };

  // get array of assignees
  const reviewers = await payload.issue.assignees.map((assignee) => {
    return {
      name: assignee.login,
      github_profile_link: assignee.html_url,
    };
  });

  const application = {
    app_no: payload.issue.number,
    app_URL: payload.issue.html_url,
  };

  try {
    const newEvent = {
      event_name,
      event_URL,
      badge,
      reviewers,
      application,
    };

    const event = await createEvent(newEvent);
    if (event) {
      return event;
    } else {
      return "";
    }
  } catch (error) {
    console.error(error);
    return "";
  }
};

module.exports = saveEvent;
