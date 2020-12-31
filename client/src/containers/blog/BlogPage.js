import React from 'react';
// import { useHistory } from 'react-router-dom';
import PostList from './../../components/blog/PostList';

function BlogPage({ history }) {
  // let history = useHistory();

  const handleCreate = () => {
    history.push('/blog/post/create');
  };
  return <PostList create={handleCreate} />;
}

export default BlogPage;
