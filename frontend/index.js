import { initializeBlock } from '@airtable/blocks/ui';
import React, { useState } from 'react';
import ConstructionList from './ConstructionList';
import Box from './Floorplan';

function ConstructionTest() {
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('DC');

    function updateSearchTerm(event) {
        setSearchTerm(event.target.value);
    }

    function handleLocChange(event) {
        setLocation(event.target.value);
    }

    return (
        <div>
            <div>
                <select value={location} onChange={handleLocChange}>
                    <option value="DC">DC</option>
                    <option value="Maryland">MD</option>
                    <option value="Virginia">VA</option>
                </select>
            </div>
            <input id="term" value={searchTerm} onChange={updateSearchTerm} />
            <ConstructionList searchTerm={searchTerm} location={location}/>
            <Box />
        </div>
    );
}

initializeBlock(() => <ConstructionTest />);
