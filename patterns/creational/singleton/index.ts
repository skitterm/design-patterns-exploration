import Session from "./singleton";

// get the session twice
const sessionOne = Session.getInstance();
const sessionTwo = Session.getInstance();

console.log(
  "Called getInstance() twice, both are equal:",
  sessionOne === sessionTwo
);

sessionOne.setUsername("Jim");
console.log("Hello, my username is", sessionOne.getUsername());
console.log("Hello, my username is still", sessionTwo.getUsername());
