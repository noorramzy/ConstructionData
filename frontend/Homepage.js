import { initializeBlock } from '@airtable/blocks/ui';
import React, { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import ConstructionList from './ConstructionList';
import Box from './Floorplan';
import "./index.css";

export default function Homepage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('DC');
  const [roomType, setRoomType] = useState('Bedroom');

  const handleSearchTermChange = ({ target: { value } }) => {
    setSearchTerm(value);
  }

  const handleLocationChange = ({ target: { value } }) => {
    setLocation(value);
  }

  const handleRoomTypeChange = ({ target: {value}}) => {
    setRoomType(value)
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
      <div className="dropdown">
        <label htmlFor="roomType">Room Type:</label>
        <select id="roomType" value={roomType} onChange={handleRoomTypeChange}>
          <option value="Bathroom">Bathroom</option>
          <option value="Living">Living Room</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Bedroom">Bedroom</option>
          <option value="Dining">Dining Room</option>
        </select>
      </div>
      <div id="searchBar">
        <label htmlFor="search">Search Item:</label>
        <input id="search" value={searchTerm} onChange={handleSearchTermChange} />
      </div>
      <ConstructionList searchTerm={searchTerm} location={location} roomType = {roomType} />
      <Box></Box>
    </div>
  );
}
