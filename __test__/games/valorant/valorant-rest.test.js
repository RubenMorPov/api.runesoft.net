import { info } from '../../../src/games/valorant/mgr/valorant-mgr.js';

const mock = {
    name: 'MilkBrick',
    tag: 'MILK',
    region: 'EU',
};

describe('Valorant API Endpoints', () => {
    it('User Rank endpoint', async () => {
        const valorantData = await info.all(mock.region, mock.name, mock.tag);
        expect(valorantData.name).toEqual('MilkBrick');
        expect(valorantData.tag).toEqual('MILK');
    });
    it('User Tier endpoint', async () => {
        const valorantData = await info.all(mock.region, mock.name, mock.tag);
        expect(valorantData.currenttier).toBeGreaterThan(-1);
        expect(valorantData.currenttier).toBeLessThan(26);
    });
});
