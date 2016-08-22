<<<<<<< HEAD
import React, {Component} from "react"
import Comment from "./Comment"

export default class CommentList extends Component {
  state = {
    commentClosed: true
  }
  commentClick = (ev) => {
    this.setState({
      commentClosed: !this.state.commentClosed
    })
  }
  render() {
    const buttonText = this.state.commentClosed ? "Show comments" : "Hide comments"
    const commentText = this.props.comments.comments != undefined ? this.props.comments.comments.map(comment =>
      <div key = {comment.id}><Comment comment= {comment}/></div>
    ) : <span>no comments yet</span>
    const comment = this.state.commentClosed ? null : <div className="comments_list">{commentText}</div>
    return (
      <div>
        <button onClick={this.commentClick}>{buttonText}</button>
        {comment}
      </div>
    )
  }
}
=======
import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'

class CommentList extends Component {
    render() {
        const { comments, isOpen, toggleOpen } = this.props

        if (!comments || !comments.length) return <p>No comments yet</p>
        const toggleButton = <a href="#" onClick = {toggleOpen}>{isOpen ? 'hide' : 'show'} comments</a>

        if (!isOpen) return <div>{toggleButton}</div>

        const commentItems = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)

        return (
            <div>
                {toggleButton}
                <ul>{commentItems}</ul>
            </div>
        )
    }
}

export default toggleOpen(CommentList)
>>>>>>> upstream/master
