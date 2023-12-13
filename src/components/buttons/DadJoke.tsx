"use client";
import { fatherEmitter } from "@/helpers/FatherEmitter";
import React from "react";

const Reverse = () => {
    const handleCount = () => {
        fetch("https://candaan-api.vercel.app/api/text/random")
            .then((response) => {
                return response.json();
            })
            .then(({ data }) => {
                const joke = data;
                fatherEmitter.emit("count", { value: joke });
            });
    };

    return (
        <div
            onClick={handleCount}
            className="p-2 bg-gray-300 rounded cursor-pointer"
        >
            Generate Joke
        </div>
    );
};

export default Reverse;
