import {initializeBlock} from '@airtable/blocks/ui';
import React, {useState} from 'react';

function ConstructionTest() {
    const [searchTerm, setSearchTerm] = useState()

    function updateSearchTerm(event) {
        setSearchTerm(event.target.value)
    }

    return <div>
        <input onChange={updateSearchTerm} />
        <WidgetsList searchTerm={searchTerm} />

    </div>;
}

initializeBlock(() => <ConstructionTest />);
