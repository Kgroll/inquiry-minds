
const Intern = require('../lib/Intern.js');


test('check new intern object', ()  => {    

    const intern = new Intern('Kristen', '5', 'groller@rogers.com', 'UofT');
 //   const intern = new Intern ('2', 'n', 'gmail', 'employee', '66');

    expect(intern.name).toBe('Kristen');
    expect(intern.id).toBe('5');
    expect(intern.email).toBe('groller@rogers.com');
    expect(intern.school).toBe('UofT');
    
});
