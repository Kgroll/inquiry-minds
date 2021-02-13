const { TestScheduler } = require('jest');
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');


test('check if name, id, email, office and role are added', ()  => {    
    const manager = new Manager('Dave', '20', '@gmail', 'employee', '200');

expect(manager.name).toBe(expect.any(String));
expect(manager.id).toBe(expect.any(Number));
expect(manager.email).toBe(expect.stringContaining('@'));
expect(manager.office).toBe(any(Number));
expect(manager.role).toBe('manager');
})