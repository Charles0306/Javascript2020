var plaatjes = [1,2,3,4,5,6,7,8,9];
var teller = 0;
var slideholder  = document.getElementById("slideholder");

slideholder.style.backgroundImage = "url('img/aap1.jpg')";


slideholder.addEventListener("click", function () {
    slideholder.style.backgroundImage = "url('img/aap" + getAap() + ".jpg')";

})

function getAap() {
    teller++;
    console.log(teller);
    return teller;

}