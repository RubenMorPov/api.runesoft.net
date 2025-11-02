import { info } from './mgr/valorant-mgr.js';

export const valorant = {
    _rest: null,
    _basePath: '',
    load: async (rest, basePath = '') => {
        valorant._rest = rest;
        valorant._basePath = `${basePath}/games/valorant`;
        console.log('Loading Valorant API...');
        valorant.getData();
        valorant.getRank();
        valorant.getTier();
        valorant.getRR();
        valorant.getLastMatch();
    },
    /**
     * Gets the full data of a valorant player.
     */
    getData: async () => {
        valorant._rest.get(`${valorant._basePath}/data/:region/:name/:tag`, async (req, res) => {
            const { region, name, tag } = req.params;
            const userData = await info.all(region, name, tag);
            res.send(userData);
        });
    },
    /**
     * Gets the full data of a valorant player.
     */
    getRank: async () => {
        valorant._rest.get(`${valorant._basePath}/rank/:region/:name/:tag/:lang?`, async (req, res) => {
            const { region, name, tag, lang } = req.params;
            const userData = await info.all(region, name, tag);
            if (userData) res.send(info.rank(userData.currenttier, userData.ranking_in_tier, userData.mmr_change_to_last_game, lang));
        });
    },
    /**
     * Gets the tier of a valorant player.
     */
    getTier: async () => {
        valorant._rest.get(`${valorant._basePath}/tier/:region/:name/:tag/:lang?`, async (req, res) => {
            const { region, name, tag, lang } = req.params;
            const userData = await info.all(region, name, tag);
            if (userData) res.send(info.getRankNameFromTier(userData.currenttier, lang));
        });
    },
    /**
     * Gets the RR points of a valorant player.
     */
    getRR: async () => {
        valorant._rest.get(`${valorant._basePath}/rr/:region/:name/:tag`, async (req, res) => {
            const { region, name, tag } = req.params;
            const userData = await info.all(region, name, tag);
            res.send(userData.ranking_in_tier.toString());
        });
    },
    /**
     * Gets the RR Ponints earned on the last match of a valorant player.
     */
    getLastMatch: async () => {
        valorant._rest.get(`${valorant._basePath}/lastmatch/:region/:name/:tag`, async (req, res) => {
            const { region, name, tag } = req.params;
            const userData = await info.all(region, name, tag);
            res.send(userData.mmr_change_to_last_game.toString());
        });
    },
};
