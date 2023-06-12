/* 
My Notes
The unknown type: is more restrictive than the 'any' type.

The unknown type essentially tells typescript that we have now idea what the input is going to be.
This allows it the flexibility to store whatever is required BUT you cannot use a variable with an unknown type to define a variable with a defined type.

I.E If Userinput is set to unknown, and userName is set to string, you cannot set userName to be equal to userInput directly.
You must use handling to detect the type of value currently stored in user input to determine if it is a string first.

While it is better than any, keep in mind that if you know the type of data expected you should use that first.


The Never type:
This type is used when a function will NEVER return anything.
An infinite loop would also use type never.


*/


let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Stark';

if (typeof userInput === 'string'){
userName = userInput;
}


function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code};
}

generateError('An error has occured!!!', 500);