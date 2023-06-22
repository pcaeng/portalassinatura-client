function obterDadosConfiguracoes() {
    
    const formElements = document.forms["configuracoes_form"].elements;

    const dadosConfiguracoes = {
        place: formElements.place.value,
        authentication: formElements.authentication.value,
        reconhecimentoFacial: formElements.reconhecimentoFacial.checked,
        emailToken: formElements.emailToken.checked
    }

    return dadosConfiguracoes;
}