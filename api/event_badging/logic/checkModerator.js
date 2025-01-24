const checkModerator = async (octokit, payload) => {
  // get moderators list
  const moderators = await octokit.rest.repos
    .getContent({
      owner: payload.repository.owner.login,
      repo: payload.repository.name,
      path: ".github/moderators.md",
    })
    .then((res) => Buffer.from(res, "base64").toString())
    .catch((err) => console.err(err));

  let moderatorUsername = payload.issue.user.login;
  let moderatorList = moderators.split("\n");

  let list = moderatorList.filter((element) => {
    return element[0] == "-";
  });

  list = list.map(function (element) {
    return element.substring(2);
  });

  return list.includes(moderatorUsername);
};

module.exports = checkModerator;
