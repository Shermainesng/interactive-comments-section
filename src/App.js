import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { data } from "./data";
import React, { ourReducer, useState } from "react";
import StateContext from "./StateContext";
import DispatchContext from "./DispatchContext";
import { useImmerReducer } from "use-immer";

//My Components
import CommentList from "./components/CommentList";
import CommentForm from "./components/CommentForm";
import ReplyList from "./components/ReplyList";

function App() {
  // const [currentUser, setCurrentUser] = useState(data.currentUser);
  const [comments, setComments] = useState(data.comments);
  //states to access app-wide
  const initialState = {
    currentUser: data.currentUser
  };

  function ourReducer(draft, action) {
    switch (action.type) {
      case "setCurrentUser":
        draft.currentUser = data.currentUser;
        return;
      default:
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <div className="container-fluid container-custom">
          <CommentList comments={comments} setComments={setComments} />
          <CommentForm comments={comments} setComments={setComments} />
          <ReplyList comments={comments} setComments={setComments} />
        </div>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
