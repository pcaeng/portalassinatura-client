//Inicialização de variáveis para alteração dinâmica do ID dos campos
var fileID = 0;
var typeID = 0;
var nameID = 0;

//Atribuição dos IDs primários, manualmente criados no HTML
var buttonArquivoID = `fileName${fileID}`;
var textButtonArquivoID = `fileName${fileID}-value`;

var documentTypeID = `doc-type${typeID}`;

var documentNameID = `doc-name${nameID}`;

//Verificação das informações

//Função executada a cada linha adicionada pelo botão [+]
function addEmailField() {

    //Incrementação das variáveis dinâmicas, para que novos IDS sejam atribuídos
    fileID++; typeID++; nameID++;

    //Atribuição dos novos IDs dinâmicos
    const buttonArquivoID = `fileName${fileID}`;
    const textButtonArquivoID = `fileName${fileID}-value`;

    const documentTypeID = `doc-type${typeID}`;
    const documentNameID = `doc-name${nameID}`;

    //Verificação das informações
    console.log(buttonArquivoID, textButtonArquivoID);
    console.log('fileID: ' + fileID + ', typeID: ' + typeID + ', nameID: ' + nameID);

    //Referência da tag <form>
    const form = document.getElementById("emails-list");

    //Criando os elementos
    const row = document.createElement("div");

    const divTipoDocumento = document.createElement("div");
    const labelTipoDocumento = document.createElement("label");
    const tipoDocumento = document.createElement("input");

    const divNomeDocumento = document.createElement("div");
    const labelNomeDocumento = document.createElement("label");
    const nomeDocumento = document.createElement("input");

    const divButtonArquivo = document.createElement("div");
    const labelButtonArquivo = document.createElement("label");
    const buttonArquivo = document.createElement("input");
    const textButtonArquivo = document.createElement("p");

    const divPlusIcon = document.createElement("div");
    const plusIcon = document.createElement("i");

    const divLessIcon = document.createElement("div");
    const lessIcon = document.createElement("i");

    //Adicionando a classe 'row' para a div
    row.classList.add("row");

    //Adicionando as classes e propriedades para o campo 'Tipo do documento'
    divTipoDocumento.classList.add("col-md-4", "order-first", "input-wrap");
    labelTipoDocumento.classList.add("document-icon");
    tipoDocumento.classList.add("input-primary");

    tipoDocumento.setAttribute("placeholder", "TIPO DO DOCUMENTO");
    tipoDocumento.setAttribute("name", "tipoDocumento");
    tipoDocumento.setAttribute("id", documentTypeID);

    //Adicionando as classes e propriedades para o campo 'Nome do documento'
    divNomeDocumento.classList.add("col-md-4", "order-first", "input-wrap");
    labelNomeDocumento.classList.add("document-icon");
    nomeDocumento.classList.add("input-primary");

    nomeDocumento.setAttribute("placeholder", "NOME DO DOCUMENTO");
    nomeDocumento.setAttribute("name", "nomeDocumento");
    nomeDocumento.setAttribute("id", documentNameID);

    //Adicionando as classes e propriedades para o campo 'Selecione o arquivo'
    divButtonArquivo.classList.add("col-md-2", "order-first", "input-wrap", "d-flex", "flex-column");
    labelButtonArquivo.classList.add("file-button");
    buttonArquivo.classList.add("d-none");
    textButtonArquivo.classList.add("file-button-text");

    labelButtonArquivo.setAttribute("for", buttonArquivoID)
    buttonArquivo.setAttribute("id", buttonArquivoID);
    buttonArquivo.setAttribute("type", "file");
    buttonArquivo.setAttribute("name", "arquivoDocumento");
    textButtonArquivo.setAttribute("id", textButtonArquivoID)

    labelButtonArquivo.innerText = "Selecione o arquivo";

    //Adicionando classes e propriedades para o botão de adicionar
    divPlusIcon.classList.add("col-md-1", "order-first", "input-wrap");
    divPlusIcon.setAttribute("onclick", "addEmailField()");
    plusIcon.classList.add("more-icon");

    //Adicionando classes e propriedades para o botão de deletar
    divLessIcon.classList.add("col-md-1", "order-first", "input-wrap");
    lessIcon.classList.add("less-icon");

    //Hierarquia de inserções
    divTipoDocumento.appendChild(labelTipoDocumento);
    labelTipoDocumento.appendChild(tipoDocumento);

    divNomeDocumento.appendChild(labelNomeDocumento);
    labelNomeDocumento.appendChild(nomeDocumento);

    divButtonArquivo.appendChild(labelButtonArquivo);
    labelButtonArquivo.appendChild(buttonArquivo);
    divButtonArquivo.appendChild(textButtonArquivo);

    divPlusIcon.appendChild(plusIcon);

    divLessIcon.appendChild(lessIcon);

    //Inserir os elementos na div 'row'
    row.appendChild(divTipoDocumento);
    row.appendChild(divNomeDocumento);
    row.appendChild(divButtonArquivo);
    row.appendChild(divPlusIcon);
    row.appendChild(divLessIcon);

    //Inserir os elementos no DOM
    form.appendChild(row);
    divLessIcon.addEventListener("click", removeEmailField);

    //Mostrar o nome na tag <p> abaixo do botão de selecionar arquivo
    if (fileID != 0) {
        document.getElementById(buttonArquivoID).onchange = function () {
            var value = this.value;
            var path = value.match(/[^\\/]*$/)[0];
            document.getElementById(textButtonArquivoID).innerHTML = path;
            console.log(this.files[0]);
        }
    }

    //Exibição/armazenamento dos campos criados dinamicamente no JS
    if (typeID != 0) {
        document.getElementById(documentTypeID).onchange = function () {
            var value = this.value;
            console.log(value);
        }
    }

    if (nameID != 0) {
        document.getElementById(documentNameID).onchange = function () {
            var value = this.value;
            console.log(value);
        }
    }
}

//Remover as linhas desnecessárias de documentos
function removeEmailField(e) {
    const element = e.target.parentElement;
    const row = element.parentElement;

    row.remove();
}