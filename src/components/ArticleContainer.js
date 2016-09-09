import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Article from './Article'

class ArticleContainer extends Component {
    static propTypes = {
        articleId: PropTypes.string.isRequired
    };

    render() {
        return <Article article = {this.props.article} isOpen = {true} />
    }
}

export default connect((state, props) => ({
    article: state.articles.getIn(['entities', props.articleId])
}))(ArticleContainer)