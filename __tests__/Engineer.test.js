const Engineer = require('../lib/Engineer.js');

test('create an engineer object', ()  => {    
   
    const engineer = new Engineer('Kristen', '5', 'groller@rogers.com', 'git');
 //   const engineer = new engineer ('2', 'n', 'gmail', 'employee', '66');

    expect(engineer.name).toBe('Kristen');
    expect(engineer.id).toBe('5');
    expect(engineer.email).toBe('groller@rogers.com');
    expect(engineer.github).toBe('git');

});
