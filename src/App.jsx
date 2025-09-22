import './App.css'
import characters from './data/characters.json';
import CharactersList from './components/CharactersList';

function CharactersCount({ characters }) {
  const count = characters.length;
  
  return (
    <p>Nombre de personnages : {count}</p>
  );
}

function App() {
  return (
    <div>
      <h1>Marvel App</h1>
      <CharactersCount characters={characters} />
      <CharactersList characters={characters} />
    </div>
  );
}

export default App;