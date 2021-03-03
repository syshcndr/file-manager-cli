// console.log("Hello Everyone:)");
//  return undefined

// Java -> variable is declared with a type int (statically typed language) 
// int a;
// JS -> variable is declared;
// JS primitives -> number,string,boolean, null ,undefined;
// let a;
// a = 10;
// a = 10.1;
// a = "i am string";
// a = 'i am also a string';
// a = true;
// console.log("value inside a is",a);
// JS ->10 days (Brenden Eich)-> Java syntax

// let number = 24;
// let flag = true;
// for (let i = 2; i * i <= number; i++) {
//     if (number % i == 0) {
//         flag = false;
//         break
//     }
// }
// if (flag == true) {
//     console.log(number, "is prime");
// } else {
//     console.log(number, "is not prime");
// }

// Non primitives-> functions,arrays,objects
// function sayHi(param) {
//     console.log("sayHi was called");
//     console.log("value inside param is ", param);
//     let rVal =Math.random()>0.5?"good work":false;
//     return rVal;
// }
// sayHi("Hello");
// let rVal = sayHi(10);
// console.log("value inside rVal ", rVal);
// rVal=sayHi([10, 20, 30, 40]);
// console.log("value inside rVal ", rVal);
// param is dummy parameter 
// function sayHi(param,param1) {
//     console.log(arguments);
//     console.log("value inside param is ", param,param1);
// }
// function def 
function sayHi() {
    console.log("I am fake");
}
// function call
// let rVal = sayHi();
// console.log("value inside rVal ", rVal);
// sayHi(10);
// sayHi(10, 20);
// **************Arrays***************
// array is a collection of homogeneous data types
// int[] arr=[10,20,30];
// int[] arr=new int[10];
// array is a collection of anything  
let arr = [
    1,
    1.1,
    true,
    function sayHi() {
        console.log("function inside an array");
        return "val returned from a array";
    },
    null,
    [1, 2, 3, 4, 5, 6]
];
let slicedArr = arr.slice(2, 5);
console.log("sliced Arr:", slicedArr);
console.log("original Arr:", arr);
//  splice-> starting index ,delete count
let delELemArr=arr.splice(2, 10);
console.log("del Elem Arr",delELemArr);
console.log("original Arr:", arr);
// console.log(arr);
// console.log(arr[2]);
// console.log(arr[arr.length - 1]);
// console.log(arr[arr.length - 1][3]);
// console.log(arr[3]);
// arr[3]();
// console.log(arr[3]());
// addLast -> push ,removeLast-> pop
// addFirst-> unshift, removeFirst -> shift
// Java 
// class -> architecture->blue print 
// object -> actual house-> instance
// JS -> optional
// 
// classical oops
// class Avenger {
//     constructor(name, lastName, age) {
//         this.name = name;
//     }
// }
// object
// let cap = new Avenger();
// console.log(obj);
// object is a key: value pair
// object  
// prototypal oops
// let obj = {
//     name: "Steve",
//     lastName: "Rogers",
//     age: 35,
//     isAvenger: true,
//     movies: ["civil war", "first Avengers", "Avenger"],
//     address: {
//         city: "Manhatten",
//         state: "New York"
//     },
//     sayHi: function blessings() {
//         console.log("cap say's Hi");
//         return "cap send blessings";
//     }
// }

// GET 
// using .operator
// console.log("caption is currently Avenger?",obj.isAvenger);
// console.log("caption is lives in",obj.address.city);
// console.log("My fav movie is ",obj.movies[2]);
// console.log(obj.sayHi());
// console.log(obj.sayHi);
// Get-> [] operator
// let prop = "age";
// let age = "name";


// console.log("age of cap ", obj[prop]);
// 
// console.log("age of cap ", obj[age]);
// literally match
// console.log("age of cap ", obj.age);

// console.log("age of cap ", obj.abc);
// let outer="address";
// let inner="city"
// console.log(obj[outer][inner]);

// loop
// for (let key in obj) {
//     // console.log("key ", key, "value ", obj[key]);
//     console.log("key ", key, "value ", obj.key);
// }
// SET ,UPDATE, DELETE
// console.log(obj);
// obj.friends=["tony","bruce","peter"];
// obj.isAvenger=false;
// delete obj.movies
// console.log(obj);