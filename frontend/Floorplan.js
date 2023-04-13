import React, { useState } from "react";
import Draggable from "react-draggable";

export const Item = (props) => {
  return (
    <Draggable
      grid={props.snapToGrid ? [15, 15] : null}
      bounds="parent" // add this line
    >
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
  const [snapToGrid, setSnapToGrid] = useState(true);

  const handleSnapToGridToggle = () => {
    setSnapToGrid(!snapToGrid);
  };

  return (
    <div>
      <button onClick={handleSnapToGridToggle}>
        {snapToGrid ? "Disable" : "Enable"} Snap to Grid
      </button>
      <div
        className="outerBox"
        style={{
          backgroundColor: "black",
          borderRadius: 4,
          color: "#eee",
          minHeight: 350,
        //   padding: 12,
          width: 500,
          position: "absolute",
          left: 0,
        }}
      >
        <Item
          color="red"
          height="50"
          width="90"
          itemName="test"
          snapToGrid={snapToGrid}
        />
        <Item
          color="blue"
          height="80"
          width="80"
          itemName="sink"
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

        floor
      </div>
    </div>
  );
}
