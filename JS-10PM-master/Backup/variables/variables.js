//variables
//Variables are used to store the data
//string, number, boolean, arrays , objects,......
//we will declare variables by using "var" / "let" / "const" keyword
//"let" and "const" keywords introduced in ES6
//variables should contain a-z , A-Z, 0-9 , $ and _
//variables should not start with digits

/*
    Syntax
    ======
    var/let/const variablename = value;
*/

/*
    //ES11
    1) string
    2) number
    3) boolean
    4) undefined
    5) null
    6) bigint
    7) Symbol
*/




//undefined
//variable declared but value not assigned
//then that datatype called as undefined
var x;
console.log(x);                 //undefined



//null
//want to day no value/use in variable
var y = null;
console.log( y );           //null



console.log( undefined == undefined );          //true
console.log( undefined === undefined );         //true
console.log( null == null );                    //true
console.log( null === null );                   //true
console.log( undefined == null );               //true
console.log( undefined === null );              //false













//string
//collection of characters called as "string"
//"" (double quotes) , ''(single quotes) , ``(backtick operator) 
//``(backtick operator)  introduced in "ES6"
//``(backtick operator) used to define the "paragraphs"
//``(backtick operator)  also called as "template literal"
var sub = "ReactJS Live Project Training";
var wish = `Welcome to ${sub}`;
console.log( wish );                            //Welcome to ReactJS Live Project Training



var tbl_name = "employees";
var sal = 50000;
var sql_query = `select * from ${tbl_name} where esal>${sal}`;
console.log(sql_query);                         //select * from employees where esal>50000


var u_name = "ashokit";
var u_pwd = "ashokit123";
var login_query = `select * from ${tbl_name} where uname='${u_name}' and upwd='${u_pwd}'`;
console.log( login_query );                     //select * from employees where uname='ashokit' and upwd='ashokit123'


//number datatypes
//1) decimal
//2) double / float
//3) hexadecimal            => 0X
//4) octal                  => 0o
//5) binary                 => 0b
var decimal_num = 100;
var double_num = 100.12345;
var hexadecimal_num = 0x123ABC;
var octal_num = 0o123;
var binary_num = 0b1010;
console.log( decimal_num, double_num, hexadecimal_num, octal_num, binary_num );
//100 100.12345 1194684 83 10



//boolean
//true or false
var flag = true;
console.log( flag );            //true
console.log( true == 1 );       //true
console.log( true === 1 );      //false
console.log( false == 0 );      //true
console.log( false === 0 );     //false      //=== data & datatype
console.log( false == 1 );      //false
console.log( false === 1 );     //false
//true ---   1
//false ---  0
console.log( true > false );        //true
console.log( true>false>false);     //true
console.log( 10>9>8 );              //false

           
//bigint
//bigint datatype is used to store the value greater than 2^53-1
//we will represent bigint datatype by suffixing "n"
var my_num = 123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789n;
console.log( my_num );


var var_one = 1n;
var var_two = 2n;
var var_three = var_one + var_two;
console.log( var_three );       //3n


var var_four = 5;
var var_five = 2;
var var_six = var_four / var_five;
console.log( var_six );         //2.5


var var1 = 5n;
var var2 = 2n;
var var3 = var1 / var2;
console.log( var3 );            //2n



var v1 = 1n;
var v2 = 2;
//console.log( v1 + v2 );
//TypeError: Cannot mix BigInt and other types, use explicit conversions



//object
//{}   json object
//key & value pairs
var obj = {
    "sub_one" : "ReactJS",
    "sub_two" : "NodeJS",
    "sub_three" : "MongoDB"
};
console.log( obj.sub_one, obj.sub_two, obj.sub_three );
//ReactJS NodeJS MongoDB


//ES6
//for....in
for(var k in obj){
    console.log( k, obj[k], typeof k );             //string
}



//Symbol
//Secuirity
var s1 = Symbol(100);
console.log( s1 );

//question
var secuirity1 = Symbol("Hello");
var secuirity2 = Symbol("Hello");
console.log( secuirity1 == secuirity2 );            //false
console.log( "Hello" == "Hello" );                  //true



var k1 = Symbol("key1");
var k3 = Symbol("key3");
var json_obj = {
    [k1] : "Hello_1",
    key2 : "Hello_2",
    [k3] : "Hello_3"    
};
console.log( json_obj.k1, json_obj.key2, json_obj.k3 );         //Hello_1 Hello_2 Hello_3


//clone
//secured
var cloned = Object.assign({},json_obj);
console.log( cloned[k1], cloned.key2, cloned[k3] );















































