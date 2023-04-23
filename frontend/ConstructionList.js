import { useBase, useRecords } from '@airtable/blocks/ui';
import React, { useState } from 'react';
import './ConstructionList.css';

export default function ConstructionList(props) {
  const [nextItemId, setNextItemId] = useState(1); 
  const [selectedItems, setSelectedItems] = useState([]);
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

  const handleAddItem = (record) => {
    const newItem = {
      id: nextItemId, // <-- use current ID number
      record: record,
      materials: record.getCellValueAsString('Materials'),
      price: record.getCellValue('Price')
    };
    setSelectedItems([...selectedItems, newItem]);
    setNextItemId(nextItemId + 1); // <-- increment ID number
  };

  const handleRemoveItem = (itemId) => {
    setSelectedItems(selectedItems.filter((item) => item.id !== itemId));
  };
  
  const handleClearItems = () => {
    setSelectedItems([]);
  };

  
  const totalPrice = selectedItems.reduce((acc, item) => {
    return acc + parseFloat(item.price) * priceCoeff;
  }, 0);

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
              <button className="selectButton" onClick={() => handleAddItem(record)}>
                Add
              </button>
            </span>
          </li>
        ))}
      </ul>
      <div className="selected-items-container">
        <h3 className="selected-items-header">Selected Items:</h3>
        <button className="clearButton" onClick={handleClearItems}>
          Clear All
        </button>
        <ul className="selected-items-list">
          {selectedItems.map((item) => (
            <li key={item.id} className="selected-items-list-item">
              <span>{item.record.getCellValueAsString('Materials')}</span>
              <span>
                ${parseFloat(item.record.getCellValue('Price') * priceCoeff).toFixed(2).toLocaleString()}
                <button className="removeButton" onClick={() => handleRemoveItem(item.id)}>
                  Remove
                </button>
              </span>
            </li>
          ))}
        </ul>
        <div className="total-price-container">
          <span className="total-price-label">Total Price:</span>
          <span className="total-price-value">${totalPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
