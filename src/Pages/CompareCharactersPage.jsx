import React, { useState, useEffect } from 'react';
import charactersData from '../data/characters.json';
import RadarChartCompare from '../components/RadarChartCompare';

const CompareCharactersPage = () => {
    // Change the title of the page
    document.title = "Compare | Marvel App";

    const [characters, setCharacters] = useState([]);
    const [option1, setOption1] = useState(null);
    const [option2, setOption2] = useState(null);

    useEffect(() => {
        // Fetch characters data from characters.json or an API endpoint
        const fetchCharacters = async () => {
            // Simulate fetching data
            const data = charactersData;
            setCharacters(data);

            // Set default options to the first two characters
            setOption1(data[0]);
            setOption2(data[1]);
        };

        fetchCharacters();
    }, []);

    if (!characters.length || !option1 || !option2) {
        return <div>Loading...</div>;
    }

    // Transform the characters to array of label/value objects
    const options = characters.map((character, index) => ({
        value: index,
        label: character.name,
    }));

    const centerStyle = {
        textAlign: 'center',
        width: 500,
    };

    // Prepare data for radar chart
    const prepareData = (char1, char2) => {
        const stats = ['force', 'intelligence', 'durability', 'energy', 'speed', 'fighting'];
        return stats.map(stat => ({
            name: stat,
            [char1.name]: char1.capacities[stat] || 0,
            [char2.name]: char2.capacities[stat] || 0,
        }));
    };

    const data = prepareData(option1, option2);

    return (
        <>
            <h2>Compare characters</h2>

            <p style={centerStyle}>
                <select
                    data-testid='select-character-1'
                    value={option1.value}
                    onChange={(event) => setOption1(characters[event.target.value])}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>&nbsp; {/* Fix the ambiguous spacing */}
                with&nbsp;
                <select
                    data-testid='select-character-2'
                    value={option2.value}
                    onChange={(event) => setOption2(characters[event.target.value])}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </p>

            <RadarChartCompare data={data} />

        </>
    );
};

export default CompareCharactersPage;