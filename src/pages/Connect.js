import { Link } from 'react-router-dom';
import HeaderBanner from '../Components/HeaderBanner';
import { FaMapMarkerAlt, FaVideo, FaHandsHelping, FaHeart, FaPray, FaCalendarAlt } from 'react-icons/fa';

const connectCards = [
  {
    icon: <FaPray className="w-8 h-8" />,
    title: 'Need Prayer?',
    desc: 'We invite you to join us at any of our prayer times. Our prayer team is here for you.',
    link: '/prayer-request',
    cta: 'Submit a Prayer Request',
  },
  {
    icon: <FaCalendarAlt className="w-8 h-8" />,
    title: "What's Happening at TRGC",
    desc: 'Stay connected to the life of the church. See upcoming events, programs, and gatherings.',
    link: '/',
    cta: 'See Programs',
  },
  {
    icon: <FaHandsHelping className="w-8 h-8" />,
    title: 'Serve With Us',
    desc: 'Help us serve the needs of our church and community. Find your place in ministry.',
    link: '/ministry',
    cta: 'Explore Ministries',
  },
  {
    icon: <FaHeart className="w-8 h-8" />,
    title: 'Find Your Purpose',
    desc: 'Discover who God made you to be. Take the next step in your faith journey with us.',
    link: '/know-god',
    cta: 'Know God',
  },
];

export default function Connect() {
  return (
    <div>
      <HeaderBanner
        title="Connect"
        image={`${process.env.PUBLIC_URL}/backgrounds/BG1.png`}
      />

      {/* Service Times */}
      <section className="bg-[#f9f9f9] py-20 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-orange-500 font-semibold">Join Us</p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight">
            Service Times
          </h2>
          <div className="w-16 h-[2px] bg-orange-500 mx-auto" />
          <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            We can't wait to meet you! We're excited to invite you to join us at church this Sunday.
            Our welcome team will be there to greet you before you head into service!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200 mt-10">
            <div className="group relative bg-white p-8 space-y-3 hover:bg-orange-50 transition-colors duration-300 overflow-hidden">
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <FaMapMarkerAlt className="w-8 h-8 text-orange-500 mx-auto" />
              <h3 className="text-xl font-bold text-slate-900 uppercase">In-Person</h3>
              <p className="text-orange-500 font-semibold text-lg">Sundays at 9:30 AM</p>
              <p className="text-slate-500 text-sm">TRGC Worship Center, Philippines</p>
              <a
                href="https://www.google.com/maps/place/TRGC+Worship+Center"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold uppercase tracking-wider transition-colors duration-300"
              >
                Get Directions
              </a>
            </div>
            <div className="group relative bg-white p-8 space-y-3 hover:bg-orange-50 transition-colors duration-300 overflow-hidden">
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <FaVideo className="w-8 h-8 text-orange-500 mx-auto" />
              <h3 className="text-xl font-bold text-slate-900 uppercase">Online</h3>
              <p className="text-orange-500 font-semibold text-lg">Sundays at 9:30 AM</p>
              <p className="text-slate-500 text-sm">Live on Facebook every Sunday</p>
              <Link
                to="/sermons"
                className="inline-block mt-2 px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold uppercase tracking-wider transition-colors duration-300"
              >
                Watch Online
              </Link>
            </div>
            <div className="group relative bg-white p-8 space-y-3 hover:bg-orange-50 transition-colors duration-300 overflow-hidden">
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <FaMapMarkerAlt className="w-8 h-8 text-orange-500 mx-auto" />
              <h3 className="text-xl font-bold text-slate-900 uppercase">Address</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                TRGC Worship Center<br />Philippines
              </p>
              <Link
                to="/plan-visit"
                className="inline-block mt-2 px-5 py-2 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white text-sm font-semibold uppercase tracking-wider transition-all duration-300"
              >
                Plan a Visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax divider */}
      <section
        className="relative h-64 bg-fixed bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/backgrounds/BG1.png)` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4">
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-wider">
            You Belong Here
          </h2>
          <p className="text-white/80 mt-2 text-base md:text-lg font-raleway">
            No matter where you are in life, there is a place for you at TRGC.
          </p>
        </div>
      </section>

      {/* Connect With Us */}
      <section className="bg-[#0a0a0a] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <p className="text-xs uppercase tracking-[0.4em] text-orange-500 font-semibold">Get Involved</p>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
              Connect With Us
            </h2>
            <div className="w-16 h-[2px] bg-orange-500 mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {connectCards.map((card, i) => (
              <Link key={i} to={card.link} className="group relative bg-[#0a0a0a] p-8 flex flex-col space-y-4 hover:bg-[#111] transition-colors duration-300 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="text-orange-500">{card.icon}</div>
                <h3 className="text-lg font-black text-white uppercase tracking-wide">{card.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed flex-1">{card.desc}</p>
                <span className="text-orange-500 group-hover:text-orange-400 text-xs font-bold uppercase tracking-widest transition-colors duration-300">
                  {card.cta} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Baptism Teaser — parallax */}
      <section
        className="relative py-24 px-6 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/backgrounds/BG2.png)` }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-orange-400">Next Steps</p>
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-wide">New Here?</h2>
          <p className="text-white/80 text-base md:text-lg leading-relaxed font-raleway">
            Take the next step in your faith. Whether you're exploring Christianity for the first time
            or ready to make a public declaration — we're here to walk with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link to="/baptism" className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold uppercase tracking-wider transition-colors duration-300">
              Learn About Baptism
            </Link>
            <Link to="/know-god" className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-black font-semibold uppercase tracking-wider transition-all duration-300">
              Know God
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
