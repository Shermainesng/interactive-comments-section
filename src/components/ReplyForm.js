import React, { useEffect, useState, useContext } from "react";
import StateContext from "../StateContext";

function ReplyForm(props) {
  //receives replies array and function from comment.js/ reply.js (for replies on a reply)
  const [replyContent, setReplyContent] = useState();
  const appState = useContext(StateContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (replyContent === "") {
      alert("Reply cannot be blank");
      return;
    }
    const replyToAdd = {
      content: replyContent,
      createdAt: "1 min ago",
      user: {
        image: {
          png: appState.currentUser.image.png
        },
        username: appState.currentUser.username
      },
      replies: []
    };
    props.setCommentReplies(prev => prev.concat(replyToAdd)); //concat to the comment's array of replies
  }

  return (
    <div className="new-reply">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="reply" className="text-muted mb-1">
            <small>Reply</small>
          </label>
          <textarea onChange={e => setReplyContent(e.target.value)} value={replyContent} autoFocus name="reply" id="content-title" className="form-control form-control-lg form-control-title" type="text" placeholder="" autoComplete="off" />
        </div>
        <button className="btn btn-primary">SEND</button>
      </form>
    </div>
  );
}

export default ReplyForm;
