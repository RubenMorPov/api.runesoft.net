export const about = {
    _rest: null,
    _basePath: '',
    /**
     * Loads the base API rest with all the URL listeners.
     * @param {Express} rest Express rest.
     * @param {String} basePath Base path of the API.
     */
    load: async (rest, basePath = '') => {
        about._rest = rest;
        about._basePath = `${basePath}/about`;
        console.log('Loading base API...');
        // General base endpoint
        about.getStatus();
        about.getVersion()
    },
    /**
     * Generates a clip to the required streamer.
     * The streamer must be online and streaming in order to create it.
     */
    getStatus: async () => {
        about._rest.get(`${about._basePath}/status`, async (req, res) => {
            res.send({status: 'UP'});
        });
    },
    /**
     * Generates a clip to the required streamer.
     * The streamer must be online and streaming in order to create it.
     */
    getVersion: async () => {
        about._rest.get(`${about._basePath}/version`, async (req, res) => {
            res.send({version: '1.1.0-apricot'});
        });
    },
};
