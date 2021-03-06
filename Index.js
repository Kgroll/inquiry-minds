const inquirer = require('inquirer');
const fs = require('fs');
const employees = [];
const html = `<!DOCTYPE html> 
<html lang="en"> 
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Inquiry Minds</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
  <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css">
 
  <h1>Inquiry Minds</h1>
  </head>

<body>

{Placeholder}

 </body>
 </html>
`;


// ask questions
const promptUser = () => {
   inquirer.prompt([
    {
      type: 'list',
      name: 'employeeType',
      message: "Please choose the employee type or choose 'All done':",
      choices: ['Manager', 'Engineer', 'Intern', 'All done!'],  
      }])

    .then(function (response) {
        if (response.employeeType === "Manager") {
          inquirer.prompt([
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
      type: 'number',
      name: 'office',
      message: "Enter the Manager's office number",
    }
  ]) 
     .then(answers => addManager(answers));
  }     
  else if (response.employeeType === "Engineer") {
    inquirer.prompt([
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
      type: 'link',
      name: 'github',
      message: "Enter the Engineer's GitHub username:",
    }
    ])
    .then(answers => addEngineer(answers));
  }
      else if (response.employeeType === "Intern") {
        inquirer.prompt([
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
            type: 'input',
            name: 'school',
            message: "Please enter the Intern's school:",
          }          
          ]) 
          .then(answers => addIntern(answers));        
          }
          else if (response.employeeType === 'All done!'){
            generateHTML();
          }
               
          });  
          
         //add employee cards
          function addManager(answers) {
            const manager = `<div class="card-deck" style="width: 18rem">
            <div class="card">
              <div class="card-header">
              <p> ${answers.name}</p>
              <p><i class="fas fa-mug-hot"> Manager</i></p>
              </div>
              <div class="card-body">
                <p class="list-group list-group-flush"></p>
                  <p class="list-group-item">ID: ${answers.id}</p>
                  <p class="list-group-item"><a href="mailto: ${answers.email}"> E-mail: ${answers.email}</a></p>
                  <p class="list-group-item">Office Number: ${answers.office}</p>
                                
              </div>
            </div>
          </div>`    

          employees.push(manager)
          promptUser();
          }
          function addEngineer(answers) {
            const engineer = `<div class="card-deck" style="width: 18rem">
          <div class="card">
          <div class="card-header">
            <p> ${answers.name}</p>          
            <p><i class="fas fa-calculator"> Engineer</i></p>
          </div>
        <div class="card-body"
          <p class ="list-group list-group-flush></p>
            <p class="list-group-item">ID: ${answers.id}</p>
            <p class="list-group-item"><a href="mailto: ${answers.email}"> E-mail: ${answers.email}</a></p>
            <p class="list-group-item"><a href="https://github.com/${answers.github}" class="btn mt-auto"><i class="fab fa-github mr-2"></i> GitHub </a></p>
            
            </div>
          </div>
        </div>`
        employees.push(engineer);
        promptUser();        
          }
          function addIntern(answers) {
            const intern =  `<div class="card-deck" style="width: 18rem">
            <div class="card">
            <div class="card-header">
              <p> ${answers.name}</p>          
              <p><i class="fas fa-university"> Intern</i></p>
            </div>
          <div class="card-body"
            <p class ="list-group list-group-flush></p>
              <p class="list-group-item">ID: ${answers.id}</p>
              <p class="list-group-item"><a href="mailto: ${answers.email}"> E-mail: ${answers.email}</a></p>
              <p class="list-group-item"> School: ${answers.school}</p>
              
            </div>
          </div>
        </div>`
          employees.push(intern);
          promptUser();
          }
          function generateHTML() {
            const allEmployees = employees.join('');
            const finalHTML = html.replace('{Placeholder', allEmployees)
            fs.writeFile('./dist/index.html', finalHTML, (err) => {
              if (err) throw err;
              console.log('Your team has been created!');
            })
          };
        } 
        promptUser();
