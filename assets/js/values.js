//Campos do documento 1
const nomeDocumento = document.getElementById("doc1-name0")
nomeDocumento.value = signatureDocumentName1;
nomeDocumento.onchange = (e) => setSignatureDocumentName1(e.target.value);

const descricaoDocumento = document.getElementById("doc1-desc0")
descricaoDocumento.value = signatureDocumentDescription1;
descricaoDocumento.onchange = (e) => setSignatureDocumentDescription1(e.target.value);

const descricaoArquivo = document.getElementById("doc1-fileName0-value")

const arquivoDocumento = document.getElementById("doc1-fileName0")
arquivoDocumento.onchange = (e) => {
    setSignatureDocument1(e.target.files[0] || undefined);
    descricaoArquivo.innerText = arquivoDocumento.files[0].name
}

//Campos de assinaturas
const nomeAssinante = document.getElementById("cus-name0")
nomeAssinante.value = customer.name;
nomeAssinante.onchange = (e) => handleChangeSignature(e);

const emailAssinante = document.getElementById("cus-email0")
emailAssinante.value = customer.email;
emailAssinante.onchange = (e) => handleChangeSignature(e);

const cpfAssinante = document.getElementById("cus-cpf0")
cpfAssinante.value = customer.cpf;
cpfAssinante.onchange = (e) => handleChangeSignature(e);

const dataNascimento = document.getElementById("cus-birth0")
dataNascimento.value = customer.birthdate;
dataNascimento.onchange = (e) => handleChangeSignature(e);

const nomeDocumentoAssinatura = document.getElementById("cus-nameDoc0")
nomeDocumentoAssinatura.value = customer.document.name;
nomeDocumentoAssinatura.onchange = (e) => handleChangeCustomerDocument(e);

const descricaoArquivoAssinatura = document.getElementById("sub-fileName0-value")

const arquivoAssinatura = document.getElementById("sub-fileName0")
arquivoAssinatura.onchange = (e) => {
    setCustomerDocument(e.target.files[0] || undefined);
    descricaoArquivoAssinatura.innerText = arquivoAssinatura.files[0].name
}

//Modal de configurações
const localProcesso = document.getElementById("config-local0");
localProcesso.value = signature.place;
localProcesso.onchange = (e) => handleChangeSignature(e);

const autenticacao = document.getElementById("config-auth0");
autenticacao.value = signature.authentication;
autenticacao.onchange = (e) => handleChangeSignature(e);

const tipoAutenticacao = document.getElementById("config-tipo0");
tipoAutenticacao.value = signature.type;
tipoAutenticacao.onchange = (e) => handleChangeSignature(e); 