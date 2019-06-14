const express = require('express');
const routes = express.Router();
const multer = require('multer');
const uploadConfig = require('./config/upload');

const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');

const upload = multer(uploadConfig);

routes.get('/', PostController.index);
routes.post('/posts', upload.single('image'), PostController.store);
routes.post('/posts/:id/likes', LikeController.store);

module.exports = routes;
