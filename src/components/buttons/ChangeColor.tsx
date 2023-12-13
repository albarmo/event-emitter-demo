"use client";
import React from "react";
import { randomIntFromInterval } from "@/utils/randomInteger";
import { sonEmitter } from "@/helpers/SonEmitter";

const ChangeColor = () => {
    const handleChangeColor = () => {
        const colors = ["red", "pink", "blue", "orange"];
        const randomIndex = randomIntFromInterval(0, 3);
        sonEmitter.emit("color", { color: colors[randomIndex] });
    };

    return (
        <div
            onClick={handleChangeColor}
            className="p-2 bg-gray-300 rounded cursor-pointer bg-violet-200"
        >
            Change Son Background
        </div>
    );
};

export default ChangeColor;
