const User = require("../models/user.model");

const findUser = async (userId) => {
  return await User.findOne({ where: { id: userId } });
};

const saveUser = async (login, name, email, githubId, gitlabId) => {
  if ((githubId && gitlabId) || (!githubId && !gitlabId)) {
    console.error("Error creating user: provide either githubId or gitlabId");
    return null;
  }

  try {
    // Find a user by their GitHub ID or GitLab ID
    let user = null;
    if (githubId) {
      user = await User.findOne({ where: { githubId } });
    } else if (gitlabId) {
      user = await User.findOne({ where: { gitlabId } });
    }

    if (!user) {
      // If the user doesn't exist, create a new one
      user = await User.create({
        login,
        name,
        email,
        githubId,
        gitlabId,
      });
      console.log(`New user created: ${user.login}`);
      return user;
    } else {
      // User already exists; update if necessary
      const updates = [];

      if (user.name !== name) {
        user.name = name;
        updates.push(`name from '${user.name}' to '${name}'`);
      }
      if (user.email !== email) {
        user.email = email;
        updates.push(`email from '${user.email}' to '${email}'`);
      }
      if (user.login !== login) {
        user.login = login;
        updates.push(`username from '${user.login}' to '${login}'`);
      }

      if (updates.length > 0) {
        await user.save();
        console.log(`User ${user.login} updated: ${updates.join(", ")}`);
      }

      console.log("User Already Exists");
      return user;
    }
  } catch (error) {
    console.error(`Error saving user: ${error.message}`);
    return null;
  }
};

module.exports = {
  saveUser,
  findUser,
};
