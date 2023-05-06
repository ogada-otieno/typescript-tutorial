// basic data types
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var id = 5;
// console.log("ID: " + id);
var myName = "Rodgers";
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arr2 = [1, 2, "john", true, 2.3];
var isValid = true;
var x = null;
x = true;
// tuple --> allows you to specify the exact type inside the array
//  must follow the order specified in the type. in the case below, [1, false, "hello"]
//  will throw an error
var y = [1, "hello", false];
// Tuple Array
var position;
position = [
    [1, "Rodgers"],
    [2, "Bob"],
    [3, "Kim"]
];
// Union --> specifies the type that a variable can hold, and only the specified type. 
// If the type is a string and number, it can only be these two.
var pid;
pid = 2; // pid = "2" is also correct and won't throw an exception
// Enum  --> allows to define a set of named constants and are native to typescript. 
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 1] = "Up";
    Direction2[Direction2["Down"] = 2] = "Down";
    Direction2[Direction2["Left"] = 3] = "Left";
    Direction2[Direction2["Right"] = 4] = "Right";
})(Direction2 || (Direction2 = {}));
var Direction3;
(function (Direction3) {
    Direction3["Up"] = "Up";
    Direction3["Down"] = "Down";
    Direction3["Left"] = "Left";
    Direction3["Right"] = "Right";
})(Direction3 || (Direction3 = {}));
var user = {
    id: 1,
    name: "Rodgers"
};
// Assertions
// used when we want to assert that a variable type should be treated as a different type
// for instance:
var cid = 1; // ideally, the type should be anything
// but when we declare another variable and assign it the value of cid, 
// we can specify that we only want it to be of a certain type (e.g a number) like so.
// consequently, cid can be passed as any type but when used as customerId, it should only be a number
var customerId = cid; // alternatively written as let customerId = <number>cid
// FUNCTIONS
// it's important to specify the type of your parameters as well as the type of the return value like so:
function addNumber(a, b) {
    return a + b;
}
var user1 = {
    id: 1,
    name: "Rodgers"
};
var add = function (x, y) { return x + y; };
var subtract = function (x, y) { return x - y; };
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    Person.prototype.register = function () {
        return "".concat(this.name, " is now registed with ID #").concat(this.id, ".");
    };
    return Person;
}());
var rodgers = new Person(1, "Rodgers Ogada");
var jade = new Person(2, "Jade Martins");
// console.log(rodgers, jade);
// console.log(jade.register());
// subclasses
//  --> it's possible to extend classes using the "extends" keyword
//  --> the Person class can be extended into the Employee class like so:
//  --> all the properties of Person are passed into Employee and this is made simpler user the "super" keyword.
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, position) {
        var _this = _super.call(this, id, name) || this;
        _this.position = position;
        return _this;
    }
    return Employee;
}(Person));
var employee = new Employee(3, "Sankara", "Genius");
// console.log(employee.register());
// console.log(employee.position);
// GENERICS: 
// used to build reusable components
// getArray() will be reused in building arrays
// "T" is a special case placeholder that is useful in specifying the type of the array as well as the type of the return value
function getArray(items) {
    return new Array().concat(items);
}
var numArr = getArray([1, 2, 3]);
var strArr = getArray(["one", "two", "three"]);
// strArr.push(4) => throws an exception
// numArr.push("four") => throws an exception
// NOTE FOR REACTjs
// --> npx create-react-app . --template typescript
// 
