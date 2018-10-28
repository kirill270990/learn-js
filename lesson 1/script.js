var first = 1
let second = 2;
const pi = 3.14;

var number = 5;
var string = "Строка";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

var Name;
console.log(Name);

obj = {
	name: "John",
	age: 25,
	isMarried: false
}

console.log(obj["name"]);

var arr = ["plum", "orange", "apple"];
console.log(arr[0]);

// alert("hello");
// confirm('hi');
// var answer = +prompt("hello", "13");
// console.log(typeof(answer));

var incr = 12,
	decr = 12;

	// incr++;
	// decr--;


// Если оставить эти опнраторы в постфиксной форме,
// то значение перменной не поменяется(Если брать сразу результат). 
console.log(incr++);
console.log(decr--);

// Если оставить эти операторы в префиксной форме, то значения переменных 
//будут равны тем, что показаны на стр 35,36(Если брать сразу результат)
console.log(++incr);
console.log(--decr);



// Знаки : 
// "=" - присваиваниезначения,  
// "==" - равниваеие (var num = 10; console.log(num == 10); выдаст true),   
// "===" - сравнение по типам дпнных ("10" === 10 выдаст False);

var bool = true,
	boll = true;

console.log(bool || boll);
