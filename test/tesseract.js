'use strict';

var tesseract = require('../lib/tesseract');
var should = require('should');


describe('process', function(){
  it('should return the string "node-tesseract"', function(done){

    var testImage = __dirname + '/test.png';

    tesseract.process(testImage, function(err, text) {
      text.trim().should.equal('node-tesseract');
      done();
    });

  })
})

describe('orientation', function(){
  it('returns orientation equal to 0 using psm 1', function(done){

    var testImage = __dirname + '/test.png';

    tesseract.process(testImage, { psm: 1 }, function(err, text, extra) {
      extra.orientation.should.equal(0);
      done();
    });

  })
})

