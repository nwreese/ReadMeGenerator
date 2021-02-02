// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = () =>
 inquirer.prompt([
    {
        message: "What is the name of the app?",
        name: "title"
    },
    {
        message: "What is the app for?",
        name: "description"
    },
    {
        message: "How does the app function?",
        name: "function"
    },
    {
        message: "How do you install it?",
        name: "installation"
    },
    {
        message: "How do you report issues?",
        name: "issues"
    },
    {
        message: "How do you make contributions?",
        name: "contributions"
    },
    {
        message: "What is your github username?",
        name: "username"
    },
    {
        message: "What is your email?",
        name: "email"
    },
]);

// TODO: Create a function to write README file
const generateReadMe = (answers) =>
` ## Table of Content
* [title](#title)
* [description](#description)
* [function](#function)
* [installation](#installation)
* [issues](#issues)
* [contributions](#contributions)
* [username](#username)
* [email](#email)

## Title
${answers.title}
## Description
${answers.description}
## Function
${answers.function}
## Installation
${answers.installation}
## Issues
${answers.issues}
## Contributions
${answers.contributions}
## User Name
${answers.username}
## Email
${answers.email}
`;
// TODO: Create a function to initialize app
const init = () => {
questions().then((answers) => { 
  try {
      const data = generateReadMe(answers);
    fs.writeFileSync('ReadMe.md', data);
    console.log('Success');
  } catch (error) {
      console.log(error);
  }
});
};


// Function call to initialize app
init();
