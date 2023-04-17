import React, { useState } from "react";
import Draggable from "react-draggable";

const Item = ({ snapToGrid, color, height, width, itemName }) => {
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
      >
        {itemName}
      </div>
    </Draggable>
  );
};

const Box = () => {
  const [snapToGrid, setSnapToGrid] = useState(true);

  const handleSnapToGridToggle = () => {
    setSnapToGrid(!snapToGrid);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <button onClick={handleSnapToGridToggle} >
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
        />
        <Item
          color="blue"
          height="80"
          width="80"
          itemName="Sink"
          snapToGrid={snapToGrid}
        />
        <Item
          color="pink"
          height="80"
          width="125"
          itemName="Stove"
          snapToGrid={snapToGrid}
        />
        <Item
          color="silver"
          height="150"
          width="80"
          itemName="Fridge"
          snapToGrid={snapToGrid}
        />
        <Item
          color="yellow"
          height="100"
          width="275"
          itemName="Island"
          snapToGrid={snapToGrid}
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
    )
    }

export default Box;
