//TODO: AÇÃO DO BOTÃO DE ADICIONAR LINHA (CAMPO DINÂMICO)
//TODO: AÇÃO DO BOTÃO DE REMOVER LINHA (CAMPO DINÂMICO)
//TODO: RESOLVER PROBLEMA DO CONTADOR (NÃO FUNCIONA PARA 2+ CAMPOS)
//TODO: ENVIAR INFORMAÇÕES PARA O HANDLESUBMIT()

let qtdDocumentos = 1;

const arquivo = document.getElementById("doc-fileName0");

const arquivo_path = document.getElementById("doc-fileName0-value");

arquivo.onchange = function () {
    arquivo_path.innerText = arquivo.files[0].name;
}

function adicionarLinhaDocumentos() {
  qtdDocumentos++;

  const form_documentos = document.getElementById('documentos');

  // Criando os elementos
  const row = document.createElement("div");

  const nomeDocumento_div = document.createElement("div");
  const nomeDocumento_label = document.createElement("label");
  const nomeDocumento = document.createElement("select");
  const nomeDocumento_placeholder = document.createElement("option");
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

  // Adicionar a mensagem de erro à hierarquia DOM

  // Adicionando a classe 'row' para a div
  row.classList.add("row");

  // Adicionando as classes e propriedades para o campo 'Nome do documento'
  nomeDocumento_div.classList.add("col-md-4", "default-padding");
  nomeDocumento_label.classList.add("document-icon");
  nomeDocumento.classList.add("input-primary");

  nomeDocumento.setAttribute("placeholder", "Nome do documento");
  nomeDocumento.setAttribute("name", "type");

  // Configurar a primeira opção "Selecione um documento"
  nomeDocumento_placeholder.setAttribute("value", "");
  nomeDocumento_placeholder.innerText = "Selecione um documento";
  nomeDocumento_placeholder.setAttribute("selected", true);
  nomeDocumento_placeholder.setAttribute("disabled", true);

  nomeDocumento_termoAdesao.setAttribute("value", "Termo de adesão");
  nomeDocumento_contratoServicos.setAttribute("value", "Contrato de prestação de serviços");

  nomeDocumento_termoAdesao.innerText = "Termo de adesão";
  nomeDocumento_contratoServicos.innerText = "Contrato de prestação de serviços";

  // Adicionando as classes e propriedades para o campo 'Descrição do documento'
  descricaoDocumento_div.classList.add("col-md-4", "default-padding");
  descricaoDocumento_label.classList.add("document-icon");
  descricaoDocumento.classList.add("input-primary");

  descricaoDocumento.setAttribute("placeholder", "Descrição do documento");
  descricaoDocumento.setAttribute("name", "description");
  descricaoDocumento.setAttribute("value", "");

  // Adicionando as classes e propriedades para o campo 'Selecione o arquivo'
  arquivo_div.classList.add("col-md-2", "default-padding", "d-flex", "flex-column");
  arquivo_label.classList.add("file-button");
  arquivo.classList.add("d-none");
  arquivo_path.classList.add("file-button-text");

  arquivo.setAttribute("type", "file");
  arquivo.setAttribute("name", "arquivoDocumento");
  arquivo.setAttribute("accept", ".pdf");

  arquivo_label.innerText = "Selecione o arquivo";

  arquivo.onchange = function () {
      arquivo_path.innerText = arquivo.files[0].name;
  }

  // Adicionando classes e propriedades para o botão de adicionar
  addIcon_div.classList.add("col-md-1", "default-padding");
  addIcon.classList.add("add-icon");

  addIcon_div.setAttribute("onclick", "adicionarLinhaDocumentos()");

  // Adicionando classes e propriedades para o botão de deletar
  lessIcon_div.classList.add("col-md-1", "default-padding");
  lessIcon.classList.add("less-icon");

  // Hierarquia de inserções
  nomeDocumento_div.appendChild(nomeDocumento_label);
  nomeDocumento_label.appendChild(nomeDocumento);
  nomeDocumento.appendChild(nomeDocumento_placeholder);
  nomeDocumento.appendChild(nomeDocumento_termoAdesao);
  nomeDocumento.appendChild(nomeDocumento_contratoServicos);

  descricaoDocumento_div.appendChild(descricaoDocumento_label);
  descricaoDocumento_label.appendChild(descricaoDocumento);

  arquivo_div.appendChild(arquivo_label);
  arquivo_label.appendChild(arquivo);
  arquivo_div.appendChild(arquivo_path);

  addIcon_div.appendChild(addIcon);

  lessIcon_div.appendChild(lessIcon);

  // Inserir os elementos na div 'row'
  row.appendChild(nomeDocumento_div);
  row.appendChild(descricaoDocumento_div);
  row.appendChild(arquivo_div);
  row.appendChild(addIcon_div);
  row.appendChild(lessIcon_div);

  const errorMessageSelect = document.createElement("p");
  errorMessageSelect.classList.add("error-message");
  errorMessageSelect.setAttribute("data-field", "doc-name");
  errorMessageSelect.innerText = ""; // Defina a mensagem de erro como vazia inicialmente
  nomeDocumento_div.appendChild(errorMessageSelect);

  // Adicionar a criação do elemento de mensagem de erro para o campo "Descrição do documento"
  const errorMessageDescricao = document.createElement("p");
  errorMessageDescricao.classList.add("error-message");
  errorMessageDescricao.setAttribute("data-field", "doc-desc");
  errorMessageDescricao.innerText = ""; // Defina a mensagem de erro como vazia inicialmente
  descricaoDocumento_div.appendChild(errorMessageDescricao); // Adicionar a mensagem de erro à hierarquia DOM

  // Adicionar a criação do elemento de mensagem de erro para o campo "Selecione o arquivo"
  const errorMessageArquivo = document.createElement("p");
  errorMessageArquivo.classList.add("error-message");
  errorMessageArquivo.setAttribute("data-field", "doc-fileName");
  errorMessageArquivo.innerText = ""; // Defina a mensagem de erro como vazia inicialmente
  arquivo_div.appendChild(errorMessageArquivo);

  // Inserir os elementos no DOM
  form_documentos.appendChild(row);

  lessIcon_div.addEventListener("click", removerLinhaDocumentos);

  // Adicionar ouvintes de eventos para os novos campos
  nomeDocumento.addEventListener('change', function() {
      if (nomeDocumento.value) {
          nomeDocumento.classList.remove('invalid');
          errorMessageSelect.innerText = "";
      }
  });

  descricaoDocumento.addEventListener('input', function() {
      if (descricaoDocumento.value) {
          descricaoDocumento.classList.remove('invalid');
          errorMessageDescricao.innerText = "";
      }
  });

  arquivo.addEventListener('change', function() {
      if (arquivo.value) {
          arquivo.classList.remove('invalid');
          errorMessageArquivo.innerText = "";
      }
  });
}

function removerLinhaDocumentos(e) {
    const element = e.target.parentElement;
    const row = element.parentElement;

    qtdDocumentos--;
    row.remove();
}
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
document.addEventListener('DOMContentLoaded', function() {
    const dateInput = document.getElementById('cus-birth0');
    
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
  });
  
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