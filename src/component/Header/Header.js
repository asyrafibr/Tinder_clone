import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import { IconButton } from "@material-ui/core";
import ForumIcon from "@material-ui/icons/Forum";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize='Large' className='header_icon' />
      </IconButton>

      <img
      alt=""
        className="header_logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJm9bUsk5L6fBkiOUGSDv9FBOKDZfVeYHJdw&usqp=CAU"
      ></img>
      <IconButton>
        <ForumIcon fontSize='Large' className='header_icon' />
      </IconButton>
    </div>
  );
}

export default Header;
