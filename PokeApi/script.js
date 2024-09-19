const gallery = document.getElementById('gallery');
const modal = document.getElementById('pokemonModal');
const modalContent = document.getElementById('pokemon-details');
const closeModal = document.querySelector('.close');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

// ASYNC - AWAIT 

async function fetchPokemons() {
    for (let id = 1; id <= 30; id++) {
        await fetchPokemonByIdOrName(id);
    }
}

async function fetchPokemonByIdOrName(identifier) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${identifier}`);
        if (!response.ok) {
            alert('Error, pokemon no encontrado');
            return;
        }
        const data = await response.json();
        createPokemonCard(data);

    } catch (error) {
        console.error('Error obteniendo pokemon', error);
    }

}

function createPokemonCard(pokemon) {
    const imagenUrl = pokemon.sprites.other.home.front_default;
    const pokemonName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

    console.log(pokemonName);

    // Crear la card de pokémon
    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    img.src = imagenUrl;
    img.alt = pokemonName;

    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    const title = document.createElement('h2');
    title.textContent = pokemonName;

    cardContent.appendChild(title);
    card.appendChild(img);
    card.appendChild(cardContent);

    gallery.appendChild(card);
}


fetchPokemons();


//mm