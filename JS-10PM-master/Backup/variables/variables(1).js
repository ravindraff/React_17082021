//variables are used to store the data
//Ex.  string  number  boolean    arrays   objects ........
//we will declare the variables by using "var" / "let" / "const" keyword
//"let" and "const" keyword introduced in "ES6".
//variables should contain A-Z, a-z , 0-9 , $ and _
//variables should not start with digits
//Syntax:        var/let/const variablename = value;

//DataTypes
//1) string         2) number           3) boolean          4) undefined        5) null         6) bigint       7) Symbol       8) Object



// string
// collection of characters called as string
//"" (double quotes) '' (single quotes) and ``(backtick)
//``(backtick) introduced in ES6
//``(backtick) operator used to define the "paragraphs"
//``(backtick) also called as template literal
var sub = "ReactJS";
var wish = `welcome to ${sub}`;
console.log( wish );                    //welcome to ReactJS


var tbl_name = "employees";
var sal = 50000;
var sql_query = `select * from ${tbl_name} where esal>${sal}`;
console.log( sql_query );           //select * from employees where esal>50000


var u_name = "ashokit";
var u_pwd = "ashokit123";
var login_query = `select * from ${tbl_name} where uname='${u_name}' and upwd='${u_pwd}'`;
console.log(login_query);           //select * from employees where uname='ashokit' and upwd='ashokit123'



console.log( 10 + "10" );                 //1010
console.log( 10 - "10" );                 //0
console.log( 10 * "10" );                 //100
console.log( 10 / "10" );                 //1
console.log( 10 + +"10" );                //20
console.log( +"10" + 10 + +"20" + +"30" );    //70


//== (content)
//=== (content & datatype)
console.log( 10 == "10" );          //true
console.log( 10 === "10" );         //false
console.log( 10 == "ten" );         //false
console.log( 10 === "ten" );        //false
console.log( 10+10 == 20 );         //true
console.log( 0.1+0.2 == 0.30000000000000004 );      //true





























































