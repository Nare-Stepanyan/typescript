interface  Vehicle1 {
    name: string;
    year: number;
    broken: boolean;
    summary(): string;
}

const oldCivic1 = {
    name: 'Civic',
    year: 2000,
    broken: true,
    summary(): string {
        return `Name: ${this.name}`
    }
};

const printVehicle2 = (vehicle: {name: string; year: number; broken: boolean }): void => {
    console.log(`Name: ${vehicle.name}
                Year: ${vehicle.year}
                Broken: ${vehicle.broken}`);
};

const printVehicle3 = (vehicle: Vehicle1): void => {
    console.log(`Name: ${vehicle.name}
                Year: ${vehicle.year}
                Broken: ${vehicle.broken}`);
};
printVehicle(oldCivic);
printVehicle3(oldCivic1);

