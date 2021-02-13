const inquirer = require('inquirer');
const fs = require('fs');

/*const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');*/

const generatePage = require('./src/page-template.js');

const inquiryMinds = [];

//const  {writeFile, copyFile } = require('./utils/generate-site.js')

function getEmployee(){}

inquirer.prompt([
  {
    type: 'list',
    name: 'employeeType',
    message: 'Please choose the employee type:',
    choices: ['Manager', 'Engineer', 'Intern'],
    
  
  },
  
  {
      type: 'input',
      name: 'name',            
      message: "Enter the employee's name.",            
  },
  {
      type: 'number',
      name: 'id',
      message: "Enter the employee's id number.",
  },
  {
      type: 'link',
      name: 'email',
      message: "Enter the employee's email address.",
  },
   
 
  ])
//ask questions




   /*   getEmployee()
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
  