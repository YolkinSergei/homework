'use strict';

////////////////////////////////////////
/////////// Второе задание /////////////
////////////////////////////////////////
let name = prompt('Как вас зовут?');

for (var i = 0; i <= 3; i++) {
	console.log(`Happy birthday ${i===2?'dear ' + name :'to you'}`);
};


////////////////////////////////////////
/////////// Третье задание /////////////
////////////////////////////////////////
/*
let finalString = '';

for (var i = 0; i < 20; i++) {
	finalString += i % 2 === 0 ? '.' : '#';
}

console.log(finalString);
*/

////////////////////////////////////////
////////// Четвертое задание ///////////
////////////////////////////////////////
/*
for (var i = 0; i < 20; i++) {
	if (i % 2 == 0) {
		console.log(i + '^2 = ' + i * i);
	}
}
*/

////////////////////////////////////////
//////////// Пятое задание /////////////
////////////////////////////////////////
/*
while (!confirm(`ОК - закончить это безумие \nОтмена - продолжение веселья`));
*/

////////////////////////////////////////
//////////// Шестое задание ////////////
////////////////////////////////////////
/*
let userNumber = parseInt(prompt('Введите любое натуральное число:')),
	sum = 0;

if (isNaN(userNumber) || userNumber < 0) {
	alert('Некорректный ввод.');
} else {
	for (var i = 0; i <= userNumber; i++) {
		if (i % 2 === 1) {
			sum += i;
		}
	}

	alert(`Сумма нечетных чисел в диапазоне от 0 до ${userNumber} = ${sum}`);
}
*/

////////////////////////////////////////
/////////// Седьмое задание ////////////
////////////////////////////////////////
/*
let i = 0, 
	value;

while (++i) {
	if ((value = Math.random()) > 0.99) {
		break;
	}
}

alert(i + ' ' + value);
*/

////////////////////////////////////////
/////////// Восьмое задание ////////////
////////////////////////////////////////
/*
for (var i = 1; i <= 10; i++) {
	for (var j = 1; j <= 10; j++) {
		console.log(`${i} x ${j} = ${i*j}`);
	}
}
*/

////////////////////////////////////////
/////////// Девятое задание ////////////
////////////////////////////////////////
/*
let size = parseInt(prompt('Введите размер шахматной доски: ')),
	finalString = '';

if (isNaN(size) || size < 0) {
	alert('Некорректный ввод.');
} else {
	for (var i = 1; i <= size; i++) {
		for (var j = 1; j <= size; j++) {
			finalString += (i + j) % 2 === 0 ? '.':'#';
		}
		finalString += '\n';
	}
}
console.log(finalString);
*/

////////////////////////////////////////
/////////// Десятое задание ////////////
////////////////////////////////////////
/*let finalString = '0 1 ';
for (var i = 1, ipp = 0, ip = 1; i < 1000; i = ip + ipp, finalString += i + ' ', ipp = ip, ip = i) {};
console.log(finalString);
*/

////////////////////////////////////////
//////// Одиннадцатое задание //////////
////////////////////////////////////////
/*
startInput: while (true) {
	switch (prompt('Введите пароль:')) {
		case 'Пароль': {
			alert('Вы успешно авторизованы.'); 
			break startInput; 
			break;
		} 
		case null: {
			if (confirm('Вы уверены, что хотите отменить авторизацию?')) {
				alert('Вы отменили авторизацию.');
				break startInput;
			};
			break;	
		}
	}
}
*/

////////////////////////////////////////
///////// Двенадцатое задание //////////
////////////////////////////////////////
/*
for (let i = 0; i < 10; i++) {
	for (let j = 0; j < 10; j++) {
		console.log(i + j);
	}
}
*/