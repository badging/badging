const welcome = async (octokit, payload) => {
  const {
    data: { content },
  } = await octokit.rest.repos.getContent({
    owner: payload.repository.owner.login,
    repo: payload.repository.name,
    path: ".github/applicant-welcome.md",
  });

  // send welcome message on the issue
  await octokit.rest.issues
    .createComment({
      owner: payload.repository.owner.login,
      repo: payload.repository.name,
      issue_number: payload.issue.number,
      body: Buffer.from(content, "base64").toString(),
    })
    .then((res) => console.info(res.status))
    .catch((err) => console.error(err));
};

module.exports = welcome;
