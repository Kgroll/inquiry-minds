const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const generatePage = require('./src/page-template.js');

const inquiryMinds = [];

//const  {writeFile, copyFile } = require('./utils/generate-site.js')

function getManager() {}
//ask questions
 inquirer.prompt([
        {
            type: 'input',
            name: 'managerNname',            
            message: "Enter the manager's name.",            
        },
        {
            type: 'number',
            name: 'id',
            message: "Enter the manager's id number.",
        },
        {
            type: 'link',
            name: 'email',
            message: "Enter the manager's email address.",
        },
    ])     
  


   /*   promptUser()
     .then(promptProject)
     .then(portfolioData => {      
 return  generatePage(portfolioData);
     })
     .then(pageHTML => {
       return writeFile(pageHTML);
     })
     .then(writeFileResponse => {
       console.log(writeFileResponse);
       return copyFile;
     })
     .then(copyFileResponse => {
       console.log(copyFileResponse);
     })
     .catch(err => {
       console.log(err);
     
     });*/
    function buildInquiryMinds() {
        fs.writeFileSync('./dist/index.html', renderPage(inquiryMinds), 'UTF-8');
    }