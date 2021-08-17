//typeof
console.log( typeof null );                             //object
console.log( typeof 1n );                               //bigint
console.log( typeof Symbol(100) );                      //symbol
console.log( typeof function(){});                      //function
console.log( typeof {} );                               //object
console.log( typeof console );                          //object


//json
var obj = {
    "key1" : "Hello_1",
    "key2" : "Hello_2",
    "key3" : "Hello_3"  
};
console.log( obj.key1, obj.key2, obj.key3 );                //Hello_1 Hello_2 Hello_3
//iterate the json object
//for....in  loop
for(let key in obj){
    console.log( key );                         //key1      key2        key3
    console.log( obj[key] );                    //Hello_1   Hello_2     Hello_3
    console.log( typeof key );                  //string    string      string          
};

var obj1 = {

};
let key1 = {};
let value1 = "Hello_1";
obj1[key1] = value1;
                          


let key2 = {};
let value2 = "Hello_2";
obj1[key2] = value2;


let key3 = {};
let value3 = "Hello_3";
obj1[key3] = value3;

console.log( obj1 );                        //{ '[object Object]': 'Hello_3' }


//Note : if we use "JSON Objects" as keys in "JSON" automatically old keys are overriding with latest keys
//Note : in obove example key1 overriding with key2 and key2 overriding with key3
//Note : Hello_1 overriding with Hello_2 and Hello_2 overriding with Hello_3
//Note : finally we are getting output as Hello_3

//Data Structures
//we can overcome above issue, by using DataStructures in JavaScript
//map()         weakMap()           set()           weakSet()
var obj2 = new Map();
var k1 = {};
var v1 = "Hello_1";


var k2 = {};
var v2 = "Hello_2";


var k3 = {};
var v3 = "Hello_3";

obj2.set(k1,v1)
    .set(k2,v2)
    .set(k3,v3);
console.log( obj2 );                    //{ {} => 'Hello_1', {} => 'Hello_2', {} => 'Hello_3' }



    

























