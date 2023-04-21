import { initializeBlock } from '@airtable/blocks/ui';
import React, { useState } from 'react';
import { Routes, Route, NavLink, Router } from 'react-router-dom';
import ConstructionList from './ConstructionList';
import Box from './Floorplan';
import {HashRouter} from 'react-router-dom'
import Homepage from './Homepage';
import "./index.css";

const ConstructionTest = () => {
  return (
      
      <HashRouter>
        
        {/* <Homepage /> */}

        <NavLink to="/"> Home</NavLink>
        <NavLink to="/floorplan">Floorplan</NavLink>

        <Routes>
          <Route path="" element={<Homepage></Homepage>}></Route>
          <Route path="/floorplan" element={<Box></Box>}></Route>
        </Routes>
      </HashRouter>
  );
}

initializeBlock(() => <ConstructionTest />);
