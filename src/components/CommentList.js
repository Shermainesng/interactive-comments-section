import React, { useEffect, useState } from "react";
import Comment from "./Comment";

function Comments(props) {
  return (
    <div className="row justify-content-center text-center">
      <div className="col-lg-6">
        {props.comments.map((comment, index) => {
          return (
            <div className="d-flex flex-column">
              <Comment key={index} comment={comment} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Comments;
