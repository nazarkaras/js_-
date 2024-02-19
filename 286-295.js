////////286.1

let arr = [1, 2, 3, 4, 5];
function func(num1, num2, num3, num4, num5) {
	return num1 + num2 + num3 + num4 + num5;
}
console.log(func(...arr));

///////288.1

let arr = [1, 2, 3, 4, 5];
let min = Math.min(...arr);
console.log(min)

//////293.1

function func(...nums) {
	console.log(nums);
}
func(1, 2, 3);
function func(...nums) {
	let sum = 0;
	for (let num of nums) {
		sum += num;
	}
	
	return sum / nums.length;
}
let result = func(1, 2, 3);
console.log(result);

