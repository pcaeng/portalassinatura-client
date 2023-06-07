//TODO: ID dinâmico para fazer o input type="file" funcionar.

var dynamicId = 1;

function addEmailField() {

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
    divTipoDocumento.classList.add("col-md-4","order-first","input-wrap");
    labelTipoDocumento.classList.add("document-icon");
    tipoDocumento.classList.add("input-primary");

    tipoDocumento.setAttribute("placeholder", "TIPO DO DOCUMENTO");
    tipoDocumento.setAttribute("name", "tipoDocumento");

    //Adicionando as classes e propriedades para o campo 'Nome do documento'
    divNomeDocumento.classList.add("col-md-4","order-first","input-wrap");
    labelNomeDocumento.classList.add("document-icon");
    nomeDocumento.classList.add("input-primary");

    nomeDocumento.setAttribute("placeholder", "NOME DO DOCUMENTO");
    nomeDocumento.setAttribute("name", "nomeDocumento");

    //Adicionando as classes e propriedades para o campo 'Selecione o arquivo'
    divButtonArquivo.classList.add("col-md-2","order-first","input-wrap", "d-flex", "flex-column");
    labelButtonArquivo.classList.add("file-button");
    buttonArquivo.classList.add("d-none");
    textButtonArquivo.classList.add("file-button-text");

    const buttonArquivoId = `fileName${dynamicId}`;
    const textButtonArquivoId = `fileName${dynamicId}-value`;

    labelButtonArquivo.setAttribute("for", buttonArquivoId)
    buttonArquivo.setAttribute("id", buttonArquivoId);
    buttonArquivo.setAttribute("type", "file");
    textButtonArquivo.setAttribute("id", textButtonArquivoId)

    labelButtonArquivo.innerText = "Selecione o arquivo";

    //Adicionando classes e propriedades para o botão de adicionar
    divPlusIcon.classList.add("col-md-1","order-first","input-wrap");
    divPlusIcon.setAttribute("onclick", "addEmailField()");
    plusIcon.classList.add("more-icon");

    //Adicionando classes e propriedades para o botão de deletar
    divLessIcon.classList.add("col-md-1","order-first","input-wrap");
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

//Remover as linhas desnecessárias de documentos
function removeEmailField(e) {
    const element = e.target.parentElement;
    const row = element.parentElement;
    
    row.remove();
}