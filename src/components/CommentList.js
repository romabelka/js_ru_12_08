import React from 'react'

export default class CommentList extends React.Component {
  render () {
    let comments = this.props.comments

    return (
      <div>
        {this.showComments(comments)}
        <button onClick={this.toggleComments}>Show Comments</button>
      </div>
    )
  }

  state = {
    isShow: false
  }

  toggleComments = (ev) => {
    this.setState({
      isShow: !this.state.isShow
    })
  }

  showComments(comments) {
    if(this.state.isShow) {
      let commentItem = comments.map((item) => <li key={item.id}><b>{item.user}:</b> {item.text}</li>);
      return (
        <ul>
            {commentItem}
        </ul>
      )
    }
  }

}