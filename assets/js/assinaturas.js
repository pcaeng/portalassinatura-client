//TODO: ID dinâmico para fazer o input type="file" funcionar.

var nomeID = 0;
var emailID = 0;
var cpfID = 0;
var birthdateID = 0;
var nomeDocID = 0;
var parteID = 0;
var fileID = 0;

var nomeAssinanteID = `cus-name${nomeID}`;
var emailAssinanteID = `cus-email${emailID}`;
var cpfAssinanteID = `cus-cpf${cpfID}`;
var birthdateAssinanteID = `cus-birth${birthdateID}`;
var nomeDocAssinanteID = `cus-nameDoc${nomeDocID}`;
var parteAssinanteID = `cus-party${parteID}`;
var buttonArquivoAssinanteID = `sub-fileName${fileID}`;
var textArquivoAssinanteID = `sub-fileName${fileID}-value`;

function addSubscriptionField() {

    //Incrementação das variáveis dinâmicas, para que novos IDS sejam atribuídos
    nomeID++; emailID++; cpfID++; birthdateID++; nomeDocID++; parteID++; fileID++;

    const nomeAssinanteID = `cus-name${nomeID}`;
    const emailAssinanteID = `cus-email${emailID}`;
    const cpfAssinanteID = `cus-cpf${cpfID}`;
    const birthdateAssinanteID = `cus-birth${birthdateID}`;
    const nomeDocAssinanteID = `cus-nameDoc${nomeDocID}`;
    const parteAssinanteID = `cus-party${parteID}`;
    const buttonArquivoAssinanteID = `sub-fileName${fileID}`;
    const textArquivoAssinanteID = `sub-fileName${fileID}-value`;

    const form = document.getElementById("subscription-container");

    const container = document.createElement("div")

    const br = document.createElement("br");

    //Criando os elementos
    const firstRow = document.createElement("div");
    const secondRow = document.createElement("div");

    const divNomeAssinante = document.createElement("div");
    const labelNomeAssinante = document.createElement("label");
    const nomeAssinante = document.createElement("input");

    const divEmail = document.createElement("div");
    const labelEmail = document.createElement("label");
    const email = document.createElement("input");

    const divCpf = document.createElement("div");
    const labelCpf = document.createElement("label");
    const cpf = document.createElement("input");

    const divDataNascimento = document.createElement("div");
    const labelDataNascimento = document.createElement("label");
    const dataNascimento = document.createElement("input");

    const divNomeDocumento = document.createElement("div");
    const labelNomeDocumento = document.createElement("label");
    const nomeDocumento = document.createElement("select");
    const rg = document.createElement("option");
    const cpfOp = document.createElement("option");
    const cnh = document.createElement("option");

    const divParte = document.createElement("div");
    const labelParte = document.createElement("label");
    const parte = document.createElement("select");

    const divButtonArquivo = document.createElement("div");
    const labelButtonArquivo = document.createElement("label");
    const buttonArquivo = document.createElement("input");

    const divTextButtonArquivo = document.createElement("div");
    const textButtonArquivo = document.createElement("p");

    const divIcons = document.createElement("div");

    const divPlusIcon = document.createElement("div");
    const plusIcon = document.createElement("i");

    const divLessIcon = document.createElement("div");
    const lessIcon = document.createElement("i");

    //Adicionando a classe 'row' para as divs
    firstRow.classList.add("row");
    secondRow.classList.add("row");

    //Adicionando classes e propriedades para o campo "Nome do assinante"
    divNomeAssinante.classList.add("col-md-4", "order-first", "input-wrap");
    labelNomeAssinante.classList.add("user-icon");
    nomeAssinante.classList.add("input-primary");

    nomeAssinante.setAttribute("placeholder", "NOME DO ASSINANTE");
    nomeAssinante.setAttribute("name", "name");
    nomeAssinante.setAttribute("id", nomeAssinanteID);

    //Adicionando classes e propriedades para o campo "E-mail"
    divEmail.classList.add("col-md-4", "order-first", "input-wrap");
    labelEmail.classList.add("email-icon");
    email.classList.add("input-primary");

    email.setAttribute("placeholder", "E-MAIL");
    email.setAttribute("name", "email");
    email.setAttribute("id", emailAssinanteID);

    //Adicionando classes e propriedades para o campo "CPF"
    divCpf.classList.add("col-md-4", "order-first", "input-wrap");
    labelCpf.classList.add("cpf-icon");
    cpf.classList.add("input-primary");

    cpf.setAttribute("placeholder", "CPF");
    cpf.setAttribute("name", "cpf");
    cpf.setAttribute("id", cpfAssinanteID);

    //Adicionando classes e propriedades para o campo "Data de nascimento"
    divDataNascimento.classList.add("col-md-4", "order-first", "input-wrap");
    labelDataNascimento.classList.add("calendar-icon");
    dataNascimento.classList.add("input-primary");

    dataNascimento.setAttribute("placeholder", "DATA DE NASCIMENTO");
    dataNascimento.setAttribute("name", "birthdate");
    dataNascimento.setAttribute("type", "date");
    dataNascimento.setAttribute("id", birthdateAssinanteID);

    //Adicionando classes e propriedades para o campo "Nome do documento"
    divNomeDocumento.classList.add("col-md-4", "order-first", "input-wrap");
    labelNomeDocumento.classList.add("document-icon");
    nomeDocumento.classList.add("input-primary");

    nomeDocumento.setAttribute("placeholder", "NOME DO DOCUMENTO");
    nomeDocumento.setAttribute("name", "name");
    nomeDocumento.setAttribute("id", nomeDocAssinanteID);
    rg.setAttribute("value", "RG");
    cpfOp.setAttribute("value", "CPF");
    cnh.setAttribute("value", "CNH");

    //Adicionando classes e propriedades para o campo "Parte"
    divParte.classList.add("col-md-4", "order-first", "input-wrap");
    labelParte.classList.add("document-icon");
    parte.classList.add("input-primary");

    parte.setAttribute("placeholder", "PARTE");
    parte.setAttribute("name", "partyId");
    parte.setAttribute("id", parteAssinanteID);

    //Adicionando classes e propriedades para o campo "Selecione o arquivo"
    divButtonArquivo.classList.add("col-md-4", "order-first", "input-wrap");
    labelButtonArquivo.classList.add("file-button");
    buttonArquivo.classList.add("d-none");
    buttonArquivo.classList.add("file-input");

    divTextButtonArquivo.classList.add("col-md-4", "order-first", "input-wrap", "d-flex", "align-items-center")
    textButtonArquivo.classList.add("file-button-text");
    textButtonArquivo.classList.add("file-value");

    buttonArquivo.setAttribute("id", buttonArquivoAssinanteID);
    buttonArquivo.setAttribute("type", "file");
    buttonArquivo.setAttribute("name", "arquivoAssinatura");

    textButtonArquivo.setAttribute("id", textArquivoAssinanteID)

    labelButtonArquivo.innerText = "Selecione o arquivo";

    //Adicionando classes e propriedades para o botão de adicionar
    divIcons.classList.add("col-md-4", "order-first", "input-wrap", "d-flex", "justify-content-end");

    //Adicionando classes e propriedades para o botão de adicionar
    divPlusIcon.classList.add("order-first", "input-wrap");
    divPlusIcon.setAttribute("onclick", "addSubscriptionField()");
    plusIcon.classList.add("more-icon");

    //Adicionando classes e propriedades para o botão de deletar
    divLessIcon.classList.add("order-first", "input-wrap");
    divLessIcon.style.marginLeft = "20px"
    lessIcon.classList.add("less-icon");

    //Hierarquia de inserções
    divNomeAssinante.appendChild(labelNomeAssinante);
    labelNomeAssinante.appendChild(nomeAssinante);

    divEmail.appendChild(labelEmail);
    labelEmail.appendChild(email);

    divCpf.appendChild(labelCpf);
    labelCpf.appendChild(cpf);

    divDataNascimento.appendChild(labelDataNascimento);
    labelDataNascimento.appendChild(dataNascimento);

    divNomeDocumento.appendChild(labelNomeDocumento);
    labelNomeDocumento.appendChild(nomeDocumento);
    nomeDocumento.appendChild(rg);
    nomeDocumento.appendChild(cpfOp);
    nomeDocumento.appendChild(cnh);

    divParte.appendChild(labelParte);
    labelParte.appendChild(parte);

    divButtonArquivo.appendChild(labelButtonArquivo);
    divButtonArquivo.appendChild(buttonArquivo);

    divTextButtonArquivo.appendChild(textButtonArquivo);

    divPlusIcon.appendChild(plusIcon);
    divLessIcon.appendChild(lessIcon);

    divIcons.appendChild(divPlusIcon);
    divIcons.appendChild(divLessIcon);

    //Inserir os elementos na div 'firstRow'
    firstRow.appendChild(divNomeAssinante);
    firstRow.appendChild(divEmail);
    firstRow.appendChild(divCpf);

    //Inserir os elementos na div 'secondRow'
    secondRow.appendChild(divDataNascimento);
    secondRow.appendChild(divNomeDocumento);
    secondRow.appendChild(divParte);
    secondRow.appendChild(divButtonArquivo);
    secondRow.appendChild(divTextButtonArquivo);
    secondRow.appendChild(divIcons);

    //Encapsular os elementos para que o 'lessIcon' remova as duas linhas
    container.appendChild(br);
    container.appendChild(firstRow);
    container.appendChild(secondRow);

    form.append(container);

    //Inserir os elementos no DOM
    divLessIcon.addEventListener("click", removeSubscriptionField);

    //Mostrar o nome na tag <p> abaixo do botão de selecionar arquivo
    if (fileID != 0) {
        document.getElementById(buttonArquivoID).onchange = function () {
            var value = this.value;
            var path = value.match(/[^\\/]*$/)[0];
            document.getElementById(textButtonArquivoID).innerHTML = path;
            console.log(this.files[0]);
        }
    }
}

//Remover as linhas desnecessárias de assinaturas
function removeSubscriptionField(e) {
    const element = e.target.parentElement;
    const div = element.parentElement;
    const row = div.parentElement;
    const container = row.parentElement;

    container.remove();
}