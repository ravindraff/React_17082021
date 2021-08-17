// == (content)
// === (content & datatype)
console.log( 10 == "10" );      //true
console.log( 10 == "ten" );     //false
console.log( 10 === "10" );     //false


//undefined   and   null
console.log( undefined == undefined );          //true
console.log( undefined === null );              //false



//variables
//variables are used to store the data
//string, number, boolean, Arrays, Objects, undefined, null,.....
//var ,  let  or const keyword
//let and const keywords introduced in ES6
//a-z , A-Z , 0-9 , $ and _
//variables should not start with digits

//Syntax
/*
     var / let / const variablename = value;
*/


/*
    var _data;
    var _123;
    //var 123_;     //Variable declaration expected.
    //var var;      //'var' is not allowed as a variable declaration name.
    var $var; 
*/



var arr1 = [10,20,30];
var arr2 = arr1;

//shallow cloning
console.log( arr1 );            //[ 10, 20, 30 ]
console.log( arr2 );            //[ 10, 20, 30 ]

arr1.push( 40 );
console.log( arr1 );            //[ 10, 20, 30, 40 ]
console.log( arr2 );            //[ 10, 20, 30, 40 ]


arr2.push(50);
console.log( arr1 );            //[ 10, 20, 30, 40, 50 ]
console.log( arr2 );            //[ 10, 20, 30, 40, 50 ]



//deep
// ...
// ES6
// Rest Operator / Spread Operator
var arr3 = [10,20,30];
var arr4 = [...arr3];
console.log( arr3 );                //[ 10, 20, 30 ]
console.log( arr4 );                //[ 10, 20, 30 ]

arr3.push(40);
console.log( arr3 );                //[ 10, 20, 30, 40 ]
console.log( arr4 );                //[ 10, 20, 30 ]

arr4.push(50);
console.log( arr3 );                //[ 10, 20, 30, 40 ]
console.log( arr4 );                //[ 10, 20, 30, 50 ]











































