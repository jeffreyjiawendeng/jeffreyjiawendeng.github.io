let body = document.querySelector("body");
let appearanceModeButton = document.querySelector(".appearance-mode-button");
let isDark = false;
appearanceModeButton.onclick = () => {
    isDark = !isDark;
    body.style.setProperty("--bgc", isDark ? "black" : "white");
    body.style.setProperty("--c", isDark ? "white" : "black");
}