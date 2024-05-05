// - words vs keywords

// -var const let

// const dulha = "lab"
// const dulhan = "labby"

// -hoisting - variable and functions are hoisted which means there declaration is moved on the top of the code

// -types in JS - Primitive & Reference

// -primitive - any value that doesn't have any type of brackets are primitive.

//-reference = [] () {} - aisi koi bhi value jicko copy rne par real coopy ni hota, balki us main value ka reference pass hojata hai , use hm reference value kehte hai, aur jiska copy krne pe real copy ho jae use primitive value kehte hai.

// -Conditionals - if else else-if
// Jab bhi baat agar magar pr aegi, ya fir baat aegi aisa hua to ye kro, waisa ho jae to wo kro.

//-loops - for while
// loop ka matlab repeat
// 1 1 1 1 1 1 1 1 1
// 1 2 3 4 5 6 7 8 9

// -functions - aap kuchh code ko likh kr koi naam de skte ho 
// functions mainly 3 kaam k liye hote hai
//1 - jab apka code ap turant ni chalana chahte future me chalana chahte ho
//2 - jab aap code reuse krna chahte ho
//3 - jab aap code chalana chahte ho har bar with different data

// function chaiBnaoOrPiyo(){
//     console.log("gas on kro");
//     console.log("Patila Chadhao");
//     console.log("Pani, dudh, chae or chini dalo");
//     console.log("cup me nikalo");
//     console.log("Peelo");
// }
// chaiBnaoOrPiyo();

// function abcd(a){ 
// // bracket () ke andr jo hai wo parameter hai
//     console.log(a);
// }
// abcd(155); 
// bracket () ke andr jo ha wo argument hai

// -arguents - real value jo hm dete hai func chlate wqt
// parameter - variable jinme value store hoti hai arguments wali

// -arrays - hm ek var me ek value store kr pate hai pr jb hme ek se zada val store krni ho tb fir use hota hai array ka matlab ki array apko freedom deta hai ek se zda val use krne ki.

// var arr = [1, 2, 3, 4, 5, 6, 7]
// arr.push(8) last me 1 val add krne ko
// arr.pop() last se 1 val hatane ko
// arr.unshift(0) start me 1 val add krne ko
// arr.shift() start se 1 val hatane ko
// arr.splice(2,2) bracket ke andr first me index or 2nd me kitne value hatane hai dete hai

//-objects hai ek bande ki details ko hold krna, in a key val pair.
// ek se zada bnde ki baat ki to hua array, ek bande k baare me saari baat ki to hua object.
//1 - blank obj
// var a = {};

//2 - filled obj
// var a = {
//     age:23,
//     name:"faisal",
//     email:"email@male.com",
//     contact:9191919191, // property hai
//     kuchhbolo:function(){} //method hai
// }
// a.name = "Altaf"