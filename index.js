// let a:number =5;
// console.log(5);
//  let fullName : string = "jack";
//   fullName = "john";
//   let Num : number ;
//   Num = 1;
//   const Names : string[] =[]
//   Names.push("hi");
//   function sum (a:number,b:number) : number {
//      return a+b;
//   }
// Tuples
//   let Address : [number, string , number];
// Address = [123,"john",1234];
// Objects 
// let Person : {name: string};
// Person = {name: "John"};
// let AnotherPerson : {name:string,age?:number};
// AnotherPerson = {name:"john", age:28};
// AnotherPerson = {name:"John"};
// Functions 
// Hameesha require parameter phely hoga bad mein optional hoga
// function add(a: string, b?:string){
//     return b? a+b : a;
// }
// console.log(Add("1","2"));
// console.log(Add("1",));
// //Interface
// interface Person{
//     name: string;
//     id?:number;
//     age:number;
// }
// let p :Person;
// p ={name: 'Bisma',age:18,id:146};
// p ={name:'Bisma',age:18};
// interface student{
//     name : string;
//     age:number;
//     rollNum:number;
// }
// let p1 : student | Person;  //Union
// p1 = {name:'Bisma',age:18,id:146};
// p1 = {name:'Bisma',age:18};
// p1 = {name:'Bisma',age:18,rollNum:17,id:146}
// p1 = {name:'Bisma',age:18,rollNum:17}
// //Intersection
// // sari require properties hona zaruri hai optioanl ho na ho 
// let p2  : student & Person;
// p2 = {name:'Bisma',age:18,rollNum:17,id:146}
// p2 = {name:'Bisma',age:18,rollNum:17}
// // Type alias
// type count = string | number ;
// let c : count ;
// c = 1;
// c= 'jack'
// //c= false; incorrect
// type X = string & number ; //never 
// const n:[]= []
// n.push("hi") incorrect never array
// n.push(1); incoreect
// Class
var Car = /** @class */ (function () {
    function Car(brand) {
        this.brand = brand;
    }
    Car.prototype.getBrand = function () {
        console.log(this.brand);
    };
    return Car;
}());
var c1 = new Car('Audi');
c1.getBrand();
// In Typescript
var CarX = /** @class */ (function () {
    function CarX(brand) {
        this.brand = brand;
    }
    CarX.prototype.getBrand = function () {
        console.log(this.brand);
    };
    return CarX;
}());
var c2 = new CarX('BMW');
c2.getBrand();
console.log(c2.brand);
// private
var CarY = /** @class */ (function () {
    function CarY(brand) {
        this.brand = brand;
    }
    CarY.prototype.getBrand = function () {
        console.log(this.brand);
    };
    return CarY;
}());
var c3 = new CarY('Mehran');
c3.getBrand();
// console.log(c3.brand) private property sehy access nhi hoti
// Protected
var CarZ = /** @class */ (function () {
    function CarZ(brand) {
        this.brand = brand;
    }
    CarZ.prototype.getBrand = function () {
        console.log(this.brand);
    };
    return CarZ;
}());
var c4 = new CarZ('Merc');
c4.getBrand();
// 2 Interfaces bhi implements kiye ja sakhty hain
var CarC = /** @class */ (function () {
    function CarC(brand, model, release) {
        this.brand = brand;
        this.model = model;
        this.release = release;
    }
    return CarC;
}());
// Generics
function gen(a, b) {
    return [a, b];
}
console.log(gen('1', '2'));
console.log(gen(1, 2));
console.log(gen([1], [2]));
