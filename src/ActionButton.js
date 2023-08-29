import React from "react";
// import { FaHandRock, FaHandScissors, FaHandPaper } from "react-icons/fa";
import ActionIcon from "./ActionIcon";

const ActionButton = ({ action, onActionSelected }) => {
  return (
    <button className="btn" onClick={() => onActionSelected(action)}>
      <ActionIcon className="actionBtn" action={action} />
    </button>
  );
};

export default ActionButton;
