import './App.css'
import characters from './data/characters.json';
import CharactersList from './components/CharactersList';
import NumberOfCharacters from './components/NumberOfCharacters';

function App() {
  return (
    <div>
      <h1>Marvel App</h1>
      <NumberOfCharacters characters={characters} />
      <CharactersList characters={characters} />
    </div>
  );
}

export default App;