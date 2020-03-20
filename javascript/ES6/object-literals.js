function createBookShop(inventory) {
  return {
    inventory: inventory,
    inventoryValue: function() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle: function(title) {
      return this.inventory.find(book => book.title === title).price;
    }
  };
}

const inventory = [
  { title: "Harry Potter", price: 10 },
  { title: "Eloquent Javacript", price: 15 }
];

const bookShop = createBookShop(inventory);

// with new object literal features:
function newBookShop(inventory) {
  return {
    // if the key and the value is the same
    // we can write only the key.
    // in this case "inventory" is like "inventory: inventory"
    inventory,

    // there is no need to write function keyword
    inventoryValue() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle(title) {
      return this.inventory.find(book => book.title === title).price;
    }
  };
}
