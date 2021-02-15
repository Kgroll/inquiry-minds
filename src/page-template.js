/*const fs = require('fs');
function generatePage() {
  return `
  <!DOCTYPE html> 
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
   
    
        <div class="w3-panel w3-card-4">
          <header class="w3-container w3-blue">
            <h1> ${answers.name}
            <br/>
            Manager</h1>
          </div>
        <div class="w3-card-4" style="width:50% height: 10px">ID: ${answers.id}</div>

        <button class="w3-button w3-block w3-dark-grey">Email: ${answers.email}</button>
        <div class="w3-card-4" style="width:50% height: 10px">Office Number: ${answers.office}</div>
        </div>      


         
        <div class="w3-panel w3-card-4">
          <header class="w3-container w3-green">
            <h1> ${answers.name}
            <br/>
            Engineer</h1>
          </div>
        <div class="w3-card-4" style="width:50% height: 10px">ID: ${answers.id}</div>

        <button class="w3-button w3-block w3-dark-grey">Email: ${answers.email}</button>
        <div class="w3-card-4" style="width:50% height: 10px"><a href="${answers.link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i> GitHub</a>
        </div>
        

          
           <div class="w3-panel w3-card-4">
              <header class="w3-container w3-yellow">
                <h1> ${answers.name}
                <br/>
                Manager</h1>
              </div>
            <div class="w3-card-4" style="width:50% height: 10px">ID: ${answers.id}</div>
    
            <button class="w3-button w3-block w3-dark-grey">Email: ${answers.email}</button>
            <div class="w3-card-4" style="width:50% height: 10px">School: ${answers.school}</div>
            </div>
            


            </body>
            </html>  
            `;
          
        
  }
  module.exports = generatePage;*/