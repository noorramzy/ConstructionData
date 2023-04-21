// ConstructionTest.js

import { initializeBlock } from '@airtable/blocks/ui';
import React, { useState } from 'react';
import { Routes, Route, NavLink, Router } from 'react-router-dom';
import ConstructionList from './ConstructionList';
import Box from './Floorplan';
import { HashRouter } from 'react-router-dom'
import Homepage from './Homepage';
import './ConstructionTest.css';

const ConstructionTest = () => {
  return (
    <HashRouter>
      <nav className="navbar">
        <NavLink to="/" className="navlink" activeClassName="active">Home</NavLink>
        <NavLink to="/floorplan" className="navlink" activeClassName="active">Floorplan</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/floorplan" element={<Box />} />
      </Routes>
    </HashRouter>
  );
}

initializeBlock(() => <ConstructionTest />);
