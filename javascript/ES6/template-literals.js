const userName = "Aviv";
const message = "hello " + userName + ", we are on " + new Date().getFullYear();
const messageLiterals = `hello ${userName}, we are on ${new Date().getFullYear()}`;

console.log(message);
console.log(messageLiterals);
