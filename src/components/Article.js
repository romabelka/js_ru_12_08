import React from 'react'
import CommentList from './CommentList'

export default class Article extends React.Component {
/*

    constructor() {
        super()
        this.state = {
            isOpen: false
        }
    }

*/
    state = {
        isOpen: false
    }

    render() {
        const article = this.props.article
        const body = this.state.isOpen ? <section>{article.text}</section> : null
        const comments = this.checkParam(article.comments)

        return (
            <div>
                <h3 onClick={this.handleClick}>{article.title}</h3>
                {body}
                {comments}
            </div>
        )
    }

    checkParam(param) {
      if (typeof param !== 'undefined') {
        return (<CommentList comments={param}/>)
      }
      return null
    }

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}