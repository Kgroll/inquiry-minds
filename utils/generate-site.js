const fs = require('fs');


const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            //if theer is an error reject the Promise and send the error to the '.catch()' method
            if (err) {
                reject(err);
                //return out of the function here to make sure the Promise doesn't accidently execute the resolve function
               return; 
            }
            //if all is well, reolve the PRomise and send data to the '.then' method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};




module.exports =  {writeFile};