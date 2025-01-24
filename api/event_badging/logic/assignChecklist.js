require("dotenv").config();

const assignChecklist = async (octokit, payload) => {
  // get the checklist
  let newChecklist;

  // generate new checklist for In-Person Events

  if (payload.issue.title.substring(0, 15) == "[Virtual Event]") {
    const {
      data: { content },
    } = await octokit.rest.repos.getContent({
      owner: payload.repository.owner.login,
      repo: payload.repository.name,
      path: ".github/checklist-virtual.md",
    });

    const checklist = Buffer.from(content, "base64").toString(); // convert checklist content to string
    let {
      issue: { body },
    } = payload; // get content of issue

    body = body.replace(/- \[x\]|- \[ \]/g, ""); // remove checks

    /****combine issue content and checklist into one ******/
    newChecklist =
      body.slice(0, body.indexOf("## Event Demographics")) +
      "\n" +
      checklist.slice(
        checklist.indexOf("## Initial checks"),
        checklist.indexOf("## Metric based checks")
      ) +
      "\n" +
      "\n" +
      body.slice(
        body.indexOf("## Event Demographics"),
        body.indexOf("## Inclusive Experience at Event")
      ) +
      "\n" +
      checklist.slice(
        checklist.indexOf("### Event Demographics"),
        checklist.indexOf("### Inclusive Experience at Event")
      ) +
      "\n" +
      "\n" +
      body.slice(
        body.indexOf("## Inclusive Experience at Event"),
        body.indexOf("## Time Inclusion for Virtual Events")
      ) +
      "\n" +
      checklist.slice(
        checklist.indexOf("### Inclusive Experience at Event"),
        checklist.indexOf("### Time Inclusion for Virtual Events")
      ) +
      "\n" +
      "\n" +
      body.slice(
        body.indexOf("## Time Inclusion for Virtual Events"),
        body.indexOf("## Code of Conduct at Event")
      ) +
      "\n" +
      checklist.slice(
        checklist.indexOf("### Time Inclusion for Virtual Events"),
        checklist.indexOf("### Code of Conduct at Event")
      ) +
      "\n" +
      "\n" +
      body.slice(
        body.indexOf("## Code of Conduct at Event"),
        body.indexOf("## Diversity Access Tickets")
      ) +
      "\n" +
      checklist.slice(
        checklist.indexOf("### Code of Conduct at Event"),
        checklist.indexOf("### Diversity Access tickets")
      ) +
      "\n" +
      "\n" +
      body.slice(
        body.indexOf("## Diversity Access Tickets"),
        body.indexOf("## Event Accessibility")
      ) +
      "\n" +
      checklist.slice(
        checklist.indexOf("### Diversity Access tickets"),
        checklist.indexOf("### Event Accessibility")
      ) +
      "\n" +
      "\n" +
      body.slice(body.indexOf("## Event Accessibility")) +
      "\n" +
      checklist.slice(checklist.indexOf("### Event Accessibility")) +
      "\n";
    /******************************************************************/
  } else {
    const {
      data: { content },
    } = await octokit.rest.repos.getContent({
      owner: payload.repository.owner.login,
      repo: payload.repository.name,
      path: ".github/checklist.md",
    });

    const checklist = Buffer.from(content, "base64").toString(); // convert checklist content to string
    let {
      issue: { body },
    } = payload; // get content of issue

    body = body.replace(/- \[x\]|- \[ \]/g, ""); // remove checks

    /****combine issue content and checklist into one ******/
    newChecklist =
      body.slice(0, body.indexOf("## Event Demographics")) +
      "\n" +
      checklist.slice(
        checklist.indexOf("## Initial checks"),
        checklist.indexOf("## Metric based checks")
      ) +
      "\n" +
      "\n" +
      body.slice(
        body.indexOf("## Event Demographics"),
        body.indexOf("## Inclusive Experience at Event")
      ) +
      "\n" +
      checklist.slice(
        checklist.indexOf("### Event Demographics"),
        checklist.indexOf("### Inclusive Experience at Event")
      ) +
      "\n" +
      "\n" +
      body.slice(
        body.indexOf("## Inclusive Experience at Event"),
        body.indexOf("## Code of Conduct at Event")
      ) +
      "\n" +
      checklist.slice(
        checklist.indexOf("### Inclusive Experience at Event"),
        checklist.indexOf("### Code of Conduct at Event")
      ) +
      "\n" +
      "\n" +
      body.slice(
        body.indexOf("## Code of Conduct at Event"),
        body.indexOf("## Diversity Access Tickets")
      ) +
      "\n" +
      checklist.slice(
        checklist.indexOf("### Code of Conduct at Event"),
        checklist.indexOf("### Diversity Access tickets")
      ) +
      "\n" +
      "\n" +
      body.slice(
        body.indexOf("## Diversity Access Tickets"),
        body.indexOf("## Family Friendliness")
      ) +
      "\n" +
      checklist.slice(
        checklist.indexOf("### Diversity Access tickets"),
        checklist.indexOf("### Family Friendliness")
      ) +
      "\n" +
      "\n" +
      body.slice(
        body.indexOf("## Family Friendliness"),
        body.indexOf("## Event Accessibility")
      ) +
      "\n" +
      checklist.slice(
        checklist.indexOf("### Family Friendliness"),
        checklist.indexOf("### Event Accessibility")
      ) +
      "\n" +
      "\n" +
      body.slice(
        body.indexOf("## Event Accessibility"),
        body.indexOf("## Event Location Inclusivity")
      ) +
      "\n" +
      checklist.slice(
        checklist.indexOf("### Event Accessibility"),
        checklist.indexOf("### Event Location Inclusivity")
      ) +
      "\n" +
      "\n" +
      body.slice(
        body.indexOf("## Event Location Inclusivity"),
        body.indexOf("## Public Health and Safety")
      ) +
      "\n" +
      checklist.slice(
        checklist.indexOf("### Event Location Inclusivity"),
        checklist.indexOf("### Public Health and Safety")
      ) +
      "\n" +
      "\n" +
      body.slice(body.indexOf("## Public Health and Safety")) +
      "\n" +
      checklist.slice(checklist.indexOf("### Public Health and Safety")) +
      "\n";
    /******************************************************************/
  }

  // get reviewer welcome information and convert it to string
  const reviewerGuide = await octokit.rest.repos.getContent({
    owner: payload.repository.owner.login,
    repo: payload.repository.name,
    path: ".github/reviewer-welcome.md",
  });
  const reviewerWelcome = Buffer.from(
    reviewerGuide.data.content,
    "base64"
  ).toString();

  // heading for the checklist
  const heading = `# Checklist for @${payload.assignee.login}`;

  // combine all the strings to make one body
  let reviewerMessage =
    "@" + payload.assignee.login + " " + reviewerWelcome + newChecklist;

  // create issue comment with newChecklist
  await octokit.rest.issues
    .createComment({
      owner: payload.repository.owner.login,
      repo: payload.repository.name,
      issue_number: payload.issue.number,
      body: heading + "\n" + reviewerMessage,
    })
    .then((res) => console.log(res.status))
    .catch((err) => console.error(err));

  // assign label if assignees are two
  if (payload.issue.assignees.length == 2) {
    await octokit.rest.issues
      .addLabels({
        owner: payload.repository.owner.login,
        repo: payload.repository.name,
        issue_number: payload.issue.number,
        labels: ["review-begin"],
      })
      .then((res) => console.log(res.status))
      .catch((err) => console.error(err));
  }
};

module.exports = assignChecklist;
