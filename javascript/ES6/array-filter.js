var products = [
  { name: "cucumber", type: "vagetable" },
  { name: "banana", type: "fruit" },
  { name: "celery", type: "vagetable" },
  { name: "orange", type: "fruit" }
];

var filteredProducts = [];

for (var i = 0; i < products.length; i++) {
  if (products[i].type === "fruit") {
    filteredProducts.push(products[i]);
  }
}

console.log(filteredProducts);

// With filter helper

var newFilteredProducts = products.filter(function(product) {
  return product.type === "fruit";
});

console.log(newFilteredProducts);
