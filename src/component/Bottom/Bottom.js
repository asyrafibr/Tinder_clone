import React from "react";
import "./Bottom.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";

import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButtons from "@material-ui/core/IconButton";

function Bottom() {
  return (
    <div className="swipeButtons">
      <IconButtons className="swipeButtons_repeat">
        <ReplayIcon fontSize="large"></ReplayIcon>
      </IconButtons>
      <IconButtons className="swipeButtons_left">
        <CloseIcon fontSize="large"></CloseIcon>
      </IconButtons>
      <IconButtons className="swipeButtons_star">
        <StarRateIcon fontSize="large"></StarRateIcon>
      </IconButtons>
      <IconButtons className="swipeButtons_right">
        <FavoriteIcon fontSize="large"></FavoriteIcon>
      </IconButtons>
      <IconButtons className="swipeButtons_lighting">
        <FlashOnIcon fontSize="large"></FlashOnIcon>
      </IconButtons>
    </div>
  );
}

export default Bottom;
