<<<<<<< HEAD
import React, { Component } from 'react'
import CommentList from "./CommentList"

//Не перегружай компоненты, лучше разбей на Article и CommentList
export default class Article extends Component {
=======
import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'
import toggleOpen from '../decorators/toggleOpen'

class Article extends Component {
>>>>>>> upstream/master
/*

    constructor() {
        super()
        this.state = {
            isOpen: false
        }
    }

*/
    static propTypes = {
        article: PropTypes.object.isRequired
    }

<<<<<<< HEAD
    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
      const { article } = this.props
      //тут можно было менять только текст
      const body = this.state.isOpen ? <section>
        {article.text}
        <br/>
        <br/>
        <CommentList comments = {this.props.article}/>
        </section> : null
      return (
          <div>
              <h3 onClick = {this.handleClick}>{article.title}</h3>
              {body}
          </div>
      )
    }


}
=======
    render() {
        const { article: { text, title, comments}, isOpen, toggleOpen } = this.props
        const body = isOpen ? <section>{text}<CommentList comments = {comments}/></section> : null
        return (
            <div>
                <h3 onClick = {toggleOpen}>{title}</h3>
                {body}
            </div>
        )
    }
}

export default Article
>>>>>>> upstream/master
