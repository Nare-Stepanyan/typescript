const apples:number = 5;
let speed: string = "fast";
let hasName: boolean = true;
let nothing: null = null;
let nothingMuch: undefined = undefined;

// built in objects

let now: Date = new Date();

console.log(now);

// Array 

let colors: string[] = ["red", "blue"];
let numbers: number[] = [1, 3,56];
let truths: boolean[]=[true, false, false];

// Classes

class Car {

}

let car:Car = new Car();

 // object literal 

let point:{x:number, y:number} = {
    x: 2,
    y:10,
}

// functions
const logNumber: (i:number)=> void = (i:number)=>{
    console.log(i);
}

let func : (i:number)=>void = (i:number)=>{
    console.log(i);
}

// When to use annotations

// 1) Function that return the 'any' type

const json = '{"x": 2, "y": 10}';
const cordinates = JSON.parse(json);

console.log(cordinates);

// 2) When we declare a variable on one line and initialize it later 

let words =["red", "blue","green"];
let foundWord:boolean;

 for(let i =0; i < words.length; i++){
    if(words[i] === "green"){
        foundWord = true;
    }
}

// 3) Variable whose type cannot be inferred correctly 

let nums = [-10,4,-5];
let numberAboveZero: boolean | number = false;

for(let i =0; i < nums.length; i++){
    if(nums[i]>0){
        numberAboveZero = nums[i];
    }
}