var pokemons = [
    {
        "id": 1,
        "name": "Bulbasaur",
        "type": [ "grass", "poison" ],
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    },
    {
        "id": 5,
        "name": "Charmeleon",
        "type": [ "fire" ],
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
    },
    {
        "id": 15,
        "name": "Beedrill",
        "type": [ "bug", "poison" ],
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png"
    },
    {
        "id": 193,
        "name": "Yanma",
        "type": [ "bug", "flying" ],
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/193.png"
    },
    {
        "id": 152,
        "name": "Chikorita",
        "type": [ "grass" ],
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png"
    }
]

function renderPokemon(poke){
    let span = document.createElement('span');
    let li = document.createElement('li');
    let li2 = document.createElement('li');
    let img = document.createElement('img');
    let name = document.createElement('name');
    img.src = poke.sprite;
    name.innerHTML = poke.name;
    li.appendChild(img);
    li2.appendChild(name);
    span.appendChild(li);
    span.appendChild(li2);
    document.querySelector('#pokes ul').appendChild(span);
}

/*renderPokemon();*/

function renderAllPokemons() {
    pokemons.forEach( pokemons => renderPokemon(pokemons));
}

renderAllPokemons();