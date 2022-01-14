	console.log( 'Мне 123456 лет'.match(/\d{5}/)); //12345

	console.log('Мне 12 456 1234 12345 1241453'.match(/\d{3,5}/g)); //['456', '1234', '12345', '453']

	console.log('Мне не 12, а 12345678'.match(/\d{3,}/)); //12345678


	console.log('+7(903)-123-45-67'.match(/\d{1,}/g)); // ['7', '903', '123', '45', '67']


// Короткие обозначения
// + // Означает «один или более
	console.log('+7(903)-123-45-67'.match(/\d+/g)); // ['7', '903', '123', '45', '67']

// ? // Означает «ноль или один». То же самое, что и {0,1}. По сути, делает символ необязательным.
	let str = "Следует писать color или colour?";
	console.log(str.match(/colou?r/g)); // [color, colour]

//* // Означает «ноль или более». То же самое, что и {0,}. То есть символ может повторяться много раз или вообще отсутствовать.
	console.log('100 10 1'.match(/\d0*/g)); // ['100', '10', '1']
	console.log('100 10 1'.match(/\d0+/g)); // ['100', '10']
	// 1 не подходит, т.к 0+ требует как минимум один ноль
	


let regexp = /\.{3,}/g;
console.log( "Привет!... Как дела?.....".match(regexp) ); // ..., .....


regexp = /#[a-f0-9]{6}/gi;

str = "color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2 #12345678";

console.log( str.match(regexp) )  // #121212,#AA00ef