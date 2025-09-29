import { useEffect } from 'react';
import characters from '../data/characters.json';
import CharactersList from '../components/CharactersList';
import NumberOfCharacters from '../components/NumberOfCharacters';

function CharactersPage() {
  useEffect(() => {
    document.title = 'Personnages - Marvel App';
  }, []);

  return (
    <div>
      <NumberOfCharacters characters={characters} />
      <CharactersList characters={characters} />
    </div>
  );
}

export default CharactersPage;