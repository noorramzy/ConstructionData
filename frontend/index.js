import {initializeBlock} from '@airtable/blocks/ui';
import React, {useState} from 'react';
import ConstructionList from './ConstructionList'
import Box from './Floorplan.js'

function ConstructionTest() {
    const [searchTerm, setSearchTerm] = useState()

    function updateSearchTerm(event) {
        setSearchTerm(event.target.value)
    }

    return <div>
        
        <input onChange={updateSearchTerm} />
        <ConstructionList searchTerm={searchTerm} />
        <Box></Box>

    </div>;
}

initializeBlock(() => <ConstructionTest />);
