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

//compare for and for each loops using shorthand functions

let foodList = ['tuna', 'cheese', 'salad'];

document.write('<h3>===for LOOP===</h3>');
for (let i = 0; i < foodList.length; i++) {
  document.write('<p>' + foodList[i] + '</p>');
}

document.write('<h3>===forEach LOOP===</h3>');
foodList.forEach(function (currentItem) {
  document.write('<p>' + currentItem + '</p>');
});





let pokemonRepository = (function() {

let pokemonList=[
{name:'Dewgong',
 height: 1.7,
 types:['ice','water']
},

{name:'Hitmonlee',
 height:1.5,
 types:['fighting']
},

{name:'Goldeen',
 height:0.6,
 types:['water']
},

{name:'Hypno',
 height:1.6,
 types:['psychic']
}
];

function getAll() {return pokemonList};
function add(pokemonNew){pokemonList.push(pokemonNew);
}
 return {
    getAll: getAll,
    add: add
  };

})();

/*Creating a loop to scan the pokemon list above and feed data for output.
The code below will scan the array for all items less than the
length of the array (5 items) starting at 0. */


for(let i=0; i < pokemonRepository.getAll(); i++){

//Assigning variables for my template literal
   let pokemonName = pokemonList[i].name;
   let pokemonHeight = pokemonList[i].height;
/*Creating a conditional variable for my template literal heightText and psychic text willd depend on the if statements that follow */

   let heightText;
     if(pokemonHeight > 1.6){heightText= '- EARTH TREMBLES, that\'s a big pokemon!'};
   let pokemonTypes = pokemonList[i].types;
   let psychicText;
     if(pokemonTypes == 'psychic'){psychicText = '- psychic pokemon are very rare!'};

//template literal
     {document.write(`Pokemon Name: ${pokemonName}
     <br> Height: ${pokemonHeight}
     ${heightText || ''}
     <br> Type(s): ${pokemonTypes} ${psychicText || ''}<br><br>
     `)
     }
     }

//Using a foreach loop to iterate over my pokemonList2 array 10/07/21

pokemonRepository.getAll.forEach()(function(getPokemonData)
{console.log('Name: ' + getPokemonData.name + ', Height: ' + getPokemonData.height
+ ', Type(s): ' + getPokemonData.types)})





//Practicing conversions and variable setting with javascript.
//Setting today's temperature to 293 kelvin
let kelvin = 298
// celsius is 273 degrees less than kelvin
let celsius = kelvin - 273
// running fahrenheit conversion and using the Math.floor object to round down for any decimals
let fahrenheit = Math.floor(celsius*(9/5) + 32)
//Adding newton conversion
let newton = Math.floor(celsius*(33/100))

let fahrenheit = Math.floor(celsius*(9/5) + 32)

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

console.log(`The temperature is ${newton} degrees Newton`);


//setting myAge
let myAge = 28;
//setting the first two years of a dog's life
let earlyYears = 2;

earlyYears *= 10.5;
//Accounting for early years already
laterYears = myAge-=2;

laterYears *= 4;

let myAgeInDogYears = laterYears + earlyYears

console.log(myAgeInDogYears);

let myName ='Ross Busch' .toLowerCase();

console.log(`My name is ${myName}
I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
