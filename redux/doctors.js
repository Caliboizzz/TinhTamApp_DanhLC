import * as ActionTypes from './ActionTypes';

export const doctors = (state = { isLoading: true, errMess: null, doctors: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_DOCTORS:
      return { ...state, isLoading: false, errMess: null, doctors: action.payload };
    case ActionTypes.DOCTORS_LOADING:
      return { ...state, isLoading: true, errMess: null, doctors: [] }
    case ActionTypes.DOCTORS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };
    default:
      return state;
  }
};