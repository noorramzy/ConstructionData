import { useBase, useRecords } from '@airtable/blocks/ui';
import React, { useState } from 'react';
import './ConstructionList.css';

export default function ConstructionList(props) {
  const searchTerm = props.searchTerm;
  const base = useBase();
  const roomType = props.roomType;
  const location = props.location;
  const table = base.getTable(props.roomType);
  var priceCoeff = 1;
  const records = useRecords(table, { fields: ['Materials', 'Price'] });
  if (location=='DC'){
    priceCoeff = 1.1
  } else if (location=="Virginia"){
    priceCoeff = 0.9
  }
  const filteredRecords = records.filter((record) =>
    record
      .getCellValueAsString('Materials')
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );
  return (
    <div className="construction-list-container">
      <h2 className="construction-list-header">Construction Materials</h2>
      <ul className="construction-list">
        {filteredRecords.map((record) => (
          <li key={record.id} className="construction-list-item">
            <span className="construction-list-item-material">
              {record.getCellValueAsString('Materials')}:
            </span> 
            <span className="construction-list-item-price">
              ${parseFloat((record.getCellValueAsString('Price'))*priceCoeff).toFixed(2).toLocaleString()}
              <button className="selectButton">test</button>
            </span>

          </li>
        ))}
      </ul>
    </div>
  );
}
