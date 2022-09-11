import { helix } from '../utils/twitch-utils.js';

export const clips = {
    /**
     * Creates a clip, if the channel is online, for the user recived.
     * @param {Number} userId ID of the user you want to clip for.
     * @returns Clip data.
     */
    create: async (userId) => {
        try {
            const clipData = (await helix.call('POST', '/clips', { broadcaster_id: userId })).data.data;
            const clipInfo = !clipData.length ? {} : clipData[0];
            clipInfo.url = clipInfo.edit_url.slice(0, -5);
            return clipInfo;
        } catch {
            return false;
        }
    },
};
