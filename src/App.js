import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const handleClick = (e) => {
    e.preventDefault();
    fetch("https://pokeapi.co/api/v2/pokemon?offset=20&limit=907")
      .then(res =>  res.json())
      // .then(res => console.log(res))
      .then(res =>  setPokemon(res.results) )
      .catch(err => console.log(err))
  }
  return (
    <div>
      <button onClick={(e) => handleClick(e)}>Get Poke</button>
      {pokemon.map((p,idx ) => {
        return <p key={idx}>{p.name}</p>})}
    </div>
  );

}
export default App;
