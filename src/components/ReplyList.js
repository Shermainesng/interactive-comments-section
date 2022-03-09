import React, { useEffect, useState } from "react";
import Reply from "./Reply";

function ReplyList(props) {
  //receives the replies array (per comment) from comment.js
  //receives the replies array (per reply) from reply.js

  return (
    <div>
      {props.replies &&
        props.replies.length > 0 &&
        props.replies.map((reply, index) => {
          return <Reply key={reply.id} reply={reply} setReplies={props.setCommentReplies} replies={props.replies} />;
        })}
    </div>
  );
}

export default ReplyList;
