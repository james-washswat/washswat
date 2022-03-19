"use strict";

const app = require("../app");
const logger = require("../src/config/logger");
const PORT = process.env.WEB_PORT || 8080;

app.listen(PORT, () => {
    logger.info(`Server start, Port=${PORT}`);
})