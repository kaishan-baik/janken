import React from "react";
import { FaHandRock, FaHandScissors, FaHandPaper } from "react-icons/fa";

const ActionIcon = ({ action, ...props }) => {
  const icons = {
    rock: FaHandRock,
    paper: FaHandPaper,
    scissors: FaHandScissors,
  };

  const Icon = icons[action];

  return <Icon className="action-score" {...props} />;
};

export default ActionIcon;
