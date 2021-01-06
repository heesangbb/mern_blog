const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const post = {
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
};

const PostSchema = new Schema(post, { timestamps: true });

module.exports = mongoose.model('posts', PostSchema);
