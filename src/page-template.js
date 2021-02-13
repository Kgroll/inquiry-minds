const generateAbout = aboutText => {
    if (!aboutText) {
      return '';
    }
  
    return `
    <section class="my-3 id="about">
    <h2 class="text-dark bg-primary p-2 display-inline-block">MyTeam</h2>
    <p>${aboutText}</p>
    </section>
    `;
  };
  const generateProjects = projectsArr => {
    //get array of just feature projects
   
      return `
      <section class="my-3" id ="portfolio">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
        <div class=""flex-row justify-space-between">
          ${projectsArr
          .filter(({ feature}) => feature)
          .map(({ name, description, languages, link }) => {
            return `
            <div class="col-12 mb-2 bg-dark text-light p-3">
            <h3 class="portfolio-item-title text-light">${name}</h3>        
          <h5 class="portfolio-languages">
            Built with:
            ${languages.join(', ')}
          </h5>
            <p>${description}</p>
            <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
        </div>
        `;
    })
    .join('')}
  
    ${projectsArr
      .filter(({ feature}) => !feature)
      .map(({ name, description, languages, link}) => { 
        return`
        <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
        <h3 class="portfolio-item-title text-light">${name}</h3>
        <h5 class="portfolio-languages">
          Built with:
          ${languages.join(', ')}
        </h5>
          <p>${description}</p>
          <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
      </div>
      `;
      
  })
  .join('')}
  </div>
  </section>
  `;
  };
  const generatePage = (name, id, email,) => {
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
    </head>
  
    <body>
      <h1>${name}</h1>
      <h2><a href="https://github.com/${github}">Github</a></h2>
    </body>
    </html>
    `;
  };  