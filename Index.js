const inquirer = require('inquirer');
const fs = require('fs');

/*const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');*/





//const writeHTML = require('./utils/generate-site.js');

//const  {writeFile, copyFile } = require('./utils/generate-site.js')
//const inquiryMinds = [];

const getEmployee = () => {  
return inquirer.prompt([
  {
  type: 'input',
  name: 'name',            
  message: "Enter the employee's name:", 
},
{
  type: 'number',
  name: 'id',
  message: "Enter the employee's id number:",
},
{
  type: 'link',
  name: 'email',
  message: "Enter the employee's e-mail address:",
},
{
  type: 'list',
  name: 'employeeType',
  message: 'Please choose the employee type:',
  choices: ['Manager', 'Engineer', 'Intern'],  
  }
])
.then ((data) => {
  if (data.employeeType === "Manager") {
    getManager();
  } else if (data.employeeType === "Engineer") {
    getEngineer();
  } else if (data.employeeType === "Intern") {
    getIntern();
  } else {
    console.log('See your team!');
    const generatePage = require('./src/page-template.js');
  }
});

  
}
const getManager = () => {
  return inquirer.prompt([
    {
      type: 'number',
      name: 'office',
      message: "Enter the Manager's office number",
    }
  ])  
}
const getEngineer = () => {
  return inquirer.prompt([
    {
      type: 'link',
      name: 'github',
      message: "Enter the Engineer's GitHub username:",
    }
  ])
}
const getIntern = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'school',
      message: "Please enter the Intern's school:",
    }
  ])
}


getEmployee();