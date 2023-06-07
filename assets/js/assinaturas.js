//TODO: ID dinâmico para fazer o input type="file" funcionar.

var dynamicId = 1;

function addSubscriptionField() {
    
    const form = document.getElementById("subscription-list");
    
    //Criando os elementos
    const container = document.createElement("div");
    
    const br = document.createElement("br");

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

    const divTipoDocumento = document.createElement("div");
    const labelTipoDocumento = document.createElement("label");
    const tipoDocumento = document.createElement("input");

    const divButtonArquivo = document.createElement("div");
    const labelButtonArquivo = document.createElement("label");
    const buttonArquivo = document.createElement("input");
    const textButtonArquivo = document.createElement("p");

    const divPlusIcon = document.createElement("div");
    const plusIcon = document.createElement("i");
    
    const divLessIcon = document.createElement("div");
    const lessIcon = document.createElement("i");

    //Adicionando a classe 'row' para as divs
    firstRow.classList.add("row");
    secondRow.classList.add("row");

    //Adicionando classes e propriedades para o campo "Nome do assinante"
    divNomeAssinante.classList.add("col-md-4","order-first","input-wrap");
    labelNomeAssinante.classList.add("user-icon");
    nomeAssinante.classList.add("input-primary");

    nomeAssinante.setAttribute("placeholder","NOME DO ASSINANTE");
    nomeAssinante.setAttribute("name","nomeAssinante");

    //Adicionando classes e propriedades para o campo "E-mail"
    divEmail.classList.add("col-md-4","order-first","input-wrap");
    labelEmail.classList.add("email-icon");
    email.classList.add("input-primary");

    email.setAttribute("placeholder","E-MAIL");
    email.setAttribute("name","email");

    //Adicionando classes e propriedades para o campo "CPF"
    divCpf.classList.add("col-md-4","order-first","input-wrap");
    labelCpf.classList.add("cpf-icon");
    cpf.classList.add("input-primary");

    cpf.setAttribute("placeholder","CPF");
    cpf.setAttribute("name","cpf");

    //Adicionando classes e propriedades para o campo "Data de nascimento"
    divDataNascimento.classList.add("col-md-4","order-first","input-wrap");
    labelDataNascimento.classList.add("user-icon");
    dataNascimento.classList.add("input-primary");

    dataNascimento.setAttribute("placeholder","DATA DE NASCIMENTO");
    dataNascimento.setAttribute("name","dataNascimento");

    //Adicionando classes e propriedades para o campo "Tipo do documento"
    divTipoDocumento.classList.add("col-md-4","order-first","input-wrap");
    labelTipoDocumento.classList.add("document-icon");
    tipoDocumento.classList.add("input-primary");

    tipoDocumento.setAttribute("placeholder","TIPO DO DOCUMENTO");
    tipoDocumento.setAttribute("name","tipoDocumento");

    //Adicionando classes e propriedades para o campo "Selecione o arquivo"
    divButtonArquivo.classList.add("col-md-2","order-first","input-wrap");
    labelButtonArquivo.classList.add("file-button");
    buttonArquivo.classList.add("d-none");
    textButtonArquivo.classList.add("file-button-text");

    const buttonArquivoId = `sub-fileName${dynamicId}`;
    const textButtonArquivoId = `sub-fileName${dynamicId}-value`;

    labelButtonArquivo.setAttribute("for", buttonArquivoId)
    buttonArquivo.setAttribute("id", buttonArquivoId);
    buttonArquivo.setAttribute("type", "file");
    textButtonArquivo.setAttribute("id", textButtonArquivoId)

    labelButtonArquivo.innerText = "Selecione o arquivo";

    //Adicionando classes e propriedades para o botão de adicionar
    divPlusIcon.classList.add("col-md-1","order-first","input-wrap");
    divPlusIcon.setAttribute("onclick", "addSubscriptionField()");
    plusIcon.classList.add("more-icon");

    //Adicionando classes e propriedades para o botão de deletar
    divLessIcon.classList.add("col-md-1","order-first","input-wrap");
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

    divTipoDocumento.appendChild(labelTipoDocumento);
    labelTipoDocumento.appendChild(tipoDocumento);

    divButtonArquivo.appendChild(labelButtonArquivo);
    divButtonArquivo.appendChild(buttonArquivo);
    divButtonArquivo.appendChild(textButtonArquivo);

    divPlusIcon.appendChild(plusIcon);

    divLessIcon.appendChild(lessIcon);

    //Inserir os elementos na div 'firstRow'
    firstRow.appendChild(divNomeAssinante);
    firstRow.appendChild(divEmail);
    firstRow.appendChild(divCpf);

    //Inserir os elementos na div 'secondRow'
    secondRow.appendChild(divDataNascimento);
    secondRow.appendChild(divTipoDocumento);
    secondRow.appendChild(divButtonArquivo);
    secondRow.appendChild(divPlusIcon);
    secondRow.appendChild(divLessIcon);

    //Encapsular os elementos para que o 'lessIcon' remova as duas linhas
    container.appendChild(br);
    container.appendChild(firstRow);
    container.appendChild(secondRow);

    //Inserir os elementos no DOM
    form.appendChild(container);
    divLessIcon.addEventListener("click", removeSubscriptionField);

    console.log(buttonArquivoId, textButtonArquivoId);

    if(dynamicId != 0) {
        document.getElementById(buttonArquivoId).onchange = function () {
            var value = this.value;
            var path = value.match(/[^\\/]*$/)[0];
            document.getElementById(textButtonArquivoId).innerHTML = path;
        }
    }

    //Alterando o ID para a próxima iteração
    dynamicId++;
}

//Remover as linhas desnecessárias de assinaturas
function removeSubscriptionField(e) {
    const element = e.target.parentElement;
    const row = element.parentElement;
    const container = row.parentElement;

    container.remove();
}