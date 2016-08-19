import React, {Component} from "react"

export default class Comment extends Component {
  render() {
    return (
      <div>
        <hr/>
        <h3>{this.props.comment.title}</h3>
        <p>{this.props.comment.text}</p>
        <p>{this.props.comment.user}</p>
        <p></p>
      </div>
    )
  }
}
