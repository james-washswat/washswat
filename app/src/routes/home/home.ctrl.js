"use strict";

import logger from '../../config/logger.js';
import Order from '../../model/order.js';

export const output = {
    home: async (req, res) => {
        const order = new Order();
        const response = await order.listAll();

        if (response.success) {
            logger.info(`${req.method} ${req.path} 200`);
            res.render("home/index.ejs", { data: response.info });
        } else {
            logger.error(`${req.method} ${req.path} 500`);
            res.status(500).send(`${response.err}`)
        }
    },
    order: async (req, res) => {
        const orderId = req.params.orderId;
        const order = new Order();
        const response = await order.info(orderId);
        const body = JSON.stringify(response);

        if(response.success) {
            logger.info(`${req.method} ${req.path} 200 ${body}`);
        } else {
            logger.error(`${req.method} ${req.path} 500 ${body}`);
        }

        res.json(body);
    },
}

export const process = {
    deleteOrder: async (req, res) => {
        const orderId = req.params.orderId;
        const order = new Order();
        const response = await order.delete(orderId);

        console.log(response);

        res.json(JSON.stringify(response));
    },
}
