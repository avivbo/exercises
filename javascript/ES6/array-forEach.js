var colors = [ 'red', 'blue', 'green'];

// Classic for-loop
for (var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}
// logs -> 'red', 'blue', 'green'


// ES6 forEach
colors.forEach(function(color) {
    console.log(color);
});
// logs -> 'red', 'blue', 'green'


// Another example
// Create an array of numbers
var numbers = [ 1 , 2 , 3 , 4 ];

// Create a variable to hold the sum
var sum = 0;

// Loop over the array, incrementing the sum variable
numbers.forEach(function(number) {
    sum += number;
});

// Print the sum variable
console.log(sum);


// Anuther example - call to function insine the array:
var numbers2 = [ 1 , 2 , 3 , 4 ];
var sum2 = 0;
function adder (number) {
    sum2 += number;
}
numbers.forEach(adder);
console.log(sum2);
