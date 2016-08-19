import React from 'react'
import Article from './Article'

export default function CommentsList(props) {
    const commetnsItems = props.articles
    comments.map(articleObject => <li key = {articleObject.id}><Article article = {articleObject}/></li>)
    return (
        <ul>
        {commetnsItems}
        </ul>
    )
}