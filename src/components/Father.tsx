"use client";
import { fatherEmitter } from "@/helpers/FatherEmitter";
import React, { useEffect, useState } from "react";
import Son from "./Son";

const Father = () => {
    const [joke, setJoke] = useState(
        "Kalo mau manasin motor enaknya direbus apa digoreng?!!"
    );

    useEffect(() => {
        fatherEmitter.on("count", (payload) => setJoke(payload.value));
    }, []);

    return (
        <div className="bg-gray-200 p-5 w-11/12 md:w-1/2 h-full shadow-lg">
            <p className="my-5">
                My father once said,
                <br />
                <span className="text-left font-semibold text-violet-500 italic">
                    {joke}
                </span>
            </p>

            <Son />
        </div>
    );
};

export default Father;
