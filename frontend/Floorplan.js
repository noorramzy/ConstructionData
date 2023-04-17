import React, { useState } from "react";
import Draggable from "react-draggable";

const Item = ({ snapToGrid, color, height, width, itemName, onClick }) => {
  return (
    <Draggable grid={snapToGrid ? [15, 15] : null} bounds="parent">
      <div
        style={{
          backgroundColor: color,
          borderRadius: 4,
          color: "#eee",
          height: parseInt(height),
          width: parseInt(width),
          padding: 12,
          position: "absolute",
          top: 0,
          left: 0,
        }}
        onClick={onClick}
      >
        {itemName}
      </div>
    </Draggable>
  );
};

const ItemInfo = ({ height, width, onSizeChange, onSubmit }) => {
  const [newHeight, setNewHeight] = useState(height);
  const [newWidth, setNewWidth] = useState(width);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSizeChange(newHeight, newWidth);
    onSubmit(newHeight, newWidth);
    };

  return (
    <div style={{ backgroundColor: "#fff", padding: 8 }}>
      <form onSubmit={handleSubmit}>
        <label>
          Height:
          <input type="text" value={newHeight} onChange={(event) => setNewHeight(event.target.value)} />
        </label>
        <br />
        <label>
          Width:
          <input type="text" value={newWidth} onChange={(event) => setNewWidth(event.target.value)} />
        </label>
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};


const Box = () => {
  const [snapToGrid, setSnapToGrid] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSnapToGridToggle = () => {
    setSnapToGrid(!snapToGrid);
  };

  const handleItemClick = (height, width) => {
    setSelectedItem({ height, width });
  };

  const handleSizeChange = (newHeight, newWidth) => {
    setSelectedItem((prevSelectedItem) => {
      return {
        ...prevSelectedItem,
        height: newHeight,
        width: newWidth,
      };
    });
  };
  
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <button onClick={handleSnapToGridToggle}>
        {snapToGrid ? "Disable" : "Enable"} Snap to Grid
      </button>
      <div
        className="outerBox"
        style={{
          backgroundColor: "#004970",
          borderRadius: 4,
          color: "#eee",
          minHeight: 350,
          padding: 12,
          width: "100%",
          position: "relative",
          margin: "auto",
        }}
      >
        <Item
          color="red"
          height="50"
          width="90"
          itemName="Test"
          snapToGrid={snapToGrid}
          onClick={() => handleItemClick(50, 90)}
        />
        <Item
          color="blue"
          height="80"
          width="80"
          itemName="Sink"
          snapToGrid={snapToGrid}
          onClick={() => handleItemClick(80, 80)}
        />
        <Item
          color="pink"
          height="80"
          width="125"
          itemName="Stove"
          snapToGrid={snapToGrid}
          onClick={() => handleItemClick(80, 125)}
        />
        <Item
          color="silver"
          height="150"
          width="80"
          itemName="Fridge"
          snapToGrid={snapToGrid}
          onClick={() => handleItemClick(150, 80)}
        />
        <Item
          color="yellow"
          height="100"
          width="275"
          itemName="Island"
          snapToGrid={snapToGrid}
          onClick={() => handleItemClick(100, 275)}
        />

        <div
          style={{
            backgroundColor: "#eee",
            height: 20,
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            textAlign: "center",
          }}
        >
          Floor
        </div>
      </div>
      {selectedItem && (
        <ItemInfo
        height={selectedItem.height}
        width={selectedItem.width}
        onSizeChange={handleSizeChange}
        onSubmit={() => setSelectedItem(null)}
      />
      
      )}
    </div>
  );
};

  
export default Box;