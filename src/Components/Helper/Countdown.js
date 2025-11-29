import React, { useState, useEffect } from "react";

export default function Countdown() {
    const [timeLeft, setTimeLeft] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();

            // Philippine time
            const phtNow = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Manila" }));

            // Find next Sunday 9:30 AM
            const day = phtNow.getDay();
            const nextSunday = new Date(phtNow);
            nextSunday.setDate(phtNow.getDate() + ((7 - day) % 7));
            nextSunday.setHours(9, 30, 0, 0);

            const diff = nextSunday - phtNow;
            if (diff <= 0) {
                setTimeLeft("Worship is live now!");
            } else {
                const d = Math.floor(diff / (1000 * 60 * 60 * 24));
                const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
                const m = Math.floor((diff / (1000 * 60)) % 60);
                const s = Math.floor((diff / 1000) % 60);
                setTimeLeft(`${d}d ${h}h ${m}m ${s}s`);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="text-center mt-6">
            <h3 className="text-lg font-semibold">Next Sunday Worship</h3>
            <p className="mt-1">{timeLeft}</p>
        </div>
    );
}
