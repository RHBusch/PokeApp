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
    add: add,
  };

})();

/*Creating a loop to scan the pokemon list above and feed data for output.
The code below will scan the array for all items less than the
length of the array (5 items) starting at 0. */


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

//Using a foreach loop to iterate over my pokemonList2 array 10/07/21

pokemonRepository.getAll().forEach(function(getPokemonData)
{console.log('Name: ' + getPokemonData.name +', Height: ' + getPokemonData.height
+ ', Type(s): ' + getPokemonData.types)});
