// Simple example
const add = function(a, b) {
  return a + b;
};

const arrowAdd = (a, b) => a + b;

// Another example
// if the function recive only on parameter
// there is not need the braces
const double = number => 2 * number;

// NOTES:
// in arrow function "this" keyword is lexicaly scopes.
// we can't use arguments keyword in arrow functions.

const team = {
  members: ["Roi", "Yuval"],
  teamName: "Super Team",
  teamSummary: function() {
    return this.members.map(function(member) {
      console.log(this); // undifined
      return `${member} is on team ${this.team}`;
    });
  }
};

// Solved with bind
const team2 = {
  members: ["Roi", "Yuval"],
  teamName: "Super Team",
  teamSummary: function() {
    return this.members.map(
      function(member) {
        console.log(this); // team2 object
        return `${member} is on team ${this.team}`;
      }.bind(this)
    );
  }
};

// Solved with arrow function
const arrowTeam = {
  members: ["Roi", "Yuval"],
  teamName: "Super Team",
  teamSummary: function() {
    return this.members.map(member => `${member} is on team ${this.team}`);
  }
};
