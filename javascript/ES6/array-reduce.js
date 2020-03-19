var numbers = [10, 20, 30];
var sum = 0;

for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum);

var sumReduce = numbers.reduce(function(sum, number) {
  return sum + number;
}, 0);

console.log(sumReduce);

// Another example
primaryColors = [
  { color: "red" },
  { color: "yellow" },
  { color: "blue" },
  { color: "green" }
];

primaryColorsArray = primaryColors.reduce(function(previous, primaryColor) {
  previous.push(primaryColor.color);

  return previous;
}, []);

console.log(primaryColorsArray);

// Another example
function balancedParens(string) {
  return !string.split("").reduce(function(previous, char) {
    if (previous < 0) {
      return previous;
    }
    if (char === "(") {
      return ++previous;
    }
    if (char === ")") {
      return --previous;
    }

    return previous;
  }, 0);
}

console.log(balancedParens("()()"));
console.log(balancedParens("()("));
console.log(balancedParens("())("));
