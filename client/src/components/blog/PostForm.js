import React from 'react';
import PropTypes from 'prop-types';
import Input from './../form/Input';
import Textarea from './../form/Textarea';
import Button from './../form/Button';

function PostForm({ post, onChange, onBlur, onSubmit, onList }) {
  const { title, body, errors } = post;
  return (
    <div>
      <div>
        <Button color="" onClick={onList}>
          List
        </Button>
      </div>
      <form onSubmit={onSubmit}>
        <Input
          type="text"
          title="Title"
          name="title"
          value={title}
          onChange={onChange}
          onBlur={onBlur}
          error={errors && errors.title}
          placeholder="Enter post title"
        />
        <Textarea
          title="Description"
          name="body"
          value={body}
          onChange={onChange}
          onBlur={onBlur}
          error={errors && errors.body}
          placeholder="Enter post here"
        />
        <div>{errors && Object.keys(errors).length > 0 && 'Please fill in all the highlighted fields'}</div>
        <Button onSubmit={onsubmit}>Submit</Button>
      </form>
    </div>
  );
}

PostForm.propTypes = {
  post: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onList: PropTypes.func.isRequired,
};

export default PostForm;
