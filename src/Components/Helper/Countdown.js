// Countdown.js
import React, { useState, useEffect } from "react";

export default function Countdown({ inline }) {
    const [timeLeft, setTimeLeft] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const phtNow = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Manila" }));
            const day = phtNow.getDay();

            const thisSunday = new Date(phtNow);
            thisSunday.setDate(phtNow.getDate() + ((7 - day) % 7));
            thisSunday.setHours(9, 30, 0, 0);

            const thisSundayEnd = new Date(thisSunday);
            thisSundayEnd.setHours(11, 40, 0, 0);

            if (phtNow >= thisSunday && phtNow <= thisSundayEnd) {
                setTimeLeft("LIVE NOW!");
                return;
            }

            let nextSunday = new Date(thisSunday);
            if (phtNow > thisSundayEnd) nextSunday.setDate(nextSunday.getDate() + 7);

            const diff = nextSunday - phtNow;
            const d = Math.floor(diff / (1000 * 60 * 60 * 24));
            const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const m = Math.floor((diff / (1000 * 60)) % 60);
            const s = Math.floor((diff / 1000) % 60);

            setTimeLeft(`${d}d ${h}h ${m}m ${s}s`);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return inline ? (
        <span>{timeLeft || "calculating..."}</span>
    ) : (
        <div className="text-center">{timeLeft}</div>
    );
}

