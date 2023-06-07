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

    const subscription = document.getElementById("panel-subscription");
    subscription.hidden = true;
}

function startSubscription() {
    const lastStepElement = document.getElementById("panel-step-3");
    lastStepElement.hidden = true;

    const subscription = document.getElementById("panel-subscription");
    subscription.hidden = false;
}

function showSettings() {
    const settingsElement = document.getElementById("panel-settings");
    settingsElement.hidden = false;
}

function hideSettings() {
    const settingsElement = document.getElementById("panel-settings");
    settingsElement.hidden = true;
}

document.getElementById('fileName0').onchange = function () {
    var value = this.value;
    var path = value.match(/[^\\/]*$/)[0];
    document.getElementById('fileName0-value').innerHTML = path;
}

document.getElementById('sub-fileName0').onchange = function () {
    var value = this.value;
    var path = value.match(/[^\\/]*$/)[0];
    document.getElementById('sub-fileName0-value').innerHTML = path;
}