import React from 'react';
import PropTypes from 'prop-types';
import Button from './../form/Button';

function PostView({ auth, post, onList, onEdit, onDelete }) {
  const authenticated = auth && auth.isAuthenticated && auth.user.id === post.author;
  return (
    <div>
      <Button color="" onClick={onList}>
        List
      </Button>
      {authenticated && (
        <>
          <Button color="primary" onClick={onEdit}>
            Edit Post
          </Button>
          <Button color="" onClick={onDelete}>
            Delete Post
          </Button>
        </>
      )}
      <div>
        <div>{post.title}</div>
        <hr />
        <div>{post.body}</div>
      </div>
    </div>
  );
}

PostView.propTypes = {
  auth: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  onList: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default PostView;
