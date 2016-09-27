var chai = require('chai');
const expect = chai.expect;
var insertion = require('../insertion');

describe (' should be a Function', function(){
  it('Should exist',() => {
    expect(insertion).to.be.a('function');
  });

  it('Should be an array',() => {
    expect(insertion.insertionSort([2,4,5,6,8])).to.be.a('array');
  });

  // it('Should be a number ',() => {
  //   expect(myInsertion.insertion(2)).to.be.equal(4);
  //   });
   });