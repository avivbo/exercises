var computers = [
  { name: "Apple", ram: 24 },
  { name: "Compac", ram: 4 },
  { name: "Acer", ram: 24 }
];

var allComputersCanRunProgram = true;
var someComputerCanRunProgram = false;

for (var i = 0; i < computers.length; i++) {
  var computer = computers[i];

  if (computer.ram < 16) {
    allComputersCanRunProgram = false;
  } else {
    someComputerCanRunProgram = true;
  }
}

console.log(allComputersCanRunProgram);
console.log(someComputerCanRunProgram);

// Using array every
var everyComputersCanRunProgram = computers.every(function(computer) {
  return computer.ram > 16;
});

// Using array some
var thereIsComputersCanRunProgram = computers.some(function(computer) {
  return computer.ram > 16;
});

console.log(everyComputersCanRunProgram);
console.log(thereIsComputersCanRunProgram);

// Another example
function Field(value) {
  this.value = value;
}

Field.prototype.validate = function() {
  return this.value.length > 0;
};

var userName = new Field("User");
var password = new Field("Password");
var birthdate = new Field("10/10/2010");

var fields = [userName, password, birthdate];

var formIsValid = fields.every(function(field) {
  return field.validate();
});

if (formIsValid) {
  // Allow user to submit
} else {
  // Show an error message
}
