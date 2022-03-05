import React, { useEffect, useState } from "react";
import ReplyForm from "./ReplyForm";
import ReplyList from "./ReplyList";

function Comment(props) {
  //receives the mapped comments
  const [clickedReply, setClickedReply] = useState(false);
  const [commentReplies, setCommentReplies] = useState(props.comment.replies); //the array of replies for each comment

  return (
    <div>
      <div className="comment-card mb-5">
        <img src={props.comment.user.image.png} alt="pfp" />
        <p>{props.comment.user.username}</p>
        <p>{props.comment.content}</p>
        <p>{props.comment.createdAt}</p>
        {/* handling replies on comments */}
        <button onClick={() => setClickedReply(!clickedReply)}>Reply</button>
      </div>
      {clickedReply ? <ReplyForm replies={commentReplies} setCommentReplies={setCommentReplies} /> : ""}
      <div className="comment-reply-lists d-flex align-items-end">
        <ReplyList replies={commentReplies} />
      </div>
    </div>
  );
}

export default Comment;

//  {
//    /* {comment.replies.length > 1 && (
//                 <div className="reply-lists">
//                   <Replies replies={comment.replies} />
//                 </div>
//               )} */
// //  }
