import React from "react"

export default function Box() {
    return (
        <div
        style={{
            backgroundColor: "black",
            borderRadius: 4,
            color: '#eee',
            minHeight: 350,
            padding: 12,
            width:500,
            position: "absolute",
            top: 150,
            left: 0,
        }}
        >
            <div
                style={{
                backgroundColor: "red",
                borderRadius: 4,
                color: '#eee',
                minHeight: 80,
                padding: 12,
                width: 175,
                position: "absolute",
                top: 0,
                left: 0,
            
            }}
            >
            counter
            </div>
            <div
                style={{
                backgroundColor: "blue",
                borderRadius: 4,
                color: '#eee',
                minHeight: 80,
                padding: 12,
                width: 80,
                position: "absolute",
                top: 0,
                left: 175,
            
            }}
            >
            sink
            </div>
            <div
                style={{
                backgroundColor: "pink",
                borderRadius: 4,
                color: '#eee',
                minHeight: 80,
                padding: 12,
                width: 125,
                position: "absolute",
                top: 0,
                left: 255,
            
            }}
            >
            stove
            </div>
            <div
                style={{
                backgroundColor: "silver",
                borderRadius: 4,
                color: '#eee',
                minHeight: 150,
                padding: 12,
                width: 80,
                position: "absolute",
                top: 80,
                left: 0,
            
            }}
            >
            fridge
            </div>
            <div
                style={{
                backgroundColor: "yellow",
                borderRadius: 4,
                color: '#eee',
                minHeight: 100,
                padding: 12,
                width: 275,
                position: "absolute",
                top: 200,
                left: 150,
            
            }}
            >
            island
            </div>
            floor
        </div>
    )
    }

