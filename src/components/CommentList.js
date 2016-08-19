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
