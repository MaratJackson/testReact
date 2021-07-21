import React, { useEffect, useState } from 'react';
import { CommentItem } from './CommentItem'
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from '../redux/actions';

const styles = {
  container : {
    textAlign:'center',
    left: '10px',
    position: 'relative'
  },
  btn : {
    backgroundColor: '#4CAF50',
    color: '#FFFFFF',
    padding: '15px 32px',
    transitionDuration: '0.4s',
    margin: '16px 0 !important',
    fonSize: '16px',
    cursor: 'pointer',
    margin: '15px'
  }
}

const CommentsList = () => {

  const dispatch = useDispatch()
  const [ limit, getMoreComments ] = useState(5);
  const commentsList = useSelector(state => state.comments.commentsList)

  useEffect(() => {
    dispatch(getComments(limit))
  },[limit])
   
  return(
    <div style={styles.container}>
     {commentsList && commentsList.length > 0 && 
         commentsList.map((comment) => <CommentItem key={comment.id} {...comment} />)
     }
     <button 
       style={styles.btn} 
       onClick={() => getMoreComments(limit + 5)}
      >
         LOAD MORE
    </button>
    </div>
  )
}

export default CommentsList;