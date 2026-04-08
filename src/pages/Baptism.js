import { Link } from 'react-router-dom';
import HeaderBanner from '../Components/HeaderBanner';
import { FaCross, FaUsers, FaSeedling, FaHandPointer } from 'react-icons/fa';

const reasons = [
  {
    icon: <FaHandPointer className="w-8 h-8" />,
    title: "Obey Jesus' Command",
    desc: 'Baptism is the next step of obedience in following Christ. Jesus himself was baptized and commanded His followers to do the same (Matthew 28:19).',
  },
  {
    icon: <FaCross className="w-8 h-8" />,
    title: 'Public Declaration',
    desc: "It's a way to publicly show your faith in Christ — telling the world that you have chosen to follow Jesus and that He has changed your life.",
  },
  {
    icon: <FaSeedling className="w-8 h-8" />,
    title: 'Symbol of New Life',
    desc: 'Going under the water represents dying to your old self. Coming up represents rising to a new life in Christ — just as He rose from the dead (Romans 6:4).',
  },
  {
    icon: <FaUsers className="w-8 h-8" />,
    title: "Join God's Family",
    desc: 'Baptism signifies joining the community of believers — the body of Christ. You are not alone; you are part of a family that walks together in faith.',
  },
];

export default function Baptism() {
  return (
    <div>
      <HeaderBanner
        title="Baptism"
        image={`${process.env.PUBLIC_URL}/backgrounds/BG1.png`}
      />

      {/* Intro */}
      <section className="bg-[#0a0a0a] py-20 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-orange-500 font-semibold">Next Steps</p>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            Why Be Baptized?
          </h2>
          <div className="w-16 h-[2px] bg-orange-500 mx-auto" />
          <p className="text-white/60 text-base md:text-lg leading-relaxed">
            Take the next step in your faith and make a public declaration of your commitment to Jesus.
            Baptism is not what saves you — it is your response to being saved.
          </p>
          <blockquote className="border-l-4 border-orange-500 pl-6 text-left text-white/50 italic text-base md:text-lg">
            "Therefore go and make disciples of all nations, baptizing them in the name of the Father
            and of the Son and of the Holy Spirit." — Matthew 28:19
          </blockquote>
        </div>
      </section>

      {/* 4 Reasons */}
      <section className="bg-[#0a0a0a] py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10">
          {reasons.map((r, i) => (
            <div key={i} className="group relative bg-[#0a0a0a] p-8 flex gap-5 hover:bg-[#111] transition-colors duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="text-orange-500 flex-shrink-0 mt-1">{r.icon}</div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{r.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Parallax CTA */}
      <section
        className="relative py-24 px-6 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/backgrounds/BG2.png)` }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-wide">
            Ready to Get Baptized?
          </h2>
          <p className="text-white/80 text-base md:text-lg leading-relaxed font-raleway">
            We would love to celebrate this step with you. Reach out to us or visit us this Sunday
            and let us know you're ready.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/prayer-request"
              className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold uppercase tracking-wider transition-colors duration-300"
            >
              Contact Us
            </Link>
            <Link
              to="/plan-visit"
              className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-black font-semibold uppercase tracking-wider transition-all duration-300"
            >
              Plan a Visit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
