import React, { useEffect, useState } from "react";
import Grandson from "./Grandson";
import { sonEmitter } from "@/helpers/SonEmitter";

const Son = () => {
    const [background, setBackground] = useState("slateblue");
    useEffect(() => {
        sonEmitter.on("color", (payload) => {
            setBackground(payload.color);
        });
    }, [background]);

    return (
        <div
            className={`h-full p-5 transition-all duration-200 rounded`}
            style={{
                backgroundColor: background,
            }}
        >
            <p className="text-md">SON {background}</p>
            <Grandson />
        </div>
    );
};

export default Son;
