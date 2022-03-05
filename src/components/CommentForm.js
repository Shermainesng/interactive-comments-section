import React, { useEffect, useState, useContext } from "react";
import StateContext from "../StateContext";

function CommentForm(props) {
  const [newContent, setNewContent] = useState("");
  const appState = useContext(StateContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (!newContent.trim()) {
      return;
    }
    const newComment = {
      content: newContent,
      createdAt: "1 min ago",
      score: 0,
      user: {
        image: {
          png: appState.currentUser.image.png
        },
        username: appState.currentUser.username
      },
      replies: []
    };
    props.setComments(prev => prev.concat(newComment));
  }

  return (
    <div className="new-comment">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="comment-title" className="text-muted mb-1">
            <small>Comment</small>
          </label>
          <textarea onChange={e => setNewContent(e.target.value)} value={newContent} autoFocus name="content" id="content-title" className="form-control form-control-lg form-control-title" type="text" placeholder="" autoComplete="off" />
        </div>

        <button className="btn btn-primary">SEND</button>
      </form>
    </div>
  );
}

export default CommentForm;
