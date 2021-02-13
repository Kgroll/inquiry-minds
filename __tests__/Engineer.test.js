const { TestScheduler } = require('jest');
const engineer = require('./lib/Engineer.js');
const employee = require('./lib/Employee.js');

test('check if name, id, email, github and role are added', ()  => {    
    const engineer = new Engineer('Dave', '20', '@gmail', 'employee', '200');

expect(engineer.name).toBe(expect.any(String));
expect(engineer.id).toBe(expect.any(Number));
expect(engineer.email).toBe(expect.stringContaining('@'));
expect(engineer.github).toBe(expect.stringContaining('git'));
expect(engineer.role).toBe('engineer');
})
