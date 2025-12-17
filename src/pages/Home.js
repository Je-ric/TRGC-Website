import { useState } from "react";
import Countdown from "../Components/Helper/Countdown";
import Mark from "../Components/ui/Mark";
import Brushstroke from "../Components/ui/Brushstroke";
// import PrismaticAurora from "../Components/ui/PrismaticAurora";
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(null);

  const merch = [
    process.env.PUBLIC_URL + "/img/Merch-1.jpg",
    process.env.PUBLIC_URL + "/img/Merch-2.jpg",
    process.env.PUBLIC_URL + "/img/Merch-3.jpg",
    process.env.PUBLIC_URL + "/img/Merch-4.jpg",
    process.env.PUBLIC_URL + "/img/Merch-5.jpg",
  ];

  return (
    <div>
      <section className="min-h-screen flex items-center justify-center p-4 relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/backgrounds/BG1.png)` }}
      >


      </section>


      <section
        className="min-h-screen flex items-center justify-center p-4 relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/backgrounds/BG2.png)` }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-50"></div>

        <div className="text-black text-center relative z-10 max-w-5xl mx-auto px-4 space-y-8">

          <div className="w-24 h-1 bg-black mx-auto opacity-70"></div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight text-shadow-heading">
            SUNDAY SERVICE
          </h1>

          <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-light uppercase tracking-wider max-w-3xl mx-auto p-4 border-t-2 border-b-2 border-black leading-relaxed text-shadow-paragraph">
            <Brushstroke colors={["#0000ff", "#87ceeb"]}>YOU’RE INVITED</Brushstroke> — WORSHIP WITH US THIS SUNDAY
          </p>

          <div className="bg-black text-white p-4 mx-auto max-w-4xl 
                shadow-2xl hover:shadow-md transition-all duration-300 
                hover:bg-white hover:text-black">
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl tracking-tight 
                flex items-center justify-center gap-6 md:gap-12 leading-relaxed
                text-shadow-time hover:text-shadow-time-hover transition-all duration-300">

              <span className="flex items-center gap-2 font-lato">
                <span className="italic font-normal">Sundays at</span>
                <span className="font-extrabold">9:30 <span className="text-sm md:text-base">AM</span></span>
              </span>

              <span className="opacity-60 font-bold text-xl hidden md:inline">/</span>

              <span className="flex flex-col md:flex-row items-center gap-1 md:gap-2 font-normal font-lato italic">
                Next service...
                <span className="font-extrabold">
                  <Countdown inline />
                </span>
              </span>
            </p>
          </div>

          <div className="w-24 h-1 bg-black mx-auto opacity-70"></div>
        </div>
      </section>


      <section
        className="relative text-white py-16 md:py-24 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://cdn.monkplatform.com/image/czoyMzQ6Imh0dHBzJTNBJTJGJTJGMGUxYjdlYzQyZWJlOTg2NzMxZGMtMjI1ZjIwNDhhZDRkYjE3NDY0MDc3MjQxY2RmY2M4NTQuc3NsLmNmMi5yYWNrY2RuLmNvbSUyRnVwbG9hZGVkJTJGMiUyRjBlMTUxNzE5NzhfMTY3MDQ1MTcxNF8yMjEwMjMtd2Vla2VuZHNlcnZpY2UtNjIuanBnJTNGcSUzRDkwJTI2dyUzRDMyMDAlMjZoJTNEMCUyNmZpdCUzRG1heCUyNnMlM0Q3NWYxYWRlMmY3YTRhYmZjNzE5YmM5YmVjYzI1OWI1NSI7/221023-weekendservice-62.jpg?fm=webp')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>

        <div className="relative max-w-7xl mx-auto px-6">
          {/* <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center drop-shadow-2xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Local Church <Mark color="white" backgroundColor="#EF4444">Programs</Mark> & <Mark color="white">Events</Mark>
          </h2> */}


          <div className="max-w-7xl mx-auto">

            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-oswald font-bold uppercase tracking-tight text-white mb-4">
                Church Programs & Events
              </h2>
              <p className="text-sm md:text-base font-bold uppercase tracking-wide text-gray-200">

              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              <div className="relative h-[500px] w-full group overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2670&auto=format&fit=crop"
                  alt="Man clapping"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-2xl font-oswald font-bold uppercase mb-2 text-white">
                    Online Intercessory Prayer Meeting
                  </h3>
                  <p className="text-sm font-bold uppercase leading-tight text-gray-200">
                    Our contributions create real change in the lives of those in need.
                  </p>
                </div>
              </div>

              <div className="relative h-[500px] w-full group overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2664&auto=format&fit=crop"
                  alt="People smiling in community"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-2xl font-oswald font-bold uppercase mb-2 text-white">
                    BRIDGE - Youth Fellowship
                  </h3>
                  <p className="text-sm font-bold uppercase leading-tight text-gray-200">
                    Which supports the majority of our ministry activities.
                  </p>
                </div>
              </div>

              <div className="relative h-[500px] w-full group overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=2670&auto=format&fit=crop"
                  alt="Hands raised"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-2xl font-oswald font-bold uppercase mb-2 text-white">
                    Home Visitation Saturday / Sunday Afternoon
                  </h3>
                  <p className="text-sm font-bold uppercase leading-tight text-gray-200">
                    Which supports our building expansion projects.
                  </p>
                </div>
              </div>

            </div>

            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 mb-20">
              {[
                {
                  title: "Face-to-Face Intercessory Prayer Meeting (Last Saturday Quarterly)",
                  img: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=2670&auto=format&fit=crop",
                  desc: "Join us for a powerful prayer session where we come together to intercede for our community and beyond."
                },
                {
                  title: "Holy Communion every first Sunday of the month",
                  img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2664&auto=format&fit=crop",
                  desc: "Participate in the sacred tradition of Holy Communion, a time to reflect and renew our faith."
                }
              ].map(({ title, img, desc }, index) => (
                <div
                  key={index}
                  className="relative h-[500px] w-full group overflow-hidden">
                  <img
                    src={img}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <h3 className="text-2xl font-oswald font-bold uppercase mb-2 text-white">
                      {title}
                    </h3>
                    <p className="text-sm font-bold uppercase leading-tight text-gray-200">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>


      <section
        className="relative py-20 z-10 bg-cover bg-no-repeat bg-top -mt-24"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/backgrounds/TornPaper.jpg)`,
        }}
      >
        <div className="relative z-10 pt-32 px-4 mx-auto max-w-7xl">

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-semibold mb-12 text-center text-black drop-shadow-lg">
            Merch <Mark>Collection</Mark>
          </h2>

          {/* Editorial Grid */}
          <div className="
  grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6
">
            {merch.map((src, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`
        group relative
        w-full aspect-square  /* ensures square */
        overflow-hidden rounded-3xl
        focus:outline-none
        bg-neutral-100
        ${i === 0 ? 'col-span-2 row-span-2' : ''}
      `}
              >
                {/* Image Wrapper */}
                <div className="w-full h-full flex items-center justify-center p-2">
                  <img
                    src={src}
                    alt={`Merch Item ${i + 1}`}
                    className="
            max-w-full max-h-full
            object-contain rounded-3xl
            transition-transform duration-[900ms] ease-out
            group-hover:scale-105
          "
                  />
                </div>

                {/* Bottom Label Strip */}
                <div className="
        absolute bottom-0 left-0 right-0
        bg-black/60 backdrop-blur-sm
        translate-y-full group-hover:translate-y-0
        transition-transform duration-300
      ">
                  <span className="text-white text-xs tracking-widest uppercase">
                    View Item →
                  </span>
                </div>
              </button>
            ))}
          </div>

        </div>
      </section>
      {activeIndex !== null && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center px-4">

          {/* Close */}
          <button
            onClick={() => setActiveIndex(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white transition"
          >
            <FaTimes size={28} />
          </button>

          {/* Prev */}
          <button
            onClick={() =>
              setActiveIndex(prev => (prev > 0 ? prev - 1 : merch.length - 1))
            }
            className="absolute left-4 md:left-8 text-white/70 hover:text-white transition"
          >
            <FaChevronLeft size={26} />
          </button>

          {/* Image */}
          <div className="max-w-5xl w-full flex justify-center">
            <img
              src={merch[activeIndex]}
              alt={`Merch ${activeIndex + 1}`}
              className="
          max-h-[70vh] w-auto
          rounded-2xl
          transition-transform duration-500
        "
            />
          </div>

          {/* Next */}
          <button
            onClick={() =>
              setActiveIndex(prev => (prev < merch.length - 1 ? prev + 1 : 0))
            }
            className="absolute right-4 md:right-8 text-white/70 hover:text-white transition"
          >
            <FaChevronRight size={26} />
          </button>

          {/* Counter */}
          <div className="absolute bottom-6 text-white/70 text-xs tracking-widest">
            {activeIndex + 1} / {merch.length}
          </div>
        </div>
      )}


      <h2 className="text-5xl font-semibold mb-8 text-center text-black drop-shadow-lg pt-24">
        Our <Mark>Location</Mark>
      </h2>

      <div className="w-full h-96 overflow-hidden">
        <iframe
          title="TRGC Worship Center Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3840.535368329474!2d120.89232037459338!3d15.72279284862027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390d7e3cd6f1a13%3A0x74366079330647e3!2sTRGC%20Worship%20Center!5e0!3m2!1sen!2sph!4v1764220341549!5m2!1sen!2sph"
          className="w-full h-full"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

    </div >
  );
}
