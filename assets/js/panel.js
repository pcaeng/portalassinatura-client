function goToFirstStep() {
    const firstStepElement = document.getElementById("panel-1");
    firstStepElement.hidden = false;

    const secondStepElement = document.getElementById("panel-2");
    secondStepElement.hidden = true;
}

function goToSecondStep() {
    const firstStepElement = document.getElementById("panel-1");
    firstStepElement.hidden = true;

    const secondStepElement = document.getElementById("panel-2");
    secondStepElement.hidden = false;

    const lastStepElement = document.getElementById("panel-3");
    lastStepElement.hidden = true;
}

function goToLastStep() {
    const secondStepElement = document.getElementById("panel-2");
    secondStepElement.hidden = true;

    const lastStepElement = document.getElementById("panel-3");
    lastStepElement.hidden = false;
}

function showSettings() {
    const settingsElement = document.getElementById("panel-config");
    settingsElement.hidden = false;
}

function hideSettings() {
    const settingsElement = document.getElementById("panel-config");
    settingsElement.hidden = true;
}

function voltarParaPrimeiroPainel() {
    const lastStepElement = document.getElementById("panel-3");
    lastStepElement.hidden = true;

    const firstStepElement = document.getElementById("panel-2");
    firstStepElement.hidden = false;
}

function showEmbeddedPortal(signatureId) {
    const main = document.getElementById("main");
    main.hidden = true;

    const embeddedPortal_div = document.getElementById("panel-embedded");
    const embeddedPortal = document.getElementById("pca-signature");
    embeddedPortal.setAttribute("data-pca-signature-id", signatureId);

    embeddedPortal_div.hidden = false;
}
