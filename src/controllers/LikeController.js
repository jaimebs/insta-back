const Post = require('./../models/Post');

module.exports = {
  async store(req, res) {
    try {
      const post = await Post.findById(req.params.id);
      post.likes += 1;
      await post.save();

      req.io.emit('like', post); // Socket.io

      return res.json(post);
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }
};
