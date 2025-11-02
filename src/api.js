import express from 'express';
import { about } from './base-rest.js';
import { valorant } from './games/valorant/valorant-rest.js';
import { twitch } from './twitch/twitch-rest.js';
const rest = express();

export const api = {
    init: () => {
        about.load(rest)
        twitch.load(rest);
        valorant.load(rest);
        rest.listen(3000, () => console.log('API started.'));
    },
};
