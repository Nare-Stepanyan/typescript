class Vehicle {
    constructor(public color: string){
        
    }
    drive(): void {
        console.log('chugga chugga');
    }
    honk(): void {
        console.log('beep');
    }
}

class Car extends Vehicle {
    constructor(public wheels: number, color: string){
        super("color");
    }
    private drive1():void {
        console.log("wroom");
    }
    startDrivingProcess(){
      this.drive1();
    }
}

const car = new Car(5,'red');
car.startDrivingProcess();
car.honk();
const vehicle = new Vehicle('orange');
vehicle.drive();
vehicle.honk();
console.log(vehicle.color);
