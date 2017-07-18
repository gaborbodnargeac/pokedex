var getPokemons= (
    function () {
        var pokemons = [
            {
                "id": 1,
                "name": "Bulbasaur",
                "type": ["grass", "poison"],
                "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            },
            {
                "id": 5,
                "name": "Charmeleon",
                "type": ["fire"],
                "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
            },
            {
                "id": 15,
                "name": "Beedrill",
                "type": ["bug", "poison"],
                "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png"
            },
            {
                "id": 193,
                "name": "Yanma",
                "type": ["bug", "flying"],
                "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/193.png"
            },
            {
                "id": 152,
                "name": "Chikorita",
                "type": ["grass"],
                "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png"
            }
        ]

        return function (id) {
            return pokemons.filter((item) => item.id === id)[0];
        };
    })();