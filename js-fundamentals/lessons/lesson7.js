
for (var i = 0; i < 5; i++) {
    console.log("Lesson " + i + ": Loops")
}

cars = ["BMW", "Mercedes", "Audi", "Volkswagen", "Toyota"]

cars.forEach(element => {
     (console.log(element))
});

for (var i = 0; i < cars.length; i++) {
    console.log(cars[i])
    if (cars[i] === "Audi") {
        console.log("Found Audi!")
        break
    }
}

