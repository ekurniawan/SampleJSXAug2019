import React from "react";
import faker from 'faker';

const CommentDetail = () => {
  return (
    <div className="ui comments">
      <h3 className="ui dividing header">Comments</h3>
      <div className="comment">
        <a className="avatar" href="/">
          <img alt="gambar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a className="author" href="/">
            Matt
          </a>
          <div className="metadata">
            <span className="date">Today at 5:42PM</span>
          </div>
          <div className="text">How artistic!</div>
          <div className="actions">
            <a className="reply" href="/">
              Reply
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;
