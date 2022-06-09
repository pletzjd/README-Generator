// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = ["What is your project's title?", "Please type in a description of your project: ", "Please type out installation instructions: ", "Please type out usage information: ", "Please type out contribution guidlines: ", "Please type out test instructions: ", "What license would you like to use for your project? ", "What is your GitHub username? ", "What is your email address? "];
const answerName = ['title', 'description', 'installation', 'usage', 'constribution', 'test', 'license', 'username', 'email'];
const choicesArr = ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('README generated!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: questions[0],
                name: answerName[0],
            },
            {
                type: 'input',
                message: questions[1],
                name: answerName[1],
            },
            {
                type: 'input',
                message: questions[2],
                name: answerName[2],
            },
            {
                type: 'input',
                message: questions[3],
                name: answerName[3],
            },
            {
                type: 'input',
                message: questions[4],
                name: answerName[4],
            },
            {
                type: 'input',
                message: questions[5],
                name: answerName[5],
            },
            {
                type: 'list',
                message: questions[6],
                choices: choicesArr,
                name: answerName[6],
            },
            {
                type: 'input',
                message: questions[7],
                name: answerName[7],
            },
            {
                type: 'input',
                message: questions[8],
                name: answerName[8],
            },
        ])
        .then((response) =>
            writeToFile('README.md',generateMarkdown.generateMarkdown(response))
            // response.title !==''
            //     ? console.log('Success!(title)')
            //     : console.log('Fail(title)'),
            // response.description !==''
            //     ? console.log('Success!(description)')
            //     : console.log('Fail(description)'),
            // response.installation !==''
            //     ? console.log('Success(installation)')
            //     : console.log('Fail(installation)'),
            // response.usage !==''
            //     ? console.log('Success!(usage)')
            //     : console.log('Fail(usage)'),
            // response.contribution !==''
            //     ? console.log('Success!(contribution)')
            //     : console.log('Fail(contribution)'),
            // response.test !==''
            //     ? console.log('Success!(test)')
            //     : console.log('Fail (test)'),
            // response.license !==''
            //     ? console.log('Success!(license)')
            //     : console.log('Fail (license)'),
            // response.username !==''
            //     ? console.log('Success!(username)')
            //     : console.log('Fail (username)'),
            // response.email !==''
            //     ? console.log('Success!(email)')
            //     : console.log('Fail (email)'),
        );
}

// Function call to initialize app
init();