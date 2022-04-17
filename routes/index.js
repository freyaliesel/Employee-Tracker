const express = require('express');

const viewRoute = require("./viewRoutes");

const api = express.Router();

api.use('/view', viewRoute);

module.exports = api;