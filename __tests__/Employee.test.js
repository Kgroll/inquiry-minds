const Employee = require('../lib/Employee.js');

test('create an employee object', ()  => {    
   
    const employee = new Employee('Kristen', '5', 'groller@rogers.com');
 //   const employee = new employee ('2', 'n', 'gmail', 'employee', '66');

    expect(employee.name).toBe('Kristen');
    expect(employee.id).toBe('5');
    expect(employee.email).toBe('groller@rogers.com');
    
});