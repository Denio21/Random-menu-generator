var zaklad = {
    "VAJEČNÉ NUDLE, ZELENINA, VEJCE": 75,
    "RÝŽOVÉ NUDLE, ZELENINA, VEJCE": 75,
    "CELOZRNNÉ NUDLE, ZELENINA": 75,
    "NUDLE UDON, ZELENINA": 75,
    "SMAŽENÁ RÝŽE, ZELENINA, VEJCE": 75,
    "CELOZRNNÁ RÝŽE, ZELENINA, VEJCE": 75
};

var maso = {
    "TOFU": 35,
    "KUŘECÍ": 35,
    "HOVĚZÍ": 45,
    "KACHNÍ": 45,
    "KREVETY": 50,
    "LOSOS": 50
};

var zelenina = {
    "HOUBY": 15,
    "PAPRIKA": 15,
    "BROKOLICE": 15,
    "SOJOVÉ VÝHONKY": 15,
    "CUKETA": 15,
    "ZELENÉ FAZOLE": 15,
    "KUKUŘICE": 15,
    "JARNÍ CIBULKA": 15
};

var omacka = {
    "TERIYAKI": 0,
    "THAJSKÁ OMÁČKA": 0,
    "SLADKÉ CHILLI A SÓJA": 0,
    "ČERVENÉ KARI A KOKOS": 0,
    "ZELENÉ KARI A KOKOS": 0,
    "PAD THAI OMÁČKA": 0,
    "ARAŠÍDOVÁ OMÁČKA": 0
}

var orisky = {
    "KORIANDR": 10,
    "KEŠU": 10,
    "DRCENÉ ARAŠÍDY": 10,
    "SEZAMOVÁ SEMÍNKA": 10,
    "SMAŽENÁ CIBULE": 10
}


function randomProperty(obj) {
    var keys = Object.keys(obj);
    return Object.keys(obj)[Math.floor(Math.random() * Object.keys(obj).length)];
};

function getMenu() {
    var zakladSelected = randomProperty(zaklad);
    var masoSelected = randomProperty(maso);
    var zeleninaSelected = randomProperty(zelenina);
    var omackaSelected = randomProperty(omacka);
    var oriskySelected = randomProperty(orisky);
    var cenaFinal = zaklad[zakladSelected] + maso[masoSelected] + zelenina[zeleninaSelected] + omacka[omackaSelected] + orisky[oriskySelected];
    document.getElementById("zaklad").innerHTML = zakladSelected;
    document.getElementById("maso").innerHTML = masoSelected;
    document.getElementById("zelenina").innerHTML = zeleninaSelected;
    document.getElementById("omacka").innerHTML = omackaSelected;
    document.getElementById("orisky").innerHTML = oriskySelected;
    document.getElementById("cena").innerHTML = "Cena: " + cenaFinal + " Kč";
};
