import "./style.scss";

//Use query selectors to gain access to HTML elements, namely buttons and display
const numDisplay =
  document.querySelector<HTMLHeadingElement>(".number-display");
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

//Handle any NULL exceptions by throwing errors if element doesn't exist
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
  throw new Error("Error with buttons");
}

//Null Exceptions for display
if (!numDisplay) {
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

//Add event listeners to buttons to enable click
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
