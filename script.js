let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];

function selecting() {
    document.getElementById("bgContainer").style.backgroundColor = bgColorsArray[Math.floor(Math.random() * bgColorsArray.length)];
}