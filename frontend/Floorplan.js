import React, { useState } from "react";
import Draggable from "react-draggable";

export const Item = (props) => {
  const [grid, setGrid] = useState([10, 10]);

  return (
    <Draggable grid={grid}>
      <div
        style={{
          backgroundColor: props.color,
          borderRadius: 4,
          color: "#eee",
          minHeight: parseInt(props.height),
          padding: 12,
          width: parseInt(props.width),
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        {props.itemName}
      </div>
    </Draggable>
  );
};

export default function Box() {
  const [showGrid, setShowGrid] = useState(false);

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <div
        className="outerBox"
        style={{
          backgroundColor: "black",
          borderRadius: 4,
          color: "#eee",
          minHeight: 350,
          padding: 12,
          width: 500,
          position: "absolute",
          top: 50,
          left: 0,
        }}
      >
        <Item color="red" height="50" width="90" itemName="test" />
        <Item color="blue" height="80" width="80" itemName="sink" />
        <Item color="pink" height="80" width="125" itemName="Stove" />
        <Item color="silver" height="150" width="80" itemName="Fridge" />
        <Item color="yellow" height="100" width="275" itemName="Island" />

        floor
      </div>

      <div style={{ position: "absolute", top: 10, left: 10 }}>
        <button onClick={() => setShowGrid(!showGrid)}>
          Toggle snap to grid
        </button>
      </div>
    </div>
  );
}
