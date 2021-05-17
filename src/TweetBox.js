import { Button } from "@material-ui/core";
import React from "react";
import "./TweetBox.css";
import { Avatar } from "@material-ui/core";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://filmfare.wwmindia.com/content/2020/jun/ranbir-kapoor-31593246810.jpg" />
          <input placeholder="Whats happening?" type="text" />
        </div>
        <input
          className="tweetBox__inputImage"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
