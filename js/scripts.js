<script>
  //write your code below here
  //comment out other code blocks if you want to check output of a particular block



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

for (let i=0; i < pokemonList.length; i++){
   let heightBigNote = 'Earth trembles... That\'s a BIG      pokemon!';
   let psychicNote = 'Psychic pokemon are very rare!';

   let pokemonName = pokemonList[i].name;
   let pokemonHeight = pokemonList[i].height;
   let pokemonTypes = pokemonList[i].types;


     {document.write(` <br><br> Pokemon Name: ${pokemonName}
     <br> Height: ${pokemonHeight}
     <br> Type(s): ${pokemonTypes}
     `)
     }
     }
</script>
