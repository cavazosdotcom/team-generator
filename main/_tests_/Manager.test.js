const Manager = require('../lib/Manager');

// tests whether the Manager is an object
test ("Manager is an object", () => {
    const e = new Manager();
    expect(typeof(e)).toBe('object');
});

// tests whether the Manager can set a name
test ("Manager can set name", () => {
    const name = 'Dane'
    const e = new Manager( name );
    expect(e.name).toBe(name);
});

// tests whether the Manager can set an id
test ("Manager can set id", () => {
    const id = 17
    const e = new Manager( 'Dane', id );
    expect(e.id).toBe(id);
});

// tests whether the Manager can set an email
test ("Manager can set email", () => {
    const email = "email@fakemail.com"
    const e = new Manager( 'Dane', 17, email );
    expect(e.email).toBe(email);
});

// tests whether the Manager can set an OfficeNumber
test ("Manager can set Office Number", () => {
    const officeNumber = "8002738255"
    const e = new Manager( 'Dane', 17, "email@fakemail.com", officeNumber );
    expect(e.officeNumber).toBe(officeNumber);
});

// tests whether the Manager can get an OfficeNumber
test ("Manager can get Office Number", () => {
    const officeNumber = "8002738255"
    const e = new Manager( 'Dane', 17, "email@fakemail.com", officeNumber );
    expect(e.getOfficeNumber()).toBe(officeNumber);
});

// tests whether the Manager can get a role
test ("Manager can get role", () => {
    const e = new Manager();
    expect(e.getRole()).toBe('Manager');
});