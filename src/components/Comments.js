// //list of comments
// import React, { useEffect } from "react";
// import { commentData } from "../data";

// function Comments() {
//   var commentList = commentData.comments;
//   console.log(commentData.comments);

//   return (
//     <div>
//       <h1>all my existing comments</h1>
//       <div className="list-group">
//         {commentList.map((comment, index) => {
//           return (
//             <div key={index}>
//               <p>
//                 {comment.content}, {comment.user.username}
//               </p>
//               <p>{comment.createdAt}</p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default Comments;
