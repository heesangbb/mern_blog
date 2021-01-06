import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostByID, deletePost } from './../../actions/blogActions';
import PostView from './../../components/blog/PostView';

function ViewPostPage({ history, match }) {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const blog = useSelector(state => state.blog);

  useEffect(() => {
    dispatch(getPostByID(match.params.id));
  }, [match]);

  const onList = () => {
    history.push(`/blog`);
  };

  const onEdit = () => {
    history.push(`/blog/post/edit/${match.params.id}`);
  };

  const onDelete = () => {
    if (window.confirm('Are you sure want to delete?')) {
      dispatch(deletePost(match.params.id, handleCallback));
    }
  };

  const handleCallback = () => {
    alert(`Delete successfully.`);
    history.push('/blog');
  };

  return (
    <div>
      <PostView auth={auth} post={blog.post} onList={onList} onEdit={onEdit} onDelete={onDelete} />
    </div>
  );
}

export default ViewPostPage;
