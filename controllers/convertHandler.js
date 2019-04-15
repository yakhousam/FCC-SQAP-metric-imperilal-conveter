/*
*
*
*       Complete the handler logic below
*       
*       
*/


function ConvertHandler() {
  
  this.getNum = function(input = '1') {
 
    if(!/^\d/.test(input)){
      return /^(gal|l|mi|km|lbs|kg)$/i.test(input) ? 1 : 'Invalid number'
    }
    if(/\/{2,}/.test(input)){
      return 'Invalid number';
    }    
      return input.match(/\d+\.?\d*\/?\d+\.?\d*|\d+/) ? 
      eval(input.match(/\d+\.?\d*\/?\d+\.?\d*|\d+/)[0]) :
      'Invalid number';   
  };
  
  this.getUnit = function(input) {
    const str = input.match(/[a-zA-z]+$/) ? input.match(/[a-zA-z]+$/)[0] : null;
    return str && str.match(/^(gal|l|mi|km|lbs|kg)$/i) ? str.match(/^(gal|l|mi|km|lbs|kg)$/i)[1] : 'Invalid unit'
  };
  
  this.getReturnUnit = function(initUnit) {
    var input = ['gal','l','mi','km','lbs','kg'];
    var expect = ['l','gal','km','mi','kg','lbs'];
    return initUnit && input.indexOf(initUnit.toLowerCase()) !== -1 ? expect[input.indexOf(initUnit.toLowerCase())] : null;
  };

  this.spellOutUnit = function(unit) {
    const units = ['gal','mi','lbs','l','km','kg'];
    const spellUnit = ['galon','mile','Pound','liter', 'kilometer','kilogram'];
    return units.indexOf(unit) !== -1 ? spellUnit[units.indexOf(unit)] : null;
  };
  
  this.convert = function(initNum, initUnit) {
    const convertUnit = {gal: 3.78541, lbs: 0.453592, mi: 1.60934, l: 0.264172, kg: 2.204623, km: 0.621370}
    return initNum && initUnit ?  Math.round(1000000 * eval(convertUnit[initUnit.toLowerCase()] * initNum)) / 1000000 : null;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return initNum + ' ' + this.spellOutUnit(initUnit) + ' converts to ' + returnNum + ' ' + this.spellOutUnit(returnUnit)
  };
  
}

module.exports = ConvertHandler;
