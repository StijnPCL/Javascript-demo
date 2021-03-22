var mijnauto = {
    kleur: "blauw",
    merk: "Ford",
    snelheid: 0,

    gasgeven: function() {
        this.snelheid += 5
        console.log(this.snelheid);
    },

    toeteren: function() {
        console.log("toet!")
    }
}

console.log(mijnauto.kleur);
mijnauto.toeteren();

for (var i = 0; i < 10; i++) {
    mijnauto.gasgeven();
}