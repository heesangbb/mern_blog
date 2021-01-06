import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Blog from './../../components/blog/Blog';
import { getPosts, getPostsByAuthor } from '../../actions/blogActions';

function BlogPage({ history, match }) {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const blog = useSelector(state => state.blog);

  useEffect(() => {
    if (match.params.author) {
      dispatch(getPostsByAuthor(match.params.author));
    } else {
      dispatch(getPosts());
    }
  }, [match]);

  const handleNewPage = () => {
    history.push('/blog/post/new');
  };

  return <Blog auth={auth} posts={blog.posts} newPage={handleNewPage} />;
}

export default BlogPage;
