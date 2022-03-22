"use strict";

// const router = require("express").Router();
// const ctrl = require("./home.ctrl");
import express from 'express';
import output from './home.ctrl.js';

const router = express.Router();
router.get("/", output.home);
router.get("/orders/:orderId", output.order);


// module.exports = router;
export default router;