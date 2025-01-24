const Repo = require("../models/repo.model");
const User = require("../models/user.model");

const saveRepo = async (
  githubRepoId,
  gitlabRepoId,
  DEICommitSHA,
  repoLink,
  badgeType,
  attachment,
  userId
) => {
  if ((githubRepoId && gitlabRepoId) || (!githubRepoId && !gitlabRepoId)) {
    return "Error creating repo: provide either githubRepoId or gitlabRepoId";
  }

  try {
    // Find a user by their name
    const user = await User.findOne({ where: { id: userId } });

    if (!user) {
      throw new Error(`User with id '${userId}' not found.`);
    }

    // Create a new repo associated with the user
    const repo = await Repo.create({
      githubRepoId,
      gitlabRepoId,
      DEICommitSHA,
      repoLink,
      badgeType,
      attachment,
      userId: user.id,
    });

    return repo.id;
  } catch (error) {
    console.error("Error saving repo:", error.message);
  }
};

module.exports = saveRepo;
