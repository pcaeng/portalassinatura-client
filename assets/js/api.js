const baseUrl = 'https://localhost:7178/api';

var accessToken = '';

const Authenticate = async (xApiKey) => {
    // Chama a função 'post' da API para autenticação
    debugger;
    const response = await customFetch(`${baseUrl}/Authentication`, {
        method: 'POST',
        headers: new Headers({
            'x-api-key': xApiKey
        })
    });

    if (response.success) {
        accessToken = response.headers.get('X-Access-Token');
    }

    return response;
};

const AddSignature = async (signature) => {
    // Chama a função 'post' da API para adicionar uma assinatura
    debugger;
    return await customFetch(`${baseUrl}/Signature`, {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json; charset=UTF-8',
            Accept: 'application/json, text/javascript, text/plain',
            Authorization: `Bearer ${accessToken}`
        }),
        body: JSON.stringify(signature)
    });
};

const UploadSignatureDocuments = async (signatureId, documentId, document) => {
    debugger;

    const form = new FormData();

    form.append('document', document);

    return await customFetch(`${baseUrl}/Signature/${signatureId}/Document/${documentId}`, {
        method: 'PATCH',
        headers: new Headers({
            Authorization: `Bearer ${accessToken}`
        }),
        body: form
    });
};

const UpdateSignatureStatus = async (signatureId, status) => {
    debugger;
    return await customFetch(`${baseUrl}/Signature/${signatureId}?status=${status}`, {
        method: 'PATCH',
        headers: new Headers({
            Authorization: `Bearer ${accessToken}`
        })
    });
};