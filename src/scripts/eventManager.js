console.log("eventHandler.js");


// Some starter code
document.querySelector("#btn_lego_save").addEventListener("click", event => {
    const creatorInput = document.querySelector("#save-lego-creator").value;
    const colorInput = document.querySelector("#save-color-select").value;
    const shapeInput = document.querySelector("#save-lego-shape").value;
    const creationInput = document.querySelector("#save-lego-creation").value;
    // Once you have collected all the values, build your data structure
    const legoToSave = {
        creator: creatorInput,
        color: colorInput,
        shape: shapeInput,
        creation: creationInput
    }

    console.log("new creation: ", legoToSave);
    fetch("http://localhost:8088/legos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(legoToSave);
    })
});