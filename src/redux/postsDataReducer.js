const ADD_POSTS = 'ADD_POSTS';

let init = {
   posts:[]
}

const postsDataReducer = (state = init, action) => {

   if (action.type === ADD_POSTS) {
     state.posts = action.data
   }

   return state;
};

export const addPosts = (data) => {
  return {
    type: ADD_POSTS,
    data:data
  }
}

export default postsDataReducer;

