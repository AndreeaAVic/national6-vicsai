console.log('JavaScript ES6');

// by default JS aloca memorie si apoi incepe sa ruleze programul
// in cazul lui 'var', exista deja pt ca a fost creat la pasul precedent; 'var' produce efectul de 'hoisting'
// chiar daca 'var a' este declarata si i se atribuie o valoare mai jos (ca linie) decat console.log(a), JS va aloca intai spatiul de
// memorie pt 'a' si apoi va rula codul (console.log)

console.log(a);
var a = 6;
a = 7;
console.log(a);

// console.log(b);
let b = 6;
b = 7;

let c = 'a sentence';
console.log(c); //output: a sentence

if(true) {
    let c = 'a word'; //cand punem 'let' declaram variabila
    console.log(c); //output: a word (pt ca e declarat 'c'-ul in interiorul blocului de cod, deci doar aici va avea valoarea 'a word')
}
console.log(c); //output: a sentence


var x = 'a sentence';
console.log(x); //output: a sentence

if(true) { //this is a code block
    var x = 'a word';
    console.log(x); //output: a word
}
console.log(x); //output: a word (pt ca 'var' nu are scoping, var x din interiorul codului de bloc e aceeasi cu var x din afara)

//'var' se comporta diferit intr-un code block fata de un function block; in function block e comportamentul corect

var y = 1;
function increment() { //this is a function block
    var y = 2;
    y++;
    console.log(y); //output: 3
}
increment();
console.log(y); //output: 1


// function variations

// named function 
function namedFunction(a, b) {
    // instructions
    return;
}

// anonymous functions <=> expression functions
let anonymous = function() {
    console.log('this is anonymous');
}
anonymous();

// es6 arrow functions is an anonymous function
// no parameters 
const noParams = () => {
    console.log('this is arrow, no parameters');
}
noParams();

// with parameters
const withParameters = (a, b) => {
    return a < b;
}
const resultWithParameters = withParameters(3,4);
console.log(resultWithParameters);

// no curly braces
const noCurly = () => 1 + 1;
const resultCurly = noCurly();
console.log(resultCurly);

// no parenthesis when you have a single parameter
const noParenthesis = a => a + 1;
const resultNoParenthesis = noParenthesis(5);
console.log(resultNoParenthesis);

const array = [2,6,3,1,9,6];
const arrayEven = array.filter(element => element % 2 ? false : true);
console.log(arrayEven);

// es5 style for the same problem
const arrayEvenES5 = array.filter(function(element) {
    return element % 2 ? false : true;
});
console.log(arrayEvenES5);

const arrayUneven = array.filter(element => element % 2);
console.log(arrayUneven);


function ourFilter(originalArray, filterFunction) {
    const filteredArray = [];
    
    for(const element of originalArray) {
        if(filterFunction(element)) {
            filteredArray.push(element);
        }
    }

    return filteredArray;
}

function isUneven(element) {
    console.log(element % 2);
    return element % 2;
}

const resultOurUnevenArray = ourFilter(array, isUneven);
console.log(resultOurUnevenArray);