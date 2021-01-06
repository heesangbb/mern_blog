import {
  TOGGLE_POSTS_LOADING,
  TOGGLE_POST_LOADING,
  GET_POSTS,
  GET_POST,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
} from '../actions/types';

const initialState = {
  postLoading: false,
  postsLoading: false,
  post: {},
  posts: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_POST_LOADING:
      return {
        ...state,
        postLoading: !state.postLoading,
      };
    case TOGGLE_POSTS_LOADING:
      return {
        ...state,
        postsLoading: !state.postsLoading,
      };
    case GET_POSTS:
      return {
        ...state,
        post: {},
        posts: [...action.payload],
      };
    case GET_POST:
      return {
        ...state,
        post: { ...action.payload[0] },
      };
    case CREATE_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case UPDATE_POST:
      const posts = state.posts.filter(post => post._id !== action.payload._id);
      return {
        ...state,
        post: {},
        posts: [...posts, action.payload],
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== action.payload),
      };
    default:
      return state;
  }
}
