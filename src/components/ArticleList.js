import React, { Component, PropTypes } from 'react'
import Article from './Article'
import toggleOpenArticle from '../decorators/toggleOpenArticle'

class ArticleList extends Component {

    static propTypes = {
        openArticleId: PropTypes.string,
        toggleOpenArticle: PropTypes.func,
        articles: PropTypes.object
    }

    render() {
        const { openArticleId, toggleOpenArticle } = this.props
        const articleItems = this.props.articles.map(articleObject =>
            <li key = {articleObject.id}>
                <Article article = {articleObject}
                    toggleOpen = {toggleOpenArticle(articleObject.id)}
                    isOpen = {openArticleId === articleObject.id}
                />
            </li>)
        return (
            <ul>
                {articleItems}
            </ul>
        )
    }

}

export default toggleOpenArticle(ArticleList)