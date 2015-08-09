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
