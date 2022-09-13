import { connections } from '../../../utiles/connections.js';

export const info = {
    /**
     * Gets all the data of a Valorant player.
     * @param {String} region Region of the player (like EU)
     * @param {String} user Player's name.
     * @param {String} tag Player's tag.
     * @returns JSON with all the player's data that could be retrieved.
     */
    all: async (region, user, tag) =>
        (await connections.get(`https://api.henrikdev.xyz/valorant/v1/mmr/${region}/${user}/${tag}`)).data.data,
};
