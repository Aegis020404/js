let user = {
    name: 'John',
    years: 30,
};

let {name, years , isAdmin = false} = user;

console.log(name);
console.log(years);
console.log(isAdmin);