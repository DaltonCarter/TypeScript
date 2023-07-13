/*
My Notes:

An interface is a discription of the structure of an object.

We create an interface by using the interface keyword which is ONLY in typescipt.
This is NOT used like a blueprint I.E like a class, but instead it is more
of a custom type.

So Interfaces cannot have initial values it simply will not work.
what it has is the 

key: type of value

when working with a method it will have the 

Name(argument: type): return value


You can achieve similar results simply by declareing it as a type however the upside to interfaces is that
an interfaces are only used for objects where a custom type is more flexible, and while that may sound like
a custom type is preferable, keep in mind that and interface is CLEARER more straight forward.

another thing you can do with Interfaces is implement them in a class, and yes you CAN also do this with custom types,
however an interface can function like a contract that a class can implement and then HAS TO adhere to.

you do this by using the keyword implements;

EXAMPLE:
class Digeridoodah implements Macguffin {}

all in all this allows you to lessen the likelyhood of error by making it harder for information to deviate.

you can also implement MORE THAN ONE interface by seperating them with a comma.


Interfaces allow for sharing functionality between classes, that can then add it's own implementaion, while also enforcing a certain structure in the code.

interfaces can also make use of the readonly property.

IT DOES NOT USE any of the others like public or private.

it allows you to tell the code that a value gets set onece, and then cannot be modified afterwards.

You also only have to set it in the interface, once it's there the rest of the code USING that interface will know.

Interfaces can also have inheritances so you can further outline structures.

you might be wondering WHY, well in the event you have classes that need to implement BOTH, or more, in one class, but you only need to implement one of those for another you 
can.

Interfaces can also be used to define the structure of a FUNCTION as well which provides thew same benifits.

the structure looks like this:

interface AddFn {
    (a: number, b: number): number
}


and it allows you to establish an anon function type.


Optional properties:
you can tell a class or interface that a property is optional by adding a ? at the end of the name
like so:
outputName?: string;

you can also mark methods as optional in the same fashion;

myMethod?(){...}

you can also make a parameter using this as well

blaarg(value?: string)

Interfaces DO NOT translate into Javascript. they are for development ONLY once compiling has taken place they are dumped.

*/

interface Named{
    readonly name: string;
    outputName?: string;
}

interface Greetable extends Named {
    
    greet(phrase: string): void;
}

class Person implements Greetable {
    name: string;
    age: number;

    constructor(n: string, a: number) {
        this.name = n
        this.age = a
    }

    greet(phrase: string){
        console.log(phrase + " " + this.name);
    }
}

let user1: Greetable;

user1 = new Person ('Stark', 31);

user1.greet('Adun Toridas -')

interface AddFn {
    (a: number, b: number): number
}

