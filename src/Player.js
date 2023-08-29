import React from "react";
import ActionIcon from "./ActionIcon";

const Player = ({ name, score, action }) => {
  return (
    <div className="player">
      <p className="score">{`${name}: ${score}`}</p>
      <div className="action">{action && <ActionIcon action={action} />}</div>
    </div>
  );
};

export default Player;
