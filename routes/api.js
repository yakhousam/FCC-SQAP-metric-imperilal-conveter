/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();
  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);

      if(initNum === 'Invalid number' && initUnit === 'Invalid unit') return res.status(500).json({error: 'Invalid number and unit'});
      if(initNum === 'Invalid number') return res.status(500).json({error: 'Invalid number'});
      if(initUnit === 'Invalid unit') return res.status(500).json({error: 'Invalid unit'});

      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
            
      return res.json({initNum, initUnit, returnNum, returnUnit, toString})

    });
    
};
