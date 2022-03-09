import React, { useEffect, useState, useContext } from "react";
import Comment from "./Comment";
import StateContext from "../StateContext";

function Comments() {
  //receives comments array from app.js
  const appState = useContext(StateContext);

  return (
    <div className="row justify-content-center text-center">
      <div className="col-lg-6">
        {appState.comments.map(comment => {
          return (
            <div className="d-flex flex-column">
              <Comment key={comment.id} comment={comment} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Comments;
