/*
My Notes:
Once again this is going to be more like review, however this does come with a brief overview of Object oriented Programming (OOP)

Object Oriented Programming (OOP):

You work with (real-life) entities in your code. (As far as that is possible)

for example if I was building an online store:

Product List                              ------->     Product                                        ------->     Shopping Cart
                                          |                                                          |
Renders a list of products, --------------|           Renders details about a product  --------------|             Renders cart products and
which were fetched from a                             and allows addition to a cart                                total and allows user to
server (database)                                                                                                  order them.

Object holds rendering +                              Object holds rendering + cart                                Object holds rendering +
fetching logic                                        adding logic.                                                ordering (server Communication)
                                                                                                                   logic.



Looking at it like this is one way to break down the project into logical steps. It also allows you to see how these objects(or group of objects) are
related.

Classes/Instances:

Objects are what we work with in the code, it's a complex data type that can hold whatever information you need it to ( As an example In my Game the character object that is used holds
    Name: string,
    Job: string,
    level: number,
    Current Exp: Number,
    Exp to next level: number,
    hp: number,
    mp: number,
    atk: number,
    def: number,
    mat: number,
    mdf: number,
    agi: number,
    skills: array[strings],
    magic: array[strings],
    Shield Slot: {Object},
    Helm Slot: {Object},
    Armor Slot: {Object},
    Accessory Slot: {Object}
    
    And in addition, when the save data object is created it condenses the above and more into a single object. Very robust and versitile.
    ).

Classes however are blue prints for objects, they allow us to define (In general) what the object should look like and contain so that we can easily and rapidly
reproduce objects.

Objects made this way are called instances of classes ( = based on classes)


The, THIS keyword allows you to directly reference what exists in the class when it runs. allowing you to console log the specific information for the new object being created.




private and public are properties you can place before entries in a class to determine if you can directly effect the values of the object keys.
setting it to private forces you to use only the method included in the class.
also these properties can be used on methods as well

Public is the default, and not nessicary to use.

Protected is a property that allows classes that extend the base class to inherit the property tagged with this, while also preventing it from being modified outside of the class methods.

the read-only property is used to make it so that a value doesn't change.

Getters and setters are a way of encapsulating and adding more complex run time logic when adding to, or accessing information in classes

Static allows you to set a method essentially to work like Math does where you can just use it with out the preamble.
it can only be accessed in the static instance

abstract forces inherited classes to inherit the method in question
it can also be used on properties.

DO NOT make an abstract with a concrete value, you will define that in the extended class.

Singleton is something that makes sure that you have only a single instance (or one object based on a class)

you accomplish this by making a constructor private, and then making a private static method to check if the instance exists, and if now create the new instance.

*/

class Department {
    // private id: string;
    // private name: string;
    protected employees: string[] = [];

    constructor(private readonly id: string, public name: string) {
        //this.id = id
        // this.name = n;
        
    }

    static createEmployee(name: string) {
        return {name: name}
    }

    describe(this: Department) {
        console.log(`Department (${this.id}): ${this.name}`); //<----- this is called short hand initialization. it's used to save us some time, and space.
    }

    addEmployee(employee:string) {
        this.employees.push(employee);
    }
    
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const honk = new Department('d1', 'Blaarg');

honk.addEmployee("Church");
honk.addEmployee("Tucker");

const employee1 = Department.createEmployee('Sarge')
console.log(employee1)

// honk.employees[2] == "Caboose";

honk.describe();
honk.printEmployeeInformation();

class ITDepartment extends Department{
    admins: string[];
    constructor(id: string, admins: string[]){
        super(id, 'IT');
        this.admins = admins;
    }
}

const blaarg = new ITDepartment('d2', ['Shizno'])

class AccountingDepartment extends Department{
    private lastReport: string;

    get mostRecentReport() {
        if (this.lastReport){
            return this.lastReport 
        }
       throw new Error('No report found.')
    }

    set mostRecentReport(value: string) {
        if (!value){
            throw new Error('Please pass in a valid value!')
        }
        this.addReport(value)
    }

   constructor(id: string, private reports: string[]){
        super(id, 'Accounting');
        this.lastReport = reports[0]
    }

    addEmployee(name:string){
        if(name ==='Griff') {
            return;
        }
        this.employees.push(name)
    }

    addReport (text: string) {
        this.reports.push(text)
        this.lastReport = text
    }

    printReports() {
        console.log(this.reports)
    }
}

const blaargHonk = new AccountingDepartment('d3', [])

console.log(blaargHonk.mostRecentReport)

blaargHonk.addReport('Honk, blaarg, honk-honk, SHIZNO-BLAARG!')

console.log(blaargHonk.mostRecentReport)

blaargHonk.printReports()

blaargHonk.addEmployee('Griff')
blaargHonk.addEmployee('Simmons')

