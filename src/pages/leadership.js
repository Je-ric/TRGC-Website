import { useState } from 'react';
import HeaderBanner from '../Components/HeaderBanner';
import { FaQuoteLeft, FaQuoteRight, FaChurch, FaUsers, FaCrown, FaHandsHelping } from 'react-icons/fa';

export default function Leadership() {
  const leaders = {
    foundation: {
      name: "Pastor [Founder's Name]",
      title: "Founder & Senior Pastor",
      bio: "Started the church with a vision to spread the Gospel and build a community rooted in faith.",
      mission: "To equip believers for righteousness through holiness.",
      vision: "A glorious church as the bride of Christ.",
      image: "/img/founder.jpg",
      verse: "Ephesians 2:20",
      icon: <FaChurch className="w-8 h-8" />
    },
    legacy: [
      {
        name: 'Pastor [Son\'s Name]',
        title: 'Lead Pastor',
        bio: 'Continuing the legacy with passion for outreach and discipleship.',
        image: '/img/son.jpg',
        icon: <FaCrown className="w-8 h-8" />
      },
      {
        name: 'Pastor [Wife\'s Name]',
        title: 'Co-Lead Pastor',
        bio: 'Dedicated to family ministry and spiritual growth.',
        image: '/img/wife.jpg',
        icon: <FaHandsHelping className="w-8 h-8" />
      }
    ],
    associates: [
      {
        name: 'Pastor [Associate 1 Name]',
        title: 'Associate Pastor',
        bio: 'Focuses on youth and community outreach.',
        image: '/img/associate1.jpg',
        icon: <FaUsers className="w-8 h-8" />
      },
      {
        name: 'Pastor [Associate 2 Name]',
        title: 'Associate Pastor',
        bio: 'Leads worship and creative ministries.',
        image: '/img/associate2.jpg',
        icon: <FaUsers className="w-8 h-8" />
      }
    ]
  };

  const timeline = [
    {
      year: "2000",
      event: "Church founded by Pastor [Founder's Name] with a small group of believers.",
      icon: <FaChurch />
    },
    {
      year: "2005",
      event: "First building acquired and community outreach programs launched.",
      icon: <FaUsers />
    },
    {
      year: "2010",
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
      <HeaderBanner title="Leadership" image="/img/leadership-banner.jpg" />

      {/* Hero Section */}
      <section className="py-20 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
          Our Leadership Team
        </h1>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          Meet the visionaries guiding our church, from its foundation to its future.
        </p>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-6 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Our History</h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-500 to-red-500"></div>
            {timeline.map((item, index) => (
              <div key={index} className={`flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:bg-white/20 transition duration-300">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-orange-400">{item.icon}</span>
                      <h3 className="text-xl font-semibold text-white">{item.year}</h3>
                    </div>
                    <p className="text-gray-300">{item.event}</p>
                  </div>
                </div>
                {/* Timeline Dot */}
                <div className="w-4 h-4 bg-orange-500 rounded-full border-4 border-slate-900 absolute left-1/2 transform -translate-x-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Sections - No Tabs, Flowing Layout */}
      <section className="py-20 px-6 space-y-20">
        <div className="max-w-7xl mx-auto">

          {/* Foundation Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-8 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Foundation
            </h2>
            <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl max-w-4xl mx-auto hover:shadow-orange-500/20 transition duration-500">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <img src={leaders.foundation.image} alt={leaders.foundation.name} className="w-48 h-48 object-cover rounded-full shadow-lg hover:scale-105 transition duration-300" />
                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                    <span className="text-orange-500">{leaders.foundation.icon}</span>
                    <h3 className="text-3xl font-bold text-slate-800">{leaders.foundation.name}</h3>
                  </div>
                  <p className="text-slate-600 mb-4">{leaders.foundation.bio}</p>
                  <blockquote className="text-slate-700 italic border-l-4 border-orange-500 pl-4">
                    <FaQuoteLeft className="inline mr-2" /> Mission: {leaders.foundation.mission} <br />
                    Vision: {leaders.foundation.vision} <FaQuoteRight className="inline ml-2" />
                  </blockquote>
                  <p className="text-sm text-slate-500 mt-2">{leaders.foundation.verse}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Legacy Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-8 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Legacy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {leaders.legacy.map((leader, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl hover:shadow-orange-500/20 hover:scale-105 transition duration-500">
                  <div className="text-center">
                    <img src={leader.image} alt={leader.name} className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow-lg hover:scale-110 transition duration-300" />
                    <div className="flex items-center justify-center gap-4 mb-4">
                      <span className="text-orange-500">{leader.icon}</span>
                      <h3 className="text-2xl font-bold text-slate-800">{leader.name}</h3>
                    </div>
                    <p className="text-slate-600 mb-2">{leader.title}</p>
                    <p className="text-slate-500">{leader.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Associates Section */}
          <div className="text-center">
            <h2 className="text-4xl font-bold text-slate-800 mb-8 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Associates
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {leaders.associates.map((leader, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl hover:shadow-orange-500/20 hover:scale-105 transition duration-500">
                  <div className="text-center">
                    <img src={leader.image} alt={leader.name} className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow-lg hover:scale-110 transition duration-300" />
                    <div className="flex items-center justify-center gap-4 mb-4">
                      <span className="text-orange-500">{leader.icon}</span>
                      <h3 className="text-2xl font-bold text-slate-800">{leader.name}</h3>
                    </div>
                    <p className="text-slate-600 mb-2">{leader.title}</p>
                    <p className="text-slate-500">{leader.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
