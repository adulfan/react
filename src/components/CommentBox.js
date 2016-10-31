import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm'

export default class CommentBox extends React.Component {
  constructor() {
    super();
    this.state = {
      showComments: false,
      comments: []
    };
  }

  _getComments() {
    return this.state.comments.map((comment) => {
      return (
        <CommentList author={comment.author} body={comment.body} key={comment.id} id={comment.id} onDelete={this._deleteComment.bind(this)}/>
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

  _addComment(author, body) {
    const comment = {
      id: this.state.comments.length + 1,
      author,
      body
    };
    if (comment.author && comment.body) {
      this.setState({
       comments: this.state.comments.concat([comment])
      });
    }
  }

  _deleteComment(commentID) {
    if (!commentID) {
      return;
    }

    const comments = this.state.comments.filter(
      comment => comment.id !== commentID
    );
    this.setState({ comments });
  }

  localHandleClick() {
    this.setState({
      showComments: !this.state.showComments,
    });
  }

  componentWillMount() {
    this._fetchComments();
  }

  _fetchComments() {
    fetch('../api/comments.json').then(function(response) {
      return response.json();
    }).then(comments => this.setState({ comments }));
  }

  componentDidlMount() {
    this._timer = setInterval(() => this._fetchComments(), 5000);
  }

  componentWillUnmount() {
    clearInterval(this._timer);
  }

  render() {
    const comments = this._getComments();
    let commentNodes;
    let buttonText = "Show";

    if(this.state.showComments) {
      commentNodes = <div className="comment-node"> { comments } </div>;
      buttonText = "Hide";
    }

    return (
      <div className="comment-box">
        <CommentForm addComment={this._addComment.bind(this)} />
        <h2>Comments</h2>
        <h3 className="comment-count">{this._getCommentsTitle(comments.length)}</h3>
        {<button onClick={this.localHandleClick.bind(this) }>{buttonText} Comments</button>}
        { commentNodes }
      </div>
    );
  }


}
