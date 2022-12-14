import express from 'express';
import { valorant } from './games/valorant/valorant-rest.js';
import { twitch } from './twitch/twitch-rest.js';
const rest = express();

export const api = {
    init: () => {
        twitch.load(rest);
        valorant.load(rest);
        rest.listen(3000, () => console.log('API started.'));
    },
};
