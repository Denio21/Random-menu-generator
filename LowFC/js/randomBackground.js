//Skript k generování barvy pozadí

//Funkce k generování barvy pozadí stránky. Spouští se po obnovení stránky, nebo pri kliku na nadpis stránky.
function random_bg_color() {
    //Pole s barvami, mezi kterými se bude vybírat. Toto je jediná věc, kterou tady máte upravit. Pokud vyberete moc tmavé barvy, tak by jste měli změnit i barvu písma na stránce
    var colors = [
        "#a83232",
        "#b3b3b3",
        "#ffe600",
        "#0dff00",
        "#ff00f2"
    ]

    //Výběr tagu pro změnu barvy okna prohlížeče (chrome).
    var metaThemeColor = document.querySelector("meta[name=theme-color]");

    //Výběr náhodné barvy z pole colors
    var bgColor = colors[Math.floor(Math.random() * colors.length)];

    //Změna barvy pozadí stránky
    document.body.style.background = bgColor;

    //Nastavení barvy tagu pro změnu barvy okna prohlížeče (chrome)
    metaThemeColor.setAttribute("content", bgColor);
}