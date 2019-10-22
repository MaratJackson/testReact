import React from 'react';
import * as axios from 'axios';
import postsDataReducer, { addPosts } from '../redux/postsDataReducer';
import s from './PostsList.module.css';

class PostsList extends React.Component {

    componentDidMount() {
        axios.all([
            axios.get('https://jsonplaceholder.typicode.com/posts'),
            axios.get('https://jsonplaceholder.typicode.com/comments'),
            axios.get('https://jsonplaceholder.typicode.com/users')
          ])
          .then(axios.spread((postsResponse, commentsResponse, usersResponse) => {

            const newArrPosts = postsResponse.data.map(function(elem){

              const getComments = commentsResponse.data.filter(item => item.postId === elem.id);

              const getUserInfo = usersResponse.data.find(item => item.id === elem.userId);

              return {
                'userName':getUserInfo.name,
                'title':elem.title,
                'text':elem.body,
                'comments':getComments
              }
            })
            this.props.dispatch(addPosts(newArrPosts))
          }))       
    }

    render() {
        let listPosts
        if (this.props.state.length > 0) {
          listPosts = this.props.state.map(function(elem){
            return <div>
                      <li><h2>{elem.title}</h2></li>
                      <li><h3>{elem.text}</h3></li>
                      <li>Author: {elem.userName}</li>
                      <br></br>
                      <h4>Comments:</h4>
                      <li>{
                        elem.comments.map(function(elem){
                         return <div>
                               <strong>{elem.email}</strong>
                               <li className={s.commentText}>{elem.body}</li>
                               <br></br>
                               </div>
                        })
                      }</li>
                    </div>
                     
          })
        } else {
          listPosts = ''
        }
        return (
         <div><ul>{listPosts}</ul></div>
        )
    }
}
export default PostsList;