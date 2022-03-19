"use strict";

const output = {
    home: (req, res) => {
        res.render("home/index.ejs");
    }
}

module.exports = {
    output,
};