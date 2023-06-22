function obterDadosFormularios() {
  const dadosDocumentos = obterDadosDocumentos();
  const dadosAssinaturas = obterDadosAssinaturas();
  const dadosConfiguracoes = obterDadosConfiguracoes();

  return {
    documentos: dadosDocumentos,
    configuracoes: dadosConfiguracoes,
    assinaturas: dadosAssinaturas
  }
}

function obterSignatureType(configuracoes) {

  const type = [];

  if (configuracoes.reconhecimentoFacial == true) {
    type.push("Facial")
  }
  if (configuracoes.emailToken == true) {
    type.push("EmailToken")
  }

  return type.join(',');
}

function obterDocumentoSolicitado(identificadorDocumento, dadosFormularios) {
  debugger;
  const documentos = dadosFormularios.documentos;
  const assinaturas = dadosFormularios.assinaturas;

  const documentoAssinatura = documentos.find(documento => documento.type == identificadorDocumento);
  const documentoAssinante = assinaturas.find(assinatura => assinatura.tipoDocumento == identificadorDocumento);

  return documentoAssinatura ?? documentoAssinante
}

function obterSignatureDocuments(documentos) {

  const documents = documentos.map(documento => (
    {
      name: documento.type,
      description: documento.description
    }
  ));

  return documents;
}

function obterSignature(dadosFormularios) {

  const documentos = dadosFormularios.documentos;
  const configuracoes = dadosFormularios.configuracoes;

  const signature = {
    place: configuracoes.place,
    authentication: configuracoes.authentication,
    type: obterSignatureType(configuracoes),
    callbackUrl: '',
    documents: obterSignatureDocuments(documentos)
  }

  return signature;
}

function obterCustomers(dadosFormularios) {

  const assinaturas = dadosFormularios.assinaturas;

  const customer = assinaturas.map(assinatura => (
    {
      partyId: assinatura.partyId,
      name: assinatura.name,
      email: assinatura.email,
      cpf: assinatura.cpf,
      birthdate: assinatura.birthdate,
      document: {
        name: assinatura.tipoDocumento
      }
    }
  ));

  return customer;
}

function obterDadosCriacaoAssinatura(dadosFormularios) {

  const documentos = dadosFormularios.documentos;
  const configuracoes = dadosFormularios.configuracoes;
  const assinaturas = dadosFormularios.assinaturas;

  const dadosCriacaoAssinatura = {
    signature: obterSignature(dadosFormularios),
    customers: obterCustomers(dadosFormularios)
  }

  console.log(dadosCriacaoAssinatura)
  return dadosCriacaoAssinatura;
}

// Função executada ao iniciar a assinatura
const handleSubmit = () => {

  const dadosFormularios = obterDadosFormularios();

  const dadosCriacaoAssinatura = obterDadosCriacaoAssinatura(dadosFormularios);


  Authenticate('dev.api-key')
    .then(() => {
      AddSignature(dadosCriacaoAssinatura)
        .then((resp) => {
          console.log(resp.data)
          console.log('Assinatura adicionada', 'success');
          const { signatureId, documents } = resp.data;

          const promisses = [];

          documents.forEach((doc) => {

            const document = obterDocumentoSolicitado(doc.name, dadosFormularios);

            if (document) {
              promisses.push(
                UploadSignatureDocuments(signatureId, doc.documentId, document.file)
                  .then(() => {
                    debugger;
                    console.log(`Upload do documento "${doc.name}" realizado`, 'success');
                  })
                  .catch((err) => {
                    console.log(`Falha ao fazer o upload do documento "${doc.name}"`, 'error');
                  })
              )
            }
          });
          Promise.all(promisses).then(() => {
            UpdateSignatureStatus(signatureId, 'Requested')
              .then(() => {
                console.log('Status da assinatura alterado para requisitado', 'success');
              })
              .catch((err) => {
                console.log('Falha ao atualizar o status da assinatura', 'error');
              });
          })
        })
        .catch((err) => {
          console.log('Falha ao adicionar a assinatura', 'error');
        });
    })
    .catch((err) => {
      console.log('Autenticação falhou', 'warning');
    });
};