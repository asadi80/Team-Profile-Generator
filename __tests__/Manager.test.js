const Manager = require('../lib/Manager');

// creates Manager object 
test('creates an Manager ', () => {
    const manager = new Manager('Abdurraouf', 1, 'example@gmail.com',4);
    expect(manager.officeNumber) .toEqual(expect.any(Number));
});

// gets role from getRole() 
test('gets role of employee', () => {
    const manager = new Manager('Abdurraouf', 1, 'example@gmail.com',4);
    expect(manager.getRole()).toEqual("Manager");
});