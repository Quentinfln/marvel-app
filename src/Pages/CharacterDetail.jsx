function CharacterDetail({ character = {}}) {
    return (
        <div>
            <h2>(character.name)</h2>
            {
                character.thumbnail && <img src={`${character.thumbnail.path}/standart_large.${character.thumbnail.extension}`} alt={character.name} />
            }
            <p>{character.description}</p>
            <p>{character.modified}</p>
        </div>
    );
}

export default CharacterDetail;