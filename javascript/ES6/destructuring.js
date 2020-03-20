var expense = {
  type: "Business",
  amount: 45
};

// Old JS syntax
// var type = expense.type;
// var amount = expense.amount;

// ES6

const { type, amount } = expense;

const { type: t, amount: a } = expense;
// is equal to:
// t = expense.type
// amount = expense.a

// Another usecase
var savedFiled = {
  extension: "jpg",
  name: "repost",
  size: 1400
};

// Without obj destructuring
function fileSummary(file) {
  return `The file ${file.name}.${file.extension} is of size ${file.size}`;
}

// With obj destructuring
function desFileSummary({ name, extension, size }) {
  return `The file ${name}.${extension} is of size ${size}`;
}
