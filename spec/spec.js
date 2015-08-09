var code = require('../js/main.js');


describe('Car class', function(){
  var test1 = code.Car('Chevrolet', 'Tahoe', 2008, 'white');

  it('should autoset state to off', function(){
    expect(test1.state).toEqual('off');
  });

  it('should default current_owner to manufacturer', function(){
    expect(test1.current_owner).toEqual('manufacturer');
  });

  it('should default previous_owners to empty array', function(){
    expect(test1.previous_owners).toEqual([]);
  });
});

describe('methods', function(){
  var test2 = code.Car('GMC', 'Yukon', 2007, 'black');
  test2.sale('Billy');

  it('sale() should set current_owner to newOwner', function(){
    expect(test2.current_owner).toEqual('Billy');
    expect(test2.previous_owners).toEqual(['manufacturer']);
  });

  test2.paint('red');
  it('paint() should update the color of the car', function(){
    expect(test2.color).toEqual('red');
  });

  test2.start();
  // it('start() should set state to on', function(){
  //   expect(test2.state).toEqual('on');
  // });

  test2.off();
  it('off() should set state to off', function(){
    expect(test2.state).toEqual('off');
  });

  it('driveTo() should log driving to destination if car is on', function(){
    console.log();
    expect(test2.driveTo('Florida')).toEqual('Sorry, this car is off.');
    test2.start();
    console.log();
    expect(test2.driveTo('Florida')).toEqual('Driving to Florida');
  });

  it('park() should log Parked if car is off, otherwise error', function(){
    console.log();
    expect(test2.park()).toEqual('Sorry, the car is still on.');
    test2.off();
    console.log();
    expect(test2.park()).toEqual('Parked!');
  });

  it('pickUp should log driving to pick up if car is on', function(){
    console.log();
    expect(test2.pickUp('Becky')).toEqual('Sorry, this car is off.');
    console.log();
    test2.start();
    expect(test2.pickUp('Becky')).toEqual('Driving to pick up Becky');
  });

  it('dropOff should remove passenger from passengers if the car is on', function(){
    expect(test2.passengers).toEqual(['Becky']);
    test2.dropOff('Becky');
    expect(test2.passengers).toEqual([]);
  });
});
