import unofficialValorApi from 'unofficial-valorant-api';
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
        const getTierNames = () => {
            switch (tier) {
                case 3:
                    return {
                        es: 'Hierro 1',
                        en: 'Iron 1',
                    };
                case 4:
                    return {
                        es: 'Hierro 2',
                        en: 'Iron 2',
                    };
                case 5:
                    return {
                        es: 'Hierro 3',
                        en: 'Iron 3',
                    };
                case 6:
                    return {
                        es: 'Bronce 1',
                        en: 'Bronze 1',
                    };
                case 7:
                    return {
                        es: 'Bronce 2',
                        en: 'Bronze 2',
                    };
                case 8:
                    return {
                        es: 'Bronce 3',
                        en: 'Bronze 3',
                    };
                case 9:
                    return {
                        es: 'Plata 1',
                        en: 'Silver 1',
                    };
                case 10:
                    return {
                        es: 'Plata 2',
                        en: 'Silver 2',
                    };
                case 11:
                    return {
                        es: 'Plata 3',
                        en: 'Silver 3',
                    };
                case 12:
                    return {
                        es: 'Oro 1',
                        en: 'Gold 1',
                    };
                case 13:
                    return {
                        es: 'Oro 2',
                        en: 'Gold 2',
                    };
                case 14:
                    return {
                        es: 'Oro 3',
                        en: 'Gold 3',
                    };
                case 15:
                    return {
                        es: 'Platino 1',
                        en: 'Platinum 1',
                    };
                case 16:
                    return {
                        es: 'Platino 2',
                        en: 'Platinum 2',
                    };
                case 17:
                    return {
                        es: 'Platino 3',
                        en: 'Platinum 3',
                    };
                case 18:
                    return {
                        es: 'Diamante 1',
                        en: 'Diamond 1',
                    };
                case 19:
                    return {
                        es: 'Diamante 2',
                        en: 'Diamond 2',
                    };
                case 20:
                    return {
                        es: 'Diamante 3',
                        en: 'Diamond 3',
                    };
                case 21:
                    return {
                        es: 'Ascendente 1',
                        en: 'Ascendant 1',
                    };
                case 22:
                    return {
                        es: 'Ascendente 2',
                        en: 'Ascendant 2',
                    };
                case 23:
                    return {
                        es: 'Ascendente 3',
                        en: 'Ascendant 3',
                    };
                case 24:
                    return {
                        es: 'Inmortal 1',
                        en: 'Immortal 1',
                    };
                case 25:
                    return {
                        es: 'Inmortal 2',
                        en: 'Immortal 2',
                    };
                case 26:
                    return {
                        es: 'Inmortal 3',
                        en: 'Immortal 3',
                    };
                case 27:
                    return {
                        es: 'Radiante',
                        en: 'Radiant',
                    };
            }
        };
        return getTierNames()[lang];
    },
};
