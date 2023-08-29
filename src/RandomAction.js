export const RandomAction = () => {
  const actions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  const keys = Object.keys(actions);
  const index = Math.floor(Math.random() * keys.length);

  return keys[index];
};
