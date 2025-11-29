import React from "react";
import Countdown from "../Components/Helper/Countdown";

export default function Home() {
  return (
    <div className="space-y-10">

      <section className="bg-indigo-900 text-white py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Countdown to Sunday Worship
        </h2>
        <p className="mt-3 text-white/70">
          Join us every Sunday at 9:30 AM Philippine Time.
        </p>

        <div className="mt-8 text-2xl md:text-3xl font-mono">
          <Countdown />
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
