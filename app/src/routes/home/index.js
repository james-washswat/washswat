"use strict";

import express from 'express';
import output from './home.ctrl.js';

const router = express.Router();
router.get("/", output.home);
router.get("/orders/:orderId", output.order);


export default router;