import React from "react";
import s from'./Post.module.css';

const Post = (p) => {
  return (
    <div>
    <div className={s.item}>
      <img src="https://e7.pngegg.com/pngimages/349/288/png-clipart-teacher-education-student-course-school-avatar-child-face.png" alt="" />
      {p.message}
      <div>
        <span>{p.likesCount}</span>
      </div>
    </div>
  </div>
  );
};
export default Post;