import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/postActions';
class Post extends Component{

    componentWillMount(){
        this.props.fetchPosts();
    } 

    render(){
        var post=this.props.posts.map(d=>(
            <div key={d.id}>
            <h3>{d.title}</h3>
            <p>{d.body }</p>
            </div>
        ))
        return (
            <div>
                {post}
            </div>
        )  
    }
}
const mapStateToProps=(state)=>({
    posts:state.posts.items
});
export default connect(mapStateToProps,{fetchPosts})(Post)