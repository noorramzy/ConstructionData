import React from "react";

export default function Blocks(height, width, top, left, color) {
    return (
        <div
            style={{
            backgroundColor: color,
            borderRadius: 4,
            minHeight: height,
            padding: 12,
            width: width,
            position: "absolute",
            top: top,
            left: left,
            }}
        >
        </div>
    )
}