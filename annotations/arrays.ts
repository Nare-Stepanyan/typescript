const carMakers = ['Volvo', 'Mersedes', 'Toyota'];
const dates = [new Date(),new Date()];

const carsByMake: string[][] = [
    ['f150'],
    ['corolla'],
    ['camaro']
];

// Flexible types 

const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
