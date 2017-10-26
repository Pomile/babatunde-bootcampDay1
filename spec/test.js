import 'mocha'
import chai from 'chai'
import raindrops from '../app/checksomeprimes.js'
const assert = chai.assert;


describe("Raindrops Functionality", function() {
	
  it("9 should return Pling as a result for prime factor 3", function() {
    assert(raindrops(9) == "Pling");
  });
  it("20 should return Plang as a result for prime factor 5", function() {
    assert(raindrops(20) == "Plang");
  });

  it(" 14 should return Plong as a result for prime factor 7", function() {
    assert(raindrops(14) == "Plong");
  });
 	it("0 should return 0 ", function() {
    assert(raindrops(0) == 0);
  });

  it("1 should return 1", function() {
    assert(raindrops(1) == 1);
  });
  it("1755 hould return PlingPlang as a result for prime factors 3 and 5", function() {
    assert(raindrops(1755) == "PlingPlang");
  });

   it("42 should return PlingPlong as a result for prime factors 3 and 7", function() {
    assert(raindrops(42) == "PlingPlong");
  });

  it(" 70 should return PlangPlong as a result for prime  factors 5 and 7", function() {
    assert(raindrops(70) == "PlangPlong");
  });

  it("should return 34 as a result for no prime factor", function() {
    assert(raindrops(34) == 34);
  });

  it(" NAN should return invalid input ", function() {
    assert(raindrops("NAN") == "invalid input");
  });
  
});