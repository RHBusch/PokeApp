//Establishing IIFE for pokemonList @ pokemonRepository

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

//Establishing two functions:
//getAll to return all items in the pokemonList
//add to add new items to the array in the future

function getAll() {return pokemonList};


function add(pokemonNewItem){
  if(typeof pokemonNewItem === 'object')
  pokemonList.push(pokemonNewItem)
  else{console.log('Can\'t add a non-object')}
};

//confirms any new item being added to the array has a name, height, and types for keys

function checkKeys(pokemonNewItem){
  if(Object.keys(pokemonNewItem).includes('name') &&
  Object.keys(pokemonNewItem).includes('height') &&
  Object.keys(pokemonNewItem).includes('types'))
  {console.log('Okay to add - Pokemon has all included keys')}
  else {console.log('Cannot add Pokemon- missing keys')}
};


 return {
    getAll: getAll,
    add: add,
  };

})();

// Creating a .forEach loop for visual data ouput via document.write

pokemonRepository.getAll().forEach(function(writePokemonData){

//Assigning variables for my template literal
   let pokemonName = writePokemonData.name;
   let pokemonHeight = writePokemonData.height;
/*Creating a conditional variable for my template literal heightText and psychic text willd depend on the if statements that follow */

   let heightText;
     if(pokemonHeight > 1.6){heightText= '- EARTH TREMBLES, that\'s a big pokemon!'};
   let pokemonTypes = writePokemonData.types;
   let psychicText;
     if(pokemonTypes == 'psychic'){psychicText = '- psychic pokemon are very rare!'};

//template literal
     {document.write(`Pokemon Name: ${pokemonName}
     <br> Height: ${pokemonHeight}
     ${heightText || ''}
     <br> Type(s): ${pokemonTypes} ${psychicText || ''}<br><br>
     `)
     }
     })

//Using a foreach loop for data output via console.log

pokemonRepository.getAll().forEach(function(getPokemonData)
{console.log('Name: ' + getPokemonData.name +', Height: ' + getPokemonData.height
+ ', Type(s): ' + getPokemonData.types)});

//Adding a fictitious pokemon to test 'add' function
pokemonRepository.add({name:'Buddy',
 height:0.9,
 types:['land']
})
//Confirming the 'add' function works
console.log(pokemonRepository.getAll())

// Testing search function
function searchFor(pokemon){return pokemonName ==='Hitmonlee';
}
console.log(pokemonRepository.getAll().find(searchFor));
