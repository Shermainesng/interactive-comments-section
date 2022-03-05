import React, { useEffect, useState } from "react";
import ReplyList from "./ReplyList";
import ReplyForm from "./ReplyForm";

function Reply(props) {
  //getting each reply from the reply array from ReplyList.js
  const [clickedReply, setClickedReply] = useState(false);
  const [commentReplies, setCommentReplies] = useState(props.reply.replies); //the array of replies for each reply
  //receives individual reply info and create the reply card
  return (
    <div>
      <div className="reply-card mb-4">
        <img src={props.reply.user.image.png} alt="pfp" />
        <p>{props.reply.content}</p>
        <p>{props.reply.user.username}</p>
        <p>{props.reply.createdAt}</p>
        {/* handling replies on reply */}
        <button onClick={() => setClickedReply(!clickedReply)}>Reply</button>
      </div>
      {clickedReply ? <ReplyForm replies={commentReplies} setCommentReplies={setCommentReplies} /> : ""}
      <div className="reply-reply-lists">
        <ReplyList replies={commentReplies} />
      </div>
    </div>
  );
}

export default Reply;
