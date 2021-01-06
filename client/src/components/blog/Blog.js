import React from 'react';
import PropTypes from 'prop-types';
import Button from '../form/Button';
import PostList from './PostList';

function Blog({ auth, posts, newPage }) {
  return (
    <div>
      {auth && auth.isAuthenticated && (
        <div>
          <Button color="primary" onClick={newPage}>
            New Post
          </Button>
        </div>
      )}
      <div>
        <PostList posts={posts} />
      </div>
    </div>
  );
}

Blog.propTypes = {
  auth: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
  newPage: PropTypes.func.isRequired,
};

export default Blog;
