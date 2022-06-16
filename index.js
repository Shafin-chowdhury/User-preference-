const selectFontSize = document.getElementById("selectFontSize");
const selectBgColor = document.getElementById("selectBgcolor");
const resetButton = document.getElementById("resetButton");
const mainElement = document.querySelector("main");

const changeFontSize = (event) => {
    console.log(event.target.value)
};


const changeBgColor = (event) => {
    console.log(event.target.value);
};






selectFontSize.addEventListener("change",changeFontSize);
selectBgColor.addEventListener("change",changeBgColor);