export const ShowWinner = ({ winner }) => {
  const text = {
    "-1": "You Win!",
    0: "It's a Tie!",
    1: "You Lose!",
  };
  return (
    <section className="winner-text">
      <h2>{text[winner]}</h2>
    </section>
  );
};
