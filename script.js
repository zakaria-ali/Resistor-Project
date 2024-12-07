const myTable = document.querySelector("table");
const theNumber = document.querySelector(".the-number");
const multiplier = document.querySelector(".multiplier");
const resistorValue = document.querySelector(".resistor-value");
const minValue = document.querySelector(".min-value");
const maxValue = document.querySelector(".max-value");
const step1_1 = document.querySelector(".step1_1");
const step1_2 = document.querySelector(".step1_2");
const step2_1 = document.querySelector(".step2_1");
const step2_2 = document.querySelector(".step2_2");
const step3_1 = document.querySelector(".step3_1");
const step3_2 = document.querySelector(".step3_2");
const step3_3 = document.querySelector(".step3_3");
const step4_1 = document.querySelector(".step4_1");
const step4_2 = document.querySelector(".step4_2");
const step4_3 = document.querySelector(".step4_3");

let theNumberValue;
let theResistorValue;

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

  // Get the color properties
  const colorProps = getColorName(color);

  if (!colorProps.name) {
    console.error("Invalid color value");
    return;
  }

   // Update the selected color
  document.getElementById(colorProps.name).classList.add("selected-color");

  // Update the corresponding band value
  if (bandId === "band1") {
    step1_1.innerHTML = `الخطوة 1.1: النظر الى الجدول ومعرفة قيمه اللون المختار`;
    step1_2.innerHTML = `الخطوة 1.2: يصبح لدينا متغير اسمه الرقم وتكون قيمته حسب اللون المختار `;
    
    theNumber.innerHTML = `الرقم = _ ${colorProps.number}`;
    theNumberValue = colorProps.number * 10;

  } else if (bandId === "band2") {
    step2_1.innerHTML = `الخطوة 2.1: النظر الى الجدول ومعرفة قيمه اللون المختار`
    step2_2.innerHTML = `الخطوة 2.2: هكذا تكتمل قيمة المتغير ويصبح كالاتي`

    theNumberValue += colorProps.number;
    theNumber.innerHTML = `الرقم = ${theNumberValue}`;

  } else if (bandId === "band3") {
    step3_1.innerHTML = `الخطوة 3.1: النظر الى الجدول ومعرفة قيمه اللون المختار`
    step3_2.innerHTML = `الخطوة 3.2: يتكون لدينا متغير جديد اسمه المضاعف وتكون قيمته كالاتي`
    step3_3.innerHTML = `الخطوة 3.3: بعد معرفة قيمة الرقم والمضاعف اصبح بامكاننا حساب قيمة المقاومة حسب القانون ادناه`

    theResistorValue = theNumberValue * colorProps.multiplier;
    multiplier.innerHTML = `المضاعف = ${colorProps.multiplier}`;
    resistorValue.innerHTML = `${theResistorValue}Ω = ${colorProps.multiplier} * ${theNumberValue} = قيمة المقاومة = الرقم * المضاعف `;
  
  } else if (bandId === "band4") {
    step4_1.innerHTML = `الخطوة 4.1: النظر الى الجدول ومعرفة قيمه اللون المختار حيث يعبر عن نسبة الخطأ في قيمة المقاومة`
    step4_2.innerHTML = `الخطوة 4.2: اللون الاخير عبارة عن نسبة الخطأ ومنه نحسب الحد الادنى لقيمة المقاومة`
    step4_3.innerHTML = `الخطوة 4.3: بنفس الطريقة نحسب الحد الاعلى لقيمة المقاومة`

    minValue.innerHTML = `${theResistorValue - theResistorValue * colorProps.varianceRatio }Ω = ${colorProps.varianceRatio} * ${theResistorValue} - ${theResistorValue} = الحد الادنى للمقاومة = قيمة المقاومة - قيمة * (نسبة الخطأ)`;
    maxValue.innerHTML = `${theResistorValue + theResistorValue * colorProps.varianceRatio }Ω = ${colorProps.varianceRatio} * ${theResistorValue} + ${theResistorValue} = الحد الاعلى للمقاومة = قيمة المقاومة + قيمة * (نسبة الخطأ)`;
  }
}

function resetValues() {
  // Reset resistor band colors
  document.getElementById("band1").style.backgroundColor = "";
  document.getElementById("band2").style.backgroundColor = "";
  document.getElementById("band3").style.backgroundColor = "";
  document.getElementById("band4").style.backgroundColor = "";

  // Remove selected class from table rows
  document.querySelectorAll("tr").forEach(row => row.classList.remove("selected-color"));

  // Clear displayed values
  theNumber.innerHTML = "";
  multiplier.innerHTML = "";
  resistorValue.innerHTML = "";
  minValue.innerHTML = "";
  maxValue.innerHTML = "";
  step1_1.innerHTML = "";
  step1_2.innerHTML = "";
  step2_1.innerHTML = "";
  step2_2.innerHTML = "";
  step3_1.innerHTML = "";
  step3_2.innerHTML = "";
  step3_3.innerHTML = "";
  step4_1.innerHTML = "";
  step4_2.innerHTML = "";
  step4_3.innerHTML = "";


  // Reset internal variables
  theNumberValue = undefined;
  theResistorValue = undefined;

  // Reset dropdowns
  document.getElementById("colorSelect1").value = "";
  document.getElementById("colorSelect2").value = "";
  document.getElementById("colorSelect3").value = "";
  document.getElementById("colorSelect4").value = "";

  // Remove table transition class
  myTable.classList.remove('table-trans');
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
