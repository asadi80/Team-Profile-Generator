const Engineer = require('../lib/Engineer');

// creates engineer object 
test('creates an engineer ', () => {
    const engineer = new Engineer('Abdurraouf', 1, 'example@gmail.com','asadi80');
    expect(engineer.github) .toEqual(expect.any(String));
});
// gets github from getGithub()
test('gets engineer github value', () => {
    const engineer = new Engineer('Abdurraouf', 1, 'example@gmail.com','asadi80');
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// gets role from getRole() 
test('gets role of employee', () => {
    const engineer = new Engineer('Abdurraouf', 1, 'example@gmail.com','asadi80');
    expect(engineer.getRole()).toEqual("Engineer");
});