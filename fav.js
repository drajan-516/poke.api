const FAV_KEY = "favoritePokemons";

export function getFavoritePokemons() {
    return JSON.parse(localStorage.getItem(FAV_KEY)) || [];
}


export function addFavoritePokemon(pokemon) {
    const favList = getFavoritePokemons();

    if (!favList.some(p => p.id === pokemon.id)) {
        favList.push(pokemon);
        localStorage.setItem(FAV_KEY, JSON.stringify(favList));
    }
}

export function deleteFavoritePokemon(pokemonId) {
    const list = getFavoritePokemons().filter(p => p.id !== pokemonId);
    localStorage.setItem(FAV_KEY, JSON.stringify(list));
}

export function isFavorite(pokemonId) {
    return getFavoritePokemons().some(p => p.id === pokemonId);
}