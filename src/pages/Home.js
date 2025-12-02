import { useState } from "react";
import Countdown from "../Components/Helper/Countdown";
import Mark from "../Components/ui/Mark";
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

      <section
        className="relative text-white py-16 md:py-24 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://cdn.monkplatform.com/image/czoyMzQ6Imh0dHBzJTNBJTJGJTJGMGUxYjdlYzQyZWJlOTg2NzMxZGMtMjI1ZjIwNDhhZDRkYjE3NDY0MDc3MjQxY2RmY2M4NTQuc3NsLmNmMi5yYWNrY2RuLmNvbSUyRnVwbG9hZGVkJTJGMiUyRjBlMTUxNzE5NzhfMTY3MDQ1MTcxNF8yMjEwMjMtd2Vla2VuZHNlcnZpY2UtNjIuanBnJTNGcSUzRDkwJTI2dyUzRDMyMDAlMjZoJTNEMCUyNmZpdCUzRG1heCUyNnMlM0Q3NWYxYWRlMmY3YTRhYmZjNzE5YmM5YmVjYzI1OWI1NSI7/221023-weekendservice-62.jpg?fm=webp')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>

        <div className="relative max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center drop-shadow-2xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Local Church <Mark color="white" backgroundColor="#EF4444">Programs</Mark> & <Mark color="white">Events</Mark>
          </h2>

          <div className="mx-auto max-w-7xl text-center mb-20 bg-white/10 backdrop-blur-2xl p-10 shadow-2xl rounded-2xl border border-white/20">
            <p className="text-xl md:text-2xl text-white font-medium">
              Join us every Sunday at 9:30 AM Philippine Time
            </p>
            <div className="mt-8 text-4xl md:text-5xl text-white font-bold">
              <Countdown />
            </div>
          </div>

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-12">
            {[
              { title: "Online Intercessory Prayer Meeting", img: "/sample/Sample1.jpg" },
              { title: "Home Visitation Saturday / Sunday Afternoon", img: "/sample/Sample2.jpg" },
              { title: "BRIDGE - Youth Fellowship", img: "/sample/Sample3.jpg" },
            ].map(({ title, img }, index) => (
              <div
                key={index}
                className="bg-white/15 backdrop-blur-2xl overflow-hidden shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-500 flex flex-col rounded-2xl border border-white/20 group"
              >
                <div className="w-full h-96 relative overflow-hidden rounded-t-2xl">
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay on top of image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  {/* Text overlay with background for readability */}
                  <div className="absolute z-10 top-2 left-2 bg-black/60 px-3 py-1 rounded-lg text-white text-sm font-medium backdrop-blur-sm">
                    {title}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second Set of Programs - Responsive grid */}
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 mb-20">
            {[
              { title: "Face-to-Face Intercessory Prayer Meeting (Last Saturday Quarterly)", img: "/sample/Sample4.jpg" },
              { title: "Holy Communion every first Sunday of the month", img: "/sample/Sample5.jpg" },
            ].map(({ title, img }, index) => (
              <div
                key={index}
                className="bg-white/15 backdrop-blur-2xl overflow-hidden shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-500 flex flex-col rounded-2xl border border-white/20 group"
              >
                <div className="w-full h-96 relative overflow-hidden rounded-t-2xl">
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay on top of image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  {/* Text overlay with background for readability */}
                  <div className="absolute z-10 top-2 left-2 bg-black/60 px-3 py-1 rounded-lg text-white text-sm font-medium backdrop-blur-sm">
                    {title}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </section>




      <section
        className="relative py-16 z-10 bg-cover bg-no-repeat bg-top -mt-24" // for overlap
        style={{
          backgroundImage: "url('/img/TornPaper.jpg')",
        }}
      >
        <div className="relative z-10">
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
