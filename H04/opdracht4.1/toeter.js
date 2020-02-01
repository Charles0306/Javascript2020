var  mijnauto = {
    kleur: "blauw",
    merk: "BMW",
    snelheid: 0,


    gasggeven: function () {
        this.snelheid += 8
        console.log(this.snelheid)
    },

    toeteren: function () {
        console.log("toet");

    }

}
mijnauto.gasggeven();
mijnauto.gasggeven();
mijnauto.gasggeven();
mijnauto.gasggeven();
mijnauto.gasggeven();
mijnauto.toeteren();
mijnauto.gasggeven();
