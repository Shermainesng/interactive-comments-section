import React, { useEffect, useState, useContext } from "react";
import ReplyForm from "./ReplyForm";
import ReplyList from "./ReplyList";
import StateContext from "../StateContext";

function Comment(props) {
  //receives the mapped comments from commentList
  const [clickedReply, setClickedReply] = useState(false);
  const [commentReplies, setCommentReplies] = useState(props.comment.replies); //the array of replies for each comment
  const appState = useContext(StateContext);

  function deleteHandler() {
    console.log("delete comment");
    //find a way to filter the list of comments, then update the list (remove this comment)
  }

  return (
    <div>
      <div className="comment-card mb-5">
        <img src={props.comment.user.image.png} alt="pfp" />
        <p>{props.comment.user.username}</p>
        <p>{props.comment.content}</p>
        <p>{props.comment.createdAt}</p>
        {props.comment.user.username === appState.currentUser.username && (
          <div>
            <svg onClick={deleteHandler} width="12" height="14" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" fill="#ED6368" />
            </svg>
            <small>Delete</small>
          </div>
        )}
        {props.comment.user.username === appState.currentUser.username && (
          <div>
            <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" fill="#5357B6" />
            </svg>
            <small>Edit</small>
          </div>
        )}

        {/* handling replies on comments */}
        <button onClick={() => setClickedReply(!clickedReply)}>Reply</button>
      </div>
      {clickedReply ? <ReplyForm replies={commentReplies} setCommentReplies={setCommentReplies} /> : ""}
      <div className="comment-reply-lists">
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
