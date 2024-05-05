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
// new => jab bbhi new lagta hai hmesha ek blan object apne man me bana lo.

