type InputValue = number | string; // This is a Alias/custom type.
type ResultDescription = 'As number' | 'As text'

function combine(input1: InputValue, input2: InputValue, resultType: ResultDescription) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultType === 'As number') {
        result = +input1 + +input2
    }else {
        result = input1.toString() + input2.toString();
    }
    
    return result
}

const combinedAges = combine(200, 5000, 'As number')
console.log(combinedAges)

const combinedStringAges = combine('200', '5000', 'As number')
console.log(combinedStringAges)

const combinednames = combine('Cylus ', 'Stark', 'As text')
console.log(combinednames)



/* 
My Notes:

Type aliases can be used to "create" your own types. You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type.

For example:

    type User = { name: string; age: number };
    const u1: User = { name: 'Max', age: 30 }; // this works!

This allows you to avoid unnecessary repetition and manage types centrally.

For example, you can simplify this code:

    function greet(user: { name: string; age: number }) {
      console.log('Hi, I am ' + user.name);
    }
     
    function isOlder(user: { name: string; age: number }, checkAge: number) {
      return checkAge > user.age;
    }

To:

    type User = { name: string; age: number };
     
    function greet(user: User) {
      console.log('Hi, I am ' + user.name);
    }
     
    function isOlder(user: User, checkAge: number) {
      return checkAge > user.age;
    }






*/