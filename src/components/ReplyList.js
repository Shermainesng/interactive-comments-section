import React, { useEffect } from "react";
import Reply from "./Reply";

function ReplyList(props) {
  //receives the replies array (per comment)

  return (
    <div>
      {props.replies &&
        props.replies.length > 0 &&
        props.replies.map((reply, index) => {
          return <Reply key={index} reply={reply} />;
        })}
    </div>
  );
}

export default ReplyList;
