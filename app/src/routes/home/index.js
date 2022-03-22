"use strict";

import express from 'express';
import { output, process } from './home.ctrl.js';

const router = express.Router();
router.get("/", output.home);
router.get("/orders/:orderId", output.order);
router.delete("/orders/:orderId", process.deleteOrder);


export default router;