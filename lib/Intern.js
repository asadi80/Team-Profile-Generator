const Employee = require('./Employee');
class Intern extends Employee {
    constructor(name,id,email,school) {
        super(name,id,email);
        this.school = school; 
    }
    getSchool(){  //returning school
        return this.school;
      }
      getRole () {  //returning role
        return "Intern";
    }
}
module.exports = Intern; 