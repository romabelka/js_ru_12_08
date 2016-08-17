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
      const buttonText = this.state.commentClosed ? <span>Show comments</span> : <span>Hide comments</span>
      const body = this.state.isOpen ? <section>
        {article.text}
        <br/>
        <br/>
        <button onClick={this.commentClick}>{buttonText}</button></section> : null
      const commentText = this.props.article.comments != undefined ? this.props.article.comments.map(comment =>
        <div key = {comment.id}>
          <hr/> 
          <h2>{comment.title}</h2>
          <p>{comment.text}</p>
          <p>{comment.user}</p>
        </div>
      ) : null
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
