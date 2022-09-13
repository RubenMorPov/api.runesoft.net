const axios = require('axios');

const apiURL = 'http://localhost:3000';
const userApiURL = '/twitch/user';
const mock = {
    id: 64989449,
    login: 'mrruriver',
    display_name: 'mrruriver',
    type: '',
    description: 'Hey there and welcome to my profile! Hope you enjoy the streaming! ^^',
    affiliate: false,
    partner: false,
};

describe('Twitch API Endpoints', () => {
    it('User data by name endpoint', async () => {
        const response = await axios.get(`${apiURL}${userApiURL}/data?streamer=${mock.login}`);
        expect(response.status).toEqual(200);
        const userData = response.data;
        expect(userData.id).toEqual(mock.id.toString());
        expect(userData.login).toEqual(mock.login);
        expect(userData.display_name).toEqual(mock.display_name);
    });
    it('User data by id endpoint', async () => {
        const response = await axios.get(`${apiURL}${userApiURL}/data?id=${mock.id}`);
        expect(response.status).toEqual(200);
        const userData = response.data;
        expect(userData.id).toEqual(mock.id.toString());
        expect(userData.login).toEqual(mock.login);
        expect(userData.display_name).toEqual(mock.display_name);
    });
    it('User endpoint', async () => {
        const response = await axios.get(`${apiURL}${userApiURL}?id=${mock.id}`);
        expect(response.status).toEqual(200);
        const userData = response.data;
        expect(userData).toEqual(mock.login);
    });
    it('User ID endpoint', async () => {
        const response = await axios.get(`${apiURL}${userApiURL}/id?streamer=${mock.login}`);
        expect(response.status).toEqual(200);
        const userData = response.data;
        expect(userData).toEqual(mock.id);
    });
    it('User name endpoint', async () => {
        const response = await axios.get(`${apiURL}${userApiURL}/name?streamer=${mock.login}`);
        expect(response.status).toEqual(200);
        const userData = response.data;
        expect(userData).toEqual(mock.display_name);
    });
    it('User type endpoint', async () => {
        const response = await axios.get(`${apiURL}${userApiURL}/type?streamer=${mock.login}`);
        expect(response.status).toEqual(200);
        const userData = response.data;
        expect(userData).toEqual(mock.type);
    });
    it('User description endpoint', async () => {
        const response = await axios.get(`${apiURL}${userApiURL}/description?streamer=${mock.login}`);
        expect(response.status).toEqual(200);
        const userData = response.data;
        expect(userData).toEqual(mock.description);
    });
    it('User is affiliate endpoint', async () => {
        const response = await axios.get(`${apiURL}${userApiURL}/affiliate?streamer=${mock.login}`);
        expect(response.status).toEqual(200);
        const userData = response.data;
        expect(userData).toEqual(mock.affiliate);
    });
    it('User is partner', async () => {
        const response = await axios.get(`${apiURL}${userApiURL}/partner?streamer=${mock.login}`);
        expect(response.status).toEqual(200);
        const userData = response.data;
        expect(userData).toEqual(mock.partner);
    });
});
