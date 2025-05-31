import {getFavoritePokemons} from "../storage/fav.js";

export function favPokePage(app) {
    const fav = getFavoritePokemons();

    app.innerHTML = `<h1>Favorite Pokémon</h1>`;

    if (fav.length === 0) {
        app.innerHTML += "<p>You dont have fav yet. Go ahead and find one!</p>";
        return;
    }

    fav.forEach(pokemon => {
        app.innerHTML += `
            <div>
                <img src="${pokemon.sprite}" alt="${pokemon.name}" />
                <p>${pokemon.name}</p>
                
              
            </div>
        `;
    });
}
