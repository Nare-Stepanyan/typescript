const add =(a: number,b:number): number => {
    return a + b;
}

const subtract = (a:number,b:number):number => {
    return (a - b);
}

console.log(subtract(8,5));

function divide (a:number, b:number):number {
    return a / b;
}

const multiply = function(a:number, b:number):number {
    return a * b;
}

const logger = (message: string): void =>{
    console.log(message);
}

// never means functions will never go to execute the function completely
const throwError = (message: string): never =>{
    throw new Error(message)
}

const throwError1 = (message:string): string=>{
    if(!message){
        throw new Error(message);
    }
    return message;
}

const throwError2 = (message:string): void =>{
    if(!message){
        throw new Error(message);
    }
}

const forecast = {
    date: new Date(),
    weather: 'sunny'
};

const logWeather = (forecast: {date: Date, weather: string}): void =>{
    console.log(forecast.date);
}

// object destructuring

const logWeather1 = ({date, weather}: {date: Date, weather: string}): void =>{
    console.log("2",date);
}
logWeather(forecast);
logWeather1(forecast);