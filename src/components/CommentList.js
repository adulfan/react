import React from 'react';

export default class CommentBox extends React.Component {
  render() {
    return (
      <div className="comment-content">
        <div className="comment-list">
          <p>{this.props.author}</p>
          <p>{this.props.body}</p>
        </div>
        <footer>
          <a href="#" className="comment-delete" title="Delete comment">
            Delete Comment
          </a>
        </footer>
       </div>
    );
  }
}
