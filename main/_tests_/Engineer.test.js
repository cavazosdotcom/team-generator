const Engineer = require('../lib/Engineer')

test ("Engineer is an object", () => {
    const e = new Engineer();
    expect(typeof(e)).toBe('object');
});

// tests whether the Engineer can set a name
test ("Engineer can set name", () => {
    const name = 'Dane'
    const e = new Engineer( name );
    expect(e.name).toBe(name);
});

// tests whether the Engineer can set an id
test ("Engineer can set id", () => {
    const id = 17
    const e = new Engineer( 'Dane', id );
    expect(e.id).toBe(id);
});

// tests whether the Engineer can set an email
test ("Engineer can set email", () => {
    const email = "email@fakemail.com"
    const e = new Engineer( 'Dane', 17, email );
    expect(e.email).toBe(email);
});

// tests whether the Engineer can set a github
test ("Engineer can set github", () => {
    const github = "username17"
    const e = new Engineer( 'Dane', 17, "email@fakemail.com", github );
    expect(e.github).toBe(github);
});

// tests whether the Engineer can get a github
test ("Engineer can get github", () => {
    const github = 'username17'
    const e = new Engineer( 'Dane', 17, "email@fakemail.com", github );
    expect(e.getGithub()).toBe(github);
});

// tests whether the Engineer can get a role
test ("Engineer can get role", () => {
    const e = new Engineer();
    expect(e.getRole()).toBe('Engineer');
});