import React, { useEffect } from "react";
import { commentData } from "../data";

function CommentCard() {
  var commentList = commentData.comments;
  console.log(commentData.comments);

  return (
    <div className="row justify-content-center text-center">
      <div className="col-lg-6">
        {commentList.map((comment, index) => {
          return (
            <div className="comment-card">
              <div key={index}>
                <p>
                  {comment.content}, {comment.user.username}
                </p>
                <p>{comment.createdAt}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CommentCard;
