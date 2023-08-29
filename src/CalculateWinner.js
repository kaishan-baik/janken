export const CalculateWinner = (action1, action2) => {
  const actions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (action1 === action2) {
    return 0;
  } else if (actions[action1] === action2) {
    return -1;
  } else if (actions[action2] === action1) {
    return 1;
  }
  // This should never really happen
  return null;
};
