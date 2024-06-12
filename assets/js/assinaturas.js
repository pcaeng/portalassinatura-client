let qtdAssinantes = 1;

const arquivo_sub = document.getElementById("sub-fileName0");

const arquivo_path_sub = document.getElementById("sub-fileName0-value");

arquivo_sub.onchange = function () {
    arquivo_path_sub.innerText = arquivo_sub.files[0].name;
}

async function carregaOptionsParty() {
    const response = await GetParty();

    return response.data;
}

function montaOptionsParty(select, parties) {
    parties.forEach(item => {
        const option = document.createElement('option');
        option.value = item.partyId;
        option.textContent = item.name;
        select.appendChild(option);
    });
}

const partySelect = document.getElementById("cus-party0");
let parties = [];

carregaOptionsParty().then((result) => {
    montaOptionsParty(partySelect, result);
    parties = result;
});

function formatarCpf(documento) {
    let valor = documento.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos

    // Limita o CPF a 11 dígitos
    if (valor.length > 11) {
      valor = valor.substr(0, 11);
    }

    // Formata o CPF
    valor = valor.replace(/^(\d{3})(\d)/, '$1.$2'); // Adiciona ponto após os 3 primeiros dígitos
    valor = valor.replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3'); // Adiciona ponto após os próximos 3 dígitos
    valor = valor.replace(/\.(\d{3})(\d)/, '.$1-$2'); // Adiciona traço após os próximos 3 dígitos

    // Atualiza o valor do campo de entrada
    documento.value = valor;
  }
  function validarCpf(cpf) {
    // Remove todos os caracteres que não são números
    
    cpf = cpf.replace(/\D/g, '');
    
    // Verifica se o CPF tem 11 dígitos
    if (cpf.length !== 11) return false;
    
    // Verifica se todos os dígitos são iguais (isso é considerado um CPF inválido)
    const allDigitsAreSame = cpf.split('').every((digit, index, array) => digit === array[0]);
    if (allDigitsAreSame) return false;
    
    // Calcula o primeiro dígito verificador
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let firstDigit = sum % 11;
    if (firstDigit < 2) {
        firstDigit = 0;
    } else {
        firstDigit = 11 - firstDigit;
    }
    
    // Verifica se o primeiro dígito verificador está correto
    if (parseInt(cpf.charAt(9)) !== firstDigit) return false;
    
    // Calcula o segundo dígito verificador
    sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    let secondDigit = sum % 11;
    if (secondDigit < 2) {
        secondDigit = 0;
    } else {
        secondDigit = 11 - secondDigit;
    }
    
    // Verifica se o segundo dígito verificador está correto
    if (parseInt(cpf.charAt(10)) !== secondDigit) return false;
    
    // Se chegou até aqui, o CPF é válido
    return true;
}

function validarCpfInput(input) {
    const cpf = input.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    const errorMessage = input.parentElement.nextElementSibling; // Seleciona o elemento de mensagem de erro
    if (validarCpf(cpf)) {
        errorMessage.innerText = ''; // Se o CPF for válido, limpa a mensagem de erro
    } else {
        errorMessage.innerText = 'CPF inválido'; // Se o CPF for inválido, exibe uma mensagem de erro
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const dateInput = document.getElementById('cus-birth0');
    const errorMessage = document.querySelector('[data-field="cus-birth"]');
    
    dateInput.addEventListener('focus', function() {
        this.type = 'date';
    });
  
    dateInput.addEventListener('blur', function() {
        if (this.value === '') {
            this.type = 'text';
        }
    });
  
    dateInput.addEventListener('input', function() {
        if (this.value !== '') {
            this.setAttribute('data-value', this.value);
        } else {
            this.removeAttribute('data-value');
        }
    });
  
    dateInput.type = 'text'; // Inicializa o campo como texto para mostrar o placeholder
  
    dateInput.addEventListener('change', function() {
        const selectedDate = new Date(this.value);
        const currentDate = new Date();
  
        if (selectedDate > currentDate) {
            errorMessage.innerText = "A data de nascimento não pode ser futura.";
            this.value = ''; // Limpa o valor do campo
        } else {
            errorMessage.innerText = ''; // Limpa a mensagem de erro se a data for válida
        }
    });
});


function addSubscriptionField() {

    qtdAssinantes++;

    const form_assinaturas = document.getElementById("assinaturas");

    //Criando os elementos
    const container = document.createElement("div")

    const br = document.createElement("br");

    const firstRow = document.createElement("div");
    const secondRow = document.createElement("div");

    const nomeAssinante_div = document.createElement("div");
    const nomeAssinante_label = document.createElement("label");
    const nomeAssinante = document.createElement("input");

    const emailAssinante_div = document.createElement("div");
    const emailAssinante_label = document.createElement("label");
    const emailAssinante = document.createElement("input");

    const cpfAssinante_div = document.createElement("div");
    const cpfAssinante_label = document.createElement("label");
    const cpfAssinante = document.createElement("input");

    const dataNascimento_div = document.createElement("div");
    const dataNascimento_label = document.createElement("label");
    const dataNascimento = document.createElement("input");

    const nomeDocumentoAssinante_div = document.createElement("div");
    const nomeDocumentoAssinante_label = document.createElement("label");
    const nomeDocumentoAssinante = document.createElement("select");
    const nomeDocumentoAssinante_rg = document.createElement("option");
    const nomeDocumentoAssinante_cpf = document.createElement("option");
    const nomeDocumentoAssinante_cnh = document.createElement("option");

    const parteAssinante_div = document.createElement("div");
    const parteAssinante_label = document.createElement("label");
    const parteAssinante = document.createElement("select");

    const arquivo_div = document.createElement("div");
    const arquivo_label = document.createElement("label");
    const arquivo = document.createElement("input");

    const arquivo_path_div = document.createElement("div");
    const arquivo_path = document.createElement("p");

    const icons_div = document.createElement("div");

    const addIcon_div = document.createElement("div");
    const addIcon = document.createElement("i");

    const lessIcon_div = document.createElement("div");
    const lessIcon = document.createElement("i");

    //Adicionando a classe 'row' para as divs
    firstRow.classList.add("row");
    secondRow.classList.add("row");

    //Adicionando classes e propriedades para o campo "Nome do assinante"
    nomeAssinante_div.classList.add("col-md-4", "default-padding");
    nomeAssinante_label.classList.add("user-icon");
    nomeAssinante.classList.add("input-primary");

    nomeAssinante.setAttribute("placeholder", "Nome do assinante");
    nomeAssinante.setAttribute("name", "name");
    // nomeAssinante.setAttribute("id", nomeAssinanteID);

    //Adicionando classes e propriedades para o campo "E-mail"
    emailAssinante_div.classList.add("col-md-4", "default-padding");
    emailAssinante_label.classList.add("email-icon");
    emailAssinante.classList.add("input-primary");

    emailAssinante.setAttribute("placeholder", "E-mail do assinante");
    emailAssinante.setAttribute("name", "email");
    // emailAssinante.setAttribute("id", emailAssinanteID);

    //Adicionando classes e propriedades para o campo "CPF"
    cpfAssinante_div.classList.add("col-md-4", "default-padding");
    cpfAssinante_label.classList.add("cpf-icon");
    cpfAssinante.classList.add("input-primary");

    cpfAssinante.setAttribute("placeholder", "CPF do assinante");
    cpfAssinante.setAttribute("name", "cpf");
    // cpfAssinante.setAttribute("id", cpfAssinanteID);

    //Adicionando classes e propriedades para o campo "Data de nascimento"
    dataNascimento_div.classList.add("col-md-4", "default-padding");
    dataNascimento_label.classList.add("calendar-icon");
    dataNascimento.classList.add("input-primary");

    dataNascimento.setAttribute("name", "birthdate");
    dataNascimento.setAttribute("type", "text");
    dataNascimento.setAttribute("placeholder", "data de nascimento");
    dataNascimento.addEventListener('focus', function() {
        this.type = 'date';
    });

    dataNascimento.addEventListener('blur', function() {
        if (this.value === '') {
            this.type = 'text';
        }
    });
    // dataNascimento.setAttribute("id", birthdateAssinanteID);

    //Adicionando classes e propriedades para o campo "Nome do documento"
    nomeDocumentoAssinante_div.classList.add("col-md-4", "default-padding");
    nomeDocumentoAssinante_label.classList.add("document-icon");
    nomeDocumentoAssinante.classList.add("input-primary");

    nomeDocumentoAssinante.setAttribute("name", "tipoDocumento");
    // nomeDocumentoAssinante.setAttribute("id", nomeDocAssinanteID);
    nomeDocumentoAssinante_rg.setAttribute("value", "RG");
    nomeDocumentoAssinante_cpf.setAttribute("value", "CPF");
    nomeDocumentoAssinante_cnh.setAttribute("value", "CNH");

    nomeDocumentoAssinante_rg.innerText = "RG";
    nomeDocumentoAssinante_cpf.innerText = "CPF";
    nomeDocumentoAssinante_cnh.innerText = "CNH";

    //Adicionando classes e propriedades para o campo "Parte"
    parteAssinante_div.classList.add("col-md-4", "default-padding");
    parteAssinante_label.classList.add("document-icon");
    parteAssinante.classList.add("input-primary");

    parteAssinante.setAttribute("name", "partyId");
    // parteAssinante.setAttribute("id", parteAssinanteID);

    montaOptionsParty(parteAssinante, parties);

    //Adicionando classes e propriedades para o campo "Selecione o arquivo"
    arquivo_div.classList.add("col-md-4", "default-padding");
    arquivo_label.classList.add("file-button");
    arquivo.classList.add("d-none");

    arquivo_path_div.classList.add("col-md-4", "default-padding", "d-flex", "align-items-center")

    arquivo_path.classList.add("file-button-text");

    // arquivo.setAttribute("id", buttonArquivoAssinanteID);
    arquivo.setAttribute("type", "file");
    arquivo.setAttribute("name", "arquivoAssinatura");
    arquivo.setAttribute("accept", ".jpg ,.png,.pdf");


    // arquivo_path.setAttribute("id", textArquivoAssinanteID)

    arquivo_label.innerText = "Selecione o documento com foto";

    arquivo.onchange = function () {
        arquivo_path.innerText = arquivo.files[0].name;
    }

    //Adicionando classes e propriedades para a div dos botões
    icons_div.classList.add("col-md-4", "default-padding", "d-flex", "justify-content-end");

    //Adicionando classes e propriedades para o botão de adicionar
    addIcon_div.classList.add("default-padding");
    addIcon_div.setAttribute("onclick", "addSubscriptionField()");
    addIcon.classList.add("add-icon");

    //Adicionando classes e propriedades para o botão de deletar
    lessIcon_div.classList.add("default-padding");
    lessIcon_div.style.marginLeft = "20px"
    lessIcon.classList.add("less-icon");

    //Hierarquia de inserções
    nomeAssinante_div.appendChild(nomeAssinante_label);
    nomeAssinante_label.appendChild(nomeAssinante);

    emailAssinante_div.appendChild(emailAssinante_label);
    emailAssinante_label.appendChild(emailAssinante);

    cpfAssinante_div.appendChild(cpfAssinante_label);
    cpfAssinante_label.appendChild(cpfAssinante);

    dataNascimento_div.appendChild(dataNascimento_label);
    dataNascimento_label.appendChild(dataNascimento);

    nomeDocumentoAssinante_div.appendChild(nomeDocumentoAssinante_label);
    nomeDocumentoAssinante_label.appendChild(nomeDocumentoAssinante);
    nomeDocumentoAssinante.appendChild(nomeDocumentoAssinante_rg);
    nomeDocumentoAssinante.appendChild(nomeDocumentoAssinante_cpf);
    nomeDocumentoAssinante.appendChild(nomeDocumentoAssinante_cnh);

    parteAssinante_div.appendChild(parteAssinante_label);
    parteAssinante_label.appendChild(parteAssinante);

    arquivo_div.appendChild(arquivo_label);
    arquivo_label.appendChild(arquivo);

    arquivo_path_div.appendChild(arquivo_path);

    addIcon_div.appendChild(addIcon);
    lessIcon_div.appendChild(lessIcon);

    icons_div.appendChild(addIcon_div);
    icons_div.appendChild(lessIcon_div);

    //Inserir os elementos nas respectivas divs
    firstRow.appendChild(nomeAssinante_div);
    firstRow.appendChild(emailAssinante_div);
    firstRow.appendChild(cpfAssinante_div);

    secondRow.appendChild(dataNascimento_div);
    secondRow.appendChild(nomeDocumentoAssinante_div);
    secondRow.appendChild(parteAssinante_div);
    secondRow.appendChild(arquivo_div);
    secondRow.appendChild(arquivo_path_div);
    secondRow.appendChild(icons_div);

    container.appendChild(br);
    container.appendChild(firstRow);
    container.appendChild(secondRow);
    
    
    cpfAssinante.addEventListener("input", function() {
        formatarCpf(this);
        validarCpfInput(this); // Chamando a função de validação
    });
    dataNascimento.addEventListener('change', function() {
        const selectedDate = new Date(this.value);
        const today = new Date();
        
        // Verifica se a data selecionada é no futuro
        if (selectedDate > today) {
            errorMessageBirth.innerText = "A data de nascimento não pode ser futura.";
            this.value = ''; // Limpa o valor do campo
        } else {
            errorMessageBirth.innerText = ''; // Limpa a mensagem de erro
        }
    });
    const errorMessageName = document.createElement("p");
    errorMessageName.classList.add("error-message");
    errorMessageName.setAttribute("data-field", "cus-name");
    errorMessageName.innerText = ""; // Inicialmente vazio
    nomeAssinante_div.appendChild(errorMessageName);

    const errorMessageEmail = document.createElement("p");
    errorMessageEmail.classList.add("error-message");
    errorMessageEmail.setAttribute("data-field", "cus-email");
    errorMessageEmail.innerText = ""; // Inicialmente vazio
    emailAssinante_div.appendChild(errorMessageEmail);

    const errorMessageCpf = document.createElement("p");
    errorMessageCpf.classList.add("error-message");
    errorMessageCpf.setAttribute("data-field", "cus-cpf");
    errorMessageCpf.innerText = ""; // Inicialmente vazio
    cpfAssinante_div.appendChild(errorMessageCpf);
   
    const errorMessageBirth = document.createElement("p");
    errorMessageBirth.classList.add("error-message");
    errorMessageBirth.setAttribute("data-field", "cus-birth");
    errorMessageBirth.innerText = ""; // Inicialmente vazio
    dataNascimento_div.appendChild(errorMessageBirth);

    const errorMessageTipoDoc = document.createElement("p");
    errorMessageTipoDoc.classList.add("error-message");
    errorMessageTipoDoc.setAttribute("data-field", "cus-tipo");
    errorMessageTipoDoc.innerText = ""; // Inicialmente vazio
    nomeDocumentoAssinante_div.appendChild(errorMessageTipoDoc);

    const errorMessageParty = document.createElement("p");
    errorMessageParty.classList.add("error-message");
    errorMessageParty.setAttribute("data-field", "cus-party");
    errorMessageParty.innerText = ""; // Inicialmente vazio
    parteAssinante_div.appendChild(errorMessageParty);

    const errorMessageArquivo = document.createElement("p");
    errorMessageArquivo.classList.add("error-message");
    errorMessageArquivo.setAttribute("data-field", "cus-arquivo");
    errorMessageArquivo.innerText = ""; // Inicialmente vazio
    arquivo_div.appendChild(errorMessageArquivo);
    //Inserir os elementos no DOM
    form_assinaturas.append(container);

    lessIcon_div.addEventListener("click", removeSubscriptionField);
}

function removeSubscriptionField(e) {
    const element = e.target.parentElement;
    const div = element.parentElement;
    const row = div.parentElement;
    const container = row.parentElement;

    qtdAssinantes--;
    container.remove();
}

function obterDadosAssinaturas() {
    
    const formElements = document.forms["assinaturas_form"].elements;

    const dadosAssinantes = [];

    if (qtdAssinantes > 1) {
        for (let i = 0; i < qtdAssinantes; i++) {

            dadosAssinantes.push({
                name: formElements.name[i].value,
                email: formElements.email[i].value,
                cpf: formElements.cpf[i].value,
                birthdate: formElements.birthdate[i].value,
                tipoDocumento: formElements.tipoDocumento[i].value,
                partyId: formElements.partyId[i].value,
                file: formElements.arquivoAssinatura[i].files[0]
            })
        }
    } else {
        dadosAssinantes.push({
            name: formElements.name.value,
            email: formElements.email.value,
            cpf: formElements.cpf.value,
            birthdate: formElements.birthdate.value,
            tipoDocumento: formElements.tipoDocumento.value,
            partyId: formElements.partyId.value,
            file: formElements.arquivoAssinatura.files[0]
        })
    }

    return dadosAssinantes;
}