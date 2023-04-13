import { initializeBlock } from '@airtable/blocks/ui';
import React, { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import ConstructionList from './ConstructionList';
import Box from './Floorplan';
import Homepage from './Homepage';
import "./index.css";

const ConstructionTest = () => {
  return (
    <div>
      <Homepage />
    </div>
  );
}

initializeBlock(() => <ConstructionTest />);
