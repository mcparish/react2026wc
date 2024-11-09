import React, { useState } from "react";

function ScoreInput() {
  const [games, setGames] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const gameIndex = parseInt(name.split("-")[1]);

    setGames((prevGames) =>
      prevGames.map((game, index) =>
        index === gameIndex ? { ...game, [name.split("-")[0]]: value } : game
      )
    );
  };

  const addGame = () => {
    setGames([...games, { team1: "", team2: "", score1: "", score2: "" }]);
  };

  return (
    <div>
      {games.map((game, index) => (
        <div key={index}>
          <input
            type="text"
            name={`team1-${index}`}
            value={game.team1}
            onChange={handleInputChange}
            placeholder="Team 1"
          />
          <input
            type="text"
            name={`team2-${index}`}
            value={game.team2}
            onChange={handleInputChange}
            placeholder="Team 2"
          />
          <input
            type="number"
            name={`score1-${index}`}
            placeholder="Score 1"
            value={game.score1}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name={`score2-${index}`}
            placeholder="Score 2"
            value={game.score2}
            onChange={handleInputChange}
          />
        </div>
      ))}
      <button onClick={addGame}>Add Game</button>
      <table>
        <thead>
          <tr>
            <th>Team 1</th>
            <th>Team 2</th>
            <th>Score 1</th>
            <th>Score 2</th>
          </tr>
        </thead>
        <tbody>
          {games.map((game, index) => (
            <tr key={index}>
              <td>{game.team1}</td>
              <td>{game.team2}</td>
              <td>{game.score1}</td>
              <td>{game.score2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ScoreInput;
