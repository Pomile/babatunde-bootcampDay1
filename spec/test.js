import 'mocha'
import chai from 'chai'
import raindrops from '../app/checksomeprimes.js'
const assert = chai.assert;


describe("Raindrops Functionality", function() {
	
  it("for value of (9) should return Pling as value for prime 3", function() {
    assert(raindrops(9) == "Pling");
  });
  it("for value of (20) should return Plang as value for prime 5", function() {
    assert(raindrops(20) == "Plang");
  });

  it(" for value (14) should return Plong as value for prime 7", function() {
    assert(raindrops(14) == "Plong");
  });
 	it(" for value of (154) should return Plong as value for prime 7", function() {
    assert(raindrops(154) == "Plong");
  });

  it(" for value of (14) should return Plong as value for prime 7", function() {
    assert(raindrops(14) == "Plong");
  });
  it("s for value of (1755) hould return PlingPlang as value for prime 3 and 5", function() {
    assert(raindrops(1755) == "PlingPlang");
  });

   it("for value (42) should return PlingPlong as value for prime 3 and 7", function() {
    assert(raindrops(42) == "PlingPlong");
  });

  it(" for value (70) should return PlangPlong as value for prime 5 and 7", function() {
    assert(raindrops(70) == "PlangPlong");
  });

  it("should return 34 as value for 34", function() {
    assert(raindrops(34) == "34");
  });

  it(" for value (NAN) should return invalid input as value for string", function() {
    assert(raindrops("NAN") == "invalid input");
  });
  
});