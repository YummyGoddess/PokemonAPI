$( document ).ready(function() {

var pokeData
var baseURL = 'https://pokeapi.co/api/v2/pokemon/'
function pokeImg(pokeData){
    pokeCard = '<div class="pokeCard">'
    pokeCard += '<img src = "' + pokeData.sprites.front_default + '"/>';
    pokeCard += '<p>' + pokeData.name + '</p>';
    pokeCard += '</div>'
    $('.pokemonList').append(pokeCard);
}


var pokeParams = {

};
//Get Pokemon Info from URL
for (i=1;i<45; i++){
    $.getJSON(baseURL+i, pokeParams, pokeImg);
    console.log ('Testing..1..2..3..')

}

});
