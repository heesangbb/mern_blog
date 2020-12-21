import { SET_ERRORS } from './types';

export const setErrors = (title, msg, type) => {
  return {
    type: SET_ERRORS,
    payload: { title, msg, type },
  };
};

export const clearErrors = () => {
  return {
    type: SET_ERRORS,
    payload: null,
  };
};
