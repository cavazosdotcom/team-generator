// creates employee class
class Employee {
    // constructor with name, id and email properties
    // functions to return the value for each property
    constructor( name, id, email ) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
}

// exports the employee class
module.exports = Employee;