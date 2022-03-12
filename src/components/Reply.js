import React, { useEffect, useState, useContext } from "react";
import ReplyList from "./ReplyList";
import ReplyForm from "./ReplyForm";
import StateContext from "../StateContext";

function Reply(props) {
  //getting each reply from the reply array + function to update reply array from ReplyList.js
  const appState = useContext(StateContext);
  const [clickedReply, setClickedReply] = useState(false);
  const [commentReplies, setCommentReplies] = useState(props.reply.replies); //the array of replies for each reply
  const [edit, setEdit] = useState(false);
  const [replyContent, setReplyContent] = useState(props.reply.content);
  const [editedReply, setEditedReply] = useState(props.reply.content);

  const [upVote, setUpVote] = useState(false);

  function deleteHandler() {
    const areYouSure = window.confirm("Do you really want to delete this reply?");
    if (areYouSure) {
      let updatedReplies = props.replies.filter(reply => reply.id !== props.reply.id);
      props.setReplies(updatedReplies);
      console.log(updatedReplies);
    }
  }

  function handleUpdate() {
    setReplyContent(editedReply);
    setEdit(false);
  }

  function handleCancel() {
    setEdit(false);
  }

  return (
    <div>
      <div className="reply-card mb-4">
        <div className="counter d-flex flex-column">
          <button onClick={() => setUpVote(true)}>
            <svg className="mb-2" width="11" height="11" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" fill="#C5C6EF" />
            </svg>
          </button>
          <p>{upVote ? props.reply.score + 1 : props.reply.score}</p>
          <button onClick={() => setUpVote(false)}>
            <svg width="11" height="3" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" fill="#C5C6EF" />
            </svg>
          </button>
        </div>
        <img src={props.reply.user.image.png} alt="pfp" />
        {edit ? (
          <div>
            <textarea className="textAreaEditReply" onChange={e => setEditedReply(e.target.value)} value={editedReply} placeholder="write reply" />
            <button className="submitchange" onClick={handleUpdate}>
              Update
            </button>
            <button className="cancelchange" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        ) : (
          <p>{replyContent}</p>
        )}
        <p>{props.reply.user.username}</p>
        <p>{props.reply.createdAt}</p>
        {props.reply.user.username === appState.currentUser.username && (
          <div>
            <button onClick={deleteHandler}>
              <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" fill="#ED6368" />
              </svg>
              <small>Delete</small>
            </button>
          </div>
        )}
        {props.reply.user.username === appState.currentUser.username && (
          <div>
            <button onClick={() => setEdit(!edit)}>
              <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" fill="#5357B6" />
              </svg>
              <small>Edit</small>
            </button>
          </div>
        )}

        {/* handling replies on reply */}
        <button onClick={() => setClickedReply(!clickedReply)}>Reply</button>
      </div>
      {clickedReply ? <ReplyForm setClickedReply={setClickedReply} replies={commentReplies} setCommentReplies={setCommentReplies} /> : ""}
      <div className="reply-reply-lists">
        <ReplyList replies={commentReplies} setCommentReplies={setCommentReplies} />
      </div>
    </div>
  );
}

export default Reply;
