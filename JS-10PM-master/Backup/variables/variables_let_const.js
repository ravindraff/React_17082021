//let
//let keyword introduced in "ES6"
//let keyword used to "declare" the variables


//differences between var & let

/*
    let data = 100;
    let data = 200;
    console.log( data );                    //let:SyntaxError: Identifier 'data' has already been declared
                                            //var:200
    //var keyword allows the duplicate variables
    //let keyword won't allows the duplicate variables
*/



/*
    let data = 100;

    {
        let data = 200;
        
    }

    console.log( data );                //let:100                   //var:200

    //var keyword raised the global polluting issue
    //we can overcome the global polluting issue by using let keyword.
*/


/*
    for(let i=0;i<5;i++){
        
    };
    console.log( i );               //let:ReferenceError: i is not defined             //var:5
    //var keyword breaks the scope rule
    //let keyword obeys the scope rule
*/


/*
    //Rule 1 : declare the variable
    //Rule 2: initilize the variable
    //Rule 3: print the variable
    console.log( x );               //let:ReferenceError: Cannot access 'x' before initialization
                                    //var: undefined
    let x = 100;
    //variable hoisting issue raised because of var keyword
    //we can overcome variable hoisting by using let keyword
*/


/*
                            var                                     let
        var keyword introduced in ES1                       let keyword introduced in ES6

        duplicate variables allowed                         let keyword won't allows the duplicate variables

        global polluting issue raised                       let keyword overcomes the global polluting issue

        variable hoisting issur raised here                 we can overcome variable hoisting issue

        scope rule break by var keyword                     let keyword obeys the scope rule

*/


//const keyword
//const keyword introduced in "ES6"
//reinitilization not possible
//const data = 100;
//data = 200;                     //TypeError: Assignment to constant variable.



const data = [20,30,40];
//data = [];                            //error
//data = [200,300,400];                   //error
data[0] = 200;
data[1] = 300;
data[2] = 400;
data.push(500);
data.unshift(100);
console.log( data );                      //[ 100, 200, 300, 400, 500 ]



const obj = {
    key1 : "Hello_1",
    key2 : "Hello_2",
    key3 : "Hello_3"
};
//obj = {};                 //error
//obj = {key1 : "Welcome_1",key2 : "Welcome_2",key3 : "Welcome_3"};           //error

obj.key1 = "Welcome_1";
obj.key2 = "Welcome_2";
obj.key3 = "Welcome_3";
obj.key4 = "Welcome_4";
console.log( obj );
























































