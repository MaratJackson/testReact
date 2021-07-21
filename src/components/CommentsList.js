import React, { useEffect, useState, useRef } from 'react';
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
    fonSize: '16px',
    cursor: 'pointer',
    margin: '15px'
  },
  hideBtn: {
    display:'none'
  }
}

const CommentsList = () => {

  const dispatch = useDispatch()
  const [ offset, getMoreComments ] = useState(0);
  const messagesEndRef = useRef(null)
  const commentsList = useSelector(state => state.comments.commentsList)


  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({block: "end", behavior: "smooth"});
  }

  useEffect(() => {
    dispatch(getComments(offset))
    setTimeout(
     () => scrollToBottom(), 500)
  },[offset])
   
  return(
    <div style={styles.container} ref={messagesEndRef}>
     {commentsList.length > 0 && 
         commentsList.map((comment) => <CommentItem key={comment.id} {...comment} />)
     }
     <button   
       style={commentsList.length ? styles.btn : styles.hideBtn} 
       onClick={() => getMoreComments(offset + 5)}
      >
         LOAD MORE
    </button>
    </div>
  )
}

export default CommentsList;