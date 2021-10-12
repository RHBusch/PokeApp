
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

function addListItem (pokemon){
  let pokemonListScript = document.querySelector('.pokemonList');

  let listItem = document.createElement('li');

  let pokeButton = document.createElement('button');
  pokeButton.innerText = pokemon.name

  pokeButton.classList.add('my-poke-button')
  listItem.appendChild(pokeButton);
  pokemonListScript.appendChild(listItem);
}

function getAll() {return pokemonList};

function add(pokemonNewItem){
  typeof pokemonNewItem ==='object'?
  pokemonList.push(pokemonNewItem) :

  console.log ('Can\'t add a non-object')
};

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
    addListItem: addListItem,
  };

})();


pokemonRepository.getAll().forEach(function (pokemon) {
 pokemonRepository.addListItem(pokemon);
  });
