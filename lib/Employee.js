class Employee {  // employee constructor 
    constructor(name,id,email){
        this.name=name;
        this.id=id;
        this.email=email;

    }


    getName(){  // returning name from input
        return this.name;
      }

    getId(){  //returning ID from input
        return this.id;
      }
    
    getEmail(){  // returning email from input
        return this.email;
      }
    
    getRole(){  // returning employee type 
        return 'Employee';
      }
    }

    module.exports = Employee; // to be exported 