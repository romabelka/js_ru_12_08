import React from 'react'
import Article from './Article'

export default function ArticleList(props) {
  //console.log(props.articles);
  const articleItems = props.articles.map(articleObject => <li key = {articleObject.id}><Article article = {articleObject}/></li>)
  //console.log(articleItems)
  return (
    <ul>
      {articleItems}
    </ul>
  )
}