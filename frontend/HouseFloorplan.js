import React from "react";
import Blocks from "./Blocks";

export default function HouseFloorPlan() {
    return(
        Blocks(600, 1100, 1400, 0, "black"),
        Blocks(250, 15, 1400, 0, "blue"),
        Blocks(250, 15, 1650, 0, "blue")
    )
}