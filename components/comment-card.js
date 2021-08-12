import React from "react";

const CommentCard = ({ data }) => {
  const { image, name, date, content } = data;
  return (
    <div className="single-comment">
      <img src={image} alt="" />
      <div className="authorDetails">
        <h5>
          <a href="#">{name}</a>
        </h5>
        <span>{date}</span>
      </div>
      <div className="comment">
        <p>{content}</p>
      </div>
      <a className="common_btn red_bg" href="#">
        <span>Reply</span>
      </a>
    </div>
  );
};

export default CommentCard;
