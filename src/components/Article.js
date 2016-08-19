import React, { Component } from 'react'
import CommentList from "./CommentList"

//Не перегружай компоненты, лучше разбей на Article и CommentList
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
        isOpen: false
    }

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
