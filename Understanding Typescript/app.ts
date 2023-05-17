/* 
My Notes:

Core types:
Number: Unlike C++ this encompasses ALL number types.
String: This is text using all three types of quotes including `` for temerate literals
Boolean: Obviously this is djust True or false as always. There is no Truthy or Falsy.


You will need to run TSC *Filename*  to compile the Typescript file into a JS file so that the app can run.

Typescripts type system only helps in development. It adds an extra sanity check, and helps us debug, and prevent bugs.

*/

console.log('Your code goes here...')


function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    // if (typeof n1 !== 'number' || typeof n2 !== 'number'){
    //     throw new Error('Incorrect Input!');
    // }
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }else{
    return n1 + n2;
    }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';
add(number1, number2, printResult, resultPhrase);

