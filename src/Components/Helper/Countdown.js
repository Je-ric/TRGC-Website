import React, { useState, useEffect } from "react";

export default function Countdown() {
    const [timeLeft, setTimeLeft] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();

            // Philippine time
            const phtNow = new Date(
                now.toLocaleString("en-US", { timeZone: "Asia/Manila" })
            );

            const day = phtNow.getDay();

            // Compute this week's Sunday 9:30 AM
            const thisSunday = new Date(phtNow);
            thisSunday.setDate(phtNow.getDate() + ((7 - day) % 7));
            thisSunday.setHours(9, 30, 0, 0);

            // Compute this Sunday's end time (11:40 AM)
            const thisSundayEnd = new Date(thisSunday);
            thisSundayEnd.setHours(11, 40, 0, 0);

            // If today is Sunday and between 9:30am–11:40am → Live now
            if (phtNow >= thisSunday && phtNow <= thisSundayEnd) {
                setTimeLeft("Worship is live now!");
                return;
            }

            // If past 11:40am today → countdown to next Sunday
            let nextSunday = new Date(thisSunday);
            if (phtNow > thisSundayEnd) {
                nextSunday.setDate(nextSunday.getDate() + 7);
            }

            const diff = nextSunday - phtNow;

            const d = Math.floor(diff / (1000 * 60 * 60 * 24));
            const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const m = Math.floor((diff / (1000 * 60)) % 60);
            const s = Math.floor((diff / 1000) % 60);

            setTimeLeft(`${d}d ${h}h ${m}m ${s}s`);
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
