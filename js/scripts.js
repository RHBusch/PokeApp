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

for (let i=0; i < pokemonList.length; i++){
   let heightBigNote = 'Earth trembles... That\'s a BIG      pokemon!';

   let pokemonName = pokemonList[i].name;
   let pokemonHeight = pokemonList[i].height;
   let heightText;
     if(pokemonHeight > 1.6){heightText= '---EARTH TREMBLES, that\'s a big pokemon!'};
   let pokemonTypes = pokemonList[i].types;
   let psychicText;
     if(pokemonTypes == 'psychic'){psychicText = '---psychic pokemon are very rare!'};

     {document.write(` <br><br> Pokemon Name: ${pokemonName}
     <br> Height: ${pokemonHeight}
     ${heightText || ''}
     <br> Type(s): ${pokemonTypes} ${psychicText || ''}
     `)
     }
     }
