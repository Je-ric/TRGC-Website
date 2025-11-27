export default function HeaderBanner({ title, desc, image }) {
    return (
        <div
            className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center text-center"
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Overlay - Undecided sa color*/}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a0000]/70 via-[#1a0000]/40 to-transparent"></div>


            {/* Content */}
            <div className="relative z-10 px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                    {title}
                </h1>

                {/* Render if meron, nullable */}
                {desc && (
                    <p className="mt-4 text-white max-w-2xl mx-auto text-lg">
                        {desc}
                    </p>
                )}
            </div>
        </div>
    );
}
