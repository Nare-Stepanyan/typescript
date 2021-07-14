interface  Vehicle {
    name: string;
    year: number;
    broken: boolean;
    summary(): string;
}

const oldCivic = {
    name: 'Civic',
    year: 2000,
    broken: true,
    summary(): string {
        return `Name: ${this.name}`
    }
};

const printVehicle = (vehicle: {name: string; year: number; broken: boolean }): void => {
    console.log(`Name: ${vehicle.name}
                Year: ${vehicle.year}
                Broken: ${vehicle.broken}`);
};

const printVehicle1 = (vehicle: Vehicle): void => {
    console.log(`Name: ${vehicle.name}
                Year: ${vehicle.year}
                Broken: ${vehicle.broken}`);
};
printVehicle(oldCivic);
printVehicle1(oldCivic);

