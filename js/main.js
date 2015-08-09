// add scripts

// console.log("sanity check!");
exports.Car = function(make, model, year, color){
  return new Car(make, model, year, color);
};

function Car(make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.state = 'off';
  this.previous_owners = [];
  this.current_owner = 'manufacturer';
}

Car.prototype.sale = function(newOwner) {
  //sell car to newOwner
  this.previous_owners.push(this.current_owner);
  this.current_owner = newOwner;
};
