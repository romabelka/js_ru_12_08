import { Router, Route, hashHistory } from 'react-router'
import Root from './RouteHandlers/Root'
import React from 'react'
import CounterPage from './RouteHandlers/CounterPage'
import FiltersPage from './RouteHandlers/FiltersPage'
import ArticlesPage from './RouteHandlers/ArticlesPage'

export default (
    <Router history = {hashHistory}>
        <Route path = "/" component = {Root} >
            <Route path = "counter" component = {CounterPage} />
            <Route path = "filters" component = {FiltersPage} />
            <Route path = "articles" component = {ArticlesPage} />
        </Route>
    </Router>
)