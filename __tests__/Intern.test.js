const intern = require('./lib/Intern.js');

test('check if name, id and email are added', (name, id, email, school) => {
    const name = new Name('Dave')

expect(intern.name).toBe('Dave');
expect(intern.id).toBe(expect.any(Number));
expect(intern.email).toBe('email');
expect(intern.school).toBe('school');
})