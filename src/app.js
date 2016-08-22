import React from 'react'
import { render } from 'react-dom'
import { articles } from './fixtures'

import ArticleListOld from './components/ArticleListOld'

render(<ArticleListOld articles = {articles} />, document.getElementById('container'))