function random_bg_color() {
    var colors = [
        "#fc5c65",
        "#fd9644",
        "#fed330",
        "#26de81",
        "#2bcbba",
        "#fa8231",
        "#f7b731",
        "#20bf6b",
        "#0fb9b1",
        "#45aaf2",
        "#4b7bec",
        "#2d98da"
    ]
    var metaThemeColor = document.querySelector("meta[name=theme-color]");
    var bgColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = bgColor;
    metaThemeColor.setAttribute("content", bgColor);
}