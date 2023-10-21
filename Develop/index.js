// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./Develop/utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'checkbox',
        name: 'technologies',
        message: 'Which technologies did you use for this project?',
        choices: ['Node.js', 'Inquirer', 'JavaScript', 'Css', 'HTML', 'Others']
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description for your project:'
    },
    {
        type: 'input',
        name: 'imageLink',
        message: 'Provide a link to your application demo image:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide the installation instructions for your project:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information for your project:'
    },
    {
        type: 'input',
        name: 'videoLink',
        message: 'Provide a link to the walkthrough video of your application:'
    },
    {
        type: 'input',
        name: 'author',
        message: 'Enter the name of the author:'
    },
    {
        type: 'input',
        name: 'linkedin',
        message: 'Enter the LinkedIn profile URL of the author:'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter the GitHub profile URL of the author:'
    },
    {
        type: 'input',
        name: 'portfolio',
        message: 'Enter the Portfolio URL of the author:'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List any credits or resources you referenced during the development of this project:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license do you want to use for your project?',
        choices: ['MIT', 'Apache 2.0', 'GPLv3', 'None']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log("Successfully wrote to " + fileName);
    });
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const markdownContent = generateMarkdown(answers);
            writeToFile("generated-README.md", markdownContent);
        })
        .catch((error) => {
            console.error(error);
        });
}
// Function call to initialize app
init();
