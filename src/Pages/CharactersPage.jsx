import React, { useState, useEffect } from 'react';
import { CharactersList } from "../components/CharactersList";
import { NumberOfCharacters } from "../components/NumberOfCharacters";
import { useLoaderData, useSearchParams } from 'react-router-dom';

const CharactersPage = () => {
    // Change the title of the page
    document.title = "Marvel App";

    const [searchParams, setSearchParams] = useSearchParams();
    const [sort, setSort] = useState(searchParams.get('sort') || 'name');
    const [order, setOrder] = useState(searchParams.get('order') || 'asc');
    const characters = useLoaderData();

    useEffect(() => {
        setSearchParams({ sort, order });
    }, [sort, order, setSearchParams]);

    return (
        <>
            <h2>Marvel Characters</h2>
            <div>
                <label htmlFor="sort">Sort by: </label>
                <select id="sort" value={sort} onChange={(e) => setSort(e.target.value)}>
                    <option value="name">Name</option>
                    <option value="modified">Date Modified</option>
                </select>
                <label htmlFor="order">Order: </label>
                <select id="order" value={order} onChange={(e) => setOrder(e.target.value)}>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </div>
            <CharactersList characters={characters} />
            <br />
            <NumberOfCharacters characters={characters} />
        </>
    );
};

export default CharactersPage;