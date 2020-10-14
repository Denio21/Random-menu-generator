//Skript sloužicí k generování menu za pomocí zadaných informacích
//Základní logika webové stránky


//Dictionary s hodnotou key jako jméno produktu a s hodnotou value jako cenou
//Zapisujeme například "TOFU": 35
var cast = {
    "ZINGER":150,
    "TWISTER":75,
    "LONGER":65,
    "TEXAS GRANDER":105,
    "B-SMART":68
};

//Pro vytvoření další části menu vytvoříme další dictionary
//Nutno potom upravit i v HTML
var cast2 = {
    "HRANOLKY MALÉ":20,
    "HRANOLKY VELKÉ":50,
    "HRANOLKY STŘEDNÍ":35,
    "LUPÍNKY":45,
    "KUKUŘICE":25,
    "BRAMBOROVÁ KAŠE":45
};
var cast3 = {
    "PEPSI COLA":35,
    "POCTIVÁ MALINOVKA":35,
    "7-UP":35,
    "SODA":35,
    "MIRINDA":35
};


//Získání náhodného produktu z dictionary
//Není nutno nějak upravovat
function randomProperty(obj) {
    var keys = Object.keys(obj);
    return Object.keys(obj)[Math.floor(Math.random() * Object.keys(obj).length)];
};

//Funkce k samotnému generování menu, spouští se při kliku na tlačítko
function getMenu() {
    
    //Uložení jednotlivých částí jídla do proměnné, pomocí tohoto získáme náhodný prvek z dříve nadefinovaných částí menu
    //Zapisujeme jako var cokolivSelected = randomProperty(cokoliv);
    var castSelected = randomProperty(cast);
    var cast2Selected = randomProperty(cast2);
    var cast3Selected = randomProperty(cast3);

    //Výpočet finální ceny
    //Bereme z každého vybraného
    //Zapisujeme jako var cenaFinal = cokoliv[cokolivSelected] + cokoliv2[cokoliv2Selected];
    //cokoliv[cokolivSelected] vrací číslo z nadefinovaného řádku
    var cenaFinal = cast[castSelected] + cast2[cast2Selected] + cast3[cast3Selected];

    //Zápis do HTML za pomocí ID
    //Javascript najde prvek s id cast a určí jeho hodnotu, což bude castSelected
    document.getElementById("cast").innerHTML = castSelected;
    document.getElementById("cast2").innerHTML = cast2Selected;
    document.getElementById("cast3").innerHTML = cast3Selected;

    //Javascript najde prvek určený pro cenu a určí jeho hodnotu, což bude cenaFinal
    //Není potřeba měnit
    document.getElementById("cena").innerHTML = "Cena: " + cenaFinal + " Kč";
};
