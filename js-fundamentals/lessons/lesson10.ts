var customerName: string = "John"
var customerLastName: string = "Smith"
var customerAge : number = 30

type Customer = {
    name: string,
    lastName: string,
    active: boolean
}

var firstCustomer: Customer = {
    name: "John",
    lastName: "Smith",
    active: true
}

var secondCustomer: Customer = {
    name: "Jane",
    lastName: "Doe",
    active: false
}

function printCustomer(customer: Customer) {
    console.log(`Customer name: ${customer.name} ${customer.lastName}, active: ${customer.active}`)
}

printCustomer(firstCustomer)
printCustomer(secondCustomer)
