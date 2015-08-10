
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
  this.passengers = [];
}

Car.prototype.sale = function(newOwner) {
  // sell car to newOwner

  this.previous_owners.push(this.current_owner);
  this.current_owner = newOwner;
};

Car.prototype.paint = function(newColor) {
  // change the color of the car

  this.color = newColor;
};

Car.prototype.start = function() {
  // set Car state to on

  this.state = 'on';
};

Car.prototype.off = function() {
  // set Car state to off

  this.state = 'off';
};

Car.prototype.driveTo = function(destination) {
  // drive to destination if the Car is on

  var output = "";

  if (this.state === 'on')
    output = 'Driving to ' + destination;
  else
    output = 'Sorry, this car is off.';

  console.log(output);
  return output;
};

Car.prototype.park = function() {
  // park if car state is off, else error
  var output = "";

  if (this.state === 'off')
    output = 'Parked!';
  else
    output = 'Sorry, the car is still on.';

  console.log(output);
  return output;
};

Car.prototype.pickUp = function(passenger) {
  // log driving to pick up passenger if car is on

  var result = "";

  if (this.state === 'on') {
    this.passengers.push(passenger);
    result = 'Driving to pick up ' + passenger;
  }
  else
    result = 'Sorry, this car is off.';

  console.log(result);
  return result;
};

Car.prototype.dropOff = function(passenger) {
  // if Car is on, and passenger is in Car, remove name from passengers

  // no passengers in Car
  if (this.passengers.length === 0)
    return 'This car has no passengers.';

  // if Car is off
  else if (this.state === 'off')
    return 'Sorry, this car is off.';

  else {
    var passIndex = this.passengers.indexOf(passenger);
    return this.passengers.splice(passIndex, 1);
  }
};
