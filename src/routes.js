const express = require('express');
const route = express.Router();

const FeedController = require('./controllers/Feed');

route.get('/', FeedController.store);

module.exports = route;
