import React, { useState } from "react";
import { FaHandRock, FaHandScissors, FaHandPaper } from "react-icons/fa";
import Player from "./Player";
import ActionButton from "./ActionButton";
import { RandomAction } from "./RandomAction";
import { CalculateWinner } from "./CalculateWinner";
import { ShowWinner } from "./ShowWinner";

const App = () => {
  const [playerAction, setPlayerAction] = useState("rock");
  const [computerAction, setComputerAction] = useState("scissors");

  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const [winner, SetWinner] = useState(0);

  const onActionSelected = (selectedAction) => {
    setPlayerAction(selectedAction);
    const newComputerAction = RandomAction();
    setComputerAction(newComputerAction);
    const newWinner = CalculateWinner(selectedAction, newComputerAction);
    SetWinner(newWinner);
    if (newWinner === -1) {
      setPlayerScore(playerScore + 1);
    } else if (newWinner === 1) {
      setComputerScore(computerScore + 1);
    }
  };

  return (
    <section className="container">
      <section className="header">
        <h1 className="title">Rock - Paper - Scissors</h1>
      </section>
      <section className="scoreboard">
        <Player name="Player" score={playerScore} action={playerAction} />
        <Player name="Computer" score={computerScore} action={computerAction} />
      </section>
      <section className="btn-container">
        <ActionButton action="rock" onActionSelected={onActionSelected} />
        <ActionButton action="paper" onActionSelected={onActionSelected} />
        <ActionButton action="scissors" onActionSelected={onActionSelected} />
      </section>
      <ShowWinner winner={winner} />
    </section>
  );
};

export default App;
