const Intern = require('../lib/Intern')

// tests whether the Intern is an object
test ("Intern is an object", () => {
    const e = new Intern();
    expect(typeof(e)).toBe('object');
});

// tests whether the Intern can set a name
test ("Intern can set name", () => {
    const name = 'Dane'
    const e = new Intern( name );
    expect(e.name).toBe(name);
});

// tests whether the Intern can set an id
test ("Intern can set id", () => {
    const id = 17
    const e = new Intern( 'Dane', id );
    expect(e.id).toBe(id);
});

// tests whether the Intern can set an email
test ("Intern can set email", () => {
    const email = "email@fakemail.com"
    const e = new Intern( 'Dane', 17, email );
    expect(e.email).toBe(email);
});

// tests whether the Intern can set a school
test ("Intern can set School", () => {
    const school = 'UW Full Stack Development Bootcamp'
    const e = new Intern( 'Dane', 17, 'email@fakemail.com', school );
    expect(e.school).toBe(school);
});

// tests whether the Intern can get a school
test ("Intern can get School", () => {
    const school = 'UW Full Stack Development Bootcamp'
    const e = new Intern( 'Dane', 17, 'email@fakemail.com', school );
    expect(e.getSchool()).toBe(school);
});

// tests whether the Intern can get a role
test ("Intern can get role", () => {
    const e = new Intern();
    expect(e.getRole()).toBe('Intern');
});