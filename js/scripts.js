//Creating IIFE
let pokemonRepository = (function() {

//Creating array of Pokemon to iterate over
let pokemonList= [];

let apiUrl= 'https://pokeapi.co/api/v2/pokemon/?limit=150';

//Code below manipulates DOM creating a new pokemon list for index.html
//Selecting the class pokemonList from the ul in the index.

//Building search function
let searchForm = document.querySelector('#searchForm');
searchForm.addEventListener('keyup',(e) => {
  let searchString = e.target.value;
  let filteredPokemon = pokemonList.filter(character =>{
    return character.name.includes(searchString)
  })
  console.log(filteredPokemon);
  //showModal(filteredPokemon);
  //showDetails(filteredPokemon);
})

function addListItem (pokemon){
  let pokemonListScript = document.querySelector('.pokemonList');

//Creating a list item as part of the unordered list selected above.
  let listItem = document.createElement('li');
  listItem.classList.add('list-group-item');//Using JS to add this Bootstrap class

//Creating a button for each list item and assigning that button the innerText of the pokemon name.
  let pokeButton =
  document.createElement('button');
  pokeButton.innerText = pokemon.name;
  pokeButton.classList.add('btn');
  pokeButton.classList.add('btn-outline-dark')
  pokeButton.classList.add('btn-active');
  pokeButton.setAttribute('data-toggle', 'modal');
  pokeButton.setAttribute('data-target', '#modal-container');

//Calling the eventListenerButton function to add an event listener for button clicks.
  eventListenerButton(pokeButton, pokemon)

//Creating a CSS class for the button referenced above to add styling.
//  pokeButton.classList.add('my-poke-button');

//Adding the ListItem as the parent of the pokeButton.
  listItem.appendChild(pokeButton);

//Adding the UL as the parent of the list.
  pokemonListScript.appendChild(listItem);
  }

function eventListenerButton (pokeButton,pokemon){
    pokeButton.addEventListener('click',function(){showDetails(pokemon)})
    };

function loadList (){
  return fetch(apiUrl).then(function(response){
    return response.json();
  }).then (function(json){
    json.results.forEach (function(item){ //Returning promised data
      let pokemon = {
        name: item.name,
        detailsUrl: item.url
      };
        add(pokemon);
      });
    }).catch(function (e){  //If promise is rejected..
      console.error(e);
    })
      }
  function loadDetails(item){
    let url = item.detailsUrl;
    return fetch(url).then(function(response){
      return response.json();
    }).then(function(details){   //The data the promise will return.
      item.imageUrlFront = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
      item.weight = details.weight;
      item.habitat = details.habitat;
    }).catch(function(e){ // indicates what will happen if the promise is rejected
    console.error(e);
    });
  }

function showDetails (pokemon){
  loadDetails(pokemon).then(function(){showModal(pokemon)
  })};
function showModal(pokemon){
  let modalHeader = $('.modal-header');
  let modalTitle = $('.modal-title');
  let modalBody = $('.modal-body');

  modalTitle.empty();
  modalBody.empty();

  let nameElement =$('<h1>' + pokemon.name + '</h1>');
  let heightElement = $('<p>' +'Pokemon Height: ' + pokemon.height + '</p>');
  let weightElement = $('<p>' +'Pokemon Weight: ' + pokemon.weight + '</p>');
//Creating array and calling types from API
  let pokeTypesArray = [];
  pokemon.types.forEach(pokemon => {
    let types = pokemon.type.name;
    pokeTypesArray.push(types)})
    let typesString = pokeTypesArray.join(' & ');
    let typesElement = (`Pokemon Type(s): ${typesString}`);
//creating array and calling habitats from API
/*  let pokeHabitatsArray = [];
  pokemon.habitat.forEach(pokemon => {
    let habitats = pokemon.habitat.name;
    pokeHabitatsArray.push(habitats)})
    let habitatsString = pokeHabitatsArray.join ( ' & ');
    let habitatsElement = (`Where to find this pokemon: ${habitatsString}`);*/

  let imgElementFront = $('<img class =".modal-img" style="width:50%">');
  imgElementFront.attr('src', pokemon.imageUrlFront);
  console.log(pokemon.types);

  modalTitle.append(nameElement);
  modalBody.append(heightElement);
  modalBody.append(weightElement);
  modalBody.append(typesElement);
  //modalBody.append(habitatsElement);
  modalBody.append(imgElementFront);
}

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
