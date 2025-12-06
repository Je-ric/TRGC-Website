import { useState } from "react";
import Countdown from "../Components/Helper/Countdown";
// import Mark from "../Components/ui/Mark";
// import PrismaticAurora from "../Components/ui/PrismaticAurora";
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(null);

  const merch = [
    "/img/Merch-2.jpg",
    "/img/Merch-3.jpg",
    "/img/Merch-4.jpg",
    "/img/Merch-5.jpg",
  ];

  return (
    <div>
      <section className="min-h-screen flex items-center justify-center p-4 relative bg-cover bg-center bg-no-repeat bg-black" style={{ backgroundImage: "url('')" }}>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="text-white text-center relative z-10 max-w-5xl mx-auto px-4 space-y-8">
          <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight drop-shadow-2xl">
            SUNDAY SERVICE
          </h1>

          <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-light uppercase tracking-wider drop-shadow-lg max-w-3xl mx-auto leading-relaxed">
            YOU’RE INVITED — WORSHIP WITH US THIS SUNDAY AND HEAR THE LIFE-CHANGING GOSPEL
          </p>

          <div className="bg-white text-black p-4 mx-auto shadow-2xl max-w-4xl">
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl tracking-tight flex items-center justify-center gap-6 md:gap-12 leading-relaxed">

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

          <div className="w-24 h-1 bg-white mx-auto opacity-70"></div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-black">

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
        className="relative pt-16 z-10 bg-cover bg-no-repeat bg-top -mt-24" // for overlap
        style={{
          backgroundImage: "url('/img/TornPaper.jpg')",
        }}
      >
        <div className="relative z-10">

            <h2 className="text-center text-5xl md:text-6xl font-bold mb-14 drop-shadow-2xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Merch <span className="text-red-500">Collection</span>
          </h2>

          {/* Modern Grid for Square Images */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {merch.map((src, i) => (
              <div key={i} className="group relative aspect-square p-4 overflow-hidden border-4 border-white shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-red-500/30 cursor-pointer" onClick={() => setActiveIndex(i)}>
                <img
                  src={src}
                  alt={`Merch Item ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">View</span>
                </div>
              </div>
            ))}
          </div>

          
        </div>
      </section>




      <section
        className="relative py-20 px-6 text-white bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: "url('/img/Merch-1.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 backdrop-blur-sm"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-center text-5xl md:text-6xl font-bold mb-14 drop-shadow-2xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Merch <span className="text-red-500">Collection</span>
          </h2>

          {/* Modern Grid for Square Images */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {merch.map((src, i) => (
              <div key={i} className="group relative aspect-square p-4 overflow-hidden border-4 border-white shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-red-500/30 cursor-pointer" onClick={() => setActiveIndex(i)}>
                <img
                  src={src}
                  alt={`Merch Item ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">View</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Lightbox with Controls */}
      {activeIndex !== null && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-4">
          {/* Close Button */}
          <button
            onClick={() => setActiveIndex(null)}
            className="absolute top-4 right-4 text-white hover:text-red-500 transition duration-300 z-60"
          >
            <FaTimes size={30} />
          </button>

          {/* Prev Button */}
          <button
            onClick={() => setActiveIndex((prev) => (prev > 0 ? prev - 1 : merch.length - 1))}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-red-500 transition duration-300 z-60 p-2 bg-black/50 rounded-full hover:bg-black/70"
          >
            <FaChevronLeft size={24} />
          </button>

          {/* Image */}
          <div className="relative max-w-4xl w-full flex items-center justify-center">
            <img
              src={merch[activeIndex]}
              alt={`Merch Item ${activeIndex + 1}`}
              className="max-w-full h-96 rounded-2xl shadow-2xl transition-transform duration-500"
            />
          </div>

          {/* Next Button */}
          <button
            onClick={() => setActiveIndex((prev) => (prev < merch.length - 1 ? prev + 1 : 0))}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-red-500 transition duration-300 z-60 p-2 bg-black/50 rounded-full hover:bg-black/70"
          >
            <FaChevronRight size={24} />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black/50 px-3 py-1 rounded-full">
            {activeIndex + 1} / {merch.length}
          </div>
        </div>
      )}



    </div >
  );
}
