const Employee = require('../lib/Employee');

test ("Employee is an object", () => {
    const e = new Employee();
    expect(typeof(e)).toBe('object');
});

test ("Employee can set name", () => {
    const name = 'Dane'
    const e = new Employee( name );
    expect(e.name).toBe(name);
});

test ("Employee can set id", () => {
    const id = 17
    const e = new Employee( 'Dane', id );
    expect(e.id).toBe(id);
});

test ("Employee can set email", () => {
    const email = "email@fakemail.com"
    const e = new Employee( 'Dane', 17, email );
    expect(e.email).toBe(email);
});

test ("Employee can set name", () => {
    const name = 'Dane'
    const e = new Employee( name );
    expect(e.getName()).toBe(name);
});

test ("Employee can set id", () => {
    const id = 17
    const e = new Employee( 'Dane', id );
    expect(e.getId()).toBe(id);
});

test ("Employee can set email", () => {
    const email = "email@fakemail.com"
    const e = new Employee( 'Dane', 17, email );
    expect(e.getEmail()).toBe(email);
});

// test ("Employee can set email", () => {
//     const e = new Employee();
//     expect(e.getRole()).toBe('Employee');
// });

describe('getRole', () => {
    it("should set the role for the Employee", () => {});
        const e = new Employee();
        expect(e.getRole()).toBe('Employee');
});