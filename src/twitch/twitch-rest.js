import { user } from './mgr/twitch-users-mgr.js';
import { clips } from './mgr/twitch-clip-mgr.js';

export const twitch = {
    _rest: null,
    _basePath: '',
    /**
     * Loads the Twitch API rest with all the URL listeners.
     * @param {Express} rest Express rest.
     * @param {String} basePath Base path of the API.
     */
    load: async (rest, basePath = '') => {
        twitch._rest = rest;
        twitch._basePath = `${basePath}/twitch`;
        console.log('Loading Twitch API...');
        // General twitch endpoint
        twitch.createClip();
        // Twitch user endpoint.
        twitch.user.getData();
        twitch.user.getId();
        twitch.user.getUser();
        twitch.user.getName();
        twitch.user.getBroadcasterType();
        twitch.user.getDescription();
        twitch.user.isAffiliate();
        twitch.user.isPartner();
    },
    /**
     * Generates a clip to the required streamer.
     * The streamer must be online and streaming in order to create it.
     */
    createClip: async () => {
        twitch._rest.get(`${twitch._basePath}/clip/:streamer`, async (req, res) => {
            const { streamer } = req.params;
            const userId = (await user.getData(streamer)).id;
            const clipInfo = await clips.create(userId);
            res.send(clipInfo ? clipInfo.url : '');
        });
    },
    user: {
        /**
         * Retrieves a Twitch user data.
         */
        getData: () => {
            twitch._rest.get(`${twitch._basePath}/user/data`, async (req, res) => {
                const { streamer, id } = req.query;
                const userData = streamer ? await user.getDataByName(streamer) : await user.getDataById(id);
                res.send(userData);
            });
        },
        /**
         * Retrieves a Twitch user/broadcaster id.
         */
        getId: () => {
            twitch._rest.get(`${twitch._basePath}/user/id/:streamer`, async (req, res) => {
                const { streamer } = req.params;
                res.send(await user.getId(streamer));
            });
        },
        /**
         * Retrieves a Twitch user/broadcaster id.
         */
        getUser: () => {
            twitch._rest.get(`${twitch._basePath}/user/:id`, async (req, res) => {
                const { id } = req.params;
                res.send(await user.getUser(id));
            });
        },

        /**
         * Retrieves a Twitch user/broadcaster id.
         */
        getName: () => {
            twitch._rest.get(`${twitch._basePath}/user/name/:streamer`, async (req, res) => {
                const { streamer } = req.params;
                res.send(await user.getName(streamer));
            });
        },

        /**
         * Retrieves a Twitch user/broadcaster id.
         */
        getBroadcasterType: () => {
            twitch._rest.get(`${twitch._basePath}/user/type/:streamer`, async (req, res) => {
                const { streamer } = req.params;
                res.send(await user.getBroadcasterType(streamer));
            });
        },

        /**
         * Retrieves a Twitch user/broadcaster id.
         */
        getDescription: () => {
            twitch._rest.get(`${twitch._basePath}/user/description/:streamer`, async (req, res) => {
                const { streamer } = req.params;
                res.send(await user.getDescription(streamer));
            });
        },

        /**
         * Retrieves a Twitch user/broadcaster id.
         */
        isAffiliate: () => {
            twitch._rest.get(`${twitch._basePath}/user/affiliate/:streamer`, async (req, res) => {
                const { streamer } = req.params;
                res.send(await user.isAffiliate(streamer));
            });
        },

        /**
         * Retrieves a Twitch user/broadcaster id.
         */
        isPartner: () => {
            twitch._rest.get(`${twitch._basePath}/user/partner/:streamer`, async (req, res) => {
                const { streamer } = req.params;
                res.send(await user.isPartner(streamer));
            });
        },
    },
};
