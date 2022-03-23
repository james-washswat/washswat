"use strict";

// const app = require("../app");
// const logger = require("../src/config/logger");


import app from '../app.js';
import logger from '../src/config/logger.js';

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    logger.info(`Server start, Port=${PORT}`);
})