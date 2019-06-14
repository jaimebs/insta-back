const sharp = require('sharp');
const path = require('path');
const fs = require('fs');
const Post = require('./../models/Post');

module.exports = {
  async index(req, res) {
    try {
      const posts = await Post.find();
      return res.json(posts);
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  },

  async store(req, res) {
    const { filename: image } = req.file;
    const [name] = image.split('.');
    const filename = `${name}.jpg`;
    try {
      await sharp(req.file.path)
        .resize(500)
        .jpeg({ quality: 70 })
        .toFile(path.resolve(req.file.destination, 'resized', filename));

      fs.unlinkSync(req.file.path); // Delete the image from the uploads file

      const post = await Post.create({ ...req.body, image: filename });

      req.io.emit('post', post); // Socket.io

      return res.json(post);
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }
};
