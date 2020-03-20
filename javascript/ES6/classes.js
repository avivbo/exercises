// Old syntax

function Car(options) {
  this.title = options.title;
}

Car.prototype.drive = function() {
  return "vroom";
};

function Toyota(options) {
  Car.call(this, options);
  this.color = options.color;
}

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function() {
  return "Beep";
};

const toyota = new Toyota({ color: "red", title: "Daily Driver" });

// ES6
class Car2 {
  constructor({ title }) {
    this.title = title;
  }
  drive() {
    return "vroom";
  }
}

class Toyota2 extends Car2 {
  constructor(options) {
    super(options);
    this.color = options.color;
  }
  honk() {
    return "beep";
  }
}

const car = new Toyota2({ title: "toyota", color: "blue" });
