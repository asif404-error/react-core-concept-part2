import { useState } from "react";

export default function Batsman() {
  let [runs, setRuns] = useState(0);
  //calculate the amount of sixes
  const [sixes, setSixes] = useState(0);
  //calculate the amount of fours
  const [fours, setFours] = useState(0);

  const handleSingle = () => {
    const updateRuns = runs + 1;
    setRuns(updateRuns);
  };

  const handleSix = () => {
    const updatedRuns = runs + 6;
    const updatedSixes = sixes + 1;
    setRuns(updatedRuns);
    setSixes(updatedSixes);
  };

  const handleFour = () => {
    const updatedRuns = runs + 4;
    const updatedFours = fours + 1;
    setRuns(updatedRuns);
    setFours(updatedFours);
  };

  return (
    <div>
      <h3>Bangla Batsman</h3>
      <p>
        <small>Total Sixes: {sixes} </small> <br />
        <small>Total Fours: {fours} </small>
      </p>
      {runs > 50 && <p>Your Score: 50</p>}
      {runs > 100 && <p>Your Score: 100</p>}
      <h1>Score : {runs}</h1>
      <button onClick={handleSingle}>Singles</button>
      <button onClick={handleFour}>Four </button>
      <button onClick={handleSix}>Six</button>
    </div>
  );
}
