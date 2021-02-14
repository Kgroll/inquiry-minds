let buildInquiryMinds = makeTeam => {
    if (!makeTeam) {
      return '';
    }
  
    return `
    <section class="my-3 id="about">
    <h2 class="text-dark bg-primary p-2 display-inline-block">MyTeam</h2>
    <p>${makeTeam}</p>
    </section>
    `;
  };
  
   
      return `
      
        <div class="w3-card">
        <p>w3-card</p>
          
        </div>
        `;
    })
    .join('')}
  
    ${makeTeamArr
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
    /*<!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
    </head>
  
    <body>
     
    </body>
    </html>*/
    