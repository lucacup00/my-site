var changeColor = document.getElementById('changeColor'),
ArayDiColore = ['white', '#333333'];
let ColoreIndex = 0;

changeColor.addEventListener('click', () => {
document.body.style.backgroundColor = ArayDiColore[ColoreIndex];
ColoreIndex = (ColoreIndex + 1) % ArayDiColore.length;
console.log(ColoreIndex);




});



//cambio colore scritt(hi,I'm Luca Cupellaro..)
var scritta = document.getElementById("changeColor");
scritta.addEventListener("click", () => {
var element = document.getElementById("5");
element.classList.toggle("mystyle");
});

var scritta2 = document.getElementById("changeColor");
scritta2.addEventListener("click", () => {
var element = document.getElementById("6");
element.classList.toggle("mystyle");
});

var scritta3 = document.getElementById("changeColor");
scritta3.addEventListener("click", () => {
var element = document.getElementById("7");
element.classList.toggle("mystyle");
});

var scritta4 = document.getElementById("changeColor");
scritta4.addEventListener("click", () => {
var element = document.getElementById("8");
element.classList.toggle("mystyle");
});



//cambio colore scritta NavBar
var scritta4 = document.getElementById("changeColor");
scritta4.addEventListener("click", () => {
var element = document.getElementById("about");
element.classList.toggle("mystyle");
});

var scritta4 = document.getElementById("changeColor");
scritta4.addEventListener("click", () => {
var element = document.getElementById("skills");
element.classList.toggle("mystyle");
});

var scritta4 = document.getElementById("changeColor");
scritta4.addEventListener("click", () => {
var element = document.getElementById("works");
element.classList.toggle("mystyle");
});

var scritta4 = document.getElementById("changeColor");
scritta4.addEventListener("click", () => {
var element = document.getElementById("contact");
element.classList.toggle("mystyle");
});





 



