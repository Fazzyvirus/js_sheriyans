// --- Higher Order Functions
// aisa func jo accept krle ek aur func ya fir return krde ek aur func are called highr order func

// Examples 1:
// function abcd(){

// }
// abcd(function(){})
// Examples 2:
// function abcd(){
//     return function(){}
// }
// abcd();
// Examples 3: forEach
// var arr = [1,2,3,4];
// arr.forEach(function(){})


// --- Constructor Function : normal function jisme "this" ka istemal ho and aap function ko call krte wqt "new" keyword ka use kre. Jisme "this" point krta hai window ko.

//Parle G wala example:
// function saanchaOfBiscuit(){
//     this.width = 12;
//     this.height = 22;
//     this.color = "brown";
//     this.taste = "sugary";
// }
// var bis1 = new saanchaOfBiscuit()
// var bis2 = new saanchaOfBiscuit()
// var bis3 = new saanchaOfBiscuit()

// jab apke paas aisa koi bhi mauka ho jab apko ek jaisi properties wale bht saare elements bnane hai us wqt aap constructor func use kr skte ho.
// remote wala example:
// function circularButtonBnao(color){
//     this.radius = 2;
//     this.color = color;
//     this.icon = false;
//     this.pressable = true;
// }
// var butt1 = new circularButtonBnao("red")
// var butt2 = new circularButtonBnao("yellow")
// var butt3 = new circularButtonBnao("green")


// --- first class function : available in script2.js


// --- new keyword
// new => jab bbhi new lagta hai hmesha ek blank object apne man me bana lo.
// {

// }


//--- iife - immediately invoked function expression
// iife hai function ko turant chalane ki kala, is tarike se ki hm log koi private variable bana paye

// var ans = (function(){
//     var privateval = 12;
//     return {
//         getter: function(){
//             console.log(privateval);
//         },
//         setter: function(val){
//             privateval = val;
//         }
//     }
// })()


// --- Prototype:- javascript ne objects ko use krne ke liye bht se predefined properties banai hai jinko hm prototype kehte hai.

//example:-
// let arr = [1,2,3,4,5,6]
// arr.length(); // yaha pe .length ek prototype hai.


//--- prototype inheritance:- jab hm kisi 1 object ke features or properties kisi dusre object me dena ya inherit krna chahte hai tb hm prototypal inheritance ka use krte hai.

//example:-
// var human = {
//     canFly: false,
//     canTalk: true,
//     canSwim: true,
//     haveEmotions: true,
//     hasFourLegs: false
// }

// var sheriyansStudent = {
//     canCode: true,
//     canMakeAmazingWebsites: true
// }

// sheriyansStudent.__proto__ = human


// ---this call apply bind

// jab bhi tm kuchh likh rhe ho check kro kya usme koi func object ya scope "{}" bana hai matlab tm local ni balki global scope me ho

// in short jb bhi koi cheez {} brackets me ni hoti usko global scope kehte h.

// console.log(this); // global scope me this ki value hoti hai "window"

// function scope me bhi this ki value "window hi rehti h"
// function abcd(){
//     console.log(this);
// }
// abcd()

// ek function jo object k andar ho, use method kehte hai
// method scope me this ki value object aati hai
// var obj = {
//     name:"faisal",
//     baatKaro: function(){
//         console.log(this);
//     }
// }
// obj.baatKaro()

// note:- in any method, "this" keyword always refer to parent object.

// call => agr tmhare paas koi func hai or koi obj hai or tmhe func chalana hai or bydefault jo this ki value window hai use window na rkh kr point krwana hai kisi obj ki trf.

//example:
// function abcd(){
//     console.log(this);
// }
// var obj = {name:"faisal"}
// abcd.call(obj);

// apply :-
//jab bhi apko ek func chalana hai jisme this ki value kuchh or hai but apko kuchh or krna hai to yaha pe use krte h

// function abcd(val1, val2){
//     console.log(this,val1,val2);
// }
// var obj = {name:"faisal"}
// abcd.apply(obj,[1,2]);

//bind:- ye func ko obj se bind kr dega or naya func dedega but chalaega ni.

//example:
// function abcd(){
//     console.log(this);
// }
// var obj = {name:"faisal"}
// //abcd.bind(obj); // but ye khali bind karega run ni krega
// var bindfunc = abcd.bind(obj);
// bindfunc()


//--- pure function:- wo func jinka value call krne pe change na ho

// function abcd(a,b){
//     return a*b
// }
// var ans1 = abcd(1,2);
// var ans2 = abcd(1,2);

// impure function:- ye same value ni dega call krne me ya global var ki value change kr dega

// function abcd(val){
//     return Math.random()*val
// }
// var ans1 = abcd(2)
// var ans2 = abcd(2)


