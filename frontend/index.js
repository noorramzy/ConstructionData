import { initializeBlock } from '@airtable/blocks/ui';
import React, { useState } from 'react';
import { Routes, Route, NavLink, Router } from 'react-router-dom';
import ConstructionList from './ConstructionList';
import Box from './Floorplan';
import { HashRouter } from 'react-router-dom'
import Homepage from './Homepage';
import './ConstructionTest.css';
import Navbar from './Navbar';
import Ideas from './ideas';
const ConstructionTest = () => {
  return (
    <HashRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/floorplan" element={<Box />} />
        <Route path="/ideas" element={<Ideas></Ideas>} />
      </Routes>
    </HashRouter>
  );
}

initializeBlock(() => <ConstructionTest />);
