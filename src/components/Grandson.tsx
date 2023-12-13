import { grandSonEmitter } from "@/helpers/GrandsonEmitter";
import React, { useEffect, useState } from "react";

const Grandson = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        grandSonEmitter.on("count", () => setCount((prev) => prev + 1));
    }, []);

    return (
        <div className="bg-gray-200 p-5 rounded my-2">
            <p className="text-md">
                GRANDSON{" "}
                <span className="font-bold text-center text-violet-500">
                    {count}
                </span>
            </p>
        </div>
    );
};

export default Grandson;
