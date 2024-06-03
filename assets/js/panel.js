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
function confirmarDocumentos() {
    const form = document.getElementById('documentos_form');
    if (form.checkValidity()) {
      goToLastStep(); // Substitua por sua função para ir ao próximo passo
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  }
  function confirmarAssinaturas() {
    document.getElementById('loading').style.display = 'flex';
    document.getElementById('Btnassinatura').style.display = 'none';
    
    debugger
    const form = document.getElementById('assinaturas_form');
    const invalidFields = [];
    
    // Percorre todos os elementos do formulário e verifica quais são inválidos
    for (const element of form.elements) {
        if (!element.checkValidity()) {
          let placeholder = element.placeholder;

          if (element.id === 'cus-nameDoc0') {
            placeholder = 'Selecione um documento';
          }
          if (element.id === 'cus-party0') {
            placeholder = 'Selecione uma representação';
          }
          
          invalidFields.push(` ${placeholder}`);
        }
      }
  
    if (invalidFields.length > 0) {
      const errorMessage = invalidFields.join('\n');
      alert(`Por favor, preencha os seguintes campos obrigatórios:\n${errorMessage}`);
      document.getElementById('loading').style.display = 'none';
      document.getElementById('Btnassinatura').style.display = 'flex';
    } else {
      
      setTimeout(handleSubmit, 1000);// Substitua por sua função para iniciar o processo de assinatura
    }
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

function showEmbeddedPortal(signatureId, length, cpf, birthdate) {
    const lastStepElement = document.getElementById("panel-3");
    lastStepElement.hidden = true;

    const embeddedPortal_div = document.getElementById("panel-embedded");
    const embeddedPortal = document.getElementById("pca-signature");
    embeddedPortal.setAttribute("data-pca-signature-id", signatureId);

    if (length == 1) {
        embeddedPortal.setAttribute("data-pca-signature-info", `{ "cpf":"${cpf}", "birthdate":"${birthdate}" }`);
    }  

    const script = document.createElement("script");
    script.src = "https://stage3.pca.com.br/PortalAssinatura/cdn/pca-signature.js";
    script.defer = true;

    script.onload = function() {
        // O script foi carregado, agora você pode mostrar o portal incorporado
        embeddedPortal_div.hidden = false;
    };

    document.body.appendChild(script);
}
