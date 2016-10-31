import React from 'react';


class RemoveCommentConfirmation extends React.Component {
  constructor() {
    super();
    this.state = {
      showConfirm: false
    };
  }
  render() {
    let confirmNode;
    if (this.state.showConfirm) {
      return (
        <span>
          <a href="" onClick={this._confirmDelete.bind(this)}>Yes </a> - or - <a href="" onClick={this._toggleConfirmMessage.bind(this)}> No</a>
        </span>
      );
    } else {
      confirmNode = <a href="" onClick={this._toggleConfirmMessage.bind(this)}>Delete comment?</a>;
    }
    return (
      <span>{confirmNode}</span>
    );
  }

  _handleDelete() {
     this.props.onDelete(this.props.id);
   }

  _toggleConfirmMessage(e) {
    e.preventDefault();
    this.setState({
      showConfirm: !this.state.showConfirm
    });
  }
  _confirmDelete(e) {
    e.preventDefault();
    this.props.onDelete();
  }
}

export default class CommentBox extends RemoveCommentConfirmation {
  render() {
    return (
      <div className="comment-content">
        <div className="comment-list">
          <p>{this.props.author}</p>
          <p>{this.props.body}</p>
        </div>
        <footer>
          <RemoveCommentConfirmation onDelete={this._handleDelete.bind(this)} />
        </footer>
       </div>
    );
  }
}


