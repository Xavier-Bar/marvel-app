import { useLoaderData } from 'react-router';
import { useEffect } from 'react';
import CharactersList from "../components/CharactersList";
import NumberOfCharacters from "../components/NumberOfCharacters";
import { getCharacters } from '../api/characters-api';

// Loader function to fetch data before rendering
export async function charactersLoader() {
    const characters = getCharacters();
    return { characters };
}

const CharactersPage = () => {
    // Get data from the loader
    const { characters } = useLoaderData();

    // change the title of the page
    useEffect(() => {
        document.title = "Characters | Marvel App";
    }, []);

    return (
        <>
            <h2>Marvel Characters</h2>
            <CharactersList characters={characters} />
            <br />
            <NumberOfCharacters characters={characters} />
        </>
    );
};

export default CharactersPage;