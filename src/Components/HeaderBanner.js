import { useEffect, useState } from 'react';

export default function HeaderBanner({ title, desc, image }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger animation on mount
        setIsVisible(true);
    }, []);

    return (
        <div
            className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center text-center overflow-hidden"
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
            {[...Array(10)].map((_, i) => (
                <div
                    key={i}
                    className="absolute w-2 h-2 bg-yellow-400 rounded-full opacity-70 animate-ping"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 2}s`,
                        animationDuration: `${2 + Math.random() * 2}s`,
                    }}
                ></div>
            ))}
        </div>
        </div>
    );
}
