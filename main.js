screenElement = document.getElementById('screen');

clearButton = document.getElementById('c');
equalButton = document.getElementById('equal');
menosButton = document.getElementById('menos');
plusButton = document.getElementById('plus');
multButton = document.getElementById('mult');
barButton = document.getElementById('bar')
dotButton = document.getElementById('dot');

// oneNum = document.getElementById('one');
// twoNum = document.getElementById('two');
// threeNum = document.getElementById('three');
// fourNum = document.getElementById('four');
// fiveNum = document.getElementById('five');
// sixNum = document.getElementById('six');
// sevenNum = document.getElementById('seven');
// eightNum = document.getElementById('eight');
// nineNum = document.getElementById('nine');
// zeroNum = document.getElementById('zero');

let num = [];
let order = [];

equalButton.addEventListener("click", () => {
	let calc = screenElement.value;
	let result = eval(calc);
	screenElement.value = result;
});

// menosButton.addEventListener("click", () => {
// 	getNumber();
// 	order.push('-');

// 	console.log(num);
// 	console.log(order);
// });

// plusButton.addEventListener("click", () => {
// 	getNumber();
// 	order.push('+');

// 	console.log(num);
// 	console.log(order);
// });

// multButton.addEventListener("click", () => {
// 	getNumber();
// 	order.push('*');

// 	console.log(num);
// 	console.log(order);
// });

// barButton.addEventListener("click", () => {
// 	getNumber();
// 	order.push('/');

// 	console.log(num);
// 	console.log(order);
// });

// function getNumber(){
// 	let calc = screenElement.value;
// 	num.push(Number(calc));
// 	screenElement.value = '';

// 	return num;
// }