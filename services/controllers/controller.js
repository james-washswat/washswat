'use strict';

const properties = require('../package.json');
const Order = require('../models/order');
const logger = require('../config/logger');

var controllers = {
    about: (req, res) => {
        const aboutInfo = {
            name: properties.name,
            version: properties.version,
        }
        logger.info(`${req.method} ${req.path}, 200 OK, ${JSON.stringify(aboutInfo)}`);
        res.json(aboutInfo);
    },

    getDistance: (req, res) => {
        distance.find(req, res, (err, dist) => {
            if (err)
                res.send(err);
            res.json(dist);
        });
    },

    getOrder: async (req, res) => {
        const orderId = req.params.orderId;
        const order = new Order();
        const response = await order.info(orderId);

        if(response.success) {
            logger.info(`${req.method} ${req.path} 200 ${JSON.stringify(response)}`);
        } else {
            logger.error(`${req.method} ${req.path} 500 ${JSON.stringify(response)}`);
        }

        res.json(JSON.stringify(response));
    },

    delOrder: async (req, res) => {
        const orderId = req.params.orderId;
        const order = new Order();
        const response = await order.delete(orderId);

        if(response.success) {
            logger.info(`${req.method} ${req.path} 200 ${JSON.stringify(response)}`);
        } else {
            logger.error(`${req.method} ${req.path} 500 ${JSON.stringify(response)}`);
        }

        res.json(JSON.stringify(response));
    },
};

module.exports = controllers;