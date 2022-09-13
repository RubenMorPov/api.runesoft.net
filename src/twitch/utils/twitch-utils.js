import { connections } from '../../utiles/connections.js';

export const API_DATA = {
    helixUrl: 'https://api.twitch.tv/helix',
    client: {
        id: '<YOUR_ID>',
        secret: '<YOUR_SECRET>',
        code: '<YOUR_CODE>',
        token: '<YOUR_OAUTH_ACCESS_TOKEN>',
        oauth: {
            access_token: '',
            expires_in: 0,
            refresh_token: '',
            scope: [],
            token_type: '',
        },
        setToken: (token) => {
            API_DATA.client.token = `Bearer ${token}`;
        },
    },
};

const token = {
    /**
     * Creates the first token. To reuse this function, you must generate a new code
     * @returns New OAUTH data, including access token and refresh token.
     */
    get: async () => {
        const response = await connections.post(`https://id.twitch.tv/oauth2/token`, {
            client_id: API_DATA.client.id,
            client_secret: API_DATA.client.secret,
            code: API_DATA.client.code,
            grant_type: 'authorization_code',
            redirect_uri: 'http://localhost:3000',
        });
        API_DATA.client.setToken(response.data.access_token);
        API_DATA.client.oauth = response.data;
        console.log(API_DATA.client.oauth);
        return API_DATA.client.oauth;
    },
    /**
     * Refresh Twitch OAUTH token using the Refresh token.
     * @returns New OAUTH data, including access token and refresh token.
     */
    refresh: async () => {
        console.log('Refreshing token...');
        const response = await connections.post(`https://id.twitch.tv/oauth2/token`, {
            client_id: API_DATA.client.id,
            client_secret: API_DATA.client.secret,
            grant_type: 'refresh_token',
            refresh_token: API_DATA.client.oauth.refresh_token,
        });
        API_DATA.client.setToken(response.data.access_token);
        API_DATA.client.oauth = response.data;
        console.log(API_DATA.client.oauth);
        return API_DATA.client.oauth;
    },
};

/**
 * Creates an async method containing the Request call with the corresponding method to Twitch's Helix API.
 * @param {String} method Method to execute (GET | POST | PUT | DELETE)
 * @param {String} url API Url.
 * @param {Object} params Params to load.
 * @param {Object} config Request config (like headers).
 * @returns
 */
const createHelixCall = (method = 'GET', url, params = {}, config = {}) => {
    const getConfig = () => ({
        ...config,
        headers: {
            Authorization: API_DATA.client.token,
            'Client-Id': API_DATA.client.id,
            ...config.headers,
        },
    });
    url = `${API_DATA.helixUrl}${url}`;
    if (method == 'GET') return async () => await connections.get(url, getConfig());
    if (method == 'POST') return async () => await connections.post(url, params, getConfig());
    if (method == 'PUT') return async () => await connections.put(url, params, getConfig());
    if (method == 'DELETE') return async () => await connections.delete(url, params, getConfig());
};

export const helix = {
    /**
     * Handles the 401 response codes to reload the token.
     * All helix API calls should be passed through this call.
     * @param {String} method GET | POST | PUT | DELETE
     * @param {String} url URL to call.
     * @param {Object} params Parameters to use (do not use with GET method, there you have to URL encode the parameters).
     * @param {Object} config Request configuration.
     * @returns Request response.
     */
    call: async (method = 'GET', url, params = {}, config = {}) => {
        const apiCall = createHelixCall(method, url, params, config);
        const apiResponse = await apiCall();
        if (apiResponse.status == 401) {
            await token.refresh();
            return await createHelixCall(method, url, params, config)();
        }
        return apiResponse;
    },
};
