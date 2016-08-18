import React, { Component } from 'react'

export default class Comment extends Component {

    render () {
        const { user, text } = this.props.comment
        return (
            <div>
                <section>
                    <h1>{user}</h1>
                    <p>{text}</p>
                </section>
            </div>
        )
    }

}