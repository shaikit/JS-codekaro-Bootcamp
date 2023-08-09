// Assignment 3: Array of Objects Operations
// Objective: Practice adding, removing, and updating values in an array of objects.

// 1. Create an empty array called "cars".

let cars = [];

// 2. Add three car objects to the "cars" array. Each car object should have the following properties:
//    - make: "Toyota"
//    - model: "Camry"
//    - year: 2018

cars = [
    {make:"Toyota", model: "Camry", year: 2018 },
    {make:"Maruthi", model: "Alto", year: 2012 },
    {make:"Hyundai", model: "i10", year: 2020 }
]
// 3. Remove the first car object from the "cars" array.

delete cars[0];

// 4. Add a new car object to the "cars" array with the following properties:
//    - make: "Honda"
//    - model: "Civic"
//    - year: 2020

cars.push({make:"Honda", model: "Civic", year: 2020})

// 5. Update the "model" property of the second car object in the array to "Accord".
cars[1].model = "Accord"


// 6. Print the final "cars" array after performing the above operations.

console.log(cars);

// Remember to use console.log() to print the arrays and objects in the console to see the results of each operation.

