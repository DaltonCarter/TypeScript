/* 
My Notes:

Intersection types: allow us to combine other types.

In the case of objects it combines the object parameters,
in the case of a union type, it combines the types they have in common.


Type Guards: Logic used to determine the handling required for arguments or values with a union type

Example of a type guard using typeof:

function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }

    return a + b;
}

Example of Type Guard using in:

function printEmployeeinformation(emp: UnknownEmployee) {
    console.log( 'Name: ' + emp.name);

    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges)
    }

    if ('startDate' in emp) {
        console.log('Start Date: ' + emp.startDate);
    }
}

Example of Type Guard using instanceof:

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck){
    vehicle.loadCargo(1000);
    }
}

note: you cannot use instance of with interfaces.

So in closing a Type Guard is a term used to describe the logic used in making sure a 
property or method exists before you try to use it, or if you can do something with the 
type before you try to use it.



Discriminated Unions: Despite sounding like a buzz word in todays politics, this is instead a kind of type guard
that is a pattern you can use when working with union types that makes implementing type guards easier,
and is avaliable when working with object types.



Type Casting: is a way to tell typescript what type of HTML element you are trying to manipulate when not directly grabbing the element.

There are two types of typecasting:
1. <HTMLInputElement>document.getElementById('user-input')!
2. document.getElementById('user-input') ! as HTMLInputElement <-----this one is React friendly


You can use either syntax, just be CONSISTANT!

the ! allows us to Typescipt that the expression preceeding it will never yeild NULL.

This is required for some expressions that MIGHT return NULL, if we know that it won't we use the ! to get around it
otherwise if we are unsure we can use the if chack to see if the value is truthy.

the syntax for that is:

if (userinputElement) {
    (userInputElement as HTMLInputElement).value = 'Hi there!';
}



Index Properties: allows us to make flexible code to adapt to multiple use cases, by giving a general expectation of the thing passing through it.
it serves as a placeholder. the value must be a string, number or symbol. You can add other predefined properties, but they must be of the same type as the 
index property.

the syntax is:

interface Blah {
    [prop: string]: string
}



Function Overloads: Is logic that will allow us to account for the different types you might produce when working with union types,
Say if you have a type that can be either a string or a number

you would use this to tell typescript that when both of those happen to be numbers the function result will also be a number and the same for if they are strings.

this will allow you to write code that works with those differing result types, or if you need to manipulate it.




Optional Chaining: the use of multiple ? in the code to allow us to safely determine if something exists when trying to access it. Especially helpful for back end/database requests.
this way if the thing does not exist it simply will not run instead of throwing an error.




Nullish Coalescing: loosely related to optional chaining, this lets us deal with nullish data. 

by using the ?? we tell it to only use the following value IF the preceeding value is null or undefined

*/

//Intersection Types:

type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Stark',
    privileges: ['create-server'],
    startDate: new Date()

};

type Combinable = string | number;
type Numeric = number | boolean

type Universal = Combinable & Numeric;



//Type Guards:

function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }

    return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeinformation(emp: UnknownEmployee) {
    console.log( 'Name: ' + emp.name);

    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges)
    }

    if ('startDate' in emp) {
        console.log('Start Date: ' + emp.startDate);
    }
}

class Car {
    drive() {
        console.log('Driving...')
    }
}

class Truck {
    drive() {
        console.log('Driving a truck...')
    }

    loadCargo(amount: number) {
        console.log('Loading cargo ' + amount)
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck){
    vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);



//Discriminated Unions:

interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | horse;

function moveAnimal (animal: Animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed
            break;
    }
    
    console.log('Moving at speed: ' + speed)
}

moveAnimal({type: 'bird', flyingSpeed: 10})
moveAnimal({type: 'horse', runningSpeed: 25})



//Type Casting:

// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!
const userInputElement = document.getElementById('user-input') ! as HTMLInputElement

userInputElement.value = "BLAARG HONK!";



//Index Properties:

interface ErrorContainer {
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: "Not a valid email",
    username: 'Must start with a capital character!'
}



//Function Overloads:

function add2(a: number, b: number): number;
function add2(a: string, b: string): string;

function add2(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }

    return a + b;
}

const result = add2('Cylus', 'Stark')




//Optional Chaining:

const fetcheduserData = {
    id: 'u1',
    name: 'Stark',
    job: { title: 'Lord', description: 'of wolves.'}
}

console.log(fetcheduserData?.job?.title);



//Nullish Coalescing:

const userInput = '';

// const storedData = userInput || 'DEFAULT'
const storedData = userInput ?? 'DEFAULT'