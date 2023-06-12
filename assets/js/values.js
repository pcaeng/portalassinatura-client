const nomeAssinante = document.querySelector('[name="nomeAssinante"]');

nomeAssinante.onchange = () => {
    console.log(nomeAssinante.value);
}

const emailAssinante = document.querySelector('[name="emailAssinante"]');

emailAssinante.onchange = () => {
    console.log(emailAssinante.value);
}

const cpfAssinante = document.querySelector('[name="cpfAssinante"]');

cpfAssinante.onchange = () => {
    console.log(cpfAssinante.value);
}

const dataNascimento = document.querySelector('[name="dataNascimento"]');

dataNascimento.onchange = () => {
    console.log(dataNascimento.value);
}

const tipoDocumentoAssinatura = document.querySelector('[name="tipoDocumentoAssinatura"]');

tipoDocumentoAssinatura.onchange = () => {
    console.log(tipoDocumentoAssinatura.value);
}

const arquivoAssinatura = document.querySelector('[name="arquivoAssinatura"]');

arquivoAssinatura.onchange = () => {
    const file = arquivoAssinatura.files[0];
    console.log(file);
}