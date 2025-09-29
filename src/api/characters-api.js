import characters from '../data/characters.json';

/**
 * Retourne la liste complète des personnages
 * @returns {Array} Liste de tous les personnages
 */
export function getCharacters() {
  return characters;
}

/**
 * Retourne un personnage spécifique en fonction de son ID
 * @param {string} id - L'ID du personnage à récupérer
 * @returns {Object|undefined} Le personnage trouvé ou undefined si non trouvé
 */
export function getCharacterById(id) {
  return characters.find(character => character.id === id);
}