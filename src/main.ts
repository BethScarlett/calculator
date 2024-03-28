import "./style.scss";

//Use query selectors to gain access to HTML elements, namely buttons and display
//Getting number and operator displays
const numDisplay =
  document.querySelector<HTMLHeadingElement>(".number-display");
const oprDisplay =
  document.querySelector<HTMLHeadingElement>(".operator-display");

//Getting number buttons
const zeroButton = document.querySelector<HTMLButtonElement>("#zero");
const oneButton = document.querySelector<HTMLButtonElement>("#one");
const twoButton = document.querySelector<HTMLButtonElement>("#two");
const threeButton = document.querySelector<HTMLButtonElement>("#three");
const fourButton = document.querySelector<HTMLButtonElement>("#four");
const fiveButton = document.querySelector<HTMLButtonElement>("#five");
const sixButton = document.querySelector<HTMLButtonElement>("#six");
const sevenButton = document.querySelector<HTMLButtonElement>("#seven");
const eightButton = document.querySelector<HTMLButtonElement>("#eight");
const nineButton = document.querySelector<HTMLButtonElement>("#nine");

//Getting operator buttons
const plusButton = document.querySelector<HTMLButtonElement>("#plus");
const minusButton = document.querySelector<HTMLButtonElement>("#minus");
const multiplyButton = document.querySelector<HTMLButtonElement>("#multiply");
const divideButton = document.querySelector<HTMLButtonElement>("#divide");
const equalsButton = document.querySelector<HTMLButtonElement>("#equals");
const clearButton = document.querySelector<HTMLButtonElement>("#clear");
const positiveNegativeButton =
  document.querySelector<HTMLButtonElement>("#positive-negative");
const percentageButton = document.querySelector<HTMLButtonElement>("#percent");
const pointButton = document.querySelector<HTMLButtonElement>("#point");

//Initialising variables to store numbers & operators for calculation
let storedNumOne: number = 0;
let storedNumTwo: number = 0;
let total: number = 0;
let opToUse: string = "";
let isEqualsFiring: boolean = false;
let isConversionFiring: boolean = false;
let isNewNumber: boolean = true;
let hasPoint: boolean = false;
let hasBeenCalculated: boolean = true;

//Handle any NULL exceptions by throwing errors if element doesn't exist
//Null exceptions for number buttons
if (
  !zeroButton ||
  !oneButton ||
  !twoButton ||
  !threeButton ||
  !fourButton ||
  !fiveButton ||
  !sixButton ||
  !sevenButton ||
  !eightButton ||
  !nineButton
) {
  throw new Error("Error with numbers");
}

//Null exceptions for operators
if (
  !plusButton ||
  !minusButton ||
  !multiplyButton ||
  !divideButton ||
  !equalsButton ||
  !clearButton ||
  !positiveNegativeButton ||
  !percentageButton ||
  !pointButton
) {
  throw new Error("Error with operators");
}

//Null Exceptions for displays
if (!numDisplay || !oprDisplay) {
  throw new Error("Error with display");
}

//Event functions to send clicked button value to display
const getZero = (event: Event) => {
  //console.log("Event: ", event);
  if (numDisplay.innerText === "0" || isNewNumber === true) {
    console.log("Changing number");
    numDisplay.innerText = zeroButton.innerText;
    isNewNumber = false;
  } else {
    console.log("Appending number");
    numDisplay.innerText = numDisplay.innerText + zeroButton.innerText;
  }
  isConversionFiring = false;
};
const getOne = (event: Event) => {
  //console.log("Event: ", event);
  if (numDisplay.innerText === "0" || isNewNumber === true) {
    console.log("Changing number");
    numDisplay.innerText = oneButton.innerText;
    isNewNumber = false;
  } else {
    console.log("Appending number");
    numDisplay.innerText = numDisplay.innerText + oneButton.innerText;
  }
  isConversionFiring = false;
};
const getTwo = (event: Event) => {
  //console.log("Event: ", event);
  if (numDisplay.innerText === "0" || isNewNumber === true) {
    console.log("Changing number");
    numDisplay.innerText = twoButton.innerText;
    isNewNumber = false;
  } else {
    console.log("Appending number");
    numDisplay.innerText = numDisplay.innerText + twoButton.innerText;
  }
  isConversionFiring = false;
};
const getThree = (event: Event) => {
  //console.log("Event: ", event);
  if (numDisplay.innerText === "0" || isNewNumber === true) {
    console.log("Changing number");
    numDisplay.innerText = threeButton.innerText;
    isNewNumber = false;
  } else {
    console.log("Appending number");
    numDisplay.innerText = numDisplay.innerText + threeButton.innerText;
  }
  isConversionFiring = false;
};
const getFour = (event: Event) => {
  //console.log("Event: ", event);
  if (numDisplay.innerText === "0" || isNewNumber === true) {
    console.log("Changing number");
    numDisplay.innerText = fourButton.innerText;
    isNewNumber = false;
  } else {
    console.log("Appending number");
    numDisplay.innerText = numDisplay.innerText + fourButton.innerText;
  }
  isConversionFiring = false;
};
const getFive = (event: Event) => {
  //console.log("Event: ", event);
  if (numDisplay.innerText === "0" || isNewNumber === true) {
    console.log("Changing number");
    numDisplay.innerText = fiveButton.innerText;
    isNewNumber = false;
  } else {
    console.log("Appending number");
    numDisplay.innerText = numDisplay.innerText + fiveButton.innerText;
  }
  isConversionFiring = false;
};
const getSix = (event: Event) => {
  //console.log("Event: ", event);
  if (numDisplay.innerText === "0" || isNewNumber === true) {
    console.log("Changing number");
    numDisplay.innerText = sixButton.innerText;
    isNewNumber = false;
  } else {
    console.log("Appending number");
    numDisplay.innerText = numDisplay.innerText + sixButton.innerText;
  }
  isConversionFiring = false;
};
const getSeven = (event: Event) => {
  //console.log("Event: ", event);
  if (numDisplay.innerText === "0" || isNewNumber === true) {
    console.log("Changing number");
    numDisplay.innerText = sevenButton.innerText;
    isNewNumber = false;
  } else {
    console.log("Appending number");
    numDisplay.innerText = numDisplay.innerText + sevenButton.innerText;
  }
  isConversionFiring = false;
};
const getEight = (event: Event) => {
  //console.log("Event: ", event);
  if (numDisplay.innerText === "0" || isNewNumber === true) {
    console.log("Changing number");
    numDisplay.innerText = eightButton.innerText;
    isNewNumber = false;
  } else {
    console.log("Appending number");
    numDisplay.innerText = numDisplay.innerText + eightButton.innerText;
  }
  isConversionFiring = false;
};
const getNine = (event: Event) => {
  //console.log("Event: ", event);
  if (numDisplay.innerText === "0" || isNewNumber === true) {
    console.log("Changing number");
    numDisplay.innerText = nineButton.innerText;
    isNewNumber = false;
  } else {
    console.log("Appending number");
    numDisplay.innerText = numDisplay.innerText + nineButton.innerText;
  }
  isConversionFiring = false;
};

//Event functions to perform calculations
//Run calculation when operator is pressed if two numbers are stored

const handleAddition = (event: Event) => {
  //console.log("Event: ", event);
  if (hasBeenCalculated) {
    storedNumOne = Number(numDisplay.innerText);
    numDisplay.innerText = "0";
    console.log("Number one is: " + storedNumOne);
    oprDisplay.innerText = "";
    oprDisplay.innerText = storedNumOne + " +";
    opToUse = "+";
    isEqualsFiring = false;
    isNewNumber = true;
    hasPoint = false;
    hasBeenCalculated = false;
  } else {
    handleMidCalc();
    storedNumOne = Number(numDisplay.innerText);
    numDisplay.innerText = "0";
    console.log("Number one is: " + storedNumOne);
    oprDisplay.innerText = "";
    oprDisplay.innerText = storedNumOne + " +";
    opToUse = "+";
    isEqualsFiring = false;
    isNewNumber = true;
    hasPoint = false;
  }
};

const handleSubtraction = (event: Event) => {
  //console.log("Event: ", event);
  if (hasBeenCalculated) {
    storedNumOne = Number(numDisplay.innerText);
    numDisplay.innerText = "0";
    console.log("Number one is: " + storedNumOne);
    oprDisplay.innerText = "";
    oprDisplay.innerText = storedNumOne + " -";
    opToUse = "-";
    isEqualsFiring = false;
    isNewNumber = true;
    hasPoint = false;
    hasBeenCalculated = false;
  } else {
    handleMidCalc();
    storedNumOne = Number(numDisplay.innerText);
    numDisplay.innerText = "0";
    console.log("Number one is: " + storedNumOne);
    oprDisplay.innerText = "";
    oprDisplay.innerText = storedNumOne + " -";
    opToUse = "+";
    isEqualsFiring = false;
    isNewNumber = true;
    hasPoint = false;
  }
};

const handleMultiplication = (event: Event) => {
  //console.log("Event: ", event);
  if (hasBeenCalculated) {
    storedNumOne = Number(numDisplay.innerText);
    numDisplay.innerText = "0";
    console.log("Number one is: " + storedNumOne);
    oprDisplay.innerText = "";
    oprDisplay.innerText = storedNumOne + " X";
    opToUse = "X";
    isEqualsFiring = false;
    isNewNumber = true;
    hasPoint = false;
    hasBeenCalculated = false;
  } else {
    handleMidCalc();
    storedNumOne = Number(numDisplay.innerText);
    numDisplay.innerText = "0";
    console.log("Number one is: " + storedNumOne);
    oprDisplay.innerText = "";
    oprDisplay.innerText = storedNumOne + " X";
    opToUse = "X";
    isEqualsFiring = false;
    isNewNumber = true;
    hasPoint = false;
  }
};

const handleDivision = (event: Event) => {
  //console.log("Event: ", event);
  if (hasBeenCalculated) {
    storedNumOne = Number(numDisplay.innerText);
    numDisplay.innerText = "0";
    console.log("Number one is: " + storedNumOne);
    oprDisplay.innerText = "";
    oprDisplay.innerText = storedNumOne + " /";
    opToUse = "/";
    isEqualsFiring = false;
    isNewNumber = true;
    hasPoint = false;
    hasBeenCalculated = false;
  } else {
    handleMidCalc();
    storedNumOne = Number(numDisplay.innerText);
    numDisplay.innerText = "0";
    console.log("Number one is: " + storedNumOne);
    oprDisplay.innerText = "";
    oprDisplay.innerText = storedNumOne + " /";
    opToUse = "/";
    isEqualsFiring = false;
    isNewNumber = true;
    hasPoint = false;
  }
};

const handleEquals = (event: Event) => {
  //console.log("Event: ", event);
  console.log("Running calculation");
  if (!isEqualsFiring) {
    isEqualsFiring = true;
    storedNumTwo = Number(numDisplay.innerText);
    console.log("Number two is :" + storedNumTwo);
  } else {
    console.log("firing");
  }

  switch (opToUse) {
    case "+": {
      console.log("Addition number one is: " + storedNumOne);
      console.log("Addition number two is: " + storedNumTwo);
      total = storedNumOne + storedNumTwo;
      break;
    }
    case "-": {
      console.log("Subtraction number one is: " + storedNumOne);
      console.log("Subtraction number two is: " + storedNumTwo);
      total = storedNumOne - storedNumTwo;
      break;
    }
    case "X": {
      console.log("Multiplication number one is: " + storedNumOne);
      console.log("Multiplication number two is: " + storedNumTwo);
      total = storedNumOne * storedNumTwo;
      break;
    }
    case "/": {
      console.log("Division number one is: " + storedNumOne);
      console.log("Division number two is: " + storedNumTwo);
      total = storedNumOne / storedNumTwo;
      break;
    }
    case "%": {
      //Note: Actual % on calc just divides number by 100.
      //User must put x multiplied by y then % to get y% of x. Currently works but maybe change later
      console.log("Percentage number one is: " + storedNumOne);
      console.log("Percentage number two is: " + storedNumTwo);
      total = (storedNumOne / 100) * storedNumTwo;
    }
  }
  console.log(total);
  numDisplay.innerText = total.toString();
  oprDisplay.innerText = "";
  oprDisplay.innerText = "=";
  storedNumOne = total;
  isNewNumber = true;
  hasPoint = false;
  //hasBeenCalculated = true;
};

const handleMidCalc = () => {
  storedNumTwo = Number(numDisplay.innerText);
  switch (opToUse) {
    case "+": {
      console.log("Addition number one is: " + storedNumOne);
      console.log("Addition number two is: " + storedNumTwo);
      total = storedNumOne + storedNumTwo;
      break;
    }
    case "-": {
      console.log("Subtraction number one is: " + storedNumOne);
      console.log("Subtraction number two is: " + storedNumTwo);
      total = storedNumOne - storedNumTwo;
      break;
    }
    case "X": {
      console.log("Multiplication number one is: " + storedNumOne);
      console.log("Multiplication number two is: " + storedNumTwo);
      total = storedNumOne * storedNumTwo;
      break;
    }
    case "/": {
      console.log("Division number one is: " + storedNumOne);
      console.log("Division number two is: " + storedNumTwo);
      total = storedNumOne / storedNumTwo;
      break;
    }
    case "%": {
      //Note: Actual % on calc just divides number by 100.
      //User must put x multiplied by y then % to get y% of x. Currently works but maybe change later
      console.log("Percentage number one is: " + storedNumOne);
      console.log("Percentage number two is: " + storedNumTwo);
      total = (storedNumOne / 100) * storedNumTwo;
    }
  }
  console.log(total);
  numDisplay.innerText = total.toString();
};

const handleClear = (event: Event) => {
  //console.log("Event: ", event);
  storedNumOne = 0;
  numDisplay.innerText = "0";
  storedNumTwo = 0;
  total = 0;
  opToUse = "";
  oprDisplay.innerText = "";
  isEqualsFiring = false;
  isConversionFiring = false;
  isNewNumber = true;
  hasPoint = false;
  hasBeenCalculated = true;
  console.log(
    `Stored num one: ${storedNumOne}, stored num two: ${storedNumTwo}, total: ${total}, optouse: ${opToUse}, isEqualsfiring: ${isEqualsFiring}, isConversionFiring: ${isConversionFiring}, isNewNumber: ${isConversionFiring}, hasPoint: ${hasPoint}, hasBeenCalculated: ${hasBeenCalculated}`
  );
};

const handleConversion = (event: Event) => {
  //console.log("Event: ", event);
  if (!isConversionFiring) {
    numDisplay.innerText = -Math.abs(Number(numDisplay.innerText)).toString();
    isConversionFiring = true;
  } else {
    numDisplay.innerText = Math.abs(Number(numDisplay.innerText)).toString();
    isConversionFiring = false;
  }
};

const handlePercentage = (event: Event) => {
  //console.log("Event: ", event);
  if (hasBeenCalculated) {
    storedNumOne = Number(numDisplay.innerText);
    numDisplay.innerText = "0";
    console.log("Number one is: " + storedNumOne);
    oprDisplay.innerText = "";
    oprDisplay.innerText = storedNumOne + " %";
    opToUse = "%";
    isEqualsFiring = false;
    isNewNumber = true;
    hasPoint = false;
    hasBeenCalculated = false;
  } else {
    handleMidCalc();
    storedNumOne = Number(numDisplay.innerText);
    numDisplay.innerText = "0";
    console.log("Number one is: " + storedNumOne);
    oprDisplay.innerText = "";
    oprDisplay.innerText = storedNumOne + " %";
    opToUse = "%";
    isEqualsFiring = false;
    isNewNumber = true;
    hasPoint = false;
  }
};

//Add a point but only if one isn't already used
//Additionally clicked numbers should be appended after the point
const handlePoint = () => {
  //console.log("Event: ", event);
  if (!hasPoint) {
    numDisplay.innerText = numDisplay.innerText + ".";
    hasPoint = true;
  }
};

//Add event listeners to number buttons to enable click
zeroButton.addEventListener("click", getZero);
oneButton.addEventListener("click", getOne);
twoButton.addEventListener("click", getTwo);
threeButton.addEventListener("click", getThree);
fourButton.addEventListener("click", getFour);
fiveButton.addEventListener("click", getFive);
sixButton.addEventListener("click", getSix);
sevenButton.addEventListener("click", getSeven);
eightButton.addEventListener("click", getEight);
nineButton.addEventListener("click", getNine);

//Add event listeners to operator buttons
plusButton.addEventListener("click", handleAddition);
minusButton.addEventListener("click", handleSubtraction);
multiplyButton.addEventListener("click", handleMultiplication);
divideButton.addEventListener("click", handleDivision);
equalsButton.addEventListener("click", handleEquals);
clearButton.addEventListener("click", handleClear);
positiveNegativeButton.addEventListener("click", handleConversion);
percentageButton.addEventListener("click", handlePercentage);
pointButton.addEventListener("click", handlePoint);
