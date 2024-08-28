// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project:'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions?'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How do you use this application?'
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What are the contribution guidelines?'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What are the test instructions?'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:'
  }
];

// Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log('README.md file has been generated!');
  });
}

// Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then((answers) => {
      const markdown = generateMarkdown(answers);
      writeToFile('README.md', markdown);
    });
}

// Function call to initialize app
init();
