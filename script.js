var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var button = document.getElementById('random');

// Setting background color and displaying the color value
function setGradient() {
    body.style.background = 'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';

    css.textContent = body.style.background + ';';
}

// Set background color randomly after clicking button
function random() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    const randomColor1 = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    color1.value = "#" + randomColor;
    color2.value = "#" + randomColor1;
}
button.addEventListener("click", () => { random(); setGradient(); });


color1.addEventListener('input', setGradient)

color2.addEventListener('input', setGradient)