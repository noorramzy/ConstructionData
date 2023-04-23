import React, { useState } from "react";
import Draggable from "react-draggable";

const Item = ({ snapToGrid, color, height, width, itemName, onClick }) => {
  return (
    <Draggable grid={snapToGrid ? [15, 15] : null} bounds="parent">
      <div
        style={{
          backgroundColor: color,
          borderRadius: 4,
          color: "black",
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
  const [selectedMaterial, setSelectedMaterial] = useState("yellow");
  const [itemList, setItemList] = useState([
    {
      color: "red",
      height: 150,
      width: 80,
      name: "Living"
    },

    {
      color: "red",
      height: 130,
      width: 90,
      name: "Dining"
    },
    {
      color: "blue",
      height: 70,
      width: 60,
      name: "Bath"
    },
    {
      color: "blue",
      height: 60,
      width: 60,
      name: "Bath 2"
    },
    {
      color: "red",
      height: 100,
      width: 130,
      name: "Bed"
    },
    {
      color: "red",
      height: 140,
      width: 120,
      name: "Master Bed"
    },
    {
      color: "red",
      height: 80,
      width: 150,
      name: "Kitchen"
    }

  ])

  const [snapToGrid, setSnapToGrid] = useState(true);  

  
  const handleSnapToGridToggle = () => {
    setSnapToGrid(!snapToGrid);
  };

  function handleMaterialChange (optionChangeEvent){
    setSelectedMaterial(optionChangeEvent.target.value)
  }

  function setMaterial (itemIndex){
    itemList[itemIndex].color = selectedMaterial;
    setItemList([...itemList]);
  }
  
  return (
    
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="dropdown">  
        <label htmlFor="material">Material</label>
        <select id="roomMaterial" onChange={handleMaterialChange}>
          <option value="yellow">Wood</option>
          <option value="green">Tile</option>
          <option value="blue">Granite</option>
          <option value="pink">Carpet</option>
        </select>
      </div>

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

        {itemList.map(
          (item,index) => ( <Item
            color={item.color}
            height= {item.height}
            width = {item.width}
            itemName = {item.name}
            snapToGrid={snapToGrid}
            onClick={() => setMaterial(index)}
          />)
        )}

        

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
      
    </div>
  );
};

  
export default Box;