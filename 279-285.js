/////////279.1

let arr = [2,4,6];
    let res = arr.map(function(elem) {
	return Math.sqrt(elem);
});
console.log(res);

////////279.2

let arr = ['a', 'b', 'c'];
let res = arr.map(function(elem) {
	return elem + '!';
});
console.log(res);

///////279.3

let arr = ['abc', 'bce', 'cde'];
let res = arr.map(function(elem) {
	return elem.split('').reverse().join('');
});
console.log(res);

///////279.4

let arr = ['123', '456', '789'];
let res = arr.map(function(elem) {
elem.split("");
return arr.push(Number(elem));
});
console.log(res);

///////279.5

let arr = [1,2,3];
let res = arr.map(function(elem, index) {
    return elem * index;
    });
    console.log(res);

////////280.1

let arr = [1,2,3];
let sum = 0;
arr.forEach(function(elem) {
    sum += elem ** 2;
});
    console.log(sum);

///////281.1

let arr = [-1, -3, 1, 2, 3];
let res = arr.filter(elem => {
	return elem >= 0;
});

console.log(res);

/////////281.2

let arr = [-1, -3, 1, 2, 3];
let res = arr.filter(elem => {
	return elem <= 0;
});

console.log(res);

////////281.3

let arr = [-1, -3, 1, 2, 3, 22];
let res = arr.filter(elem => {
	return elem >= 0 & elem <=10;
});

console.log(res);

/////////281.4

let arr = ['skibidi','dop','dop','yesyes'];
let res = arr.filter(elem => {
	return elem.length > 5;
});

console.log(res);

///////////281.5

let arr = [-1, -3, 1, 2, 3, 22];
let res = arr.filter(function(elem, index) {
    return (elem * index) < 30;
    });
    console.log(res);

////////////281.6

let arr = [1, 2, [3, 4], 5, [6, 7]];
let filtrate = arr.filter(Array.isArray);
console.log(filtrate)

/////282.1

let arr = [1, 2, 3, 4, 5];
let check = arr.every(function(elem) {
	if (elem >= 0) {
		return true;
	} else {
		return false;
	}
});
console.log(check);

///////282.2

let arr = [1, 2, 3, 4, 5];
let check = arr.every(function(elem, index) {
	if (elem * index < 30) {
		return true;
	} else {
		return false;
	}
});
console.log(check);

/////////283.1

let arr = [2, 4, 6, 8];
let result = arr.some(elem => elem > 0);
console.log(result);

////////283.2

let arr = [2, 4, 6, 8];
let result = arr.some(function(elem, index) {
	return elem * index > 30;
});
console.log(result);
