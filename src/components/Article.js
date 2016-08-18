import React, { Component } from 'react'

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
        commentClosed: true
    }

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    commentClick = (ev) => {
      this.setState({
        commentClosed: !this.state.commentClosed
      })
    }

    render() {
      const { article } = this.props
      const buttonText = this.state.commentClosed ? <button onClick={this.commentClick}>Show comments</button> : <button onClick={this.commentClick}>Hide comments</button>
      const body = this.state.isOpen ? <section>
        {article.text}
        <br/>
        <br/>
        {buttonText}
        </section> : null
      const commentText = this.props.article.comments != undefined ? this.props.article.comments.map(comment =>
        <div key = {comment.id}>
          <hr/>
          <h2>{comment.title}</h2>
          <p>{comment.text}</p>
          <p>{comment.user}</p>
        </div>
      ) : <span>no comments yet</span>
      const comment = this.state.commentClosed ? null : <div className="comments_list">{commentText}</div>
      return (
          <div>
              <h3 onClick = {this.handleClick}>{article.title}</h3>
              {body}
              {comment}
          </div>
      )
    }


}
