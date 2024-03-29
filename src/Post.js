import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post({ displayName, username, verified, text, avatar, image }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://filmfare.wwmindia.com/content/2020/jun/ranbir-kapoor-31593246810.jpg" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Karan Udayan Das{" "}
              <span className="post__headerSpecial">
                <VerifiedUserIcon className="post__badge" /> @karanudayandas
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>I Challenge you to build a Twitter Clone with React</p>
          </div>
        </div>
        <img
          src="https://techcrunch.com/wp-content/uploads/2014/06/surprised-andy.gif"
          alt="GIF"
        />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
