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
document.addEventListener('DOMContentLoaded', function() {
  var linhas = document.querySelectorAll('#documentos .row');

  linhas.forEach(function(linha) {
    var select = linha.querySelector('select');
    var descricao = linha.querySelector('input[name="description"]');
    var arquivo = linha.querySelector('input[type="file"]');
    var errorMessageSelect = linha.querySelector('.error-message[data-field="doc-name"]');
    var errorMessageDescricao = linha.querySelector('.error-message[data-field="doc-desc"]');
    var errorMessageArquivo = linha.querySelector('.error-message[data-field="doc-fileName"]');

    select.addEventListener('change', function() {
      if (select.value) {
        select.classList.remove('invalid');
        errorMessageSelect.innerText = "";
      }
    });

    descricao.addEventListener('input', function() {
      if (descricao.value) {
        descricao.classList.remove('invalid');
        errorMessageDescricao.innerText = "";
      }
    });

    arquivo.addEventListener('change', function() {
      if (arquivo.value) {
        arquivo.classList.remove('invalid');
        errorMessageArquivo.innerText = "";
      }
    });
  });
});

function validarFormulario() {
  var linhas = document.querySelectorAll('#documentos .row');
  var isValid = true;

  for (var i = 0; i < linhas.length; i++) {
    var select = linhas[i].querySelector('select');
    var descricao = linhas[i].querySelector('input[name="description"]');
    var arquivo = linhas[i].querySelector('input[type="file"]');
    var errorMessageSelect = linhas[i].querySelector('.error-message[data-field="doc-name"]');
    var errorMessageDescricao = linhas[i].querySelector('.error-message[data-field="doc-desc"]');
    var errorMessageArquivo = linhas[i].querySelector('.error-message[data-field="doc-fileName"]');

    if (!select.value) {
      select.classList.add('invalid');
      errorMessageSelect.innerText = "Por favor, selecione um documento.";
      isValid = false;
    } else {
      select.classList.remove('invalid');
      errorMessageSelect.innerText = "";
    }

    if (!descricao.value) {
      descricao.classList.add('invalid');
      errorMessageDescricao.innerText = "Por favor, informe a descrição do documento.";
      isValid = false;
    } else {
      descricao.classList.remove('invalid');
      errorMessageDescricao.innerText = "";
    }

    if (!arquivo.value) {
      arquivo.classList.add('invalid');
      errorMessageArquivo.innerText = "Por favor, selecione um arquivo.";
      isValid = false;
    } else {
      arquivo.classList.remove('invalid');
      errorMessageArquivo.innerText = "";
    }
  }

  return isValid;
}

function confirmarDocumentos() {
  if (validarFormulario()) {
    goToLastStep();  
  }
}
document.addEventListener('DOMContentLoaded', function() {
  var linhas = document.querySelectorAll('#assinaturas .row');

  for (var i = 0; i < linhas.length; i += 2) {
    var firstRow = linhas[i];
    var secondRow = linhas[i + 1];

    // Campos da primeira linha
    var nameInput = firstRow.querySelector('input[name="name"]');
    var emailInput = firstRow.querySelector('input[name="email"]');
    var cpfInput = firstRow.querySelector('input[name="cpf"]');

    // Campos da segunda linha
    var birthdateInput = secondRow.querySelector('input[name="birthdate"]');
    var tipoDocumentoSelect = secondRow.querySelector('select[name="tipoDocumento"]');
    var partyselect = secondRow.querySelector('select[name="partyId"]');
    var arquivoInput = secondRow.querySelector('input[name="arquivoAssinatura"]');

    // Mensagens de erro da primeira linha
    var errorMessageName = firstRow.querySelector('.error-message[data-field="cus-name"]');
    var errorMessageEmail = firstRow.querySelector('.error-message[data-field="cus-email"]');
    var errorMessageCpf = firstRow.querySelector('.error-message[data-field="cus-cpf"]');

    // Mensagens de erro da segunda linha
    var errorMessageBirth = secondRow.querySelector('.error-message[data-field="cus-birth"]');
    var errorMessageTipo = secondRow.querySelector('.error-message[data-field="cus-tipo"]');
    var errorMessageParty = secondRow.querySelector('.error-message[data-field="cus-party"]');
    var errorMessageArquivo = secondRow.querySelector('.error-message[data-field="cus-arquivo"]');

    // Adiciona ouvintes de eventos para os campos da primeira linha
    nameInput.addEventListener('input', function() {
      if (nameInput.value) {
        nameInput.classList.remove('invalid');
        errorMessageName.innerText = "";
      }
    });

    emailInput.addEventListener('input', function() {
      if (emailInput.value) {
        emailInput.classList.remove('invalid');
        errorMessageEmail.innerText = "";
      }
    });

    cpfInput.addEventListener('input', function() {
      if (cpfInput.value) {
        cpfInput.classList.remove('invalid');
        errorMessageCpf.innerText = "";
      }
    });

    // Adiciona ouvintes de eventos para os campos da segunda linha
    birthdateInput.addEventListener('input', function() {
      if (birthdateInput.value) {
        birthdateInput.classList.remove('invalid');
        errorMessageBirth.innerText = "";
      }
    });

    tipoDocumentoSelect.addEventListener('change', function() {
      if (tipoDocumentoSelect.value) {
        tipoDocumentoSelect.classList.remove('invalid');
        errorMessageTipo.innerText = "";
      }
    });

    partyselect.addEventListener('change', function() {
      if (partyselect.value) {
        partyselect.classList.remove('invalid');
        errorMessageParty.innerText = "";
      }
    });

    arquivoInput.addEventListener('change', function() {
      if (arquivoInput.value) {
        arquivoInput.classList.remove('invalid');
        errorMessageArquivo.innerText = "";
      }
    });
  }
});
function validarAssinaturas() {
  var linhas = document.querySelectorAll('#assinaturas .row');
  var isValid = true;

  for (var i = 0; i < linhas.length; i += 2) {
    var firstRow = linhas[i];
    var secondRow = linhas[i + 1];

    // Campos da primeira linha
    var nameInput = firstRow.querySelector('input[name="name"]');
    var emailInput = firstRow.querySelector('input[name="email"]');
    var cpfInput = firstRow.querySelector('input[name="cpf"]');
    
    // Campos da segunda linha
    var birthdateInput = secondRow.querySelector('input[name="birthdate"]');
    var tipoDocumentoSelect = secondRow.querySelector('select[name="tipoDocumento"]');
    var partyselect = secondRow.querySelector('select[name="partyId"]');
    var arquivoInput = secondRow.querySelector('input[name="arquivoAssinatura"]');

    // Mensagens de erro da primeira linha
    var errorMessageName = firstRow.querySelector('.error-message[data-field="cus-name"]');
    var errorMessageEmail = firstRow.querySelector('.error-message[data-field="cus-email"]');
    var errorMessageCpf = firstRow.querySelector('.error-message[data-field="cus-cpf"]');
    
    // Mensagens de erro da segunda linha
    var errorMessageBirth = secondRow.querySelector('.error-message[data-field="cus-birth"]');
    var errorMessageTipo = secondRow.querySelector('.error-message[data-field="cus-tipo"]');
    var errorMessageParty = secondRow.querySelector('.error-message[data-field="cus-party"]');
    var errorMessageArquivo = secondRow.querySelector('.error-message[data-field="cus-arquivo"]');

    // Validação dos campos da primeira linha
    if (!nameInput.value) {
      nameInput.classList.add('invalid');
      errorMessageName.innerText = "Por favor, informe o nome do assinante.";
      isValid = false;
    } else {
      nameInput.classList.remove('invalid');
      errorMessageName.innerText = "";
    }
    if (!emailInput.value) {
      emailInput.classList.add('invalid');
      errorMessageEmail.innerText = "Por favor, informe o email do assinante.";
      isValid = false;
    } else {
      emailInput.classList.remove('invalid');
      errorMessageEmail.innerText = "";
    }
    if (!cpfInput.value) {
      cpfInput.classList.add('invalid');
      errorMessageCpf.innerText = "Por favor, informe o cpf do assinante.";
      isValid = false;
    } else {
      cpfInput.classList.remove('invalid');
      errorMessageCpf.innerText = "";
    }

    // Validação dos campos da segunda linha
    if (!birthdateInput.value) {
      birthdateInput.classList.add('invalid');
      errorMessageBirth.innerText = "Por favor, informe a data de nascimento do assinante.";
      isValid = false;
    } else {
      birthdateInput.classList.remove('invalid');
      errorMessageBirth.innerText = "";
    }
    if (!tipoDocumentoSelect.value) {
      tipoDocumentoSelect.classList.add('invalid');
      errorMessageTipo.innerText = "Por favor, informe o tipo de documento do assinante.";
      isValid = false;
    } else {
      tipoDocumentoSelect.classList.remove('invalid');
      errorMessageTipo.innerText = "";
    }
    if (!partyselect.value) {
      partyselect.classList.add('invalid');
      errorMessageParty.innerText = "Por favor, informe a parte do assinante.";
      isValid = false;
    } else {
      partyselect.classList.remove('invalid');
      errorMessageParty.innerText = "";
    }
    if (!arquivoInput.value) {
      arquivoInput.classList.add('invalid');
      errorMessageArquivo.innerText = "Por favor, selecione um arquivo.";
      isValid = false;
    } else {
      arquivoInput.classList.remove('invalid');
      errorMessageArquivo.innerText = "";
    }
  }

  return isValid;
}

function confirmarAssinaturas() {
  
  if (validarAssinaturas()) {
    const cpfInputs = document.getElementsByName('cpf');
  for (let i = 0; i < cpfInputs.length; i++) {
    const cpf = cpfInputs[i].value; 
    if (!validarCpf(cpf)) {  
      return; 
    }
  }
  document.getElementById('loading').style.display = 'flex';
  document.getElementById('Btnassinatura').style.display = 'none'; 
  handleSubmit();
      
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
    script.src = "https://signaturecdn.stageapp05.pca.com.br/pca-signature.js";
    script.defer = true;

    script.onload = function() {
        // O script foi carregado, agora você pode mostrar o portal incorporado
        embeddedPortal_div.hidden = false;
    };

    document.body.appendChild(script);
}
