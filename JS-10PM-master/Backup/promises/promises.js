/*
    let promise1 = new Promise((resolve,reject)=>{
        resolve("welcome to promises");
    });


    promise1.then((posRes)=>{
        console.log(posRes);
    },(errRes)=>{
        console.log(errRes);
    });
    //welcome to promises
*/



/*
    let promise1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hello");
        },5000);
    });

    promise1.then((posRes)=>{
        console.log( posRes );
    },(errRes)=>{
        console.log( errRes );
    });     //Hello
*/


// let promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Hello_1");
//     },0);
// });


// let promise2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Hello_2");
//     },5000);
// });


// let promise3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Hello_3");
//     },10000);
// });


// promise1.then((posRes)=>{
//     console.log(posRes);
// },(errRes)=>{
//     console.log(errRes);
// });

// promise2.then((posRes)=>{
//     console.log(posRes);
// },(errRes)=>{
//     console.log(errRes);
// });

// promise3.then((posRes)=>{
//     console.log(posRes);
// },(errRes)=>{
//     console.log(errRes);
// });




// let promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Hello_1");
//     },0);
// });


// let promise2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Hello_2");
//     },5000);
// });


// let promise3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Hello_3");
//     },10000);
// });


// Promise.all([promise1,promise2,promise3]).then((posRes)=>{
//     console.log(posRes);
// },(errRes)=>{
//     console.log(errRes);
// });
// //[ 'Hello_1', 'Hello_2', 'Hello_3' ]




// let promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Hello_1");
//     },20000);
// });


// let promise2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Hello_2");
//     },5000);
// });


// let promise3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Hello_3");
//     },10000);
// });


// Promise.race([promise1,promise2,promise3]).then((posRes)=>{
//     console.log(posRes);
// },(errRes)=>{
//     console.log(errRes);
// });










// let promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Hello_1");
//     },20000);
// });


// let promise2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("Error");
//     },5000);
// });


// let promise3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Hello_3");
//     },10000);
// });


// Promise.all([promise1,promise2,promise3]).then((posRes)=>{
//     console.log(posRes);
// },(errRes)=>{
//     console.log(errRes);
// });



/*
let promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hello_1");
    },20000);
});
let promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Error");
    },5000);
});
let promise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hello_3");
    },10000);
});
Promise.allSettled([promise1,promise2,promise3]).then((posRes)=>{
    console.log(posRes);
},(errRes)=>{
    console.log(errRes);
});
*/







// let promise2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Hello_2");
//     },0);
// });

// let promise1 = new Promise((resolve,reject)=>{
//     resolve("Hello_1");
// });



// promise2.then((posRes)=>{
//     console.log(posRes);
// },(errRes)=>{
//     console.log(errRes);
// });

// promise1.then((posRes)=>{
//     console.log(posRes);
// },(errRes)=>{
//     console.log(errRes);
// });



/*
    //async & await
    let promise1 = new Promise((resolve,reject)=>{
        resolve("Hello_1");
    });

    async function my_fun(){
        const res = await promise1;
        console.log( res );
    };

    my_fun();               //Hello_1



























*/



/*
    let promise1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hello_1");
        },0);
    });


    let promise2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hello_2");
        },5000);
    });


    let promise3 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hello_3");
        },10000);
    });

    async function myFun(){
        const res1 = await promise1;
        const res2 = await promise2;
        const res3 = await promise3;
        console.log(res1);
        console.log(res2);
        console.log(res3);
    };

    myFun();
*/


//json server
//ajax call
//promises
//async & await



































































































































































































