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
     * @param {String} twitchUserId Twitch user.
     * @returns Twitch user login name.
     */
    getUser: async (twitchUserId) => (await user.getDataById(twitchUserId)).login,
    /**
     * Gets a twitch user id.
     * @param {Number} twitchUser Twitch user.
     * @returns Twitch user id.
     */
    getId: async (twitchUser) => (await user.getDataByName(twitchUser)).id,
    /**
     * Gets a twitch user display name.
     * @param {String} twitchUser Twitch user.
     * @returns Twitch user display name.
     */
    getName: async (twitchUser) => (await user.getDataByName(twitchUser)).display_name,
    /**
     * Gets a twitch user broadcaster type.
     * @param {String} twitchUser Twitch user.
     * @returns Twitch user broadcaster type.
     */
    getBroadcasterType: async (twitchUser) => (await user.getDataByName(twitchUser)).broadcaster_type,
    /**
     * Gets a twitch user description.
     * @param {String} twitchUser Twitch user.
     * @returns Twitch user description.
     */
    getDescription: async (twitchUser) => (await user.getDataByName(twitchUser)).description,
    /**
     * Gets if a twitch user is affiliate or not.
     * @param {String} twitchUser Twitch user.
     * @returns Twitch user affiliate state.
     */
    isAffiliate: async (twitchUser) => (await user.getBroadcasterType(twitchUser)).broadcaster_type == 'affiliate',
    /**
     * Gets if a twitch user is partner or not.
     * @param {String} twitchUser Twitch user.
     * @returns Twitch user partner state.
     */
    isPartner: async (twitchUser) => (await user.getBroadcasterType(twitchUser)).broadcaster_type == 'partner',
};
