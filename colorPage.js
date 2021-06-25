
var colorFlip = document.querySelector(".colorFlip");
var hex = document.querySelector(".hex");
var addColor = document.querySelector(".addColor");
var colorToAdd = document.querySelector(".colorToAdd");
var body = document.querySelector(".container1")
var btn = document.querySelector(".button")

function changeColor () {
    var code = Math.round(Math.random() * 250);
    var code1 = Math.round(Math.random() * 250);
    var code2 = Math.round(Math.random() * 250);
    var colorCode = `rgb(${code}, ${code1}, ${code2})`
    body.style.backgroundColor = colorCode;

}
changeColor();
btn.addEventListener("click", changeColor)

function cancelColor () {
    return body.classList.toggle("clear")
}
hex.addEventListener("click", cancelColor)