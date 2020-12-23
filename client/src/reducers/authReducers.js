import { SET_CURRENT_USER, TOGGLE_USER_LOADING } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  user: {},
  userLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: Object.keys(action.payload).length > 0,
        user: action.payload,
      };
    case TOGGLE_USER_LOADING:
      return {
        ...state,
        userLoading: !state.userLoading,
      };
    default:
      return state;
  }
}
