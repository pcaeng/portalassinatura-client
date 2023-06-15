function goToFirstStep() {
    const firstStepElement = document.getElementById("panel-step-1");
    firstStepElement.hidden = false;

    const secondStepElement = document.getElementById("panel-step-2");
    secondStepElement.hidden = true;
}

function goToSecondStep() {    
    const firstStepElement = document.getElementById("panel-step-1");
    firstStepElement.hidden = true;

    const secondStepElement = document.getElementById("panel-step-2");
    secondStepElement.hidden = false;

    const lastStepElement = document.getElementById("panel-step-3");
    lastStepElement.hidden = true;
}

function goToLastStep() {
    const secondStepElement = document.getElementById("panel-step-2");
    secondStepElement.hidden = true;

    const lastStepElement = document.getElementById("panel-step-3");
    lastStepElement.hidden = false;
}

function showDocumentRow() {
    const hideDocumentRow = document.getElementById("hideDocumentRow");
    hideDocumentRow.hidden = false;
}

function hideDocumentRow() {
    const hideDocumentRow = document.getElementById("hideDocumentRow");
    hideDocumentRow.hidden = true;
}

function showSettings() {
    const settingsElement = document.getElementById("panel-settings");
    settingsElement.hidden = false;
}

function hideSettings() {
    const settingsElement = document.getElementById("panel-settings");
    settingsElement.hidden = true;
}