import React, { useEffect, useState, useContext } from "react";
import StateContext from "../StateContext";
import DispatchContext from "../DispatchContext";

function CommentForm() {
  //takes comments array from app.js, then push new comment to the global state
  const [newContent, setNewContent] = useState("");
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (!newContent.trim()) {
      return;
    }
    const newComment = {
      id: Math.floor(Math.random() * 100) + 5,
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
    appDispatch({ type: "addComment", value: newComment });
    // props.setComments(prev => prev.concat(newComment));
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
