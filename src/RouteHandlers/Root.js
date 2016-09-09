import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import Container from '../components/Container'

class Root extends Component {
    static propTypes = {

    };

    render() {
        return (
            <Provider store = {store}>
                <Container />
            </Provider>
        )
    }
}

export default Root