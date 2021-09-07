import logo from './logo.svg';
 
import {connect} from 'react-redux'
import {fetchPosts} from './redux/actions/postActions'
import React from 'react';


class App extends React.Component{

  componentWillMount(){
    this.props.fetchPosts()
  }

  render(){
 
     const postItems = this.props.posts.map(post => (
       <div>
         <h1>{post.title}</h1>
         <p>{post.body}</p>
         <hr/>
       </div>
     ))

 
    return(
      <div className="App">
        {postItems}
      </div>
    )
  }
}

const mapStateToProps = state =>({
  posts: state.postReducer.items
})

export default connect(mapStateToProps, {fetchPosts})(App);
