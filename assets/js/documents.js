//TODO: AÇÃO DO BOTÃO DE ADICIONAR LINHA (CAMPO DINÂMICO)
//TODO: AÇÃO DO BOTÃO DE REMOVER LINHA (CAMPO DINÂMICO)
//TODO: RESOLVER PROBLEMA DO CONTADOR (NÃO FUNCIONA PARA 2+ CAMPOS)
//TODO: ENVIAR INFORMAÇÕES PARA O HANDLESUBMIT()

let qtdDocumentos = 1;

function adicionarLinhaDocumentos() {

    qtdDocumentos++;

    const form_documentos = document.getElementById('documentos');

    //Criando os elementos
    const row = document.createElement("div");

    const nomeDocumento_div = document.createElement("div");
    const nomeDocumento_label = document.createElement("label");
    const nomeDocumento = document.createElement("select");
    const nomeDocumento_termoAdesao = document.createElement("option");
    const nomeDocumento_contratoServicos = document.createElement("option");

    const descricaoDocumento_div = document.createElement("div");
    const descricaoDocumento_label = document.createElement("label");
    const descricaoDocumento = document.createElement("input");

    const arquivo_div = document.createElement("div");
    const arquivo_label = document.createElement("label");
    const arquivo = document.createElement("input");
    const arquivo_path = document.createElement("p");

    const addIcon_div = document.createElement("div");
    const addIcon = document.createElement("i");

    const lessIcon_div = document.createElement("div");
    const lessIcon = document.createElement("i");

    //Adicionando a classe 'row' para a div
    row.classList.add("row");

    //Adicionando as classes e propriedades para o campo 'Nome do documento'
    nomeDocumento_div.classList.add("col-md-4", "default-padding");
    nomeDocumento_label.classList.add("document-icon");
    nomeDocumento.classList.add("input-primary");

    nomeDocumento.setAttribute("placeholder", "Nome do documento");
    nomeDocumento.setAttribute("name", "type");
    nomeDocumento.setAttribute("value", "Termo de adesão");
    // nomeDocumento.setAttribute("id", documentTypeID);

    nomeDocumento_termoAdesao.setAttribute("value", "Termo de adesão");
    nomeDocumento_contratoServicos.setAttribute("value", "Contrato de prestação de serviços");

    nomeDocumento_termoAdesao.innerText = "Termo de adesão";
    nomeDocumento_contratoServicos.innerText = "Contrato de prestação de serviços";

    //Adicionando as classes e propriedades para o campo 'Descrição do documento'
    descricaoDocumento_div.classList.add("col-md-4", "default-padding");
    descricaoDocumento_label.classList.add("document-icon");
    descricaoDocumento.classList.add("input-primary");

    descricaoDocumento.setAttribute("placeholder", "Descrição do documento");
    descricaoDocumento.setAttribute("name", "description");
    descricaoDocumento.setAttribute("value", "");
    // descricaoDocumento.setAttribute("id", documentNameID);

    //Adicionando as classes e propriedades para o campo 'Selecione o arquivo'
    arquivo_div.classList.add("col-md-2", "default-padding", "d-flex", "flex-column");
    arquivo_label.classList.add("file-button");
    arquivo.classList.add("d-none");
    arquivo_path.classList.add("file-button-text");

    // arquivo.setAttribute("id", arquivoID);
    arquivo.setAttribute("type", "file");
    arquivo.setAttribute("name", "arquivoDocumento");
    arquivo.setAttribute("accept", ".pdf");
    // arquivo_path.setAttribute("id", arquivo_pathID)

    arquivo_label.innerText = "Selecione o arquivo";

    //Adicionando classes e propriedades para o botão de adicionar
    addIcon_div.classList.add("col-md-1", "default-padding");
    addIcon.classList.add("add-icon");

    addIcon_div.setAttribute("onclick", "adicionarLinhaDocumentos()");

    //Adicionando classes e propriedades para o botão de deletar
    lessIcon_div.classList.add("col-md-1", "default-padding");
    lessIcon.classList.add("less-icon");

    //Hierarquia de inserções
    nomeDocumento_div.appendChild(nomeDocumento_label);
    nomeDocumento_label.appendChild(nomeDocumento);
    nomeDocumento.appendChild(nomeDocumento_termoAdesao);
    nomeDocumento.appendChild(nomeDocumento_contratoServicos);

    descricaoDocumento_div.appendChild(descricaoDocumento_label);
    descricaoDocumento_label.appendChild(descricaoDocumento);

    arquivo_div.appendChild(arquivo_label);
    arquivo_label.appendChild(arquivo);
    arquivo_div.appendChild(arquivo_path);

    addIcon_div.appendChild(addIcon);

    lessIcon_div.appendChild(lessIcon);

    //Inserir os elementos na div 'row'
    row.appendChild(nomeDocumento_div);
    row.appendChild(descricaoDocumento_div);
    row.appendChild(arquivo_div);
    row.appendChild(addIcon_div);
    row.appendChild(lessIcon_div);

    //Inserir os elementos no DOM
    form_documentos.appendChild(row);

    lessIcon_div.addEventListener("click", removerLinhaDocumentos);
}

function removerLinhaDocumentos(e) {
    const element = e.target.parentElement;
    const row = element.parentElement;

    qtdDocumentos--;
    row.remove();
}

function obterDadosDocumentos() {
    
    const formElements = document.forms["documentos_form"].elements;

    const dadosDocumentos = [];

    if (qtdDocumentos > 1) {
        for (let i = 0; i < qtdDocumentos; i++) {

            dadosDocumentos.push({
                type: formElements.type[i].value,
                description: formElements.description[i].value,
                file: formElements.arquivoDocumento[i].files[0]
            })
        }
    } else {
        dadosDocumentos.push({
            type: formElements.type.value,
            description: formElements.description.value,
            file: formElements.arquivoDocumento.files[0]
        })
    }

    return dadosDocumentos;
}