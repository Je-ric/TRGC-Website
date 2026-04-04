import { useEffect, useState } from 'react';

export default function HeaderBanner({ title, desc, image }) {
    const [isVisible, setIsVisible] = useState(false);

    const particles = [
        { left: '10%', top: '20%', delay: '0s', duration: '2.5s' },
        { left: '25%', top: '70%', delay: '0.3s', duration: '3s' },
        { left: '40%', top: '15%', delay: '0.7s', duration: '2.2s' },
        { left: '55%', top: '80%', delay: '1s', duration: '3.5s' },
        { left: '70%', top: '35%', delay: '0.5s', duration: '2.8s' },
        { left: '82%', top: '60%', delay: '1.2s', duration: '2s' },
        { left: '15%', top: '50%', delay: '0.9s', duration: '3.2s' },
        { left: '90%', top: '25%', delay: '0.2s', duration: '2.6s' },
        { left: '48%', top: '45%', delay: '1.5s', duration: '2.4s' },
        { left: '65%', top: '88%', delay: '0.6s', duration: '3.1s' },
    ];

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div
            className="relative w-full h-96 md:h-[400px] flex items-center justify-center text-center overflow-hidden"
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Static Overlay from Bottom Fading with Low Opacity */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

            {/* Content with Modern Animations (Removed Text Animations) */}
            <div className={`relative z-10 px-4 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h1 className="text-6xl md:text-8xl font-extrabold uppercase text-white drop-shadow-2xl bg-gradient-to-r from-white via-yellow-200 to-orange-300 bg-clip-text text-transparent">
                    {title}
                </h1>

                {/* Render if meron, nullable */}
                {desc && (
                    <p className={`mt-4 text-white max-w-2xl mx-auto text-lg md:text-xl transition-all duration-1000 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        {desc}
                    </p>
                )}
            </div>

            <div className="absolute inset-0 pointer-events-none">
            {particles.map((p, i) => (
                <div
                    key={i}
                    className="absolute w-2 h-2 bg-yellow-400 rounded-full opacity-70 animate-ping"
                    style={{
                        left: p.left,
                        top: p.top,
                        animationDelay: p.delay,
                        animationDuration: p.duration,
                    }}
                ></div>
            ))}
        </div>
        </div>
    );
}
