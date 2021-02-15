const inquirer = require('inquirer');
const fs = require('fs');
const employees = [];
const html = `<!DOCTYPE html> 
<html lang="en"> 
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Inqury Minds</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
  <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">

  <style> 
  :root {
    --primary: #9dbdc6;
    --secondary: #daeaef;
    --tertiary: #ff3d2e;
    --light: #ffffff;
    --dark: #272f32;
    --border-radius: 0.3rem;
    --spacing-one: calc(1rem * 0.25);
    --spacing-two: calc(1rem * 0.5);
    --spacing-three: 1rem;
    --spacing-four: calc(1rem * 1.5);
    --spacing-five: calc(1rem * 3);
  }
  * {
    box-sizing: border-box;
  }
  
  
  .card {
    margin: 0 0 20px 0;
    border: 3px solid var(--dark);
    border-radius: var(--border-radius);
  }
  
  .card-header {
    color: var(--primary);
    background-color: var(--dark);
    padding: 2.5%;
    border-radius: calc(0.18rem - 1px) calc(0.18rem - 1px) 0 0;
  }
  
  .card-body {
    padding: 2.5%;
  }
           
  </style>
  </head>

<body>
<div class = "jumbotron">
</div>
{Placeholder}

 </body>
 </html>
`;


//personal questions
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
          
          function addManager(answers) {
            const manager = `<div class="w3-panel w3-card-4">
            <header class="w3-container w3-blue">
              <h1> ${answers.name}
              <br/>
              Manager</h1>
            </header>
          <div class="w3-card-4" style="width:50% height: 10px">ID: ${answers.id}</div>
  
          <button class="w3-button w3-block w3-dark-grey">Email: ${answers.email}</button>
          <div class="w3-card-4" style="width:50% height: 10px">Office Number: ${answers.office}</div>
          </div>`    

          employees.push(manager)
          promptUser();
          }
          function addEngineer(answers) {
            const engineer = `<div class="w3-panel w3-card-4">
          <header class="w3-container w3-green">
            <h1> ${answers.name}
            <br/>
            Engineer</h1>
          </header>
        <div class="w3-card-4" style="width:50% height: 10px">ID: ${answers.id}</div>

        <button class="w3-button w3-block w3-dark-grey"><a href=" ${answers.email}"> E-mail: </button>
        <div class="w3-card-4" style="width:50% height: 10px"><a href="https://github.com/${answers.github}" class="btn mt-auto"><i class="fab fa-github mr-2"></i> GitHub </a>
        </div>
        </div>`
        employees.push(engineer);
        promptUser();        
          }
          function addIntern(answers) {
            const intern =  `<iv class="w3-panel w3-card-4">
            <header class="w3-container w3-yellow">
              <h1> ${answers.name}
              <br/>
              Intern</h1>              
              </header>
          <div class="w3-card-4" style="width:50% height: 10px">ID: ${answers.id}</div>
  
          <button class="w3-button w3-block w3-dark-grey">Email: ${answers.email}</button>
          <div class="w3-card-4" style="width:50% height: 10px">School: ${answers.school}</div>
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
   
      