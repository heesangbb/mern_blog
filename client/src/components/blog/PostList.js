import React from 'react';
import PropTypes from 'prop-types';
import Button from '../form/Button';

function PostList({ create }) {
  return (
    <div>
      <div>
        <Button color="primary" onClick={create}>
          Create post
        </Button>
      </div>
      <div>
        <div>Post 1</div>
      </div>
    </div>
  );
}

PostList.propTypes = {
  create: PropTypes.func.isRequired,
};

export default PostList;
