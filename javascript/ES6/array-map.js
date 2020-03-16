var numbers = [1,2,3];

// Classc loop
var dounbledNumbers = [];
for (var i = 0; i < numbers.length; i++) {
    dounbledNumbers.push(numbers[i] * 2);
}

console.log(dounbledNumbers);


// With array.map method
var doubled = numbers.map(function(number) {
    return number * 2;
});

console.log(doubled);


// Another example
var cars = [
    { model: 'Buick', price: 'cheap' },
    { model: 'Camaro', price: 'expensive' }
];

var prices = cars.map(function(car) {
    return car.price;
});

console.log(prices);

// Create helper function
function helper (array, property) {
    return array.map(function(item) {
        return item[property];
    });
};

console.log(helper(cars, 'model'))