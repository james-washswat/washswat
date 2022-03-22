"use strict";

// const { createLogger, transports, format } = require("winston");
import { createLogger, transports, format } from 'winston';
const { combine, timestamp, colorize, simple, printf, label } = format;

const printFormat = printf(({ timestamp, level, label, message }) => {
    return `${timestamp} [${label}] ${level}: ${message}`
});

const printLogFormat = {
    file: combine(label({
        label: "BAPP",
    }),
    timestamp({
        format: "YYYY-MM-DD HH:mm:ss",
    }),
    printFormat),
    console: combine(
        colorize(),
        simple(),
    ),
    };

const opts = {
    file: new transports.File ({
        filename: "bapp.log",
        dirname: "./logs",
        level: "info",
        format: printLogFormat.file,
    }),
    console: new transports.Console ({
        level: "info",
        format: printLogFormat.console,
    }),
}

const logger = createLogger({
    transports: [ opts.file ],
});

if (process.env.NODE_ENV !== "production") {
    logger.add( opts.console );
}


// module.exports = logger;
export default logger;