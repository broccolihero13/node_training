let square = (x) => x * x;
console.log(square(4));

let user = {
  name: `Brock`,
  // sayHi: () => console.log(`Hi I'm ${user.name}`),
  sayHiAlt(x, y, z) {
    console.log(arguments)
    console.log(`Hi I'm ${this.name}`)
  }
};

user.sayHiAlt(1, 3);
