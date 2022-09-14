import { user } from '../../src/twitch/mgr/twitch-users-mgr.js';

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
        const userData = await user.getDataByName(mock.login);
        expect(userData.id).toEqual(mock.id.toString());
        expect(userData.login).toEqual(mock.login);
        expect(userData.display_name).toEqual(mock.display_name);
    });
    it('User data by id endpoint', async () => {
        const userData = await user.getDataById(mock.id);
        expect(userData.id).toEqual(mock.id.toString());
        expect(userData.login).toEqual(mock.login);
        expect(userData.display_name).toEqual(mock.display_name);
    });
    it('User endpoint', async () => {
        const userData = await user.getUser(mock.id);
        expect(userData).toEqual(mock.login);
    });
    it('User ID endpoint', async () => {
        const userData = await user.getId(mock.login);
        expect(userData).toEqual(mock.id.toString());
    });
    it('User name endpoint', async () => {
        const userData = await user.getName(mock.login);
        expect(userData).toEqual(mock.display_name);
    });
    it('User type endpoint', async () => {
        const userData = await user.getBroadcasterType(mock.login);
        expect(userData).toEqual(mock.type);
    });
    it('User description endpoint', async () => {
        const userData = await user.getDescription(mock.login);
        expect(userData).toEqual(mock.description);
    });
    it('User is affiliate endpoint', async () => {
        const userData = await user.isAffiliate(mock.login);
        expect(userData).toEqual(mock.affiliate);
    });
    it('User is partner', async () => {
        const userData = await user.isPartner(mock.login);
        expect(userData).toEqual(mock.partner);
    });
});
