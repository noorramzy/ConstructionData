import { initializeBlock } from '@airtable/blocks/ui';
import React, { useState } from 'react';
import ConstructionList from './ConstructionList';
import Box from './Floorplan';
import "./index.css";
import "./ConstructionList.css";

const ConstructionTest = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('DC');

  const handleSearchTermChange = ({ target: { value } }) => {
    setSearchTerm(value);
  }

  const handleLocationChange = ({ target: { value } }) => {
    setLocation(value);
  }

  return (
    <div>
      <div className="dropdown">
        <label htmlFor="location">Location:</label>
        <select id="location" value={location} onChange={handleLocationChange}>
          <option value="DC">DC</option>
          <option value="Maryland">MD</option>
          <option value="Virginia">VA</option>
        </select>
      </div>
      <label htmlFor="search">Search Item:</label>
      <input id="search" value={searchTerm} onChange={handleSearchTermChange} />
      <ConstructionList searchTerm={searchTerm} location={location} />
      <Box />
    </div>
  );
}

initializeBlock(() => <ConstructionTest />);
