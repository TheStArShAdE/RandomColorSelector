//import { GetColorName } from '../node_modules/hex-color-to-color-name/lib/';
const hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const colorName = document.querySelector('.name');
const colorHex = document.querySelector('.color-hex');
const colorRGB = document.querySelector('.color-rgb');
const hex_btn = document.getElementById('hex');
const rgb_btn = document.getElementById('rgb');
let code = [];
let hexColor = '#';

btn.addEventListener('click', () => {
    hexColor = '#';
    code = [];
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
        console.log(hexColor);
        if ((hexColor.length -1) % 2 == 0) {
            code.push( (hex.indexOf(hexColor.charAt(hexColor.length-2)) * 16) + hex.indexOf(hexColor.charAt(hexColor.length-1)) );
        }
        console.log(code);
    }
    //colorName.textContent = GetColorName(hexColor.substring(1));
    colorHex.textContent = hexColor;
    colorRGB.textContent = 'rgb(' + code.join(', ') + ')';
    document.body.style.backgroundColor = hexColor;
})

hex_btn.addEventListener('click', () => {
    navigator.clipboard.writeText(hexColor);
})

rgb_btn.addEventListener('click', () => {
    navigator.clipboard.writeText('rgb(' + code.join(', ') + ')');
})

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}