import React from 'react';
import CommentList from './CommentList';

export default class CommentBox extends React.Component {
  _getComments() {
    const commentList = [
      { id: 1, author: 'Anna Dulfan', body: 'Great Stuff!' },
      { id: 2, author: 'Dinah Zhiltsova', body: 'Cool Stuff!' },
      { id: 3, author: 'Leo Videv', body: 'Love this Stuff!' }
    ];

    return commentList.map((comment) => {
      return (
        <CommentList author={comment.author} body={comment.body} key={comment.key} />
      )
    });

  }

  _getCommentsTitle(commentCount) {
    if(commentCount === 0) {
      return 'No Comments yet';
    } else if (commentCount === 1) {
      return '1 comment';
    } else {
      return `${commentCount} comments`;
    }
  }
  render() {
    const comments = this._getComments();
    return (
      <div className="comment-box">
        <h2>Comments</h2>
        <h3 className="comment-count">{this._getCommentsTitle(comments.length)}</h3>
        { comments }
      </div>
    );
  }
}
