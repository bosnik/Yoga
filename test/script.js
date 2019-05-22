'use strict';

function sum(a, b) {
	return a + b > 10;
}
sum(2,2);


let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
let num = arr[1][1];



var each = function(startArr, f){return f(startArr)}
var arrq = [64, 49, 36, 25, 16];
var myFunc = function(a){
	var newArr = [];
	for (var i = 0; i < a.length; i++) {
		newArr[i]=Math.sqrt(a[i]);
	}
	return newArr;
}
console.log(each(arrq, myFunc));

let assert = require('chai').assert;

describe('sum', function(){
    it('num равна 5', function(){
        assert.typeOf(sum(12,4), 'boolean');
    });
});

describe('num', function(){
    it('эполучаем true', function(){
        assert.equal(num, 5);
    });
});

describe('each', function(){
    it('each в данных условиях возвращает массив [ 8, 7, 6, 5, 4 ]', function(){
        assert.typeOf(each(arrq, myFunc), 'array');
    });
    it('соответствие ожидаемому результату ', function(){
        assert.equal(each(newArr), [8,7,6,5,4]);
    });
    
    it('свойство length ', function(){
        assert.lengthOf(each(arrq, myFunc), 5);
    });
});
describe('each', function(){
    it('each [ 8, 7, 6, 5, 4 ]', function(){
        assert.typeOf(each(arrq, myFunc), '');
    });
});
