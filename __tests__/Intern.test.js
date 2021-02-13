
const Intern = require('../Intern.js');


test('check if name, id, email, school and role are added', ()  => {    

    const intern = new Intern('Kristen', '5', 'groller@rogers.com', 'Intern', 'UofT');
 //   const intern = new Intern ('Dave', '20', '@gmail', 'employee', 'UofT');

    expect(intern.name).toBe(expect.any(String));
    expect(intern.id).toBe(expect.any(Number));
    expect(intern.email).toBe(expect.stringContaining('@'));
    expect(intern.school).toBe(expect.any(String));
    expect(intern.role).toBe('Intern');
});
