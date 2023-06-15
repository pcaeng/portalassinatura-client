const emptySignature = {
  place: ['SignaturePortal'],
  authentication: 'FormAuth',
  type: ['Facial', 'EmailToken'],
  callbackUrl: '',
  documents: []
};

const emptyCustomer = {
  partyId: '4BFBFB1A-416F-4FF7-984C-1EEC705091F6',
  name: '',
  email: '',
  cpf: '',
  birthdate: new Date(),
  document: {
    name: 'RG',
  },
};

// Estados
let signature = emptySignature; // tipo: IAddSignature
const setSignature = (value) => {
  signature = value;
};

let customer = emptyCustomer; // tipo: ICustomer
const setCustomer = (value) => {
  customer = value;
};

let partyOptions = []; // tipo: { partyId: string; name: string }[]
const setPartyOptions = (value) => {
  partyOptions = value;
};

let signatureDocumentName1 = 'Termo de adesão'; // tipo: string
const setSignatureDocumentName1 = (value) => {
  signatureDocumentName1 = value;
};

let signatureDocumentDescription1 = ''; // tipo: string
const setSignatureDocumentDescription1 = (value) => {
  signatureDocumentDescription1 = value;
};

let signatureDocument1 = undefined; // tipo: File | undefined
const setSignatureDocument1 = (value) => {
  signatureDocument1 = value;
};

let customerDocument = undefined; // tipo: File | undefined
const setCustomerDocument = (value) => {
  customerDocument = value;
};

const handleChangeSignature = (event) => {
  setSignature({
    ...signature,
    [event.target.name]: event.target.value,
  });
};

const handleChangeCustomer = (event) => {
  setCustomer({
    ...customer,
    [event.target.name]: event.target.value,
  });
};

const handleChangeCustomerDocument = (event) => {
  setCustomer({
    ...customer,
    document: {
      ...customer.document,
      [event.target.name]: event.target.value,
    },
  });
};

const handleSubmit = () => {

  const signatureAux = { ...signature };
  const customerAux = { ...customer };

  signatureAux.place = signature.place.join(',');
  signatureAux.type = signature.type.join(',');

  const signatureDocuments = [];
  if (signatureDocumentDescription1.length > 0) {
    signatureDocuments.push({
      name: signatureDocumentName1,
      description: signatureDocumentDescription1,
    });
  }

  signatureAux.documents = signatureDocuments;

  const form = {
    signature: signatureAux,
    customers: [customerAux],
  };

  Authenticate('dev.api-key')
    .then(() => {
      console.log(customer)
      console.log(signature)
      AddSignature(form)
        .then((resp) => {
          console.log('Assinatura adicionada', 'success');
          const { signatureId, documents } = resp.data;

          documents.forEach((doc) => {
            let document;

            if (doc.name === signatureDocumentName1) {
              document = signatureDocument1;
            } else {
              document = customerDocument;
            }

            if (document) {
              UploadSignatureDocuments(signatureId, doc.documentId, document)
                .then(() => {
                  console.log(`Upload do documento "${doc.name}" realizado`, 'success');
                  UpdateSignatureStatus(signatureId, 'Requested')
                    .then(() => {
                      console.log('Status da assinatura alterado para requisitado', 'success');
                    })
                    .catch((err) => {
                      console.log('Falha ao atualizar o status da assinatura', 'error');
                    });
                })
                .catch((err) => {
                  console.log(`Falha ao fazer o upload do documento "${doc.name}"`, 'error');
                });
            } else {
              console.log("Não bateu aqui")
            }
          });
        })
        .catch((err) => {
          console.log('Falha ao adicionar a assinatura', 'error');
        });
    })
    .catch((err) => {
      console.log('Autenticação falhou', 'warning');
    });
};