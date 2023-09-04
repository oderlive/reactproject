import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={s.header}>

      <div className={s.items}>
      <img src="https://iphone-image.apkpure.com/v2/app/f/d/9/fd9d2ac7bc364a83ccd62c2d395131ff.jpg" />
      <div className={s.item}>
        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? s.active : s.item)}
        >
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/dialogs"
          className={({ isActive }) => (isActive ? s.active : s.item)}
        >
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/news"
          className={({ isActive }) => (isActive ? s.active : s.item)}
        >
          News
        </NavLink>
      </div>
      </div>
    </header>
  );
};
export default Header;
