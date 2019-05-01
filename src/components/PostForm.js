import React, {Component} from 'react'

class PostForm extends Component{
    constructor(props){
        super(props)
        this.state={
            title:"",body:""
        }
    }
    onChange=(e)=>(
        this.setState({
            [e.target.name]:e.target.value
        }) 
    );
    onSubmit=(e)=>{
        e.preventDefault();
        var post={
            title:this.state.title,
            body:this.state.body
        };
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method:"POST",
            header:"application/json",
            body:JSON.stringify(post)
        }).then(res=>console.log(res));
        //fetch("")
    };
    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit}>
            <label htmlFor="title">Title</label>    
            <input type="text" name="title" value={this.state.title} onChange={this.onChange}></input>
            <label htmlFor="body">Body</label>    
            <input type="text" name="body" value={this.state.body} onChange={this.onChange}></input>
            <button type="submit">Add Post</button>
                </form>
            </div>
        )
    }
}

export default PostForm