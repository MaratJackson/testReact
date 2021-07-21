import * as actionTypes from './constants';

const initState = {
  commentsList:[],
}

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.ADD_COMMENTS:
      return {...state, commentsList: [...action.data]}
    default:
      return state
  }
};


