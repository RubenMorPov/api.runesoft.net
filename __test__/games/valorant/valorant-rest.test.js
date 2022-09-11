const axios = require('axios');

describe('Valorant API Endpoints', () => {
    it('User Rank endpoint', async () => {
        const response = await axios.get(`http://localhost:3000/games/valorant/rank?tag=MILK&region=eu&user=MilkBrick`);
        expect(response.status).toEqual(200);
        const valorantData = response.data;
        expect(valorantData.name).toEqual('MilkBrick');
        expect(valorantData.tag).toEqual('MILK');
    });
    it('User Tier endpoint', async () => {
        const response = await axios.get(`http://localhost:3000/games/valorant/tier?tag=MILK&region=eu&user=MilkBrick`);
        expect(response.status).toEqual(200);
        const valorantData = response.data;
        expect(valorantData).toBeGreaterThan(-1);
        expect(valorantData).toBeLessThan(26);
    });
});
