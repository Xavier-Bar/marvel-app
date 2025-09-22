import './App.css'
import characters from './data/characters.json';

function App() {
  return (
    <div>
      <h1>Hello world from react JSX</h1>
      <ul>
        {characters.map(character => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;