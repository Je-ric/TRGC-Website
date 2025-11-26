export default function ParallaxSection({ title, desc, image }) {
  return (
    <section
      className="relative h-[300px] md:h-[400px] bg-fixed bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-900/40 to-transparent"></div>
      {/* <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/40 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#800000]/70 via-[#800000]/40 to-transparent"></div> */}

      {/* Text Content */}
      <div className="relative z-10 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>

        {desc && (
          <p className="mt-3 text-white max-w-2xl mx-auto">
            {desc}
          </p>
        )}
      </div>
    </section>
  );
}
