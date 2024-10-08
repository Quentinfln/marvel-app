import React, {useEffect} from 'react';

import { useLoaderData } from 'react-router';
import CharacterDetail from '../components/CharacterDetail';

const CharactersDetailPage = () => {
    const character = useLoaderData();

    useEffect(() => {
        document.title = `${character.name} | Marvel App`;       
    }, [character]);

    return (
        <>
            <CharacterDetail character={character} />
        </>
    );
};

export default CharactersDetailPage;