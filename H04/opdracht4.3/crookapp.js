var pictures = [1,2,3];
var teller = 0;
var picholder = document.getElementById("picholder");
var picholder2 = document.getElementById("picholder2");
var picholder3 = document.getElementById("picholder3");


picholder.style.backgroundImage = "url('img/pokemonhead1.jpg')";
picholder2.style.backgroundImage = "url('img/pokemonbody1.jpg')";
picholder3.style.backgroundImage =  "url('img/pokemonbottom1.jpg')";


picholder.addEventListener("click", function () {
    picholder.style.backgroundImage = "url('img/pokemonhead" + getPokemon() + ".jpg')";

});

picholder2.addEventListener("click", function () {
    picholder2.style.backgroundImage = "url('img/pokemonbody" + getPokemon() + ".jpg')";
});

picholder3.addEventListener("click", function () {
    picholder3.style.backgroundImage = "url('img/pokemonbottom" + getPokemon() + ".jpg')";

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


