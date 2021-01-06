import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function PostList({ posts }) {
  const renderPost = () =>
    posts.map(post => (
      <Link to={`/blog/post/${post._id}`} key={post._id}>
        <div>{post.title}</div>
      </Link>
    ));

  return (
    <div>
      {posts.length > 0 ? (
        <div>{renderPost()}</div>
      ) : (
        <div>
          <div>No Post Found !</div>
        </div>
      )}
    </div>
  );
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PostList;
