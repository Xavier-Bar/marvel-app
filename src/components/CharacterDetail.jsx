function CharacterDetail({ character }) {
  if (!character) {
    return <div>Personnage non trouvé</div>;
  }

  // Construction de l'URL de l'image à partir du thumbnail
  const getImageUrl = (thumbnail) => {
    if (thumbnail && thumbnail.path && thumbnail.extension) {
      return `${thumbnail.path}.${thumbnail.extension}`;
    }
    return null;
  };

  const imageUrl = getImageUrl(character.thumbnail);

  return (
    <div className="character-detail">
      <h2 style={{ 
        fontSize: '24px', 
        fontWeight: 'bold', 
        marginBottom: '20px',
        color: '#333' 
      }}>
        {character.name}
      </h2>
      
      {/* Affichage conditionnel de l'image */}
      {imageUrl && (
        <div className="character-image" style={{ marginBottom: '20px' }}>
          <img 
            src={imageUrl}
            alt={character.name}
            style={{ 
              width: '120px', 
              height: '120px',
              objectFit: 'cover',
              border: '2px solid #ddd',
              borderRadius: '4px'
            }}
          />
        </div>
      )}
      
      {/* Affichage conditionnel de la description */}
      {character.description && character.description.trim() !== '' && (
        <div className="character-description" style={{ marginBottom: '20px' }}>
          <p style={{ 
            lineHeight: '1.6',
            color: '#555',
            fontSize: '14px',
            margin: '0'
          }}>
            {character.description}
          </p>
        </div>
      )}
      
      {/* Affichage de la date de modification */}
      {character.modified && (
        <div className="character-modified" style={{ 
          fontSize: '12px', 
          color: '#888',
          marginTop: '20px'
        }}>
          {character.modified}
        </div>
      )}
    </div>
  );
}

export default CharacterDetail;