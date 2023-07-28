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

class Car {
    brand;
    constructor(brand){
        this.brand = brand;
    }
    getBrand(){
        console.log(this.brand);
    }
}
let c1 = new Car('Audi');
c1.getBrand()


// In Typescript
class CarX {
    constructor(public brand){
    }
    getBrand(){
        console.log(this.brand);
    }
}
let c2 = new CarX('BMW');
c2.getBrand()
console.log(c2.brand)
// private
class CarY {
    constructor(private brand){
    }
    getBrand(){
        console.log(this.brand);
    }
}
let c3 = new CarY('Mehran');
c3.getBrand()
// console.log(c3.brand) private property sehy access nhi hoti

// Protected
class CarZ{
    constructor(protected brand){
    }
    getBrand(){
        console.log(this.brand);
    }
}
let c4 = new CarZ('Merc');
c4.getBrand()

// Implements 
interface ICar {
    brand:string;
    model:string;
}
interface ICar2 {
    release: number;
}
 // 2 Interfaces bhi implements kiye ja sakhty hain
class CarC implements ICar ,ICar2 {
    constructor(public brand , public model , public release){

    }
}

// Generics

function gen<T>(a: T, b: T) : T[] {
    return [a,b];
}
console.log(gen<string>('1','2'));
console.log(gen<number>(1,2));
console.log(gen<Array<number>>([1],[2]));

// Data Models

function addUser<T extends {id:string}(user:T){
    return user.id;
}