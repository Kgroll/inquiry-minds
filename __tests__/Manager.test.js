const manager = require('./lib/Manager.js');

test('check if name, id and email are added', (name, id, email, office) => {
    const name = new Name('Dave')

expect(manager.name).toBe('Dave');
expect(manager.id).toBe(expect.any(Number));
expect(manager.email).toBe('email');
expect(manager.office).toBe(any(Number)):
})