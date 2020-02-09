pics = document.getElementById("pics");
createPicsHolder();
createPokeImage();

function createPicsHolder() {
    for (var i = 0; i < 9; i++){

pictureHolder = document.createElement("div");
pictureHolder.className = "picture-holder";
pictureHolder.id = "picture-holder-" + i;
pics.appendChild(pictureHolder);
    }
}

function createPokeImage() {
    pictureHolder = document.getElementsByClassName("picture-holder");
  for (var i = 0; i < pictureHolder.length; i++) {
      favoriet = document.createElement("div");
      favoriet.className = "favoriet";
      favoriet.id = "favoriet_" + (i + 1);
    pokePlaatje = document.createElement( "img");
    pokePlaatje.src ="img/shiny" + (i + 1) + ".png";
    pokePlaatje.id = (i + 1) ;
    pokePlaatje.addEventListener("click", function () {
  maakFavoriet(this.id);
    });
    pictureHolder[i].appendChild(favoriet);
    pictureHolder[i].appendChild(pokePlaatje);
  }

}
function maakFavoriet(id) {
console.log("Maak mij Favoriet het gaat om..." + id);
notsofavoriet = document.getElementsByClassName("favoriet");

for (var i = 0; i< notsofavoriet.length; i++) {
    notsofavoriet[i].style.backgroundImage = "none"
}

favoriet = document.getElementById("favoriet_" + id);
favoriet.style.backgroundImage = "url('img/blackheart.png')";
}

