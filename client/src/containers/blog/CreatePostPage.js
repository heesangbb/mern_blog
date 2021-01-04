import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostForm from './../../components/blog/PostForm';
// import { clearErrors } from '../../actions/errorActions';
import { validate } from './../../components/form/Validate';

function CreatePostPage({ history }) {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const errors = useSelector(state => state.errors);

  const [post, setPost] = useState({
    title: '',
    body: '',
    errors: {},
  });

  useEffect(() => {
    setPost(post => {
      return { ...post, errors };
    });
  }, [errors]);

  const handleChange = e => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const handleBlur = e => {
    const { name, value } = e.target;
    const errors = { ...post.errors };
    delete errors[name];
    setPost({ ...post, errors: { ...errors, ...validate(name, value) } });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const { title, body } = post;
    const errors = {
      ...validate('title', title),
      ...validate('body', body),
    };
    setPost({ ...post, errors });

    // submit
    if (Object.keys(errors).length === 0) {
      console.log('CreatePostPage.js', 'submit', post);
      // createPost({ title, body }, history);
    }
  };

  return (
    <PostForm
      post={post}
      onChange={handleChange}
      onBlur={handleBlur}
      onSubmit={handleSubmit}
      loading={auth.userLoading}
    />
  );
}

export default CreatePostPage;
