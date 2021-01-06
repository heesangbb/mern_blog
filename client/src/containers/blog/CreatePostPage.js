import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostForm from './../../components/blog/PostForm';
// import { clearErrors } from '../../actions/errorActions';
import { validate } from './../../components/form/Validate';
import { createPost, updatePost, getPostByID } from '../../actions/blogActions';

function CreatePostPage({ history, match }) {
  const dispatch = useDispatch();
  const errors = useSelector(state => state.errors);
  const auth = useSelector(state => state.auth);
  const blog = useSelector(state => state.blog);

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

  useEffect(() => {
    if (match.params.id) {
      dispatch(getPostByID(match.params.id));
    }
  }, [match]);

  useEffect(() => {
    if (blog.post._id) {
      setPost(post => {
        return {
          ...post,
          _id: blog.post._id,
          title: blog.post.title,
          body: blog.post.body,
        };
      });
    }
  }, [blog]);

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
      if (post._id) {
        dispatch(
          updatePost(post._id, { title, body }, () => {
            alert(`Update successfully.`);
            onList();
          }),
        );
      } else {
        dispatch(
          createPost({ title, body }, () => {
            alert(`Create successfully.`);
            onList();
          }),
        );
      }
    }
  };

  const onList = () => {
    history.push('/blog');
  };

  return <PostForm post={post} onChange={handleChange} onBlur={handleBlur} onSubmit={handleSubmit} onList={onList} />;
}

export default CreatePostPage;
