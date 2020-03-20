// Rest operator
const addNumbers = (...numbers) =>
  numbers.reduce((sum, number) => sum + number, 0);

addNumbers(1, 2, 3, 4); // 10

// Spread operator
const defaultColors = ["Red", "Green"];
const userFavoriteColors = ["Orange", "Yellow"];

[...defaultColors, ...userFavoriteColors]; // ['Red', 'Green', 'Orange', 'Yellow']
