const Employee = require('./Employee');
class Engineer extends Employee {
    constructor(name,id,email,github) {
        super(name,id,email);
        this.github = github; 
    }
    getGithub(){  //returning github
        return this.github;
      }
      getRole () {  //returning role
        return "Engineer";
    }
}
module.exports = Engineer; 