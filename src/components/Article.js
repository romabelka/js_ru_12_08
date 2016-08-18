import React, { Component } from 'react'
import Comment from './Comment'

export default class Article extends Component {
/*

    constructor() {
        super()
        this.state = {
            isOpen: false
        }
    }

*/
    state = {
        isOpen: false,
        isOpenComment: false
    }

    render() {
        const { article } = this.props
        const comments = article.comments
        const body = this.state.isOpen ? <section>{article.text}</section> : null
        const commentTitle = this.state.isOpenComment ? 'Close comments': 'Show comments'
        return (
            <div>
                <h3 onClick = {this.handleClick}>{article.title}</h3>
                {body}
                {comments ?
                    <div>
                        {this.state.isOpenComment&& comments.map(commentObject =>
                            <div key= {commentObject.id}>
                                <Comment comment = {commentObject}/>
                            </div>)}
                        <p onClick={this.onClick}>{commentTitle}</p>
                    </div>
                    : <p>No comments</p>
                }

            </div>
        )
    }

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    onClick = () => {
        this.setState({
            isOpenComment: !this.state.isOpenComment
        })
    }
}