const Employee = require('./lib/Employee.js');

test('check if name, id, email, github and role are added', ()  => {    
    const employee = new Employee();

expect(employee.name).toBe(expect.any(String));
expect(employee.id).toBe(expect.any(Number));
expect(employee.email).toBe(expect.stringContaining('@'));
expect(employee.github).toBe(expect.stringContaining('git'));
expect(employee.role).toBe('employee');
});