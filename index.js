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
