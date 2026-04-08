import HeaderBanner from '../Components/HeaderBanner';
import { FaClock, FaMapMarkerAlt, FaChild, FaCoffee, FaMusic } from 'react-icons/fa';

const expectations = [
  { icon: <FaCoffee className="w-6 h-6" />, title: 'Warm Welcome', desc: 'Our welcome team will greet you at the door. Expect friendly faces and a relaxed atmosphere.' },
  { icon: <FaMusic className="w-6 h-6" />, title: 'Worship & Music', desc: 'We begin with Spirit-filled worship — contemporary songs that lift your heart to God.' },
  { icon: <FaChild className="w-6 h-6" />, title: "Kid's Ministry", desc: "Children are welcome! We have a dedicated Kid's Ministry running during the service." },
  { icon: <FaClock className="w-6 h-6" />, title: 'Service Length', desc: 'Services typically run about 1.5 to 2 hours. Come as you are — there is no dress code.' },
];

export default function PlanVisit() {
  return (
    <div>
      <HeaderBanner
        title="Plan a Visit"
        image={`${process.env.PUBLIC_URL}/backgrounds/BG1.png`}
      />

      {/* Intro */}
      <section className="bg-[#0a0a0a] py-20 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-5">
          <p className="text-xs uppercase tracking-[0.4em] text-orange-500 font-semibold">We're Expecting You</p>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            Your First Visit
          </h2>
          <div className="w-16 h-[2px] bg-orange-500 mx-auto" />
          <p className="text-white/60 text-base md:text-lg leading-relaxed">
            We're so glad you're considering joining us! Here's everything you need to know
            before your first Sunday at The Risen Generation Church.
          </p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-[#0a0a0a] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight text-center mb-12">
            What to Expect
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10">
            {expectations.map((item, i) => (
              <div key={i} className="group relative bg-[#0a0a0a] p-6 flex gap-4 hover:bg-[#111] transition-colors duration-300 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="text-orange-500 flex-shrink-0 mt-1">{item.icon}</div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Times */}
      <section className="bg-[#111] py-16 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <FaClock className="w-10 h-10 text-orange-500 mx-auto" />
          <h3 className="text-2xl font-black text-white uppercase tracking-wide">Service Times</h3>
          <p className="text-orange-500 font-bold text-xl">Sundays at 9:30 AM</p>
          <p className="text-white/50 text-sm">In-Person & Online (Facebook Live)</p>
        </div>
      </section>

      {/* Location + Map */}
      <section className="bg-[#0a0a0a] py-16 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-8">
          <FaMapMarkerAlt className="w-10 h-10 text-orange-500 mx-auto" />
          <h3 className="text-2xl font-black text-white uppercase tracking-wide">Find Us</h3>
          <p className="text-white/60 text-base">TRGC Worship Center, Philippines</p>
        </div>
        <div className="w-full h-80 overflow-hidden">
          <iframe
            title="TRGC Worship Center Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3840.535368329474!2d120.89232037459338!3d15.72279284862027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390d7e3cd6f1a13%3A0x74366079330647e3!2sTRGC%20Worship%20Center!5e0!3m2!1sen!2sph!4v1764220341549!5m2!1sen!2sph"
            className="w-full h-full"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
}
