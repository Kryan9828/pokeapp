const pokemonDiv = document.querySelector(".pokemon")
const POKE_URL =  "https://pokeapi.co/api/v2/pokemon/"
const printPokemonName = function(name){
    let h2 = document.createElement("h2")
    h2.innerHTML = name
    pokemonDiv.append(h2)
}
const displayPokemonPicture = function(picture){
    let img = document.createElement("img")
    img.src = picture
    pokemonDiv.append(img)
}

console.log(POKE_URL+"ditto")
const fetchPokemon = function(name){
fetch(POKE_URL + name)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        printPokemonName(data.name)
        displayPokemonPicture(data.sprites.front_default)
    })}

fetchPokemon("ditto")
fetchPokemon("bulbasaur")
fetchPokemon("mewtwo")
fetchPokemon("charizard")
fetchPokemon("ivysaur")
fetchPokemon("squirtle")
fetchPokemon("graveler")
fetchPokemon("pikachu")
fetchPokemon("raichu")