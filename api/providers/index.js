const {
  githubAuth,
  githubAuthCallback,
  githubApp,
} = require("./github/auth.js");
const { gitlabAuth, gitlabAuthCallback } = require("./gitlab/auth.js");

module.exports = {
  githubAuth,
  githubAuthCallback,
  githubApp,
  gitlabAuth,
  gitlabAuthCallback,
};
