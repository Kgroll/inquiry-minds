
const Manager = require('../lib/Manager');


test('creates an Manager object', ()  => {    
const manager = new Manager('Kristen', '5', 'groller@rogers.com', '2');
//   const manager = new manager ('2', 'n', 'gmail', 'employee', '66');

   expect(manager.name).toBe('Kristen');
   expect(manager.id).toBe('5');
   expect(manager.email).toBe('groller@rogers.com');
   expect(manager.office).toBe('2');

});