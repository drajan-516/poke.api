import { getPokemonList } from "../services/pokeapi.js";

export async function pokemonsPage(app) {
    let offset = 0;
    const limit = 15;


    async function loadMore() {
        const data = (await getPokemonList(limit, offset)).results;

        const cards = data.map((poke, index) => `
           <li class="card">
               <a href="#/pokemons/${offset + index + 1}">${poke.name}</a>
           </li>
       `).join('');

        document.querySelector(".grid").innerHTML += cards;
        offset += limit;
        }
     const data = (await getPokemonList(limit, offset)).results;
     const cards = data.map((poke, index) => `
        <li class="card">
            <a href="#/pokemons/${offset + index + 1}">${poke.name}</a>
        </li>
    `).join('');

        offset += limit;

        app.innerHTML = `
        <h2>Pokemons List</h2>
        <ul class="grid">${cards}</ul>
        <button id="loadMore">Show More</button>
    `;
        document.getElementById("loadMore").addEventListener("click", loadMore);
}
