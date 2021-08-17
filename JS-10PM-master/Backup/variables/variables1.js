//let
//let is the keyword introduced in ES6
//let keyword used to declare the variables

/*
    let data = 100;
    let data = 200;
    console.log( data );        //wrong   //duplicate  //error 
    //var : 200   (bug)    let : SyntaxError: Identifier 'data' has already been declared

    //var keyword allows the duplicate variables
    //let keyword won't allows the duplicate variables
*/


/*
    //global variable
    let data = 100;
    
    //block
    {
        //local variable
        let data = 200;
    }

    console.log( data );       // let : 100      // var : 200

    //"global polluting issue" raised because of "var" keyword
    //we can overcome global polluting issue by using "let" keyword
*/



/*
    console.log( x );           //var : undefined   let : ReferenceError: Cannot access 'x' before initialization
    let x = 10;
    //variable hoisting issue raised because of "var" keyword
    //we can overcome variable hoisting issue by using "let" keyword
*/



/*
    //setTimeout()
    //to execute particular functionality after some time
    setTimeout( function(){
        console.log("Hello");
    }, 5000 );
*/


/*
    //setInterval()
    //to execute particular functionality repeatedely
    setInterval(function(){
        console.log( new Date().toLocaleTimeString() );
    }, 1000 );
*/

/*
for(let i=0;i<5;i++){
    setTimeout(function(){
        console.log(i);
    },5000);
};


//0
//1
//2         5sec  (let)
//3
//4


//5
//5
//5         5sec  (var)
//5
//5
*/


/*
                                var                             let

        var keyword introduced in "ES1"                 let keyword introduced in "ES6"

        var keyword allows the duplicate                let keyword won't allows the duplicate variables 
        variables

        variable hoisting issue raised                  we can overcome variable hoisting issue
        because of var keyword

        global polluting issue raised because           we can overcome global polluting issue by using 
        of var keyword                                  let keyword

        var keyword is the not the block                let keyword is the block scoped member
        scoped member
*/




//const
//reassignment "not" possible
//const keyword introduced in "ES6"
const data = 100;
//data = 200;         //TypeError: Assignment to constant variable.


const arr = [20,30,40];
//arr = [];               //TypeError: Assignment to constant variable.
arr[0] = 200;
arr[1] = 300;
arr[2] = 300;
console.log(arr);           //[ 200, 300, 300 ]


const obj = {
    sub_one : "Hello_1"
};
//obj = {};       //TypeError: Assignment to constant variable.
obj.sub_one = "Hello";
console.log(obj);       //{ sub_one: 'Hello' }




















































