/*
var a = 0, b, c;

while(a <= 100){
    b = a/2;
    c = (b%1).toFixed(2);
    if(c != 0) console.log(a);
    a++;
}
 */

/*
var a = 0, b, c;

do{
    b = a/2;
    c = (b%1).toFixed(2);
    if(c != 0) console.log (a + " - это нечётное число");
    if(c == 0) console.log(a + " - это чётное число");
    a++;
}while(a <= 10);
*/

/*
for (var i = 1; i <= 9; console.log(i++)){
}
*/

var a = 0, b = "X", i = 0;

console.log(b);
console.log(" ");

while(a < 19){
    for (; i <= a; i++){console.log(b = b + "X"); console.log(" ");}
    a++;
}