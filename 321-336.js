////////////321.1

function getLastDayOfMonth(year, month) {
	let date = new Date(year, month + 1, 0);
	return date.getDate();
  }
  console.log( getLastDayOfMonth(2012, 0) );

/////////////321.2

let date = new Date(2025, 5, 0);
let day  = date.getDay();
let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
console.log(days[day]);

/////////////////322.1

function isLeap(year) {
    let date = new Date(year, 2, 0);

    if (date.getDate() == 29) {
 	    console.log( ) true;
    } else {
 	    console.log( ) false;
    }
 }
console.log(isLeap(2024));

////////////323.1

function checkDate(year, month, day) {
   let date = new Date(year, month, day);
        if (date.getFullYear() == year && date.getMonth() == month && date.getDate() == day) {
             console.log( ) true;
         } else {
             console.log( ) false;
         }
     }
 console.log(checkDate(2025, 0, 31));

 ///////////////324.1

 let now  = new Date(); 
 let date = new Date(now.getFullYear(), 11, 31); 
 console.log(date.getDay());
 
//325
let now = new Date();
let date = new Date(now.getFullYear(), now.getMonth() - 1, 24);
console.log(date.getDay());

//////////326.1

let now = new Date();
let date = new Date(now.getFullYear(), now.getMonth() - 1, 24);
console.log(date.getDay());

////////////326.2

let now = new Date();
let date = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate());
console.log(date.getDay());

////////////326.3

let now = new Date();
let date = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
console.log(date.getDay());

////////////327.1

let now = new Date();
let date1 = new Date(now.getFullYear(), 0, 1, 12, 59, 59);
let date2 = new Date(now.getFullYear(), 8, 10, 12, 59, 59);
console.log((date2 - date1) * 1.1574 * 10**(-8)); 

////////////327.2

let now = new Date();
let date1 = new Date(now.getFullYear(), now.getMonth(), 20, 12, 59, 59);
let date2 = new Date(now.getFullYear(), now.getMonth() + 1, 10, 12, 59, 59);
console.log((date2 - date1) * 1.1574 * 10**(-8)); 

/////////328

let now  = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 12);
console.log((now - date) * 2.778 * 10**(-7));

/////////329

let now  = new Date();
let date1 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
console.log((now - date1) / (1000 * 60 * 60));

//////////330

let now  = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 24);
console.log((date - now) / (1000 * 60 * 60));

////////////331

let res = 0;
for (let year = 2000; year <= new Date().getFullYear(); year++) {
 	let date = new Date(year, 0, 1);
	
 	if (date.getDay() == 0 || date.getDay() == 6) {
 		res++;
 	}
 }

 console.log(res);

/////////332.1

let now  = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 1);
console.log((now - date) / 1000);

////////////332.2

let now  = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 24);
console.log((date - now) / 1000);

///////////332.3

let now  = new Date();
let date1 = new Date(now.getFullYear() + 1, 1, 1);
console.log((date1 - now) *  1.1574 * 10**(-8) );

////////////332.4

let res = 0;
let now = new Date().getFullYear();
for (let month = 0; month < 12; month++) {
    let date = new Date(now, month, 13);
     if (date.getDay() === 5) { 
         res++;
     }
 }
 console.log(res);

////////////332.5

let now = new Date();
let lastYear = now.getFullYear();
let month3 = now.getMonth() - 3;
 if (month3 < 0) {
     lastYear--;
    month3 = 12 + month3;
}
console.log(lastYear);

///////////332.6

let now = new Date();
let lastDaym= new Date(now.getFullYear(), now.getMonth() + 1, 0);
let lastDay = lastDaym.getDay();
console.log(lastDay); 

////////////332.7

let now = new Date();
let year = now.getFullYear();
let date = new Date(year, 2, 0);
 if (date.getDate() == 29) {
        console.log('високосный');;
 } else {
     console.log('не високосный');;
};

////////////332.8

let now = new Date();
for (let year = now.getFullYear() - 1; year >= 0; year--) {
    let date = new Date(year, 2, 0);
    if (date.getDate() == 29) {
        console.log(year);
         break;
     }
}

//////////332.9

let now = new Date().getFullYear();
let nextYear = now + 1;
while (true) {
  if ((nextYear % 4 === 0 && nextYear % 100 !== 0) || nextYear % 400 === 0) {
     console.log(nextYear);
     break;
   }
   nextYear++;
 }

/////////333

let date1 = '2020-11-31';
let date2 = '2020-12-01';
if (date1 > date2) {
    console.log('date1 > date2');
} else {
    console.log('date1 < date2');
}

///////////334

let date1 = '09-21';
let date2 = '09-23';
if (date1 > date2) {
    console.log('date1 > date2');
} else {
    console.log('date1 < date2');
}

////////335

let date = '08-20';
    if (date >= '03-21' && date <= '04-19') {
      console.log("Овен");
    } 
    if (date >= '04-20' && date <= '05-20') {
      console.log("Телец" ) ;
    } 
    if (date >= '05-21' && date <= '06-20') {
      console.log("Близнецы" ) ;
    } 
    if (date >= '06-21' && date <= '07-22') {
      console.log("Рак" ) ;
    } 
    if (date >= '07-23' && date <= '08-22') {
      console.log("Лев" ) ;
    } 
    if (date >= '08-23' && date <= '09-22') {
       console.log("Дева" ) ;
     } 
    if (date >= '09-23' && date <= '10-22') {
      console.log("Весы" ) ;
    }
    if (date >= '10-23' && date <= '11-21') {
      console.log("Скорпион" ) ;
    } 
    if (date >= '11-22' && date <= '12-21') {
      console.log("Стрелец" ) ;
    } 
    if (date >= '12-22' && date <= '01-19') {
      console.log( "Козерог") ;
    } 
    if (date >= '01-20' && date <= '02-18') {
      console.log("Водолей" ) ;
    } 
    if (date >= '02-19' && date <= '03-20') {
      console.log("Рыбы" ) ;
    } 

///////////////336.1

let now = new Date(); 
let pol = new Date();
pol.setHours(12, 0, 0, 0);
if (now >= pol) {
  console.log("Уже прошел полдень");
} else {
  console.log("Еще не наступил полдень");
}

/////////////336.2

let now = new Date();
let pol = new Date(now.getFullYear(), now.getMonth(), 15);
if (now > pol) {
    console.log("Половина месяца уже прошла");
} else {
    console.log("Половина месяца еще не прошла");
}