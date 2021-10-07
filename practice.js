//An add function: this should add two numbers (parameters) and return the sum.

function add (number1, number2)
{return(number1 + number2)}
let result1 = add(3,4)
console.log(result1)

//A subtract function: this should subtract the second number from the first number and return the difference.

function subtract(number1, number2)
{return(number1 - number2)}
let result2= subtract(100,50)
console.log(result2)

//A multiply function: this should multiply two numbers and return the product.

function multiply(number1, number2, number3)
{return(number1*number2*number3)}
let result3 = multiply(25,3,6)
console.log(result3)

//A divide function: this should divide the first number by the second number and return the quotient; however, if the divisor is equal to zero, the function should return the text “Not Allowed.”

function divide(number1, number2)
{if(number2 === 0){return "not allowed"}
else{return number1/number2}}
let result4 = divide(10,5)
console.log(result4)

//practice forEach loop

let array2= ['dog','cat','turkey'];

array2.forEach(function(item,index,array){
  console.log('Item: ' + item + ' at index: ' + index + ' in the array: ' + array);
})

//compare for and for each loops:

let foodList = ['tuna', 'cheese', 'salad'];

document.write('<h3>===for LOOP===</h3>');
for (let i = 0; i < foodList.length; i++) {
  document.write('<p>' + foodList[i] + '</p>');
}

document.write('<h3>===forEach LOOP===</h3>');
foodList.forEach(function (currentItem) {
  document.write('<p>' + currentItem + '</p>');
});
