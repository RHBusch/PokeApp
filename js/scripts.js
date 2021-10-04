//Establishing an array for different types of pokemon
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
]

//Creating a loop to scan the pokemon list above and feed data for output.
/* The code below will scan the array for all items less than the
length of the array (5 items) starting at 0.
*/
for (let i=0; i < pokemonList.length; i++){

//Assigning variables for my template literal
   let pokemonName = pokemonList[i].name;
   let pokemonHeight = pokemonList[i].height;
/*Creating a conditional variable for my template literal heightText and psychic text willd
depend on the if statements that follow */
   let heightText;
     if(pokemonHeight > 1.6){heightText= '- EARTH TREMBLES, that\'s a big pokemon!'};
   let pokemonTypes = pokemonList[i].types;
   let psychicText;
     if(pokemonTypes == 'psychic'){psychicText = '- psychic pokemon are very rare!'};
/* The template literal below substitutes complicated strings for the variables assigned
above. The `` are very important. 

*/
     {document.write(`Pokemon Name: ${pokemonName}
     <br> Height: ${pokemonHeight}
     ${heightText || ''}
     <br> Type(s): ${pokemonTypes} ${psychicText || ''}<br><br>
     `)
     }
     }
