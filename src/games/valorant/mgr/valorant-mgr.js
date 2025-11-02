import unofficialValorApi from 'unofficial-valorant-api';
import { ranks } from '../languaje.js';
const valorAPI = new unofficialValorApi();

export const info = {
    /**
     * Gets all the data of a Valorant player.
     * @param {String} region Region of the player (like EU)
     * @param {String} user Player's name.
     * @param {String} tag Player's tag.
     * @returns JSON with all the player's data that could be retrieved.
     */
    all: async (region, name, tag) =>
        (
            await valorAPI.getMMR({
                version: 'v2',
                region: region,
                name: name,
                tag: tag,
            })
        )?.data?.current_data,

    getRankNameFromTier: (tier, lang = 'en') => {
        const supportedLang = ['en', 'es'].includes(lang);
        if (!supportedLang) lang = 'en';
        return ranks[tier][lang];
    },

    rank: (tier, points, lastMatchPoints, lang = 'en') => {
        const supportedLang = ['en', 'es'].includes(lang);
        if (!supportedLang) lang = 'en';
        return {
            es: () => `${info.getRankNameFromTier(tier, lang)} con ${points} puntos (${lastMatchPoints} en la última partida)`,
            en: () => `${info.getRankNameFromTier(tier, lang)} with ${points} points (${lastMatchPoints} on last match)`,
        }[lang]();
    },
};
