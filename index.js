const Session = require("./patterns/creational/singleton");

const sessionOne = Session.Instance("john");
const sessionTwo = Session.Instance("jane");
console.log(sessionOne.getName());
console.log(sessionTwo.getName());
