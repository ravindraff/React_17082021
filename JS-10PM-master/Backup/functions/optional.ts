/*
    function fun_one(arg1?:string,arg2?:string,arg3?:string):void{
        console.log( arg1, arg2, arg3 );
    };
    fun_one();                          //undefined undefined undefined
    fun_one("Hello_1");                 //Hello_1 undefined undefined
    fun_one(undefined,"Hello_2");       //undefined Hello_2 undefined
    fun_one(null,null,null);            //null null null
*/


/*
    function fun_one(arg2:any,arg1?:any){}
    //in combination of optional with regular, optional should be last formal parameter
*/


/*
    function fun_one(arg1:any,arg2?:any):void{
        console.log( arg1, arg2 );
    };
    //fun_one();                    //Expected 1-2 arguments, but got 0.
    fun_one("Hello_1");             //Hello_1 undefined
    fun_one("Hello_1","Hello_2");   //Hello_1 Hello_2
    fun_one(undefined,undefined);   //undefined undefined
    fun_one(null,null);             //null null
*/


function fun_one(arg1:any,arg2:any="Hello_2",arg3?:any,...arg4:any){
    console.log( arg1, arg2, arg3, arg4 );
};

//fun_one();                                            //Expected at least 1 arguments, but got 0.
fun_one("Hello_1");                                     //Hello_1 Hello_2 undefined []
fun_one("Hello_1",undefined,"Hello_3","Hello_4");       //Hello_1 Hello_2 Hello_3 [ 'Hello_4' ]
fun_one(undefined,undefined,undefined,undefined);       //undefined Hello_2 undefined [ undefined ]
fun_one(null,null,null,null);                           //null null null [ null ]



















