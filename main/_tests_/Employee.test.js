const Employee = require('../lib/Employee');

// tests whether the employee is an object
test ("Employee is an object", () => {
    const e = new Employee();
    expect(typeof(e)).toBe('object');
});

// tests whether the employee can set a name
test ("Employee can set name", () => {
    const name = 'Dane'
    const e = new Employee( name );
    expect(e.name).toBe(name);
});

// tests whether the employee can set an id
test ("Employee can set id", () => {
    const id = 17
    const e = new Employee( 'Dane', id );
    expect(e.id).toBe(id);
});

// tests whether the employee can set an email
test ("Employee can set email", () => {
    const email = "email@fakemail.com"
    const e = new Employee( 'Dane', 17, email );
    expect(e.email).toBe(email);
});

// tests whether the employee can get a name
test ("Employee can set name", () => {
    const name = 'Dane'
    const e = new Employee( name );
    expect(e.getName()).toBe(name);
});

// tests whether the employee can get an id
test ("Employee can set id", () => {
    const id = 17
    const e = new Employee( 'Dane', id );
    expect(e.getId()).toBe(id);
});

// tests whether the employee can get an email
test ("Employee can set email", () => {
    const email = 'email@fakemail.com'
    const e = new Employee( 'Dane', 17, email );
    expect(e.getEmail()).toBe(email);
});

// tests whether the employee can get a role
test ("Employee can set role", () => {
    const e = new Employee();
    expect(e.getRole()).toBe('Employee');
});