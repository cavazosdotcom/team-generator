// requires employee class
const Employee = require('./Employee');

// Extends manager subclass to the employee class
class Manager extends Employee {
    constructor( name, id, email, officeNumber ){
        // super constructor has the same properties as the employee class
        super( name, id, email )
        // manager has uncommon data, officeNumber
        this.officeNumber = officeNumber

    }
    
    // returns the uncommon data
    getOfficeNumber() {
        return this.officeNumber;

    }

    // overrides the employee role with manager
    getRole() {
        return 'Manager';
    }

}

// exports the manager subclass
module.exports = Manager;