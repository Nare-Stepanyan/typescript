var oldCivic = {
    name: 'Civic',
    year: 2000,
    broken: true,
    summary: function () {
        return "Name: " + this.name;
    }
};
var printVehicle = function (vehicle) {
    console.log("Name: " + vehicle.name + "\n                Year: " + vehicle.year + "\n                Broken: " + vehicle.broken);
};
var printVehicle1 = function (vehicle) {
    console.log("Name: " + vehicle.name + "\n                Year: " + vehicle.year + "\n                Broken: " + vehicle.broken);
};
printVehicle(oldCivic);
printVehicle1(oldCivic);
