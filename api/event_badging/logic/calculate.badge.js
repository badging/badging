let messageObj;

const calculateBadge = async (octokit, payload) => {
  let initialCheckCount = 6,
    issueURL = payload.issue.html_url;
  payload.repository.name === "event-diversity-and-inclusion"
    ? (initialCheckCount = 4)
    : initialCheckCount;

  // get the list of comments on the event issue
  const comments = await octokit.rest.issues.listComments({
    owner: payload.repository.owner.login,
    repo: payload.repository.name,
    issue_number: payload.issue.number,
  });

  // filter out the comments that are checklists
  let checklists = comments.data.filter((comment) => {
    return (
      comment.user.type == "Bot" &&
      comment.body.substring(0, 15) == "# Checklist for"
    );
  });

  // get the total number of checks for each checklist
  let totalCheckCount = checklists.map(function (element) {
    return (
      (element.body.match(/\[x\]/g) || []).length +
      (element.body.match(/\[ \]/g) || []).length
    );
  });

  totalCheckCount = totalCheckCount.map(function (element) {
    return element - initialCheckCount;
  });

  // get the number of checks for each checklist that are positive
  let positiveCheckCount = checklists.map(function (element) {
    let checkCount =
      +(element.body.match(/\[x\]/g) || []).length - initialCheckCount;
    if (checkCount <= 0) return 0;
    else return checkCount;
  });

  // get the percentage of checks for each checklist that are positive
  let percentages = positiveCheckCount.map(function (element) {
    let p = Math.floor((element / totalCheckCount[0]) * 100);
    return p;
  });

  let reviewerCount = percentages.length;
  let reviewResult = 0;
  percentages.forEach((element) => {
    reviewResult += element;
  });
  reviewResult /= reviewerCount;

  // assign bagde based on review result
  const badgeAssigned =
    reviewResult < 40
      ? ["Pending", "D%26I-Pending-red"]
      : reviewResult < 60
      ? ["Passing", "D%26I-Passing-passing"]
      : reviewResult < 80
      ? ["Silver", "D%26I-Silver-silver"]
      : reviewResult <= 100
      ? ["Gold", "D%26I-Gold-yellow"]
      : ["pending", "D%26I-Pending-red"];

  const url =
    "https://img.shields.io/badge/" +
    badgeAssigned[1] +
    "?style=flat-square&labelColor=583586&&link=" +
    issueURL +
    "/&logo=data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI1MCAyNTAiPgo8cGF0aCBmaWxsPSIjMUM5QkQ2IiBkPSJNOTcuMSw0OS4zYzE4LTYuNywzNy44LTYuOCw1NS45LTAuMmwxNy41LTMwLjJjLTI5LTEyLjMtNjEuOC0xMi4yLTkwLjgsMC4zTDk3LjEsNDkuM3oiLz4KPHBhdGggZmlsbD0iIzZBQzdCOSIgZD0iTTE5NC42LDMyLjhMMTc3LjIsNjNjMTQuOCwxMi4zLDI0LjcsMjkuNSwyNy45LDQ4LjVoMzQuOUMyMzYuMiw4MC4yLDIxOS45LDUxLjcsMTk0LjYsMzIuOHoiLz4KPHBhdGggZmlsbD0iI0JGOUNDOSIgZD0iTTIwNC45LDEzOS40Yy03LjksNDMuOS00OS45LDczLTkzLjgsNjUuMWMtMTMuOC0yLjUtMjYuOC04LjYtMzcuNS0xNy42bC0yNi44LDIyLjQKCWM0Ni42LDQzLjQsMTE5LjUsNDAuOSwxNjIuOS01LjdjMTYuNS0xNy43LDI3LTQwLjIsMzAuMS02NC4ySDIwNC45eiIvPgo8cGF0aCBmaWxsPSIjRDYxRDVGIiBkPSJNNTUuNiwxNjUuNkMzNS45LDEzMS44LDQzLjMsODguOCw3My4xLDYzLjVMNTUuNywzMy4yQzcuNSw2OS44LTQuMiwxMzcuNCwyOC44LDE4OEw1NS42LDE2NS42eiIvPgo8L3N2Zz4K";

  const markdownBadgeImage =
    "![Assigned badge: " + badgeAssigned[0] + "](" + url + ")";

  const htmlBadgeImage =
    "<img src='" +
    url +
    "' alt='" +
    "d&i-badging-badge-state: " +
    badgeAssigned[0] +
    "'/>";
  messageObj = {
    markdownBadgeImage: markdownBadgeImage,
    htmlBadgeImage: htmlBadgeImage,
    reviewResult: reviewResult,
    reviewerCount: reviewerCount,
    assigned_badge: badgeAssigned[0],
    badge_URL: url,
  };

  return messageObj;
};

module.exports = calculateBadge;
