class CustomerDetails {

    /**
     * This method prints the first name of the customer.
     * @param {*} firstName 
     */
    printFirstName(firstName) {
        console.log("First name: " + firstName);
    }
}

var customerDetails = new CustomerDetails();
customerDetails.printFirstName("John");