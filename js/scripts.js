//Creating IIFE
let pokemonRepository = (function() {
//Creating array of Pokemon to iterate over
let pokemonList= [];
let apiUrl= 'https://pokeapi.co/api/v2/pokemon/?limit=150';
//Code below manipulates DOM creating a new pokemon list for index.html
//Selecting the class pokemonList from the ul in the index.
function addListItem (pokemon){
  let pokemonListScript = document.querySelector('.pokemonList');
//Creating a list item as part of the unordered list selected above.


  let listItem = document.createElement('li');
//Creating a button for each list item and assigning that button the innerText of the pokemon name.
  let pokeButton = document.createElement('button');
  pokeButton.innerText = pokemon.name;
//Calling the eventListenerButton function to add an event listener for button clicks.
  eventListenerButton(pokeButton, pokemon)
//Creating a CSS class for the button referenced above to add styling.
  pokeButton.classList.add('my-poke-button');
//Adding the ListItem as the parent of the pokeButton.
  listItem.appendChild(pokeButton);
//Adding the UL as the parent of the list.
  pokemonListScript.appendChild(listItem);
  pokeButton.addEventListener("click", function(event){showDetails(pokemon)})
}
/*Creating a function with parameters for pokeButton and pokemon that creates
an event listener for clicks and then calls the details function to
log the pokemon name in the console that was clicked.*/


  function eventListenerButton (pokeButton, pokemon){
    pokeButton.addEventListener('click',function(){
      showDetails(pokemon)})
    };
/*Logging the name of the pokemon in the console - setting up for calling
showDetails as part of a button click.*/

function showDetails (pokemon){
  loadDetails(pokemon).then(function(){console.log(pokemon)})
}
//Creating a function that calls the pokemonList.
function getAll() {return pokemonList};
//Creating a function that adds a new pokemon to the list only if the 'item' is an object
function add(pokemonNewItem){
  typeof pokemonNewItem ==='object'?
  pokemonList.push(pokemonNewItem) :
//If the item trying to be added above is not an object, the message below will log in the console.
  console.log ('Can\'t add a non-object')
};
/* A function designed to check if an item being added to the pokemon list has all the
required keys. If it has all the keys the console will log the correct message */
function checkKeys(pokemonNewItem){
  if(Object.keys(pokemonNewItem).includes('name') &&
  Object.keys(pokemonNewItem).includes('height') &&
  Object.keys(pokemonNewItem).includes('types'))
  {console.log('Okay to add - Pokemon has all included keys')}
  else {console.log('Cannot add Pokemon- missing keys')}
};
//Returning all relevant values for the functions above.
function loadList (){
  return fetch(apiUrl).then(function(response){
    return response.json();
  }).then (function(json){
    json.results.forEach (function(item){
      let pokemon = {
        name: item.name,
        detailsUrl: item.url
      };
        add(pokemon);
      });
    }).catch(function (e){
      console.error(e);
    })
      }
  function loadDetails(item){
    let url = item.detailsUrl;
    return fetch(url).then(function(response){
      return response.json();
    }).then(function(details){
      item.imageUrl = details.sprites.front_default;
      item.height = details.height
      item.types = details.types
    }).catch(function(e){
    console.error(e);
    });

  }


 return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    eventListenerButton: eventListenerButton,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,

  };
})();

//Calling the getAll and addListItem functions in a forEach loop to display the pokemon list.
pokemonRepository.loadList().then (function(){
pokemonRepository.getAll().forEach(function (pokemon) {
 pokemonRepository.addListItem(pokemon)});
  });
