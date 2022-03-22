"use strict";

import logger from '../../config/logger.js';
import Order from '../../model/order.js';

const output = {
    home: async (req, res) => {
        const order = new Order();
        const response = await order.listAll();

        // console.log(response);

        if (response.success) {
            res.render("home/index.ejs", { data: response.info });
        } else {
            res.status(500).send(`${response.err}`)
        }
    },
    order: async (req, res) => {
        const orderId = req.params.orderId;
        const order = new Order();
        const response = await order.info(orderId);

        // console.log(response);

        res.json(JSON.stringify(response));
    },
}

export default output;