import * as types from './constants';
import axios from 'axios';

export const getComments = (offset) => {
    return function (dispatch) {
      axios.get(`https://jsonplaceholder.typicode.com/comments?_start=${offset}&_limit=${5}`)
      .then( result => { 
        dispatch(addComments(result.data))
      })
      .catch( error => {
         console.log(error.message)
      })
    }
 }

export const addComments = (data) => {
  return {
    type: types.ADD_COMMENTS,
    data:data
  }
}

  