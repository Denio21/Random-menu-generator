function random_bg_color() {
    var colors = [
        "#e8505b",
        "#f9d56e",
        "#f3ecc2",
        "#14b1ab"
    ]
    var metaThemeColor = document.querySelector("meta[name=theme-color]");
    var bgColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = bgColor;
    metaThemeColor.setAttribute("content", bgColor);
}
