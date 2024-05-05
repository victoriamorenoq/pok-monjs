



// Fetch
//
// POST

const BASE_URL = 'https://pokeapi.co/api/v2/';

// Fetch no async
/*
fetch(BASE_URL + 'pokemon/ditto')
    .then(res => res.json())
    .then(data => console.log(data));
*/

// fetch async

const fetchPokemon = async (pokemon) => {
    try {
        const response = await fetch(`${BASE_URL}pokemon/${pokemon}`);
        const parsedResponse = await response.json();
        return parsedResponse;
    } catch (err) {
        console.error(err);
    }
}

// Obtener pokemon
document.getElementById('get-btn')
    .addEventListener('click', async () => {
        const text = document.getElementById('poke-name').value.toLowerCase();
        const pokemon = await fetchPokemon(text);
        localStorage.setItem('currentPokeId', pokemon.id);
        console.log(pokemon.name);
        createCard(pokemon);
    })

document.addEventListener('DOMContentLoaded', async () => {
    const storedId = localStorage.getItem('currentPokeId');
    const initialId = storedId ? parseInt(storedId) : 1;
    const pokemon = await fetchPokemon(initialId);
    localStorage.setItem('currentPokeId', pokemon.id);
    console.log(pokemon.name);
    createCard(pokemon);
})


// obtener el anterior
//
//
// obtener el siguiente

document.getElementById('previous-btn')
    .addEventListener('click', async () => {
        ////
        const currentPokeId = parseInt(localStorage.getItem('currentPokeId'));
        const newId = Math.max(1, currentPokeId -1);
        localStorage.setItem('currentPokeId', newId);
        const pokemon = await fetchPokemon(newId);
        console.log(pokemon.name);
        ////
    })

document.getElementById('next-btn')
    .addEventListener('click', async () => {
        const currentPokeId = parseInt(localStorage.getItem('currentPokeId'));
        const newId = currentPokeId + 1;
        localStorage.setItem('currentPokeId', newId);
        const pokemon = await fetchPokemon(newId);
        console.log(pokemon.name);
    })


    //CARD
    const createCard = (pokemon) => {
        const cardContainer = document.getElementById('card-container');
        const card = document.createElement('div');
        const img = document.createElement('img');
        const name = document.createElement('p');
        const id = document.createElement('p');
    
        // Asigna valores a los elementos
        img.src = pokemon.sprites.front_default;
        img.alt = `Image of ${pokemon.name}`;
        name.textContent = `Name: ${pokemon.name}`;
        id.textContent = `ID: ${pokemon.id}`;
    
        // Agrega clases a los elementos (opcional)
        card.classList.add('pokemon-card');
        img.classList.add('pokemon-image');
        name.classList.add('pokemon-name');
        id.classList.add('pokemon-id');
    
        // Agrega elementos al contenedor
        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(id);
    
        // Limpia el contenedor antes de agregar la nueva tarjeta
        cardContainer.innerHTML = '';
    
        // Agrega la tarjeta al contenedor principal
        cardContainer.appendChild(card);
    }
    


    ////////////////// POST
    
//

// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'title1',
//         body: 'Lorem ipsum dolor sit amet',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     }
// }).then(res => res.json())
//     .then(json => console.log(json))


/////////////////// EJERCICIOS
//- Arreglar el pokemon en localStorage
// - Manipular el DOM y agregar una tarjeta del pokemon.
// - El tamaño e info de la tarjeta es a consideración personal.
// - La tarjeta debe mantenerse en la pantalla.
// - La info -> LocalStorage -> Fetch