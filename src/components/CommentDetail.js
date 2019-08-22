import React from "react";
import faker from 'faker';

const CommentDetail = (props) => {
  return (
    <div>
      <div className="comment">
        <a className="avatar" href="/">
          <img alt="gambar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a className="author" href="/">
            {faker.name.firstName()}
          </a>
          <div className="metadata">
            <span className="date">{props.tanggal}</span>
          </div>
          <div className="text">{props.pesan}</div>
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;
