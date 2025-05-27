import {getPokemonById} from "../services/pokeapi.js";
import {addRecentPokemon} from "../storage/recent.js";

export async function pokemonDetailsPage(app, id) {
    app.innerHTML = `<h2>Loading pokemon...</h2>`

    const existPokemon = await getPokemonById(id);
    addRecentPokemon(existPokemon.name);

    app.innerHTML = `
        <h1>${existPokemon.name}</h1>
        <img src="${existPokemon.sprites.front_default}" alt="${existPokemon.name}" />
        
        <h3>Parameters</h3>
        <ul>
            <li>Weight: ${existPokemon.weight}</li>
            <li>Height: ${existPokemon.height}</li>
        </ul>

        
        <h3>Skills</h3>
        <ul>
            <li>HP: ${existPokemon.stats[0].base_stat}</li>
            <li>Attack: ${existPokemon.stats[1].base_stat}</li>
            <li>Defense: ${existPokemon.stats[2].base_stat}</li>
            <li>Special Attack: ${existPokemon.stats[3].base_stat}</li>
            <li>Speed: ${existPokemon.stats[5].base_stat}</li>
        </ul>
       
        
        <a href="#/pokemons">Back to pokemons</a>
    `;
}