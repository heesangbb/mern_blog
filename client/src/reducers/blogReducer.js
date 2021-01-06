import { CREATE_POST, TOGGLE_POST_LOADING } from '../actions/types';

const initialState = {
  post: {},
  postLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case TOGGLE_POST_LOADING:
      return {
        ...state,
        postLoading: !state.postLoading,
      };
    default:
      return state;
  }
}
