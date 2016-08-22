<<<<<<< HEAD
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
=======
import React, { PropTypes } from 'react'

function Comment(props) {
    if (!props.comment) return null
    const { comment: { user, text } } = props
    return (
        <p>
            {text}
            <strong>by {user}</strong>
        </p>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        user: PropTypes.string,
        text: PropTypes.string.isRequired
    })
}

export default Comment
>>>>>>> upstream/master
