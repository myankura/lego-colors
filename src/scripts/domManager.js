console.log("domManager.js");
const buildElement = (elementType, elementId, elementTextContent, elementValue) => {
  let htmlElement = document.createElement(elementType);
  if (elementId) {
    htmlElement.setAttribute("id", elementId);
  }
  if (elementValue) {
    htmlElement.setAttribute("value", elementValue);
  }
  htmlElement.textContent = elementTextContent;
  return htmlElement;
};

// const clearElement = domElement => {
//   while (domElement.firstChild) {
//     domElement.removeChild(domElement.firstChild);
//   }
// };

const buildOption = (optionValue, optionText) => {
  let optionElement = document.querySelector("#save-color-select");
  optionElement = document.createElement("option");
  optionElement.setAttribute("name", optionValue);
  optionElement.textContent = optionText;
  return optionElement;
}

const displayContainer = document.querySelector("#display-container");
displayContainer.appendChild(buildElement("section", "lego--creations"));

let legoSaveFragment = document.createDocumentFragment();

//save creator feature
let creatorEl = document.createElement("fieldset")
creatorEl.appendChild(buildElement("label", undefined, "Creator: "));
creatorEl.appendChild(buildElement("input", "save-lego-creator", undefined));
legoSaveFragment.appendChild(creatorEl);
//save color feature
let colorEl = document.createElement("fieldset");
colorEl.appendChild(buildElement("label", undefined, "Color: "));
let selectEl = colorEl.appendChild(buildElement("select", "save-color-select"));
// colorEl.appendChild(buildElement("input", "save-lego-color", undefined));
selectEl.appendChild(buildOption("blue", "Blue"));
selectEl.appendChild(buildOption("red", "Red"));
selectEl.appendChild(buildOption("green", "Green"));
selectEl.appendChild(buildOption("yellow", "Yellow"));
selectEl.appendChild(buildOption("orange", "Orange"));
selectEl.appendChild(buildOption("purple", "Purple"));
selectEl.appendChild(buildOption("pink", "Pink"));
selectEl.appendChild(buildOption("brown", "Brown"));
selectEl.appendChild(buildOption("black", "Black"));
selectEl.appendChild(buildOption("white", "White"));
legoSaveFragment.appendChild(colorEl);

//save shape feature
let shapeEl = document.createElement("fieldset");
shapeEl.appendChild(buildElement("label", undefined, "Shape: "));
shapeEl.appendChild(buildElement("input", "save-lego-shape", undefined));
legoSaveFragment.appendChild(shapeEl);
//save creation feature
let creationEl = document.createElement("fieldset");
creationEl.appendChild(buildElement("label", undefined, "Creation"));
creationEl.appendChild(buildElement("input", "save-lego-creation", undefined));
//save button feature
legoSaveFragment.appendChild(creationEl);
const saveLegoButton = buildElement("button", "btn_lego_save", "Save Lego Creation");
// saveLegoButton.addEventListener("click", handleSave);
legoSaveFragment.appendChild(saveLegoButton);

displayContainer.appendChild(legoSaveFragment);