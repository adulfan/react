import React from 'react';

export default class CommentForm extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    let author = this._author;
    let body = this._body;
    //passing callback function from CommentBox.
    this.props.addComment(author.value, body.value);
  }
  render() {
    return (
      <form className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
        <h4>Join the discussion</h4>
        <div className="comment-form-fields">
          <input id="name" placeholder="First Name, Last Name" ref={(input) => this._author = input} />
          <label htmlFor="name">Name</label>
          <textarea  id="comment-text" placeholder="Comment: " ref={(textarea) => this._body = textarea}></textarea>
       </div>
       <button type="submit">Post comment</button>
      </form>
    );
  }
}