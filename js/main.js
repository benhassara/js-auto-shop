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
  this.passengers = [];
}

Car.prototype.sale = function(newOwner) {
  //sell car to newOwner
  this.previous_owners.push(this.current_owner);
  this.current_owner = newOwner;
};

Car.prototype.paint = function(newColor) {
  //change the color of the car
  this.color = newColor;
};

Car.prototype.start = function() {
  //set Car state to on
  this.state = 'on';
};

Car.prototype.off = function() {
  //set Car state to off
  this.state = 'off';
};

Car.prototype.driveTo = function(destination) {
  //drive to destination if the Car is on
  if (this.state === 'on') {
    console.log('Driving to ', destination);
    return 'Driving to ' + destination;
  }
  else {
    console.log('Sorry, this car is off.');
    return 'Sorry, this car is off.';
  }
};

Car.prototype.park = function() {
  //park if car state is off, else error
  if (this.state === 'off') {
    console.log('Parked!');
    return 'Parked!';
  }
  else {
    console.log('Sorry, the car is still on.');
    return 'Sorry, the car is still on.';
  }
};

Car.prototype.pickUp = function(passenger) {
  //log driving to pick up passenger if car is on
  if (this.state === 'on') {
    this.passengers.push(passenger);
    console.log('Driving to pick up ' + passenger);
    return 'Driving to pick up ' + passenger;
  }
  else {
    console.log('Sorry, this car is off.');
    return 'Sorry, this car is off.';
  }
};

Car.prototype.dropOff = function(passenger) {
  //if Car is on, and passenger is in Car, remove name from passengers
  if (this.passengers.length === 0)
    return 'This car has no passengers.';
  else if (this.state === 'off')
    return 'Sorry, this car is off.';
  else {
    var passIndex = this.passengers.indexOf(passenger);
    return this.passengers.splice(passIndex, 1);
  }
};
