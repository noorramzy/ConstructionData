import { useBase, useRecords } from '@airtable/blocks/ui';
import React from 'react';
import './ConstructionList.css';

export default function ConstructionList(props) {
  const searchTerm = props.searchTerm;
  const base = useBase();
  const table = base.getTable(props.location);
  const records = useRecords(table, { fields: ['Material', 'Price'] });
  const filteredRecords = records.filter((record) =>
    record
      .getCellValueAsString('Material')
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
              {record.getCellValueAsString('Material')}:
            </span>
            <span className="construction-list-item-price">
              ${Number(record.getCellValueAsString('Price')).toLocaleString()}
            </span>

          </li>
        ))}
      </ul>
    </div>
  );
}
