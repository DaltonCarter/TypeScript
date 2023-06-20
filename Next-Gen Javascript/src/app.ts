/* 
My Notes:
From what I can tell this is going to be largely a refresher module, covering basic javascript features I already know. I opted to do this one anyway because revision 
literally cannot hurt my efforts only improve them.

let: Used to define something with a fluid value. I've used it for Variables, objects, and arrays.
const: Used to define something with a static value. Variables, objects, arrays, and functions. (Because the function itself will not be changed. Only the parameters which have a fluid value by default.)

Both of these have a wider scope of use than 'var' which has function and global scope

let and const also have Block scope which allows you to define variables in a block of code:
I.E
{
    const blargHonk = honkBlarg;
    let blarg = honk;
}
and the variable(s) will only be accessable in that block of code. Instead of being registered globally as it would if you had used var.



Arrow functions:
set up:
const functionName = (parameters,go,here) => {
    code...
}

if you only have a single expression you do not have to include a return OR the curly braces
single expression arrow functions will automatically return the result.

also in vanilla JS if your arrow function only has one parameter you do not ned to inclose it in ().
if it has NO parameters you do need to include the empty ()

if you only have a single parameter you CAN define the data type to the function, it's not advisable since it is more code,
but when working with event listeners as an example it can be useful/nessicary.

you can set default values in the type I.E

const thing = (a:number, b: number = 5) => a + b

When setting defaults you have to start from the right and move left. Because when you are running the script it will use the provided values from left to right so if you
were to give "a" the default value and then try to run the function only providing 10 for the remaining value it would not work. it would try to put the 10 into the a 
parameter, and the have nothing for he b parameter thus throwing an error.

*/


// const userName = 'Stark';
// userName = 'Cylus Stark';

// let age = 30;
// age = 31

// if (age > 20) {
//     let isOld = true;
// }
// console.log(isOld)

// function add(a: number, b: number) {
// let result;
// result = a + b;
// return result;
// }

// console.log(result)

// const add = (a: number, b: number) => {
// return a + b;
// }

// console.log(add(2,5));

const printOutput = (output: string | number) => console.log(output);

// printOutput(add(5, 2));

const button = document.querySelector('button');

if (button) {
    button.addEventListener('click', event => {console.log(event)} );
}


const hobbies = ['Gaming', 'Wolves'];
const activeHobbies = ['Sword Play'];

activeHobbies.push(...hobbies);

const person = {
    firstName: 'Stark',
    age: 30
};

const copiedPerson = {...person};


const add = (...numbers: number[]) => {
    return numbers.reduce((currentRes, currentVal) => {
        return currentRes + currentVal;
    }, 0);
};

const addedNumbers = add(5, 20, 100, 35, 60, 1, 8);

const [hobby1, hobby2, ...junk] = hobbies;

const { firstName: userName, age} = person;