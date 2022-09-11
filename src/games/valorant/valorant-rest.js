import { info } from './mgr/valorant-mgr.js';

export const valorant = {
    _rest: null,
    _basePath: '',
    load: async (rest, basePath = '') => {
        valorant._rest = rest;
        valorant._basePath = `${basePath}/games/valorant`;
        console.log('Loading Valorant API...');
        valorant.getRank();
        valorant.getTier();
    },
    /**
     * Gets the full data of a valorant player.
     */
    getRank: async () => {
        valorant._rest.get(`${valorant._basePath}/rank`, async (req, res) => {
            const { region, user, tag } = req.query;
            const userData = await info.all(region, user, tag);
            res.send(userData);
        });
    },
    /**
     * Gets the tier of a valorant player.
     */
    getTier: async () => {
        valorant._rest.get(`${valorant._basePath}/tier`, async (req, res) => {
            const { region, user, tag } = req.query;
            const userData = await info.all(region, user, tag);
            res.send(userData.currenttier.toString());
        });
    },
};
