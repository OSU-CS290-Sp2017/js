var x = 3.14;
var i = 10;
var str = "abcd";
var bool = true;
var arr = [ 1, 2, 3, 4 ];
var obj = { a: '1' };
var fn = function () { console.log("this is a function"); };


console.log("x:", x);

console.log("typeof(fn):", typeof(fn));

console.log("9 / 5:", 9 / 5);


var i1 = 2;
var i2 = 2;

if (i1 == i2) {
  console.log("i1 == i2");
}

var s1 = "2";
if (i1 == s1) {
  console.log("i1 == s1");
}
if (i1 === s1) {
  console.log("i1 === s1");
}

/********************* Strings **************************/
var str1 = "This is someone's string";
var str2 = 'This "is" also someone\'s string';

console.log(str1 + " with another string appended " + 100);
console.log(str2);
console.log(str2.length);
console.log(str2[5]);

console.log("decathalon".indexOf("cat"));
console.log("team".indexOf("i"));

var catIdx = "decathalon".indexOf("cat");
console.log("decathalon".slice(catIdx, catIdx + "cat".length));

console.log("cat".toUpperCase());
console.log("CAT".toLowerCase());

var dogStr = "I love dogs";
console.log(dogStr.replace("dog", "cat"));

/********************* Arrays **************************/

console.log("======================== Arrays");

var array = [ 1, "a", true, [1, 2, 3] ];

console.log(array);
for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
}

function arrayPrinting(element) {
  console.log("in arrayPrinting():", element);
}

arrayPrinting("blah");

array.forEach(function (blah, i) {
  console.log("array.forEach [" + i + "]:", blah);
});

array.forEach(arrayPrinting);

var emptyArray = [];
for (var i = 0; i < 10; i++) {
  emptyArray.push(i);
}
console.log("emptyArray:", emptyArray);

while (emptyArray.length !== 0) {
  console.log("popping", emptyArray.pop());
}

/********************* Functions **************************/

console.log("======================== Functions");

function foo(a, b, c) {
  return a + b + c;
}

console.log("foo(1, 2, 3)", foo(1, 2, 3));
console.log("foo('1', '2', '3')", foo('1', '2', '3'));

function computeSum() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(computeSum(1, 2, 3, 4));
console.log(computeSum(1));
console.log(computeSum(1, 2, 3, 4, "a", "b", "c"));

var hello = "Hola";
var helloWorldFn = function () {
  console.log(hello + " world");
  hello = "Hello";
};

helloWorldFn();
helloWorldFn();
