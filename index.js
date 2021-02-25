console.log('JavaScript - Async programming');

document.addEventListener('click', onClick);

let counter = 0;
function onClick() {
    console.log('Just a click in the app');
    counter++;
    console.log('counter: ', counter);
}
console.log('counter: ', counter);

// the function is anonymous function
setTimeout(function() {
    console.log('1');
}, 2000);
console.log('2');

// this is similar to
setTimeout(setTimeoutFunction, 2000);

function setTimeoutFunction() {
    console.log('3');
}


console.log('first');
setTimeout(function() {
    console.log('second');
}, 0);
setTimeout(function() {
    console.log('third');
}, 0);
console.log('fourth');
setTimeout(function() {
    console.log('fifth');
}, 1);


setInterval(function() {
    console.log('ping');
}, 1000);