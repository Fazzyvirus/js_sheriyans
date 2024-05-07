// -- the difference b/w var let const 
// var old js me tha
// var function scoped hota hai => var apne parent function me kahi bhi use ho skta hai
// var adds itself to the windows object
// function abcd() {
//     for(var i = 1; i<12; i++){
//         console.log(i);
//     }
//     console.log(i);
// }
//var a = 12; // when in console of window you will search window you will get a = 12 there as var adds itself to windows object
// let const new js me hai
// let braces scoped hota hai
// let & const doesn't adds itself to the windows objects
//let b = 13; // it will not add itself to the window object

//-- execution context matlab jab bhi hm function chalaenge to fnc apna ek khudka imaginary container bana lega jismein uski teen cheeze hongi:
// 1) variable
// 2) function inside that parent function
// 3) lexical environment of that function
// ye jo container hai imaginary ise hi hm execution context kehte hai.
// Definition:- Execution context is a container where the function's code is executed and it's created whenever a function is called, contains 3 things, variable, function inside parent and lexical environment.

// -- lexical environment hme batata hai ki hmara func kya access kr skta hai kya ni kr skta hai. matlab ki it holds it's scope and scope chain.

// -- how to copy reference value (spread operator "...")
// var a = [1,2,3,4,5];
// var b = [...a]; // we use 3 dots to copy the value of the variable which is written after ...
// same with objects
// var obj = {name:"faisal"};
// var copyobj = {...obj};

// -- Truthy & Falsy
// js me kuchh bh likho wo mainly do prakaar me se kisi ek prakar ko belong krti hai.
// Falsy value ye hai => 0, false, undefined, null, NaN, document.all
// truthy value: vo sari value jo falsy value na ho truthy hai, means kewal 0, false, undefined, null, NaN, document.all value falsy hai inke alawa sb value truthy hai.

// -- forEach:- Ye loop sirf array me use ata hai, mtlb jb tmae paas sirf array ho tb tm foreach use kr skte ho.
// foreach kabh bhi bydefault apke array me change ni krta wo apko changes krke deta hai array ki temporary copy pr jiski wjh se array hmesha same rehta hai.
// var a = [1,2,33,4,5,65,32,23,232,54,76]
// a.forEach(function(val){
//     console.log(val+2);
// })

// -- forIn:- object per loop krne k liye hota hai forIn loop.
// var obj =  {
//     name: "faisal",
//     age: 24,
//     city: "lko"
// }
// for(var key in obj){
//     // console.log(key);
//     console.log(key, obj[key]);
//     // console.log(obj[key]);
// }

// -- callback functions
// Jab bhi koi aisa code jo baad me chalta hai aap likhoge, kyuki vo code baad me chalta hai js ko ye pata ni hota ki wo complete hua ya ni aise code ke completion pr js ko bataya jata hai ki wo complete ho gya or aap use chala skte ho, ye batane ka kaam callback ka hai.

// aisa code jo baad me chalta hai use hm ek func dedete hai ki bhaiya jab complete ho jana to ye func chala dena, or jo func hm dete hai wo ek nrml func hi hota hai use hm call back func kehte hai.

// setTimeout(function() {
//     console.log("2 second baad chalao");
// }, 2000);

// -- first class functions
// js me ek concept hota hai jisme hm func ko use kr skte hai as a value.

// var a = function(){};

// function abcd(a){
//     a();
// }
// abcd(function(){console.log("hello");})

// -- how arrays are made behind the scene & how to make negative indexes array in js
// var arr = [1,2,3];
// arr[-1] = 2;

// -- How to delete object props
// var a = {
//     name :"faisal",
//     age : 25
// }
// delete a.age;
// delete a.name;

