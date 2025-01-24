# Contributing to BadgingAPI

We are beyond excited to see that you want to contribute!
Your contributions are a big help in improving this project. There are various ways to get involved with the BadgingAPI, and we value every single contribution.

Before you begin, please take a moment to go through these guidelines:

- [Code of Conduct](#code-of-conduct)

- [Who can contribute?](#who-can-contribute)

- [How to Contribute](#how-to-contribute)
  - [Set up your Local Development Environment](#set-up-your-local-development-environment)
- [Code Style and Standards](#code-style-and-standards)

## Code of Conduct

Please note that this project has a [Code of Conduct](https://github.com/chaoss/.github/blob/main/CODE_OF_CONDUCT.md). We expect all contributors to adhere to it. Please take a moment to read through these guidelines to ensure a positive and inclusive contributor experience.

## Who can contribute

The BadgingAPI is built by the community and warmly welcomes collaboration. So anyone can contribute to this project.

## How to Contribute

### What you'll need

Before cloning this repository, make sure you have the latest versions;

- [NodeJS and NPM](https://nodejs.org/en/download)
- [MySQL](https://dev.mysql.com/downloads/installer/)

Configure MySQL and make sure it is running on your machine before you proceed with the next steps. Create a new **_database_** and a new **_database user_** with a **_password_**. These three values will be used to connect to MySQL and will be needed when setting up your `.env` file.

### Basic Configurations

1. You'll need to [create a GitHub OAuth App](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app) on your personal GitHub account. Creating a GitHub OAuth App will automatically generate a `Client_ID` and will also enable you to generate a `Client_Secret` for your OAuth App. Store these values safely because they will be needed while generating a `.env` file for the first time.

2. Create your personal [Augur Application](https://projectbadge.chaoss.io/account/settings?section=application) in order to generate an 'augur*client_secret'. Following the link, you will click on "register" and then fill in a couple of fields as required which will set up an account which you will log into. Click on your username(the one you filled in for the "user ID") at the top left and select "profile" which will take you to account settings. Under the account settings, in the left sidebar, click on "applications" and create a new application by entering an App name and a Redirect URL which will generate the `augur_client_secret` which will be listed in the last column of \*\*\_Your Apps*\*\* table. Store the `augur_client_secret` together with the above GitHub OAuth credentials since it will be needed too while generating a `.env` file for the first time. The `augur_client_secret` which is the `AUGUR_CLIENT_SECRET` key is used to connect to the Augur API to submit repositories to the Augur Library for further badging.

After generating those values,

1. **Fork the Repository**: Click the "Fork" button in the upper right-hand corner of the BadgingAPI repository on GitHub.

2. **Clone Your Fork**: Clone your fork of the repository to your local machine:

   ```bash
   git clone https://github.com/your_username/BadgingAPI.git #replace `your_username` with your actual GitHub username
   ```

### Set up your Local Development Environment

1. **Perform the following to get your working environment ready**:

   ```bash
      cd BadgingAPI # move into project directory
      npm install # installs packages and dependencies
   ```

2. **Make sure project is running**: This starts a _.env_ configuration process if the _.env_ file is missing.

   ```bash
   npm run dev # this command will trigger a series of configuration questions in order setup your environmental variables
   ```

3. **Create a Branch**: Create a new branch for your contribution:

   ```bash
   git checkout -b your-branch-name
   ```

4. **Make Changes**: Make your desired changes to the codebase. Ensure your code follows our coding standards and guidelines.

5. **Test**: Test your changes to ensure they work as expected.

6. **Commit Changes**: Commit your changes with a clear and descriptive message. Make sure your commits are signed.

   ```bash
   git add .
   git commit -S -m "<Brief description of your changes>"
   ```

7. **Push Changes**: Push your changes to your fork on GitHub:

   ```bash
   git push origin your-branch-name
   ```

8. Create a Pull Request: Go to the BadgingAPI repository on GitHub and create a new pull request from your fork. Describe your changes and why they should be merged.

9. **Review and Discussion**: Your pull request will be reviewed by the maintainers and the community. Be prepared for feedback and be responsive to any suggested changes.

10. **Merge**: Once your pull request is approved, it will be merged into the main project.

## Code Style and Standards

BadgingAPI follows a specific code style and coding standards. Please make sure to adhere to these standards when contributing:

- **Variables and functions**: camelCase

  ```markdown
  myVariable = 10;

  function exampleFunction() {
  return "Hello, World!"
  };
  ```

- **Classes and constructors**: PascalCase

  ```markdown
  class MyClass {
  constructor(value) {
  this.value = value;
  }
  };
  ```

- **Filenames, constants, and environment variables**: Snake_case

  ```markdown
  my_file_name.txt

  const MAX_ATTEMPTS = 5;

  DATABASE_URL = "localhost:3000"
  ```

- **HTML attributes and CSS class names**: Kebab-case

  ```markdown
  <div class="my-element"></div>

  .my-element {
  color: red;
  };
  ```

### Issue Tracking

If you're looking for ways to contribute but don't have specific code changes in mind, you can check the [issue tracker](https://github.com/badging/BadgingAPI/issues) for BadgingAPI on GitHub. You might find issues marked as "help wanted" or "good first issue."
Ask for help;
If you have any questions or need assistance with your contribution, please contact or get in touch with the project maintainers.
We appreciate your contributions and look forward to working with you to make BadgingAPI even better!
