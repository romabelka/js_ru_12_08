import { Router, Route, hashHistory } from 'react-router'
import Root from './RouteHandlers/Root'
import React from 'react'

export default (
    <Router history = {hashHistory}>
        <Route path = "/" component = {Root} />
    </Router>
)