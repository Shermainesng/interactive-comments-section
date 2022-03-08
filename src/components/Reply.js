import React, { useEffect, useState, useContext } from "react";
import ReplyList from "./ReplyList";
import ReplyForm from "./ReplyForm";
import StateContext from "../StateContext";

function Reply(props) {
  //getting each reply from the reply array from ReplyList.js
  const appState = useContext(StateContext);
  const [clickedReply, setClickedReply] = useState(false);
  const [commentReplies, setCommentReplies] = useState(props.reply.replies); //the array of replies for each reply
  //receives individual reply info and create the reply card
  function deleteHandler() {
    const areYouSure = window.confirm("Do you really want to delete this post?");
  }

  return (
    <div>
      <div className="reply-card mb-4">
        <img src={props.reply.user.image.png} alt="pfp" />
        <p>{props.reply.content}</p>
        <p>{props.reply.user.username}</p>
        <p>{props.reply.createdAt}</p>
        {props.reply.user.username === appState.currentUser.username && (
          <div>
            <svg onClick={deleteHandler} width="12" height="14" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" fill="#ED6368" />
            </svg>
            <small>Delete</small>
          </div>
        )}
        {props.reply.user.username === appState.currentUser.username && (
          <div>
            <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" fill="#5357B6" />
            </svg>
            <small>Edit</small>
          </div>
        )}

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
