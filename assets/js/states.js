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

  function formatarDataParaBackend(data) {
    const parts = data.split('/'); // Divide a string pela barra para obter dia, mês e ano
    const formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`; // Formata para "YYYY-MM-DD"
    return formattedDate;
}
  const dadosFormularios = obterDadosFormularios();
  
  const dadosCriacaoAssinatura = obterDadosCriacaoAssinatura(dadosFormularios);
  dadosCriacaoAssinatura.customers.forEach(customer => {
    customer.cpf = customer.cpf.replace(/\D/g, ''); // Remove qualquer coisa que não seja um dígito
    customer.birthdate = formatarDataParaBackend(customer.birthdate); // Formata a data de nascimento
});

  Authenticate('gitdemonstracao.03082023')
    .then(() => {
      
      AddSignature(dadosCriacaoAssinatura)
        .then((resp) => {
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
                    document.getElementById('loading').style.display = 'none';
                    document.getElementById('Btnassinatura').style.display = 'flex';
                    alert('Assinatura adicionada com sucesso');

                   
                  } else {
                    document.getElementById('loading').style.display = 'none';
                    document.getElementById('Btnassinatura').style.display = 'flex';
                    alert('Assinatura adicionada com sucesso');
                  
                    showEmbeddedPortal(signatureId, dadosCriacaoAssinatura.customers.length, dadosCriacaoAssinatura.customers[0].cpf, dadosCriacaoAssinatura.customers[0].birthdate);
                  }
                })
                .catch((err) => {
                  console.log('Falha ao atualizar o status da assinatura');
                });
            })
          
        })
        .catch((err) => {
          alert('Falha ao adicionar a assinatura, verifique as informações que estão sendo enviadas');
          document.getElementById('loading').style.display = 'none';
          document.getElementById('Btnassinatura').style.display = 'flex';
        });
    })
    .catch((err) => {
      alert('Autenticação falhou, verifique a credencial do método de autenticação');
      document.getElementById('loading').style.display = 'none';
      document.getElementById('Btnassinatura').style.display = 'flex';
    });
};