// var obj = {
//     "num1" : 10
// };

// function fun_one(){
//     console.log( this.num1 );
// };

// fun_one.call(obj);          //10  


var obj = {
    num1 : 10,
    num2 : 20
};

function fun_one(arg1,arg2,arg3){
    console.log( this.num1 + this.num2 + arg1 + arg2 + arg3 );
};

fun_one.call(obj, 30, 40, 50);              //150

let arr = [10,10,10];
fun_one.apply(obj,arr);                     //60


const newLocation = fun_one.bind(obj);
newLocation(10,10,10);                  //60

