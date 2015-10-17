var array = require('../array'),
    assert = require('assert');
describe('array',function(){
	it('should return array with length 4',function(){
		var arr = array();
		assert(Array.isArray(arr));
		assert.equal(arr.length,3,"Did not return 4 items");	
	});
});