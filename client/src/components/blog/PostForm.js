import React from 'react';
import PropTypes from 'prop-types';
import Input from './../form/Input';
import Textarea from './../form/Textarea';
import Button from './../form/Button';

function PostForm({ post, onChange, onBlur, loading, onSubmit }) {
  const { title, body, errors } = post;
  return (
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
  );
}

PostForm.propTypes = {
  post: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default PostForm;
