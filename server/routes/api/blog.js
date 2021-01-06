const express = require('express');
const router = express.Router();
const Post = require('../../models/Post');
const passport = require('passport');

router.get('/posts', (req, res) => {
  console.log('blog.js', 'posts!!');
  Post.find()
    .then(posts => res.status(200).json(posts))
    .catch(err => res.status(400).json({ user: 'Error fetching posts of logged in user' }));
});

router.get('/post/:id', (req, res) => {
  Post.find({ _id: req.params.id })
    .then(post => res.status(200).json(post))
    .catch(err => res.status(400).json({ id: 'Error fetching post by id' }));
});

router.get('/:author', (req, res) => {
  Post.find({ author: req.params.author })
    .then(posts => res.status(200).json(posts))
    .catch(err => res.status(400).json({ author: 'Error fetching posts of specific author' }));
});

router.post('/post/create', passport.authenticate('jwt', { session: false }), (req, res) => {
  const author = req.user._id;
  const { title, body } = req.body;

  const newPost = new Post({ title, body, author });
  newPost
    .save()
    .then(doc => res.json(doc))
    .catch(err => console.log('posts.js', 'Error createing new post.'));
});

router.patch('/post/update/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const author = req.user._id;
  const { title, body } = req.body;

  Post.findOneAndUpdate({ author, _id: req.params.id }, { $set: { title, body } }, { new: true })
    .then(doc => res.status(200).json(doc))
    .catch(err => res.status(400).json({ update: 'Error updating existing post' }));
});

router.delete('/post/delete/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const author = req.user._id;
  Post.findOneAndDelete({ author, _id: req.params.id })
    .then(doc => res.status(200).json(doc))
    .catch(err => res.status(400).json({ delete: 'Error deleting a post' }));
});

module.exports = router;
