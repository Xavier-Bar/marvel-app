import { useLoaderData, useParams } from 'react-router';
import { useEffect } from 'react';
import { getCharacterById } from '../api/characters-api';

// Loader function to fetch character data by ID
export async function characterDetailsLoader({ params }) {
    const character = getCharacterById(params.id);
    if (!character) {
        throw new Response("Character not found", { status: 404 });
    }
    return { character };
}

const CharacterDetailsPage = () => {
    // Get data from the loader
    const { character } = useLoaderData();

    // Change the title of the page
    useEffect(() => {
        document.title = `${character.name} - Marvel App`;
    }, [character.name]);

    return (
        <div>
            <h2>{character.name}</h2>
            <p><strong>ID:</strong> {character.id}</p>
            <p>Détails du personnage Marvel : {character.name}</p>
        </div>
    );
};

export default CharacterDetailsPage;