var customer = {
    name: "Doe",
    firstname: "John",
    cars: ["BMW", "Mercedes", "Audi"]
}

console.log(customer.name);
console.log(customer.firstname);

customer.name = "Smith";
console.log(customer.name);
customer["firstname"] = "Jane";
console.log(customer.firstname);

var car = ["BMW", "Mercedes", "Audi"];  
console.log(car[0]);
console.log(car[1]);
console.log(car[2]);

car[0] = "Volkswagen";
console.log(car[0]);   

console.log(customer.cars[0]);
customer.cars[0] = "Volkswagen";
console.log(customer.cars[0]);
