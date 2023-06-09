async function customFetch (url, init) {

    let resp;

    try {
        resp = await fetch(url, init);
    } catch (error) {
        return Promise.resolve({
            status: 0,
            statusText: 'FetchError',
            headers: new Headers(),
            success: false,
            message: error?.message ?? 'Falha comunicação com o servidor'
        });
    }

    if (resp.ok) {
        const data = await _tryGetJsonAsync(resp);

        return Promise.resolve({
            headers: resp.headers,
            status: resp.status,
            statusText: resp.statusText,
            data: data,
            message: data?.message,
            success: true
        });
    } else {
        const errorResponse = {
            headers: resp.headers,
            status: resp.status,
            statusText: resp.statusText,
            success: false
        };

        const errorData = await _tryGetJsonAsync(resp);
        errorResponse.errorData = errorData;

        if ([401, 403].includes(resp.status)) {
            errorResponse.message = 'Desculpe, ocorreu um problema no processo de autenticação.';
        } else if ([400, 422].includes(resp.status)) {
            errorResponse.message =
                errorData?.message ??
                errorData?.detail ??
                'Desculpe, ocorreu algum problema. Verifique os dados e tente novamente';
        } else {
            errorResponse.message = 'Desculpe, ocorreu um problema inesperado';
        }

        return Promise.resolve(errorResponse);
    }
}

async function _tryGetJsonAsync(resp) {
    try {
        return await resp?.json();
    } catch {
        return undefined;
    }
}
