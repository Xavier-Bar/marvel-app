import { useLoaderData, Link } from 'react-router';
import { useEffect } from 'react';
import { getCharacterById } from '../api/characters-api';
import CharacterDetail from '../components/CharacterDetail';

// Loader function to fetch character data by ID
export async function characterDetailLoader({ params }) {
    const character = getCharacterById(params.id);
    if (!character) {
        throw new Response("Character not found", { status: 404 });
    }
    return { character };
}

const CharacterDetailPage = () => {
    // Get data from the loader
    const { character } = useLoaderData();

    // Change the title of the page
    useEffect(() => {
        document.title = `${character.name} - Marvel App`;
    }, [character.name]);

    return (
        <div>
            {/* Navigation de retour */}
            <nav style={{ marginBottom: '20px' }}>
                <Link to="/">&larr; Retour à la liste des personnages</Link>
            </nav>
            
            {/* Composant de détail du personnage */}
            <CharacterDetail character={character} />
        </div>
    );
};

export default CharacterDetailPage;