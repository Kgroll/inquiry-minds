const { TestScheduler } = require('jest');
const engineer = require('lib\Engineer.js');

test('check if name, id and email are added', (name, id, email) => {
    const name = new Name('Dave')

expect(engineer.name).toBe('Dave');
expect(engineer.id).toBe(expect.any(Number));
expect(engineer.email).toBe('email');
})