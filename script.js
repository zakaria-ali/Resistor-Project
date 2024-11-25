const myTable = document.querySelector("table");
const theNumber = document.querySelector(".the-number");
const multiplier = document.querySelector(".multiplier");
const resistorValue = document.querySelector(".resistor-value");
const minValue = document.querySelector(".min-value");
const maxValue = document.querySelector(".max-value");

function getColorName(colorVal) {
  const colorMap = {
    "#000000": {name: "black", number: 0, multiplier: 1, varianceRatio: 0.2}, 
    "#964B00": {name: "brown", number: 1, multiplier: 10, varianceRatio: 0.01}, 
    "#FF0000": {name: "red", number: 2, multiplier: 100, varianceRatio: 0.02}, 
    "#FFA500": {name: "orange", number: 3, multiplier: 1000, varianceRatio: 0.03}, 
    "#FFFF00": {name: "yellow", number: 4, multiplier: 10000, varianceRatio: 0.04}, 
    "#008000": {name: "green", number: 5, multiplier: 100000, varianceRatio: 0.05}, 
    "#0000FF": {name: "blue", number: 6, multiplier: 1000000, varianceRatio: 0.06}, 
    "#800080": {name: "violet", number: 7, multiplier: 10000000, varianceRatio: 0.07}, 
    "#808080": {name: "gray", number: 8, multiplier: 100000000, varianceRatio: 0.08}, 
    "#FFFFFF": {name: "white", number: 9, multiplier: 1000000000, varianceRatio: 0.09}, 
    "#FFD700": {name: "gold", multiplier: 0.1, varianceRatio: 0.05}, 
    "#C0C0C0": {name: "silver", multiplier: 0.01, varianceRatio: 0.1}, 
    "": {name: "no-color", varianceRatio: 0.2}
  };
  return colorMap[colorVal] || {name:'', number:'', multiplier:'', varianceRatio:''}; 
}

// Set the colors for the resistor image 
function setColor(bandId, color) {
  document.getElementById(bandId).style.backgroundColor = color;
  myTable.classList.add('table-trans');
  let colorName = getColorName(color);
  document.getElementById(colorName).classList.add('selected-color');
  if(bandId === 'band1'){

    theNumber.innerHTML=``
  }
}

function updateMarquee() {
  const content = [
    'أهلاً وسهلاً بكم',
    'نرحب بكم في أفضل برنامج تعليمي محوسب',
    'نرحب برواد العلم والتعلم',
    'احسب قيمة المقاومة دون الحاجه الى جهاز الملتيميتر',
    'برنامج تعليمي لحساب قيمة المقاومة باستخدام الالوان'
  ];

  let key = 0;
  const marquee = document.querySelector('.marquee');

  marquee.addEventListener('animationstart', () => {
    key = 0;
    marquee.textContent = content[key];
  });

  marquee.addEventListener('animationiteration', () => {
    key++;
    if (typeof content[key] === 'undefined') key = 0;
    marquee.textContent = content[key];
  });

  marquee.classList.remove('paused');
}

// Call the function when the page is loaded
document.addEventListener('DOMContentLoaded', updateMarquee);
