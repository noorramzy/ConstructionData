import { initializeBlock } from '@airtable/blocks/ui';
import React, { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import ConstructionList from './ConstructionList';
import Box from './Floorplan';
import "./index.css";

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
      {/* <div className="bar">
        <div>
          <NavLink>Test 1</NavLink>
          <NavLink>Test 2</NavLink>
          <NavLink>Test 3</NavLink>
        </div>
        <Routes>
          <Route path="/" element={}></Route>
        </Routes>
      </div> */}

      <div className="dropdown">
        <label htmlFor="location">Location:</label>
        <select id="location" value={location} onChange={handleLocationChange}>
          <option value="DC">DC</option>
          <option value="Maryland">MD</option>
          <option value="Virginia">VA</option>
        </select>
      </div>
      <div id="searchBar">
        <label htmlFor="search">Search Item:</label>
        <input id="search" value={searchTerm} onChange={handleSearchTermChange} />
      </div>
      <ConstructionList searchTerm={searchTerm} location={location} />
      <Box />
    </div>
  );
}

initializeBlock(() => <ConstructionTest />);
