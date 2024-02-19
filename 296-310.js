//////296.1

let arr = ['John', 'Smit', 'development', 
	'programmer', 2000]; 

let [Name, surname, department, position, salary] = arr;
console.log(surname);

//////297.1

function func() {
	return ['John', 'Smit', 'development', 
		'programmer', 2000]; 
}

let arr = func();
let [Name, surname, department, position, salary] = func();
console.log(surname);

///////298.1

let arr = ['John', 'Smit', 'development', 
	'programmer', 2000]; 
let [,,department,position] = arr;
console.log(position);

///////300.1

let arr = ['John', 'Smit', 'development', 
	'programmer', 2000]; 
let [name, surname, ...info] = arr;
console.log(position);

//////301.1

let arr = ['John', 'Smit', 'development', 'programmer'];
let [name, surname, department, position, date=2000] = arr;
let position;
if (arr[3] !== undefined) {
	position = arr[3];
} else {
	position = 'trainee';
}

////////302.1

let arr = [,,];
function funcDay() {
	return (new Date).getDate();
}
function funcMonth() {
	return (new Date).getMonth();
}
function funcYear() {
	return (new Date).getFullYear();
}
let [year = funcYear(), month = funcMonth(), day = funcDay()] = arr;
console.log(year,month,day);

/////////304.1

let options = {
color: 'red',
width: 400,
height: 500,
};
let {color, width, height} = options;
console.log(height);
    
/////////////305.1

let options = {
color: 'red',
width: 400,
height: 500,
};
let {color: c, width: w , height: h} = options
console.log(w);
    
////////////306.1

let options = {
width: 400,
height: 500,
};
let {color = 'black', width, height} = options
console.log(color);
    
//////////////307.1

let options = {
width: 400,
height: 500,
};
let {color:c = 'black', width, height} = options
console.log(c);
    
//////////////309.1

func( ['John', 'Smit', 'development', 'programmer', 2000] );
function func([name, surname, department, position, salary]) {
console.log(department);
console.log(position);
console.log(name);
console.log(surname);
console.log(salary);
}
    
///////////////309.2

func( ['John', 'Smit', 'development', 'programmer', 2000] );
function func([name, surname, ...info]) {
console.log(name);
console.log(surname);
console.log(info);
}
    
/////////////////309.3

func( ['John', 'Smit', 'development'] );
function func([name, surname, department, position = 'джуниор']) {
console.log(name);
console.log(surname);
console.log(department);
console.log(position);
}

/////////////309.4

func('development', ['John', 'Smit'], [2018, 12, 31] );
function func(department, [name, surname], [year, month, day]) {
console.log(department);
console.log(name);
console.log(surname);
console.log(year);
console.log(month);
console.log(day);
}

/////////310.1

function func({color, width, height}) {
console.log(color);
console.log(width);
console.log(height);
}   
func( {color: 'red', width: 400, height: 500} );
    
/////////////310.2

function func({color = 'black', width, height}) {
console.log(color);
console.log(width);
console.log(height);
}  
func( {color: 'red', width: 400, height: 500} );

