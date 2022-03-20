"use strict";

const router = require("express").Router();
const ctrl = require("./home.ctrl");


router.get("/", ctrl.output.home);
router.get("/orders/:orderId", ctrl.output.order);


module.exports = router;
