'use strict'

var express = require("express");
var DataController = require("../controller/portal/data.controller");
var api = express.Router();


api.get("/getWebData",DataController.getWebData);


module.exports = api;