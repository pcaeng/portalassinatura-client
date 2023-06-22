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

  const dadosCriacaoAssinatura = {
    signature: obterSignature(dadosFormularios),
    customers: obterCustomers(dadosFormularios)
  }

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
          if (resp.success == false) {
            alert('Preencha todos os campos antes de iniciar a assinatura.');
            voltarParaPrimeiroPainel();
          }
          else {
            console.log(dadosCriacaoAssinatura);

            console.log('Assinatura adicionada com sucesso');

            const { signatureId, documents } = resp.data;

            const promisses = [];

            documents.forEach((doc) => {

              const document = obterDocumentoSolicitado(doc.name, dadosFormularios);

              if (document) {
                promisses.push(
                  UploadSignatureDocuments(signatureId, doc.documentId, document.file)
                    .then(() => {
                      console.log(`Upload do documento "${doc.name}" realizado`);
                    })
                    .catch((err) => {
                      console.log(`Falha ao fazer o upload do documento "${doc.name}"`);
                    })
                )
              }
            });
            Promise.all(promisses).then(() => {
              UpdateSignatureStatus(signatureId, 'Requested')
                .then(() => {
                  console.log('Status da assinatura alterado para requisitado');

                  if (dadosCriacaoAssinatura.signature.place == 'SignaturePortal') {
                    alert('Assinatura adicionada com sucesso');
                  } else {
                    alert('Assinatura adicionada com sucesso');
                    showEmbeddedPortal(signatureId);
                  }
                })
                .catch((err) => {
                  console.log('Falha ao atualizar o status da assinatura');
                });
            })
          }
        })
        .catch((err) => {
          console.log('Falha ao adicionar a assinatura, verifique as informações que estão sendo enviadas');
        });
    })
    .catch((err) => {
      console.log('Autenticação falhou, verifique a credencial do método de autenticação');
    });
};