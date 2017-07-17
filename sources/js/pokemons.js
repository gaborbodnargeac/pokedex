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

function btnOnClickEvent() {
    let searchStr = document.getElementById("search").value;
    if (searchStr.length < 1){
        searchStr = "..."
    }
    /*alert("1");*/
    console.log("The input string is: ",searchStr);
    document.getElementById("searchQueryStr").innerHTML = "The searched pokemon is "+searchStr;
    
}


function renderPokemon(poke){

    let li = document.createElement('li');
    let div = document.createElement('div');
    let img = document.createElement('img');
    let label = document.createElement('label');
    let span = document.createElement('span');
    if(poke.type.length > 1){
        console.log("multiple class "+poke.name+ "types :" +poke.type);
        let color1 = findColor(poke.type[0].toString());
        let color2 = findColor(poke.type[1].toString());
        img.style.background="linear-gradient("+color1+","+ color2+")";
        img.style.borderRadius="50%";
    } else {
        img.style.background = findColor(poke.type[0].toString());
        img.style.borderRadius="50%";
        console.log("solo class "+poke.name+ "types :" +poke.type);
    }

    img.src = poke.sprite;
    label.innerHTML = poke.name;

    div.appendChild(img);
    div.appendChild(label);
    li.appendChild(div);
    document.querySelector('#pokes ul').appendChild(li);
}

/*renderPokemon();*/

function renderAllPokemons() {
    pokemons.forEach( pokemons => renderPokemon(pokemons));
}

function findColor(type){
    switch(type){
        case "normal":
            color = "white";
            break;
        case "fire":
            color = "red";
            break;
        case "water":
            color = "blue";
            break;
        case "electric":
            color = "yellow";
            break;
        case "grass":
            color = "green";
            break;
        case "ice":
            color = "aqua";
            break;
        case "fighting":
            color = "BlueViolet";
            break;
        case "poison":
            color = "Magenta";
            break;
        case "ground":
            color = "Chocolate";
            break;
        case "flying":
            color = "Purple";
            break;
        case "psychic":
            color = "Crimson";
            break;
        case "bug":
            color = "DarkOrange";
            break;
        case "rock":
            color = "DarkGrey";
            break;
        case "ghost":
            color = "DarkSalmon";
            break;
        case "dragon":
            color = "DeepPink";
            break;
        case "dark":
            color = "GoldenRod";
            break;
        case "steel":
            color = "Green";
            break;
        case "fairy":
            color = "Lime";
            break;
        default:
            color = "white";
    }
    return color;
}


document.getElementById("search").addEventListener("input", pokeSearch);

function pokeSearch() {
    var arr = [];
    console.log()
    document.querySelector('#pokes ul').innerHTML = "";
    let searchStr = document.getElementById("search").value;
    pokemons.forEach(pokemons => searchSubStrings(pokemons, searchStr)
        /*function (poke) {
            if(pokemons.name = searchStr){
                arr.push(poke.id);
                console.log(arr);
            } else{
                console.log("nem a keresett pokemon [keresett: "+searchStr+", aktualis: "+ poke.name+" ]");
            }
        }*/
    );
    /*renderPokemon(arr);*/
}
function searchSubStrings(poke, searchStr){
    if((poke.name).includes(searchStr)){
        console.log("Benne van a keresett kiejezes ("+searchStr+") a "+poke.name+"-ben");
        renderPokemon(poke);
    } else {
        console.log("Nincs benne a "+searchStr+" a "+poke.name+"-ben");
    }
}
renderAllPokemons();
