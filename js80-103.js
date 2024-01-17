//80

let obj = {1: 'понедельник', 2: 'вторник', 3: 'среда', 4: 'четверг', 5: 'пятница', 6: 'суббота', 7: 'воскресенье'};
document.write(obj[1]);

//81

let obj = {1: 'понедельник', 2: 'вторник', 3: 'среда', 4: 'четверг', 5: 'пятница', 6: 'суббота', 7: 'воскресенье'};
console.log(obj);

//82

let obj = {name: 'nazar', surname: 'kozlov', patronymic: 'sergeevich'};
console.log(obj['name'] + " " + obj['surname'] + " " + obj['patronymic']);

//83

let obj = {year: 2024, month: 1, day: 17};
console.log(String(obj.year) + "-" + String(obj.month) + "-" + String(obj.day));

//85

let obj = {x: 1, y: 2, z: 3};
obj['x'] = obj['x']**2;
obj['y'] = obj['y']**2;
obj['z'] = obj['z']**2;
console.log(obj);

//86

let obj = {};
obj['a'] = 3;
obj['b'] = 7;
obj['c'] = 54;
console.log(obj);

//88

let obj = {x: 1, y: 2, z: 3};
let keys = Object.keys(obj);
console.log(keys);

//89

let obj = {x: 1, y: 2, z: 3};
console.log(Object.keys(obj).length);

//90

let obj = {x: 1, y: 2, z: 3};
let key = 'x';
console.log(obj[key]);

//91.1

let obj = {x: 1, y: 2, z: 3};
console.log(obj['x']);

//91.2

let obj = {x: 1, y: 2, z: 3};
let key = 'x';
console.log(obj[key]);

//92.1

let obj = {x: 1, y: 2, z: 3};
let prop = 'x';
console.log(obj[prop]);

//92.2

let obj = {x: 1, y: 2, z: 3};
let prop = 'x';
console.log(obj[prop]);

//93

let key = 'x';
let obj = {
	[key]: 1,
	y: 2,
	z: 3
};

//103.1

let obj = {x: 1, y: 2, z: 3};
console.log(obj.x);

//103.2

let obj = {x: 1, y: 2, z: 3};
let key = 'x';
console.log(obj[key]);

//103.3

let obj = {x: 1, y: 2, z: 3};
let sum = Number(obj.x) + Number(obj.y) + Number(obj.z);
console.log(sum);

//103.4

let obj = {x: 1, y: 2, z: 3};
console.log(Object.keys(obj).length);
