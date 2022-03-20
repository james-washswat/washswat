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
        }
    },
}

module.exports = {
    output,
};
