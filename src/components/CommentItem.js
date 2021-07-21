import React from 'react';

export const CommentItem = (comment) => {
  return (
    <div style={{border: '1px solid #8a8aff'}}>
      <h2>{comment.name}</h2>        
      <div>
         text: {comment.body}
      </div>
      <h4>email: {comment.email}</h4>
    </div> 
  )  
}

