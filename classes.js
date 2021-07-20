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
var Vehicle = /** @class */ (function () {
    function Vehicle(color) {
        this.color = color;
    }
    Vehicle.prototype.drive = function () {
        console.log('chugga chugga');
    };
    Vehicle.prototype.honk = function () {
        console.log('beep');
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car.prototype.drive1 = function () {
        console.log("wroom");
    };
    Car.prototype.startDrivingProcess = function () {
        this.drive1();
    };
    return Car;
}(Vehicle));
var car = new Car('red');
car.startDrivingProcess();
car.honk();
var vehicle = new Vehicle('orange');
vehicle.drive();
vehicle.honk();
console.log(vehicle.color);
