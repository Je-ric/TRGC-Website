import HeaderBanner from '../Components/HeaderBanner';
import {
  FaQuoteLeft,
  FaQuoteRight,
  FaChurch,
  FaUsers,
  FaCrown,
  FaHandsHelping
} from 'react-icons/fa';

export default function Leadership() {
  const leaders = {
    foundation: {
      name: "Pastor [Founder's Name]",
      title: "Founder & Senior Pastor",
      bio: "Started the church with a vision to spread the Gospel and build a community rooted in faith.",
      mission: "To equip believers for righteousness through holiness.",
      vision: "A glorious church as the bride of Christ.",
      image: "/img/foundation-group.jpg",
      verse: "Ephesians 2:20",
      icon: <FaChurch className="w-8 h-8" />
    },
    legacy: {
      image: "/img/legacy-group.jpg",
      members: [
        {
          name: "Pastor [Son's Name]",
          title: "Lead Pastor",
          bio: "Continuing the legacy with passion for outreach and discipleship.",
          image: "/img/son.jpg",
          icon: <FaCrown className="w-8 h-8" />
        },
        {
          name: "Pastor [Wife's Name]",
          title: "Co-Lead Pastor",
          bio: "Dedicated to family ministry and spiritual growth.",
          image: "/img/wife.jpg",
          icon: <FaHandsHelping className="w-8 h-8" />
        }
      ]
    },
    associates: {
      image: "/img/associates-group.jpg",
      members: [
        {
          name: "Pastor [Associate 1 Name]",
          title: "Associate Pastor",
          bio: "Focuses on youth and community outreach.",
          image: "/img/associate1.jpg",
          icon: <FaUsers className="w-8 h-8" />
        },
        {
          name: "Pastor [Associate 2 Name]",
          title: "Associate Pastor",
          bio: "Leads worship and creative ministries.",
          image: "/img/associate2.jpg",
          icon: <FaUsers className="w-8 h-8" />
        }
      ]
    }
  };

  const timeline = [
    {
      year: "1997",
      event: "Church founded by Pastor [Founder's Name] with a small group of believers.",
      icon: <FaChurch />
    },
    {
      year: "2023",
      event: "First building acquired and community outreach programs launched.",
      icon: <FaUsers />
    },
    {
      year: "2020",
      event: "Legacy passed to [Son's Name] and [Wife's Name], expanding ministries.",
      icon: <FaCrown />
    },
    {
      year: "2015",
      event: "Associate pastors joined, focusing on youth and worship.",
      icon: <FaHandsHelping />
    },
    {
      year: "2023",
      event: "Ongoing growth with digital outreach and global impact.",
      icon: <FaQuoteLeft />
    },
  ];

  return (
    <div className="bg-gradient-to-b from-slate-50 to-slate-100 min-h-screen">
      <HeaderBanner
        title="Leadership"
        image={`${process.env.PUBLIC_URL}/backgrounds/BG1.png`} />

      {/* Hero Section */}
      <section className="py-20 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-black text-slate-800 mb-6 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent uppercase tracking-wider">
          Our Leadership Team
        </h1>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto font-light italic">
          Meet the visionaries guiding our church, from its foundation to its future.
        </p>
      </section>

      {/* Timeline Section - Unchanged */}
      <section className="py-16 px-6 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Our History</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-500 to-red-500"></div>
            {timeline.map((item, index) => (
              <div key={index} className={`flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white/10 backdrop-blur-lg p-6 shadow-lg hover:bg-white/20 transition duration-300">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-orange-400">{item.icon}</span>
                      <h3 className="text-xl font-semibold text-white">{item.year}</h3>
                    </div>
                    <p className="text-gray-300">{item.event}</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-orange-500 border-4 border-slate-900 absolute left-1/2 transform -translate-x-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Sections - Poster-Style, No Shadows/Radius */}
      <section className="space-y-0">

        {/* Foundation - Poster Style */}
        <div className="relative h-screen flex items-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${leaders.foundation.image})` }}>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative z-10 max-w-6xl mx-auto px-6 flex items-center w-full">
            <div className="w-full md:w-1/2 text-white space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-orange-400">{leaders.foundation.icon}</span>
                <h2 className="text-5xl md:text-6xl font-black uppercase tracking-wider bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Foundation
                </h2>
              </div>
              <p className="text-xl md:text-2xl font-light leading-relaxed italic">
                {leaders.foundation.bio}
              </p>
              <blockquote className="text-lg md:text-xl font-medium text-orange-300 border-l-4 border-orange-500 pl-6">
                <FaQuoteLeft className="inline mr-2" /> Mission: {leaders.foundation.mission} <br />
                Vision: {leaders.foundation.vision} <FaQuoteRight className="inline ml-2" />
              </blockquote>
              <p className="text-sm font-light text-gray-300">{leaders.foundation.verse}</p>
            </div>
          </div>
        </div>

        {/* Legacy - Poster Style */}
        <div className="relative h-screen flex items-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${leaders.legacy.image})` }}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
          <div className="relative z-10 max-w-6xl mx-auto px-6 flex items-center justify-end w-full">
            <div className="w-full md:w-1/2 text-white space-y-6 text-right">
              <div className="flex items-center justify-end gap-4">
                <h2 className="text-5xl md:text-6xl font-black uppercase tracking-wider bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Legacy
                </h2>
                <span className="text-orange-400"><FaCrown className="w-12 h-12" /></span>
              </div>
              <p className="text-xl md:text-2xl font-light leading-relaxed italic">
                The legacy continues through Pastor [Son’s Name] and Pastor [Wife’s Name], leading the church toward growth, excellence, and stronger discipleship.
              </p>
              <p className="text-lg md:text-xl font-medium text-orange-300 italic">
                “Advancing the vision with passion, unity, and purpose.”
              </p>
              <div className="flex justify-end gap-6 mt-6">
                {leaders.legacy.members.map((member, index) => (
                  <div key={index} className="text-center">
                    <img src={member.image} alt={member.name} className="w-20 h-20 object-cover mx-auto mb-2" />
                    <h3 className="text-sm font-bold text-white">{member.name}</h3>
                    <p className="text-xs text-gray-300">{member.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Associates - Poster Style */}
        <div className="relative h-screen flex items-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${leaders.associates.image})` }}>
          <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/40 to-transparent"></div>
          <div className="relative z-10 max-w-6xl mx-auto px-6 flex items-center w-full">
            <div className="w-full md:w-1/2 text-white space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-orange-400"><FaUsers className="w-12 h-12" /></span>
                <h2 className="text-5xl md:text-6xl font-black uppercase tracking-wider bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Associates
                </h2>
              </div>
              <p className="text-xl md:text-2xl font-light leading-relaxed italic">
                Our associate pastors faithfully support the church through youth ministries, worship, outreach, and discipleship.
              </p>
              <p className="text-lg md:text-xl font-medium text-orange-300 italic">
                “Serving together to build up the body of Christ.”
              </p>
              <div className="flex gap-6 mt-6">
                {leaders.associates.members.map((member, index) => (
                  <div key={index} className="text-center">
                    <img src={member.image} alt={member.name} className="w-20 h-20 object-cover mx-auto mb-2" />
                    <h3 className="text-sm font-bold text-white">{member.name}</h3>
                    <p className="text-xs text-gray-300">{member.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
