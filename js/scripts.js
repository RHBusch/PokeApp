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
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
      item.weight = details.weight;
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

//*********Bugs w types + images
  modalTitle.empty();
  modalBody.empty();

  let nameElement =$('<h1>' + pokemon.name + '</h1>');
  let heightElement = $('<p>' +'Pokemon Height: ' + pokemon.height + '</p>');
  let weightElement = $('<p>' +'Pokemon Weight: ' + pokemon.weight + '</p>');
  let typesElement = $('<p>' +'Pokemon Types: ' + pokemon.types + '</p>');
  let imgElement = $('<img class =".modal-img" style="width:50%">');
  imgElement.attr('src', pokemon.imageUrl);

  /*let imgElementFront = $('img class =".modal-img" style="width:50%">');
  imgElementFront.attr('src', pokemon.imageUrlFront);*/

  modalTitle.append(nameElement);
  modalBody.append(heightElement);
  modalBody.append(weightElement);
  modalBody.append(typesElement);
  modalBody.append(imgElement);
}

    /*let modalContainer = document.querySelector('#modal-container');
    function showModal(pokemon){
      modalContainer.innerHtml = 'LOREM IPSUM';
      let modal = document.createElement ('div');
      modal.classList.add('modal');

      let closeButtonElement = document.createElement('button');
        closeButtonElement.innerText ='Close';
        closeButtonElement.classList.add('modal-close');
        closeButtonElement.addEventListener ('click',hideModal)

      let modalTitle = document.createElement ('h2');
        modalTitle.innerText = 'Name: ' + pokemon.name;

      let modalDetails = document.createElement ('h3');
        modalDetails.innerText = 'height: '+ pokemon.height;

      let pokemonImage = document.createElement ('img');
          pokemonImage.src = pokemon.imageUrl;
          pokemonImage.classList.add('pokemonImage');

      modal.appendChild(closeButtonElement);
      modal.appendChild(modalTitle);
      modal.appendChild(modalDetails);
      modal.appendChild(pokemonImage);
      modalContainer.appendChild(modal);
      modalContainer.classList.add('is-visible');
    }

function hideModal(){
    modalContainer.classList.remove('is-visible')
}
window.addEventListener("keydown", e => {
   if (e.key === "Escape" && modalContainer.classList.contains('is-visible')) {
     hideModal();
   }
 }); //Closing addEventListener

 modalContainer.addEventListener("click", e => {
   let target = e.target;
   if (target === modalContainer) {
     hideModal();
   }
 });
*/
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
