import express from 'express';
import { valorant } from './games/valorant/valorant-rest.js';
const rest = express();

export const api = {
    init: () => {
        valorant.load(rest);
        rest.listen(3000, () => console.log('API started.'));
    },
};
