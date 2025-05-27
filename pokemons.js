import { getPokemonList } from "../services/pokeapi.js";

export async function pokemonsPage(app) {
    app.innerHTML = `<h2>Loading pokemons...</h2>`

    const data = (await getPokemonList(40)).results;
    const cards = data.map((poke, index) => `
        <li class="card">
            <a href="#/pokemons/${index + 1}">${poke.name}</a>
        </li>
    `).join('');

    app.innerHTML = `
        <h2>Pokemons List</h2>
        <ul class="grid">${cards}</ul>
    `;
}