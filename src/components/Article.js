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
        isOpenComments: false
    }

    render() {
        const { article } = this.props
        const body = this.state.isOpen ? <section>{article.text}</section> : null

        let arArticleCommetns = []
        if(article.comments) {
            article.comments.forEach(function(item, i) {
               arArticleCommetns[i] = <div key = {i}>{item.text}/></div>
            });
        }
        const comments = this.state.isOpenComments ? <div>{arArticleCommetns}</div> : null
        const commentsLinkTxt = this.state.isOpenComments ? `Hide comments` : `Show comments`
        //console.log(arArticleCommetns)

        return (
            <div>
                <h3 onClick = {this.handleClick}>{article.title}</h3>
                {body}
                <a onClick = {this.handleClickComments}>{commentsLinkTxt}</a>
                {comments}
            </div>
        )
    }

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    handleClickComments = (ev) => {
        this.setState({
            isOpenComments: !this.state.isOpenComments
        })
    }
}