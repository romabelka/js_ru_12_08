import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

function Comment(props) {
    console.log('---', props)
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

export default connect(({ comments }, props) => {
    return {
        comment: comments.find(comment => comment.id == props.commentId)
    }
})(Comment)