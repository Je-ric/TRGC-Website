
export default function CosmicNoise({ children, className = '' }) {
    return (
        <div className={`relative w-full min-h-screen bg-black ${className}`}>
            {/* Cosmic Noise */}
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08) 0%, transparent 40%), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.05) 0%, transparent 40%), linear-gradient(120deg, #0f0e17 0%, #1a1b26 100%)",
                }}
            />

            {/* Content */}
            <div className="relative z-10">{children}</div>
        </div>
    );
}