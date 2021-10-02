// Establishing array for pokemonList
let pokemonList=[
//Building a list of multiple pokemon objects with ordered attributes and key-values).
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
for (let i=0; i < pokemonList.length; i++)
{document.write(' '+ pokemonList[i].name+ ' ' + ' type ='+ pokemonList[i].types)};


for (let i=0; i < pokemonList.length; i++)
if (pokemonList[i].types = 'psychic');
{document.write(' ***That\'s a rare pokemon!***')}
