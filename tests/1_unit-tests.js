/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      var input = '2L';
      assert.equal(convertHandler.getNum(input),2);
      done();
    });
    
    test('Decimal Input', function(done) {
      var input = '4.5GAL'
      assert.equal(convertHandler.getNum(input), 4.5)
      done();
    });
    
    test('Fractional Input', function(done) {
      var input = '5/2L'
      assert.equal(convertHandler.getNum(input), 2.5)
      done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
      var input = '10.5/2L'
      assert.equal(convertHandler.getNum(input), 5.25)
      done();
    });
    
    test('Invalid Input (double fraction)', function(done) {
      var input = '2//2' 
      assert.equal(convertHandler.getNum(input), 'Invalid number')
      done();
    });
    
    test('No Numerical Input', function(done) {
      var input
      assert.equal(convertHandler.getNum(input), 1)
      done();
    });  
    
  });
  
  suite('Function convertHandler.getUnit(input)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(function(ele) {
        assert.equal(convertHandler.getUnit(ele), ele)
      });
      done();
    });
    
    test('Unknown Unit Input', function(done) {
      assert.equal(convertHandler.getUnit('kmi'), 'Invalid unit')
      done();
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['l','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      //see above example for hint
      const input = ['gal','mi','lbs','l','km','kg'];
      const expect = ['galon','mile','Pound','liter', 'kilometer','kilogram'];
      input.forEach(function(ele, i){
        assert.equal(convertHandler.spellOutUnit(ele), expect[i])
      })
      done();
    });
    
  });
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      var input = [5, 'gal'];
      var expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('L to Gal', function(done) {
      const input = [3, 'l'];
      const expected = 0.792516;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1)
      done();
    });
    
    test('Mi to Km', function(done) {
      const input = [2, 'mi'];
      const expected = 3.218688;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1)
      done();
    });
    
    test('Km to Mi', function(done) {
      const input = [5, 'km'];
      const expected = 3.106849;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1)
      done();
    });
    
    test('Lbs to Kg', function(done) {
      const input = [8, 'lbs'];
      const expected = 3.628738;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1)
      done();
    });
    
    test('Kg to Lbs', function(done) {
      const input = [5, 'kg'];
      const expected = 11.023113;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1)
      done();
    });
    
  });

});