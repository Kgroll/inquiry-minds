const inquirer = require('inquirer');
const fs = require('fs');


const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const generatePage = require('./src/page-template.js');

//const writeHTML = require('./utils/generate-site.js');

//const  {writeFile, copyFile } = require('./utils/generate-site.js')
const inquiryMinds = [];

function getEmployee ()  {

inquirer.prompt([
  {

  
  type: 'input',
  name: 'name',            
  message: "Enter the employee's name:", 
  validate: nameInput => {
    if (nameInput) {
      return true;
    } else {
      console.log("Please enter the employee's name!");
      return false;
    }
  }           
},
{
  type: 'number',
  name: 'id',
  message: "Enter the employee's id number:",
  validate: idNumber => {
    if (idNumber) {
      return true;
    } else {
      console.log("Please enter the employee's ID number!");
      return false;
    }
  }
},
{
  type: 'link',
  name: 'email',
  message: "Enter the employee's e-mail address:",
  validate: emailLink => {
    if (emailLink) {
      return true;
    } else {
      console.log("Please enter the employee's e-mail address!");
      return false;
    }
  }
},  
{
type: 'list',
name: 'employeeType',
message: 'Please choose the employee type:',
choices: ['Manager', 'Engineer', 'Intern'],  
},
])

.then(answer => {
if (answer.role === 'Engineer') {
  inquirer.prompt([{
    type: 'link',
    name: 'github',
    message: "Please enter the Engineer's GitHub link:",
    validate: githubLink => {
      if (githubLink) {
        return true;
      } else {
        console.log("Please enter a GitHub link!");
        return false;
      }
    }
  }])


}   else if (answer.role === 'Manager') {
inquirer.prompt([{
  type: 'number',
  name: 'office',
  message: "Please enter the Manager's office number:",
  validate: officeNumber => {
    if (officeNumber) {
      return true;
    } else {
      console.log("Please enter the office number!");
      return false;
    }
  }
}])

} else if (answer.role === 'Intern') {
inquirer.prompt([{
type: 'input',
name: 'school',
message: "Please enter the Intern's school:",
validate: schoolInput => {
  if (schoolInput) {
    return true;
  } else {
    console.log("Please enter the school!");
    return false;
  }
}
}])
}
})
}
getEmployee();

fs.writeFile(`./dist/index.html`)