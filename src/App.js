import React from 'react';
import PostsList from './components/PostsList';


function App(props) {

  return (
    <div className="App">
       <PostsList 
         state={props.state.postsDataReducer.posts} 
         dispatch={props.dispatch}
         />
    </div>
  );
}

export default App;
