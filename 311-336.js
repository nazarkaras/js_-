///////311.1

let date = new Date();
console.log(date.getDate);

////////311.2

let date = new Date();
console.log(date.getMonth);

///////311.3

let date = new Date();
console.log(date.getCurrentYear);

//////////312.1

function addZero(num) {
	if (num >= 0 && num <= 9) {
		return '0' + num;
	} else {
		return num;
	}
}
let date = new Date();
console.log(
    (date.getHours()) + ':' + (date.getMinutes()) + ':' + (date.getSeconds()) + ' ' +
    addZero(date.getDate()) + '-' +
	addZero(date.getMonth() + 1) + '-' +
	addZero(date.getFullYear()) 
);


/////////313.1

let str = '2025-12-31';
let res = str.split('-').reverse().join('.');

console.log(res);

///////314.1

let date = new Date();
console.log(date.getDay());

//////////314.2

let date = new Date();
today = date.getDay();
if (today == 0 || today == 6) {
    console.log('Выходной')
} else {
    console.log('Будний')
};

////////314.3

let date = new Date();
let today = date.getDay();
console.log(6 - today);

///////////315.1

let months = [
	'янв', 'фев', 'мар', 'апр', 'май', 'июн',
	'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
];
let date = new Date();
let mon  = date.getMonth();
console.log(months[mon]);

///////////316.1

let date = new Date(2024, 5, 19);
let day  = date.getDay();
let days = ['вс', 'пн', 'вт', 'ср', 
	'чт', 'пт', 'сб']; 
    console.log(days[day]);

///////////317.1

let date = new Date(2025, 1, 1, 00, 00, 01);
console.log(date.getTime());

///////318.1

let date1  = new Date(1988, 3, 1, 23, 59, 59);
let date2 = new Date(2000, 1, 10, 23, 59, 59);
let diff = date2.getTime() - date1.getTime();
console.log(diff);

/////////////318.2

let now  = new Date();
let date2 = new Date(2005, 5, 19, 23, 59, 59);
let diff = now.getTime() - date2.getTime();
console.log(diff / (1000 * 60 * 60 * 24 * 30));

/////////319.1



