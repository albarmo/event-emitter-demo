"use client";
import { grandSonEmitter } from "@/helpers/GrandsonEmitter";
import React from "react";

const Count = () => {
    const handleCount = () => {
        grandSonEmitter.emit("count");
    };

    return (
        <div
            onClick={handleCount}
            className="p-2 bg-gray-300 rounded cursor-pointer bg-rose-200"
        >
            Add Grandson
        </div>
    );
};

export default Count;
