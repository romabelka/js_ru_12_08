import React, {Component} from 'react'
import {Comments} from './Comments'

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
        isShow: false
    }

    render() {
        const {article} = this.props
        const body = this.state.isOpen ? <section>{article.text}</section> : null

        return (
            <div>
                <h3 onClick={this.handleClick}>{article.title}</h3>
                {body}
                {this.showComments(article.comments)}
                <button onClick={this.toggleComments}>Show Comments</button>
            </div>
                        
        )
    }

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    toggleComments = (ev) => {
        this.setState({
            isShow: !this.state.isShow
        })
    }

    showComments(comments) {
        if (this.state.isShow) {
            return (
                <ul>
                    <Comments comments = {comments}/>
                </ul>
            )
        }
    }
}