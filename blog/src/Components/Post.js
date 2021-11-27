import React, { Component } from 'react'
import axios from 'axios';
import {connect} from 'react-redux';
import {deletePostAction} from '../Actions/deleteAction';

class Post extends Component {
    // state = {
    //     post: []
    // };

    // componentDidMount() {
    //     let Id = this.props.match.params.post_id;
    //     axios.get('http://jsonplaceholder.typicode.com/posts/' + Id)
    //         .then(
    //             res => {
    //                 console.log(res.data);
    //                 this.setState({
    //                     post: res.data
    //                 });
    //             }
    //         )
    // }

    deletePost = () =>{
        this.props.deletePropsPost(this.props.post.id);
        this.props.history.push('/');
    }
    render() {
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button onClick={this.deletePost} className="btn btn-dark">
                        Delete Post
                    </button>
                </div>
            </div>
        ) :(
            <div className="center">
                Loading Post....
            </div>
        )
        return (
                <div className="container">
                    {post}
                </div>
        )
    }
}

const mapStateToProps = (state,ownProps) => {
    let id= ownProps.match.params.post_id;
    return{
        post: state.posts.find(post=>post.id === id)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deletePropsPost: (id) => dispatch(deletePostAction(id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Post);