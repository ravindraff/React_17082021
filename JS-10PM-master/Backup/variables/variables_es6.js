//variables
//variables are used to store the "data"
//Ex. string   number  boolean   object ......
//variables should contain a-z , A-Z , 0-9 , $ and _
//variables should not start with "digits"
//we will declare the variables by using "var" / "let" / "const" keyword
//"let" and "const" keyword introduced in "ES6"


//Datatypes
//1) string
//2) number
//3) boolean
//4) undefined
//5) null
//-------------------ES5-----------



//6) Symbol
//7) bigint


//Symbol
//Symbol datatype is the primitive datatype
//Symbol datatype introduced in "ES6"
//Symbol datatype used to create the "unique" values
//Symbol datatype provides the "secuirity"
var s1 = "AshokIT";
var s2 = "AshokIT";
console.log( s1 === s2 );                   //true

var s3 = "Hello";
var s4 = String("Hello");
console.log( s3 === s4 );                   //true


var s5 = Symbol("AshokIT");
var s6 = Symbol("AshokIT");
console.log( s5 == s6 );                   //false



let s7 = Symbol.for("AshokIT");
let s8 = Symbol.for("AshokIT");
console.log( s7 == s8 );                   //true



//json
//json stands for java script object notation
//json used to transfer the data over the network
//Objects ----   {}
//Arrays  ----   []
//data    ----   key & value pairs
//  key & value separated by using ":"
//key & value separated by using ","
var key2 = Symbol("key2");
var obj = {
    "key1" : "Hello_1",
    [key2] : "Hello_2",
    "key3" : "Hello_3"
};
obj.key4 = "Hello_4";
console.log( Object.getOwnPropertyNames(obj) );             //[ 'key1', 'key3', 'key4' ]
console.log( Object.getOwnPropertySymbols(obj) );           //[ Symbol(key2) ]    
console.log( obj[key2] );                                   //Hello_2



// bigint
// > 2^53 - 1
// ES6
// bigint number suffix with "n"
var v1 = 12312398239863298436498364932649328643289463986439846392846398463928463984639846938469184691846189469834;
console.log( v1 );              //1.23123982398633e+103

var v2 = 12312398239863298436498364932649328643289463986439846392846398463928463984639846938469184691846189469834n;
console.log( v2 );          //12312398239863298436498364932649328643289463986439846392846398463928463984639846938469184691846189469834n

var v3 = 1n;
var v4 = 2n;
console.log(v3+v4);             //3n
console.log( v3 / v4 );         //0n

var v5 = 5n;
var v6 = 2n;
console.log( v5/v6 );           //2n

var v7 = 5;
var v8 = 2;
console.log( v7 / v8 );         //2.5
//console.log( v3 + v7 );         //TypeError: Cannot mix BigInt and other types, use explicit conversions




//undefined
var x;    
x=undefined;
console.log( x );                       //undefined


//null
var y = null;
console.log( y );                       //null


// boolean
// true / false
// true >0 & <0  (in condional)
// false "0"
var flag = true;
console.log( flag );            //true
console.log( 1 == true );           //true
console.log( 0 == false );          //true



//number
//decimal       double      hexadecimal     octal       binary
//hexadecimal number will prefix with "0x"
//octal number will prefix with "0o"
//binary number will prefix with "0b"
var decimal = 100;
var double = 100.12345;
var hexadecimal = 0x123ABC;
var octal = 0o123;
var binary = 0b1010;
console.log( decimal, double, hexadecimal, octal, binary );         //100 100.12345 1194684 83 10


//string
//collection of characters
//"" (double quotes)            ''(single quotes)           ``(backtick)
//``(backtick) operator introduced in ES6
//``(backtick) operator also called as template literal
//``(backtick) operator used to create the paragraphs
var org = "AshokIT";
var sub = "ES6 to ES11";
var wish = `${org} welcome you
                for ${sub} Training`;
console.log( wish );








































