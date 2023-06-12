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

function startSubscription() {
    console.log("Chegou aqui!");
}

function showSettings() {
    const settingsElement = document.getElementById("panel-settings");
    settingsElement.hidden = false;
}

function hideSettings() {
    const settingsElement = document.getElementById("panel-settings");
    settingsElement.hidden = true;
}