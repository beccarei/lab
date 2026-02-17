function helloWorld() {
    console.log("Hello World")
}

helloWorld()
var worldTwo = function () {
    console.log("Hello World Two")
}
worldTwo()

var worldThree = () => {
    console.log("Hello World Three")
}
worldThree()


function printName(name) {
    console.log("Hello " + name)
}
printName("John")

var printNameTwo = function (name) {
    console.log("Hello " + name)
}
printNameTwo("Jane")

var printNameThree = (name) => {
    console.log("Hello " + name)
}
printNameThree("Doe")

function addTwoNumbers(num1, num2) {
    return num1 + num2
}
var sum = addTwoNumbers(5, 10)
console.log(sum)

var addTwoNumbersTwo = function (num1, num2) {
    return num1 + num2
}
var sumTwo = addTwoNumbersTwo(15, 20)
console.log(sumTwo)

var addTwoNumbersThree = (num1, num2) => {
    return num1 + num2
}
var sumThree = addTwoNumbersThree(25, 30)
console.log(sumThree)