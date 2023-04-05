import { initializeBlock } from '@airtable/blocks/ui';
import React, { useState } from 'react';
import ConstructionList from './ConstructionList';
import Box from './Floorplan';

function ConstructionTest() {
    const [searchTerm, setSearchTerm] = useState('');
    const [showList, setShowList] = useState(true);

    function updateSearchTerm(event) {
        setSearchTerm(event.target.value);
    }

    return (
        <div>
            <input id="term" value={searchTerm} onChange={updateSearchTerm} />
            <ConstructionList searchTerm={searchTerm} />
            <Box />
        </div>
    );
}

initializeBlock(() => <ConstructionTest />);
