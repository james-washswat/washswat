"use strict";

const router = require("express").Router();
const ctrl = require("./home.ctrl");


router.get("/", ctrl.output.home);


module.exports = router;
