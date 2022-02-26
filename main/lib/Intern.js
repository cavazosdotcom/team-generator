// requires employee class
const Employee = require('./Employee');

// Extends intern subclass to the employee class
class Intern extends Employee {

    constructor( name, id, email, school ){
        // super constructor has the same properties as the employee class
        super( name, id, email )
        // intern has uncommon data, school
        this.school = school

    }
    
    // returns the uncommon data
    getSchool() {
        return this.school;

    }

    // overrides the employee role with intern
    getRole() {
        return 'Intern';
    }

}

// exports the intern subclass
module.exports = Intern;