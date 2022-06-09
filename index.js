// Write your solution in this file!
var customerName = 'bob';
function window(customerName) {
    return customerName()
}

/*function upperCaseCustomerName(){
    return customerName.toUpperCase()
*/

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase()
}

function setBestCustomer() {
    bestCustomer = 'not bob'
  }

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
  }

const leastFavoriteCustomer = 'Otis'  
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'Glenn'
  }