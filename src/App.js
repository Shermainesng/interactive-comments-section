import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { data } from "./data";
import React, { useState } from "react";
import StateContext from "./StateContext";
import DispatchContext from "./DispatchContext";
import { useImmerReducer } from "use-immer";

//My Components
import CommentList from "./components/CommentList";
import CommentForm from "./components/CommentForm";
import ReplyList from "./components/ReplyList";

function App() {
  //states to access app-wide
  const initialState = {
    currentUser: data.currentUser,
    comments: data.comments
  };

  function ourReducer(draft, action) {
    switch (action.type) {
      case "setCurrentUser":
        draft.currentUser = data.currentUser;
        return;
      case "addComment":
        draft.comments.push(action.value);
        return;
      case "deleteComment":
        draft.comments = action.value;
        return;
      default:
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <div className="container-fluid container-custom">
          <CommentList />
          <CommentForm />
          <ReplyList />
        </div>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
