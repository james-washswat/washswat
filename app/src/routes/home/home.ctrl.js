"use strict";

const logger = require("../../config/logger");
const Order = require("../../model/order");

const output = {
    home: async (req, res) => {
        const order = new Order();
        const response = await order.list(2);

        console.log(response);

        if (response.success) {
            res.render("home/index.ejs", response);
        }
    },
}

module.exports = {
    output,
};
