const inquirer = require('inquirer');


//const  {writeFile, copyFile } = require('./utils/generate-site.js')
const generatePage = require('./src/page-template.js');

//personal questions
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',            
            message: "Enter the employee's name.",            
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the employee's id number.",
        },
        {
            type: 'link',
            name: 'email',
            message: "Enter the emloyee's email address.",
        },
    ])       
    /*  promptUser()
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
     
     });
    */}