import React from 'react'
import Article from './Article'

export default function ArticleList(props) {
    return (
        <ul>
            {props.articles.map(articleObject =>
                <li key = {articleObject.id}>
                    <Article article = {articleObject}/>
                </li>)
            }
        </ul>
    )
}