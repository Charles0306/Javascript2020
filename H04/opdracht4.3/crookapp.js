var pictures = [1,2,3];
var teller = 0;
var picholder = document.getElementById("picholder");

picholder.style.backgroundImage = "url('img/pokemonhead1.jpg')";


picholder.addEventListener("click", function () {
    picholder.style.backgroundImage = "url('img/pokemonhead" + getPokemon() + ".jpg')";

});

function getPokemon() {
    if (teller >= pictures.length) {
        teller = 1;

    }else {
        teller++
    }
    console.log(pictures);
    return teller;
}


