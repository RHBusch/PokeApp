//Creating IIFE
let pokemonRepository = (function() {

//Creating array of Pokemon to iterate over
let pokemonList= [];

//Drawing from the following api
let apiUrl= 'https://pokeapi.co/api/v2/pokemon/?limit=150';

//Code below manipulates DOM creating a new pokemon list for index.html
//Selecting the class pokemonList from the ul in the index.
function addListItem (pokemon){
  let pokemonListScript = document.querySelector('.pokemonList');

//Creating a list item as part of the unordered list selected above.
  let listItem = document.createElement('li');
  listItem.classList.add('list-group-item','col-xl-3',
      'col-lg-4',
      'col-md-6');//Using JS to add this Bootstrap class and breakpoints.

//Creating a button for each list item and assigning that button the innerText of the pokemon name w/relevant classes.
  let pokeButton =
  document.createElement('button');
  pokeButton.innerText = pokemon.name;
  pokeButton.classList.add('customButton');
  pokeButton.classList.add('btn');
  pokeButton.classList.add('btn-block');
  pokeButton.classList.add('btn-outline-dark')
  pokeButton.classList.add('btn-active');
  pokeButton.setAttribute('data-toggle', 'modal');
  pokeButton.setAttribute('data-target', '#modal-container');

//Calling the eventListenerButton function to add an event listener for button clicks.
  eventListenerButton(pokeButton, pokemon)

//Adding the ListItem as the parent of the pokeButton.
  listItem.appendChild(pokeButton);

//Adding the UL as the parent of the list.
  pokemonListScript.appendChild(listItem);
  }

//When the button is clicked run the showDetails function, loadList w/relevant content.
function eventListenerButton (pokeButton,pokemon){
    pokeButton.addEventListener('click',function(){showDetails(pokemon)})
    }

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
      item.imageUrlFront = details.sprites.other.home.front_default;
      //item.imageUrlFront = details.sprites.versions.generation_v.black_white.animated.front;
      item.height = details.height;
      item.types = details.types;
      item.weight = details.weight;
      item.habitat = details.habitat;
    }).catch(function(e){ // indicates what will happen if the promise is rejected
    console.error(e);
    });
  }
//Creating a function to show the relevant details within the bootstrap modal.
function showDetails (pokemon){
  loadDetails(pokemon).then(function(){showModal(pokemon)
  })}
function showModal(pokemon){
  let modalTitle = $('.modal-title');
  let modalBody = $('.modal-body');

  modalTitle.empty();
  modalBody.empty();

  let nameElement =$('<h1>' + pokemon.name + '</h1>');
  $(nameElement).addClass('customModalTitle');
  let heightElement = $('<p>' +'Pokemon Height: ' + pokemon.height + ' .ft' + '</p>');
  let weightElement = $('<p>' +'Pokemon Weight: ' + pokemon.weight + ' .lbs' + '</p>');
//Creating array and calling types from API
  let pokeTypesArray = [];
  pokemon.types.forEach(pokemon => {
    let types = pokemon.type.name;
    pokeTypesArray.push(types)})
    let typesString = pokeTypesArray.join(' & ');
    let typesElement = (`Pokemon Type(s): ${typesString}`);

  let imgElementFront = $('<img>');
  $(imgElementFront).addClass('modalImgSize');
  imgElementFront.attr('src', pokemon.imageUrlFront);


  modalTitle.append(nameElement);
  modalBody.append(heightElement);
  modalBody.append(weightElement);
  modalBody.append(typesElement);
  //modalBody.append(habitatsElement);
  modalBody.append(imgElementFront);
}

function getAll() {return pokemonList}

//Creating a function that adds a new pokemon to the list only if the 'item' is an object
function add(pokemonNewItem){
  typeof pokemonNewItem ==='object'?
  pokemonList.push(pokemonNewItem) :
//If the item trying to be added above is not an object, the message below will log in the console.
  console.log ('Can\'t add a non-object')
}

//Building search function
let searchPokemon = document.querySelector('#searchForm');
searchPokemon.addEventListener('input',() => {
  let pokemonResults = document.querySelectorAll('.list-group-item');
  let value = searchPokemon.value.toLowerCase();

  pokemonResults.forEach(function(pokemon){
    if (pokemon.innerText.toLowerCase().indexOf(value) > -1){
      pokemon.style.display ='';
    } else {pokemon.style.display= 'none';
  }
  }
)

})

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

//Creating a scroll up button for pokemon
let caretBtn = document.getElementById('btn-top');

//Only displaying the scroll up button once viewer scrolls down a bit.
window.onscroll = function (){
  scrollFunction()}

  function scrollFunction(){
    if(document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20)
    {caretBtn.style.display = 'block';}
    else{caretBtn.style.display = 'none';}
  }
//Sending viewer back to the top of the screen.
    caretBtn.addEventListener('click', backToTop);
      function backToTop(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
}
