const myTable = document.querySelector("table");
function getColorName(colorVal) {
  const colorMap = {
    "#000000": "black",
    "#964B00": "brown",
    "#FF0000": "red",
    "#FFA500": "orange",
    "#FFFF00": "yellow",
    "#008000": "green",
    "#0000FF": "blue",
    "#800080": "violet",
    "#808080": "gray",
    "#FFFFFF": "white",
    "#FFD700": "gold",
    "#C0C0C0": "silver"
  };
  return colorMap[colorVal] || ""; 
}

function setColor(bandId, color) {
  document.getElementById(bandId).style.backgroundColor = color;
  myTable.classList.add('table-trans');
  let colorName = getColorName(color);
  document.getElementById(colorName).classList.add('selected-color');
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
