"use strict";

import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import router from './src/routes/home/index.js';

const app = express();
const __dirname = path.resolve();

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/", router);

export default app;