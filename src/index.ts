// basic data types

let id: number = 5

// console.log("ID: " + id);

let myName: string = "Rodgers"

let arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let arr2: any[] = [1, 2, "john", true, 2.3]

let isValid: boolean = true

let x: any = null

x = true

// tuple --> allows you to specify the exact type inside the array
//  must follow the order specified in the type. in the case below, [1, false, "hello"]
//  will throw an error

const y: [number, string, boolean] = [1, "hello", false]

// Tuple Array

let position: [number, string][]

position = [
    [1, "Rodgers"],
    [2, "Bob"],
    [3, "Kim"]
]

// Union --> specifies the type that a variable can hold, and only the specified type. 
// If the type is a string and number, it can only be these two.

let pid: number | string
pid = 2 // pid = "2" is also correct and won't throw an exception

// Enum  --> allows to define a set of named constants and are native to typescript. 

enum Direction1 {
    Up,
    Down, 
    Left,
    Right
}

enum Direction2 {
    Up = 1,
    Down, 
    Left,
    Right
}

enum Direction3 {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right"
}

// console.log(Direction3.Up);

// Objects
// specify the type of object keys. 
// in this case, the object will have an id that's a number and a name that's a string

type User = {
    id: number,
    name: string
}

let user: User = {
    id: 1,
    name: "Rodgers"
}

// Assertions
// used when we want to assert that a variable type should be treated as a different type
// for instance:

let cid: any = 1 // ideally, the type should be anything

// but when we declare another variable and assign it the value of cid, 
// we can specify that we only want it to be of a certain type (e.g a number) like so.
// consequently, cid can be passed as any type but when used as customerId, it should only be a number
let customerId = cid as number // alternatively written as let customerId = <number>cid

// FUNCTIONS
// it's important to specify the type of your parameters as well as the type of the return value like so:

function addNumber(a:number, b:number): number {
    return a + b;
}

// console.log(addNumber(1, 3));

// INTERFACE --> note that they operate almost similarly to "type" as used in objects to specify key types with a few caveats:
// cannot be used with primitive types and unions
// used with objects
// using the ? makes the key value optional if you want it to be like that. 
// allow for readonly properties --> the id can note be given a new value cos it's readonly. 

interface UserInterface {
    readonly id: number,
    name: string
    age?: number
}

let user1: UserInterface = {
    id: 1,
    name: "Rodgers"
}

// console.log(user);


// can also be used with functions
interface mathFunc {
    (x: number, y: number): number
}

const add: mathFunc = (x: number, y: number) => x + y;
const subtract: mathFunc = (x: number, y: number) => x - y;

// CLASSES 
// --> used to create objects: we can create multiple objects from a single class
//  --> has a constructor: will run whenever an object is instantiated from a class.
// you can pass down interfaces into a class:
// this is done using the "implements" keyword

interface PersonInterface {
    id: number
    name: string
    register(): string
}

class Person implements PersonInterface {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id 
        this.name = name       
    }

    register() {
        return `${this.name} is now registed with ID #${this.id}.`
    }
}

const rodgers  = new Person(1, "Rodgers Ogada")
const jade  = new Person(2, "Jade Martins")

// console.log(rodgers, jade);
// console.log(jade.register());

// subclasses
//  --> it's possible to extend classes using the "extends" keyword
//  --> the Person class can be extended into the Employee class like so:
//  --> all the properties of Person are passed into Employee and this is made simpler user the "super" keyword.
class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
       super(id, name)
       this.position = position
    }
}

const employee  = new Employee(3, "Sankara", "Genius")
// console.log(employee.register());
// console.log(employee.position);

// GENERICS: 
// used to build reusable components
// getArray() will be reused in building arrays
// "T" is a special case placeholder that is useful in specifying the type of the array as well as the type of the return value
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArr = getArray<number>([1, 2, 3])
let strArr = getArray<string>(["one", "two", "three"])
// strArr.push(4) => throws an exception
// numArr.push("four") => throws an exception

// NOTE FOR REACTjs
// --> npx create-react-app . --template typescript
// 
