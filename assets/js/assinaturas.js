let qtdAssinantes = 1;

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
    dataNascimento.setAttribute("type", "date");
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
    arquivo.setAttribute("accept", ".png");
    arquivo.setAttribute("accept", ".jpg");
    arquivo.setAttribute("accept", ".jpeg");

    // arquivo_path.setAttribute("id", textArquivoAssinanteID)

    arquivo_label.innerText = "Selecione o arquivo";

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