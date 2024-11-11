// Map of color properties
const colorCodes = {
    black: { value: 0, multiplier: 1, tolerance: null },
    brown: { value: 1, multiplier: 10, tolerance: "±1%" },
    red: { value: 2, multiplier: 100, tolerance: "±2%" },
    orange: { value: 3, multiplier: 1000, tolerance: "±0.5%" },
    yellow: { value: 4, multiplier: 10000, tolerance: "±0.25%" },
    green: { value: 5, multiplier: 100000, tolerance: "±0.1%" },
    blue: { value: 6, multiplier: 1000000, tolerance: "±0.05%" },
    violet: { value: 7, multiplier: 10000000, tolerance: "±0.1%" },
    gray: { value: 8, multiplier: 100000000, tolerance: "±0.05%" },
    white: { value: 9, multiplier: 1000000000, tolerance: "±0.01%" },
    gold: { value: null, multiplier: 0.1, tolerance: "±5%" },
    silver: { value: null, multiplier: 0.01, tolerance: "±10%" }
  };
  
  // Values for calculation
  let resistanceValue = "";
  let multiplier = 1;
  let tolerance = "";
  
  // Function to add steps without removing previous steps
  function addStepInfo(stepText) {
    const stepInfoContainer = document.getElementById("step-info");
    const stepParagraph = document.createElement("p");
    stepParagraph.innerText = stepText;
    stepInfoContainer.appendChild(stepParagraph);
  }
  
  function updateResistor(step) {
    const color = document.getElementById(`color${step}`).value;
  
    if (step === 1 || step === 2) {
      // Update resistance digits
      resistanceValue += colorCodes[color].value;
      addStepInfo(`الخطوة ${step}-1: الرقم أصبح ${resistanceValue}`);
    } else if (step === 3) {
      // Update multiplier
      multiplier = colorCodes[color].multiplier;
      addStepInfo(`الخطوة 3-1: المضاعف أصبح ${multiplier}`);
    } else if (step === 4) {
      // Update tolerance
      tolerance = colorCodes[color].tolerance;
      addStepInfo(`الخطوة 4-1: نسبة التفاوت هي ${tolerance}`);
    }
  
    // Calculate resistance if 3 bands are selected
    if (step === 3) {
      const resistance = parseInt(resistanceValue) * multiplier;
      document.getElementById("resistance-value").innerText = `قيمة المقاومة: ${resistance} Ω`;
      addStepInfo(`الخطوة 3-3: المقاومة هي ${resistance} Ω`);
    }
  
    // Display min and max values if 4 bands are selected
    if (step === 4) {
      const resistance = parseInt(resistanceValue) * multiplier;
      const toleranceValue = parseFloat(tolerance.replace("±", "").replace("%", "")) / 100;
      const minValue = resistance - (resistance * toleranceValue);
      const maxValue = resistance + (resistance * toleranceValue);
  
      document.getElementById("min-max").innerText = `الحد الأدنى: ${minValue} Ω، الحد الأقصى: ${maxValue} Ω`;
      addStepInfo(`الخطوة 4-2: الحد الأدنى للمقاومة هو ${minValue} Ω`);
      addStepInfo(`الخطوة 4-3: الحد الأقصى للمقاومة هو ${maxValue} Ω`);
    }
  }
  
  function resetAll() {
    resistanceValue = "";
    multiplier = 1;
    tolerance = "";
    document.getElementById("step-info").innerHTML = "";  // Clear all previous steps
    document.getElementById("resistance-value").innerText = "";
    document.getElementById("tolerance-value").innerText = "";
    document.getElementById("min-max").innerText = "";
  }
  