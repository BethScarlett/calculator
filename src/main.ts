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
  if (numDisplay.innerText === "0" && oprDisplay.innerText === "=") {
    handleNumberClean(true);
  }

  if (numDisplay.innerText === "0" && isNewNumber === true) {
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
  if (numDisplay.innerText === "0" && oprDisplay.innerText === "=") {
    console.log("cleaning");
    handleNumberClean(true);
  }

  if (numDisplay.innerText === "0" || isNewNumber === true) {
    console.log(
      `Changing number. Display number = ${numDisplay.innerText}. isNewNumber = ${isNewNumber}`
    );
    numDisplay.innerText = oneButton.innerText;
    isNewNumber = false;
  } else {
    console.log("Appending number");
    numDisplay.innerText = numDisplay.innerText + oneButton.innerText;
  }
  isConversionFiring = false;
};
const getTwo = (event: Event) => {
  if (numDisplay.innerText === "0" && oprDisplay.innerText === "=") {
    handleNumberClean(true);
  }

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
  if (numDisplay.innerText === "0" && oprDisplay.innerText === "=") {
    handleNumberClean(true);
  }

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
  if (numDisplay.innerText === "0" && oprDisplay.innerText === "=") {
    handleNumberClean(true);
  }

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
  if (numDisplay.innerText === "0" && oprDisplay.innerText === "=") {
    handleNumberClean(true);
  }

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
  if (numDisplay.innerText === "0" && oprDisplay.innerText === "=") {
    handleNumberClean(true);
  }

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
  if (numDisplay.innerText === "0" && oprDisplay.innerText === "=") {
    handleNumberClean(true);
  }

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
  if (numDisplay.innerText === "0" && oprDisplay.innerText === "=") {
    handleNumberClean(true);
  }

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
  if (numDisplay.innerText === "0" && oprDisplay.innerText === "=") {
    handleNumberClean(true);
  }

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

//Event functions to perform operator calculations

const handleAddition = (event: Event) => {
  if (hasBeenCalculated) {
    hasBeenCalculated = false;
  } else {
    handleMidCalc();
  }
  opToUse = "+";
  handleSetNumbers();
};

const handleSubtraction = (event: Event) => {
  if (hasBeenCalculated) {
    hasBeenCalculated = false;
  } else {
    handleMidCalc();
  }
  opToUse = "-";
  handleSetNumbers();
};

const handleMultiplication = (event: Event) => {
  if (hasBeenCalculated) {
    hasBeenCalculated = false;
  } else {
    handleMidCalc();
  }
  opToUse = "X";
  handleSetNumbers();
};

const handleDivision = (event: Event) => {
  if (hasBeenCalculated) {
    hasBeenCalculated = false;
  } else {
    handleMidCalc();
  }
  opToUse = "/";
  handleSetNumbers();
};

const handlePercentage = (event: Event) => {
  if (hasBeenCalculated) {
    hasBeenCalculated = false;
  } else {
    handleMidCalc();
  }
  opToUse = "%";
  handleSetNumbers();
};

const handleEquals = (event: Event) => {
  console.log("Running calculation");
  if (!isEqualsFiring) {
    isEqualsFiring = true;
    storedNumTwo = Number(numDisplay.innerText);
  }

  switch (opToUse) {
    case "+": {
      total = storedNumOne + storedNumTwo;
      break;
    }
    case "-": {
      total = storedNumOne - storedNumTwo;
      break;
    }
    case "X": {
      total = storedNumOne * storedNumTwo;
      break;
    }
    case "/": {
      total = storedNumOne / storedNumTwo;
      break;
    }
    case "%": {
      total = (storedNumOne / 100) * storedNumTwo;
      break;
    }
  }
  numDisplay.innerText = total.toString();
  oprDisplay.innerText = "";
  oprDisplay.innerText = "=";
  storedNumOne = total;
  isNewNumber = true;
  isPointUsed();
  hasBeenCalculated = true;
};

const handleMidCalc = () => {
  storedNumTwo = Number(numDisplay.innerText);
  switch (opToUse) {
    case "+": {
      total = storedNumOne + storedNumTwo;
      break;
    }
    case "-": {
      total = storedNumOne - storedNumTwo;
      break;
    }
    case "X": {
      total = storedNumOne * storedNumTwo;
      break;
    }
    case "/": {
      total = storedNumOne / storedNumTwo;
      break;
    }
    case "%": {
      total = (storedNumOne / 100) * storedNumTwo;
    }
  }
  numDisplay.innerText = total.toString();
};

//Functions to handle checks
const isPointUsed = () => {
  const testString: string[] = numDisplay.innerText.split(".");
  const testString2: string = testString.join("");
  if (testString2 === numDisplay.innerText) {
    hasPoint = false;
  } else {
    hasPoint = true;
  }
};

//Functions to handle setting/resetting values
const handleClear = (event: Event) => {
  handleNumberClean(true);
};

const handleNumberClean = (forceClean: boolean) => {
  if (oprDisplay.innerText === "=" || forceClean === true) {
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
  } else {
  }
};

const handleSetNumbers = () => {
  storedNumOne = Number(numDisplay.innerText);
  numDisplay.innerText = "0";
  oprDisplay.innerText = "";
  oprDisplay.innerText = `${storedNumOne} ${opToUse}`;
  isEqualsFiring = false;
  isNewNumber = true;
  hasPoint = false;
};

const handleConversion = (event: Event) => {
  if (!isConversionFiring && numDisplay.innerText !== "0") {
    numDisplay.innerText =
      "-" + Math.abs(Number(numDisplay.innerText)).toString();
    isConversionFiring = true;
  } else {
    numDisplay.innerText = Math.abs(Number(numDisplay.innerText)).toString();
    isConversionFiring = false;
  }
};

const handlePoint = () => {
  if (!hasPoint) {
    numDisplay.innerText = numDisplay.innerText + ".";
    hasPoint = true;
    isNewNumber = false;
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
