const Intern = require('../lib/Intern');

// creates Intern object 
test('creates an Intern ', () => {
    const intern = new Intern('Abdurraouf', 1, 'example@gmail.com','UC-Berkely');
    expect(intern.school) .toEqual(expect.any(String));
});
// gets school from getSchool()
test('gets Intern school value', () => {
    const intern = new Intern('Abdurraouf', 1, 'example@gmail.com','UC-Berkely');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// gets role from getRole() 
test('gets role of employee', () => {
    const intern = new Intern('Abdurraouf', 1, 'example@gmail.com','UC-Berkely');
    expect(intern.getRole()).toEqual("Intern");
});