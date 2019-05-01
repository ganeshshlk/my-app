import React, {Component} from 'react'

class Post extends Component{
    constructor(props){
        super(props)
        this.state={
            post:[]
        }
    }

    componentWillMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>this.setState({post:data}))
    }

    render(){
        var post=this.state.post.map(d=>(
            <div key={d.id}>
            <h3>{d.title}</h3>
            <p>{d.body}</p>
            </div>
        ))
        return (
            <div>
                {post}
            </div>
        )  
    }
}

export default Post