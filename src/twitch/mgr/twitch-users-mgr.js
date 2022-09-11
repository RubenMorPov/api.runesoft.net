import { helix } from '../utils/twitch-utils.js';

export const user = {
    /**
     * Gets a twitch user data from Twitch Helix API using the user login name.
     * @param {String} twitchUser Twitch user.
     * @returns Twitch user data.
     */
    getDataByName: async (twitchUser) => {
        const userData = (await helix.call('GET', `/users?login=${twitchUser}`)).data.data;
        return !userData.length ? {} : userData[0];
    },
    /**
     * Gets a twitch user data from Twitch Helix API using the user ID.
     * @param {String} twitchUserId Twitch user id.
     * @returns Twitch user data.
     */
    getDataById: async (twitchUserId) => {
        const userData = (await helix.call('GET', `/users?id=${twitchUserId}`)).data.data;
        return !userData.length ? {} : userData[0];
    },
    /**
     * Gets a twitch user login name.
     * @param {String} twitchUser Twitch user.
     * @returns Twitch user login name.
     */
    getUser: async (twitchUser) => {
        const userData = await user.getDataByName(twitchUser);
        return userData.login;
    },
    /**
     * Gets a twitch user id.
     * @param {String} twitchUser Twitch user.
     * @returns Twitch user id.
     */
    getId: async (twitchUser) => {
        const userData = await user.getDataByName(twitchUser);
        return userData.id;
    },
    /**
     * Gets a twitch user display name.
     * @param {String} twitchUser Twitch user.
     * @returns Twitch user display name.
     */
    getName: async (twitchUser) => {
        const userData = await user.getDataByName(twitchUser);
        return userData.display_name;
    },
    /**
     * Gets a twitch user broadcaster type.
     * @param {String} twitchUser Twitch user.
     * @returns Twitch user broadcaster type.
     */
    getBroadcasterType: async (twitchUser) => {
        const userData = await user.getDataByName(twitchUser);
        return userData.broadcaster_type;
    },
    /**
     * Gets a twitch user description.
     * @param {String} twitchUser Twitch user.
     * @returns Twitch user description.
     */
    getDescription: async (twitchUser) => {
        const userData = await user.getDataByName(twitchUser);
        return userData.description;
    },
    /**
     * Gets if a twitch user is affiliate or not.
     * @param {String} twitchUser Twitch user.
     * @returns Twitch user affiliate state.
     */
    isAffiliate: async (twitchUser) => {
        const broadcaster_type = await user.getBroadcasterType(twitchUser);
        return broadcaster_type == 'affiliate';
    },
    /**
     * Gets if a twitch user is partner or not.
     * @param {String} twitchUser Twitch user.
     * @returns Twitch user partner state.
     */
    isPartner: async (twitchUser) => {
        const broadcaster_type = await user.getBroadcasterType(twitchUser);
        return broadcaster_type == 'partner';
    },
};
