// ---- sync and async kya hota hai?

// sync matlab kaam ek ke baad dusra hoga, jab tak ek command complete na ho dusra shuru nahi hoga.
/*
task a = 2
task b = 5
task c = 15
task d = 1
*/

// agr upr wale task ko syncronous way me krenge to 23 sec lgega.
// agr upr wale task ko asyncronous way me krenge to 15 sec lgega.

// async matlab saare kaamm ek sath shuru krdo, jiska ans pehle ajae uska jawab dedena.

// kaise pata chalega ki hum sync code likhre hai ya async?

/* setTimeout
setInterval
Promise
fetch
axios
XMLHttpRequest 
*/

// Upr diye mese kuchh bhi use krenge to wo code hai async.

// setTimeout(function(){
//     console.log("first timeout");
// }, 0)

// setTimeout(function(){
//     console.log("2nd timeout");
// }, 0)

// function bataRahaHu() {
//     console.log("Mai jhuta hu");
// }
// bataRahaHu();


//---- async js hai kya?

// kai baar apka final code depended hota hai kisi or k server per, is case me hme ni pta hota ki ans uske server se kb laut kr aega. to hm kya ni krskte is writing syc code, isse nipatne k liye hm log async async code likh dete hai taaki blocking na ho and jab bhi ans aaye hamara ans ke respect me chalne wala code chal jae.

// async code ka main motive hota hai ki un cases me jinme hme ni pata code ka ans kitni der me ayega to jb bhi ans ajae uske ans ke resect me koi perticular code chala dena.

// callback function hmesha async code me ans aane pe chalta hai.


//---- js is not asynchronous

// jo bhi main stack par hota hai wo output krta hai and jo bhi side stack per hota hai wo behind the scenes processing kr skta hai or jb uski rocessing complete ho use main stack me laa kr chalaya ja skta hai.

// main stack => execution

// sync code always move to main stack.
// async moved to side stack.