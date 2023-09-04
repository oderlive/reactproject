import s from "./ProfileInfo.module.css";
import React from "react";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://thumbs.dreamstime.com/b/тра-иционные-iclandic-ома-с-травянистыми-крышами-88623338.jpg" />
      </div>
      <div className={s.descriptionBlock}>ava + descr</div>
    </div>
  );
};

export default ProfileInfo;
