import { SET_ERRORS } from '../actions/types';

const initialState = null;

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_ERRORS:
      return action.payload;
    default:
      return state;
  }
}
