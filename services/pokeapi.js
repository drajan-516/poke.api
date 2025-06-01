const STORAGE_KEY = 'recentPokemons';

export function addRecentPokemon() {
    const list = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

    if (!list.includes(name)) {
        list.unshift(name);
        if (list.length > 5) {
            list.pop();
        }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    }
}

export async function getPokemonList(limit) {
    const pokemons = (await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)).json();
    return await pokemons;
}

export async function getPokemonById(id) {
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return await result.json();
}