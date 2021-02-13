const employee = require('./lib/Employee.js');

test('check if name, id and email are added', (name, id, email) => {
    const name = new Name('Dave')

expect(employee.name).toBe('Dave');
expect(employee.id).toBe(expect.any(Number));
expect(employee.email).toBe('email');
})