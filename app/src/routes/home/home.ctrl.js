"use strict";

const logger = require("../../config/logger");
const Order = require("../../model/order");

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

module.exports = {
    output,
};
