////////261.1

function test() {
	let num = 1;
	return function() {
		console.log(num);
		num++;
	}
}
let func = test();
func();
func();

///////261.2

function test() {
	let num = 10;
	return function() {
		console.log(num);
		num--;
	}
}
let func = test();
func();
func();

////////////269.1

(function() {
	return function() {
		console.log('!');
	};
})()()();

/////////269.2

(function(num1) {
    return function (num2) {
        alert(num1 + num2);
    }
})(1)(2);

////////269.3

(function(num1) {
    return function (num2) {
        return function (num3) {
            alert(num1 + num2 + num3);
        }
    }
})(1)(2)(3);

////////////272.1

let func = (function () {
    let num = 1;
    return function () {
        if (num == 5){
            console.log(num);
            num = 1;
        } else {
            console.log(num);
            num++;
        }
    }
})();
func();
func();
func();
func();
func();
func();
func();
func();
func();

///////////275.1

let arr = [1, 2, 3, 4, 5];
function getSum(arr) {
	let sum = arr.shift();
	if (arr.length !== 0) {
		sum += getSum(arr);
	}
	return sum;
}
console.log(getSum(arr));

////////////278.1

const arr = [1, [2, 7, 8], [3, 4], [5, [6, 7]]];
function squareElements(arr) {
    return arr.map((element) => {
        if (Array.isArray(element)) {
            return squareElements(element);
        } else {
            return Math.pow(element, 2);
        }
    });
}
const squaredArr = squareElements(arr);
console.log(squaredArr);