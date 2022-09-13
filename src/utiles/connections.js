import fetch from 'node-fetch';

const doFetch = async (method, url, config = {}, params) => {
    if (params) config.body = JSON.stringify(params);
    const response = await fetch(url, {
        method: method,
        ...config,
        headers: {
            'Content-Type': 'application/json',
            ...config.headers,
        },
    });
    const finalResponse = {
        status: response.status,
        ok: response.ok,
        data: response.ok ? await response.json() : {},
    };
    return finalResponse;
};

export const connections = {
    get: async (url, config) => await doFetch('GET', url, config),
    post: async (url, params, config) => await doFetch('POST', url, config, params),
    put: async (url, params, config) => await doFetch('PUT', url, config, params),
    delete: async (url, params, config) => await doFetch('DELETE', url, config, params),
};
