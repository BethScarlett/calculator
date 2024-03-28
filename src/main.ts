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

//Initialising variables to store numbers & operators for calculation
let storedNumOne: number = 0;
let storedNumTwo: number = 0;
let total: number = 0;
let opToUse: string = "";
let isFiring: boolean = false;

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
  !equalsButton
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
  numDisplay.innerText = zeroButton.innerText;
};
const getOne = (event: Event) => {
  //console.log("Event: ", event);
  numDisplay.innerText = oneButton.innerText;
};
const getTwo = (event: Event) => {
  //console.log("Event: ", event);
  numDisplay.innerText = twoButton.innerText;
};
const getThree = (event: Event) => {
  //console.log("Event: ", event);
  numDisplay.innerText = threeButton.innerText;
};
const getFour = (event: Event) => {
  //console.log("Event: ", event);
  numDisplay.innerText = fourButton.innerText;
};
const getFive = (event: Event) => {
  //console.log("Event: ", event);
  numDisplay.innerText = fiveButton.innerText;
};
const getSix = (event: Event) => {
  //console.log("Event: ", event);
  numDisplay.innerText = sixButton.innerText;
};
const getSeven = (event: Event) => {
  //console.log("Event: ", event);
  numDisplay.innerText = sevenButton.innerText;
};
const getEight = (event: Event) => {
  //console.log("Event: ", event);
  numDisplay.innerText = eightButton.innerText;
};
const getNine = (event: Event) => {
  //console.log("Event: ", event);
  numDisplay.innerText = nineButton.innerText;
};

//Event functions to perform calculations
//When operator button is clicked the current display value should be stored but only if it's a number
//If input is valid, a new number can be clicked
//If input is invalid, an error should be displayed
//When equals or another operator is pressed previous operator calculation should be performed and stored if necessary
//Pressing clear should set display and stored numbers to zero

const handleAddition = (event: Event) => {
  //console.log("Event: ", event);
  storedNumOne = Number(numDisplay.innerText);
  console.log("Number one is: " + storedNumOne);
  oprDisplay.innerText = "";
  oprDisplay.innerText = "+";
  opToUse = "+";
  isFiring = false;
};

const handleSubtraction = (event: Event) => {
  //console.log("Event: ", event);
  storedNumOne = Number(numDisplay.innerText);
  console.log("Number one is: " + storedNumOne);
  oprDisplay.innerText = "";
  oprDisplay.innerText = "-";
  opToUse = "-";
  isFiring = false;
};

const handleMultiplication = (event: Event) => {
  //console.log("Event: ", event);
  storedNumOne = Number(numDisplay.innerText);
  console.log("Number one is: " + storedNumOne);
  oprDisplay.innerText = "";
  oprDisplay.innerText = "*";
  opToUse = "*";
  isFiring = false;
};

const handleDivision = (event: Event) => {
  //console.log("Event: ", event);
  storedNumOne = Number(numDisplay.innerText);
  console.log("Number one is: " + storedNumOne);
  oprDisplay.innerText = "";
  oprDisplay.innerText = "/";
  opToUse = "/";
  isFiring = false;
};

//When equals is pressed, it should take whatever is currently displayed and add it to the first stored number to output a total
//If equals is pressed again, it should perform calculation again but with total instead of numOne
const handleEquals = (event: Event) => {
  //console.log("Event: ", event);

  if (!isFiring) {
    isFiring = true;
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
    case "*": {
      console.log("Subtraction number one is: " + storedNumOne);
      console.log("Subtraction number two is: " + storedNumTwo);
      total = storedNumOne * storedNumTwo;
      break;
    }
    case "/": {
      console.log("Subtraction number one is: " + storedNumOne);
      console.log("Subtraction number two is: " + storedNumTwo);
      total = storedNumOne / storedNumTwo;
      break;
    }
  }
  console.log(total);
  numDisplay.innerText = total.toString();
  oprDisplay.innerText = "";
  oprDisplay.innerText = "=";
  storedNumOne = total;
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
