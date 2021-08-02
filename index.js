// Packages needed for this application
var inquirer = require('inquirer');
var fs = require('fs');
var generateMarkdown = require('./utils/generateMarkdown.js')
var path = require('path')

// An array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a description of your project "
    },
    {
        type: "input",
        name: "install",
        message: "Please provide installation instructions"
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide how the product is to be used"
    },
    {
        type: "list",
        name: "license",
        message: "Please provide the project licence",
        choices: ['GNU', 'MIT', 'none']
    },
    {
        type: "list",
        name: "badge",
        message: "Please provide the badges links you would like to include",
        choices: ['HTML', 'CSS', 'JS', 'NODE', 'none']
    },
    {
        type: "input",
        name: "repo",
        message: "Please include your repository (repo) link"
    },
    {
        type: "input",
        name: "tests",
        message: "Please provide information on any error testing that the user may perform"
    },
    {
        type: "input",
        name: "influences",
        message: "Please list influences to thank"
    },
    {
        type: "input",
        name: "username",
        message: "Please provide your github username"
    },
];

// Function to write README file
// Function to initialize app
async function init() {
    let data = await inquirer.prompt(questions).then(answers => { return answers })

    console.log('data', data)

    fs.writeFile('exampleGeneratedReadme.md', generateMarkdown(data),

        function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
}

// Function call to initialize app
init();
