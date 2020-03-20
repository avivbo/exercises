function* shopping() {
  // staff on sidewalk

  // walking down the sidewalk

  // go into the store with cash
  const stuffFromStore = yield "cash";

  // walking back home
  return stuffFromStore;
}

// stuff in the store
const gen = shopping(12);
console.log(gen.next());
console.log(gen.next("groceries"));

function* colors() {
  yield "red";
  yield "blue";
  yield "green";
}

const myColors = [];
for (let color of colors()) {
  myColors.push(color);
}

console.log(myColors);
