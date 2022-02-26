// requires employee class
const Employee = require('./Employee');

// Extends engineer subclass to the employee class
class Engineer extends Employee {
    constructor( name, id, email, github ){
        // super constructor has the same properties as the employee class
         super( name, id, email )
        // engineer has uncommon data, github
        this.github = github

    }
    
    // returns the uncommon data
    getGithub() {
        return this.github;

    }

    // overrides the employee role with engineer
    getRole() {
        return 'Engineer';
    }

}

// exports the engineer subclass
module.exports = Engineer;