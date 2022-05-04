// const hamburger = 5;
// const fries = 0;

// if (hamburger && fries) {
//     console.log('Я сыт');
// }

// console.log((hamburger && fries));

// 
// const hamburger = 3;
// const fries = 3;
// const cola = 0; 
// const nuggets = 2;

// if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
//     console.log('all good');
// } else {
//     console.log('go away');
// }
 
// console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);

console.log(!0);

console.log( NaN || null || !3 || undefined || 5);
 
console.log( NaN || null && !3 && undefined || 5);
 
console.log( 5 === 5 && 3 > 1 || 5);

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!');
// }

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')
}
