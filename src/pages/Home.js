import React from "react";
import Countdown from "../Components/Helper/Countdown";
import Mark from "../Components/ui/Mark";

export default function Home() {
  return (
    <div className="space-y-10">


      <section
        className="relative text-white py-16 md:py-24 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://cdn.monkplatform.com/image/czoyMzQ6Imh0dHBzJTNBJTJGJTJGMGUxYjdlYzQyZWJlOTg2NzMxZGMtMjI1ZjIwNDhhZDRkYjE3NDY0MDc3MjQxY2RmY2M4NTQuc3NsLmNmMi5yYWNrY2RuLmNvbSUyRnVwbG9hZGVkJTJGMiUyRjBlMTUxNzE5NzhfMTY3MDQ1MTcxNF8yMjEwMjMtd2Vla2VuZHNlcnZpY2UtNjIuanBnJTNGcSUzRDkwJTI2dyUzRDMyMDAlMjZoJTNEMCUyNmZpdCUzRG1heCUyNnMlM0Q3NWYxYWRlMmY3YTRhYmZjNzE5YmM5YmVjYzI1OWI1NSI7/221023-weekendservice-62.jpg?fm=webp')",
        }}
      >
        {/* Enhanced dark overlay with gradient for modern look */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>

        <div className="relative max-w-7xl mx-auto px-6">
  <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center drop-shadow-2xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
    Local Church Programs & <Mark>Events</Mark>
  </h2>

  {/* Countdown with modern glassmorphism */}
  <div className="mx-auto max-w-4xl text-center mb-20 bg-white/10 backdrop-blur-2xl p-10 shadow-2xl rounded-2xl border border-white/20">
    <p className="text-xl md:text-2xl text-white font-medium">
      Join us every Sunday at 9:30 AM Philippine Time
    </p>
    <div className="mt-8 text-4xl md:text-5xl text-white font-bold">
      <Countdown />
    </div>
  </div>

  {/* First Set of Programs - Responsive grid with modern cards */}
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
        <div className="w-full h-64 relative overflow-hidden rounded-t-2xl">
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
        <div className="w-full h-64 relative overflow-hidden rounded-t-2xl">
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

  {/* The Hub of Christ Programs */}
  <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center drop-shadow-2xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
    The Hub of Christ Programs
  </h2>
  <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-16">
    {[
      { title: "Discipleship Program", img: "/sample/Sample6.jpg" },
      { title: "Leadership Training", img: "/sample/Sample7.jpg" },
      { title: "Worship & Arts Ministry", img: "/sample/Sample8.jpg" },
    ].map(({ title, img }, index) => (
      <div
        key={index}
        className="bg-white/15 backdrop-blur-2xl overflow-hidden shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-500 flex flex-col rounded-2xl border border-white/20 group"
      >
        <div className="w-full h-64 relative overflow-hidden rounded-t-2xl">
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



      {/* Map Section */}
      <section className="bg-white space-y-6 border border-gray-100">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Find Us</h2>
            <p className="text-gray-500 text-sm max-w-md mt-2">
              Visit the TRGC Worship Center. Below is our exact location on Google Maps with easy navigation.
            </p>
          </div>
        </div>

        <div className="w-full h-[100vh] overflow-hidden">
          <iframe
            title="TRGC Worship Center Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3840.535368329474!2d120.89232037459338!3d15.72279284862027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390d7e3cd6f1a13%3A0x74366079330647e3!2sTRGC%20Worship%20Center!5e0!3m2!1sen!2sph!4v1764220341549!5m2!1sen!2sph"
            className="w-full h-full"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700">
          <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
            <h3 className="font-semibold text-gray-800 text-lg mb-1">Address</h3>
            <p>TRGC Worship Center<br />Science City of Muñoz, Nueva Ecija</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
            <h3 className="font-semibold text-gray-800 text-lg mb-1">Service Hours</h3>
            <p>Sunday Worship: 9:00 AM<br />Midweek Service: 6:30 PM</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
            <h3 className="font-semibold text-gray-800 text-lg mb-1">Contact</h3>
            <p>Email: info@trgc.org<br />Phone: +63 912 345 6789</p>
          </div>
        </div>
      </section>
    </div>
  );
}
