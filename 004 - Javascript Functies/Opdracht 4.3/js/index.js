var plaatjes = [1,2,3];
var teller = 0;

var hoofd = document.getElementById("hoofd");
hoofd.style.backgroundImage = "url('img/hoofd1.png')";

hoofd.addEventListener("click", function() {
    getNumber();
    hoofd.style.backgroundImage = "url('img/hoofd" + getNumber() +".png')";
});

var gezicht = document.getElementById("gezicht");
gezicht.style.backgroundImage = "url('img/gezicht1.png')";

gezicht.addEventListener("click", function() {
    getNumber();
    gezicht.style.backgroundImage = "url('img/gezicht" + getNumber() +".png')";
});

var mond = document.getElementById("mond");
mond.style.backgroundImage = "url('img/mond1.png')";

mond.addEventListener("click", function() {
    getNumber();
    mond.style.backgroundImage = "url('img/mond" + getNumber() +".png')";
});

function getNumber() {
    if(teller >= plaatjes.length) {
        teller = 1;
    } else {
        teller++;
    }
    console.log(teller);
    return teller;
}