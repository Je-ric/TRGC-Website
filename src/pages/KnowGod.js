import { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderBanner from '../Components/HeaderBanner';
import { FaHeart, FaBook, FaCross, FaPray, FaUsers, FaStar, FaShareAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const verseCards = [
  {
    verse: '"For God so loved the world that He gave His one and only Son, that whoever believes in Him shall not perish but have eternal life."',
    ref: 'John 3:16',
    theme: 'You Are Loved',
  },
  {
    verse: '"Come to me, all you who are weary and burdened, and I will give you rest."',
    ref: 'Matthew 11:28',
    theme: 'You Can Find Rest',
  },
  {
    verse: '"I have come that they may have life, and have it to the full."',
    ref: 'John 10:10',
    theme: 'You Were Made for More',
  },
];

const teachings = [
  {
    icon: <FaCross className="w-6 h-6" />,
    title: '1. Salvation — How to Be Saved',
    content: (
      <div className="space-y-4 text-slate-700 text-sm leading-relaxed">
        <p>Every person has sinned — we have all fallen short of God's perfect standard. <span className="font-semibold text-orange-600">Romans 3:23</span> says, <em>"For all have sinned and fall short of the glory of God."</em></p>
        <p>The consequence of sin is death — separation from God. <span className="font-semibold text-orange-600">Romans 6:23</span> says, <em>"For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord."</em></p>
        <p>But God made a way. <span className="font-semibold text-orange-600">Romans 10:9-10</span> says, <em>"If you declare with your mouth, 'Jesus is Lord,' and believe in your heart that God raised Him from the dead, you will be saved."</em></p>
        <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
          <p className="font-semibold text-slate-800">Ready to be saved?</p>
          <p>Simply pray: <em>"Lord Jesus, I know I am a sinner. I believe You died for my sins and rose again. I invite You into my life as my Lord and Savior. Amen."</em></p>
        </div>
      </div>
    ),
  },
  {
    icon: <FaBook className="w-6 h-6" />,
    title: '2. The Bible — God Speaks to You',
    content: (
      <div className="space-y-4 text-slate-700 text-sm leading-relaxed">
        <p>The Bible is not just an old book — it is the living Word of God. <span className="font-semibold text-orange-600">Hebrews 4:12</span> says it is <em>"alive and active, sharper than any double-edged sword."</em></p>
        <p><span className="font-semibold text-orange-600">John 15:3</span> — The Word of God cleanses us: <em>"You are already clean because of the word I have spoken to you."</em></p>
        <p><span className="font-semibold text-orange-600">1 Peter 1:23</span> — We are born again through the Word: <em>"You have been born again… through the living and enduring word of God."</em></p>
        <p><span className="font-semibold text-orange-600">Proverbs 4:22</span> — God's words bring life and health to those who find them.</p>
        <p><span className="font-semibold text-orange-600">Joshua 1:8</span> — <em>"Keep this Book of the Law always on your lips; meditate on it day and night… then you will be prosperous and successful."</em></p>
        <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
          <p className="font-semibold text-slate-800">Practical tip:</p>
          <p>Start with the Gospel of John. Read a chapter a day and ask God to speak to you through it.</p>
        </div>
      </div>
    ),
  },
  {
    icon: <FaStar className="w-6 h-6" />,
    title: '3. Who You Are in Christ',
    content: (
      <div className="space-y-4 text-slate-700 text-sm leading-relaxed">
        <p>When you receive Jesus, everything changes. You are no longer defined by your past — you have a new identity.</p>
        <p><span className="font-semibold text-orange-600">John 1:12</span> — <em>"Yet to all who did receive Him, to those who believed in His name, He gave the right to become children of God."</em> You are a child of God.</p>
        <p><span className="font-semibold text-orange-600">Ephesians 2:8-10</span> — You are saved by grace, not by your own effort. And you were <em>"created in Christ Jesus to do good works, which God prepared in advance for you to do."</em> You have a purpose.</p>
        <p><span className="font-semibold text-orange-600">2 Corinthians 5:17-21</span> — <em>"If anyone is in Christ, the new creation has come: The old has gone, the new is here!"</em> You are a new person. You are also an ambassador of Christ — representing Him to the world.</p>
        <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
          <p className="font-semibold text-slate-800">Remember:</p>
          <p>Your identity is no longer in your failures, your past, or what others say about you. You are loved, chosen, and made new.</p>
        </div>
      </div>
    ),
  },
  {
    icon: <FaPray className="w-6 h-6" />,
    title: '4. Prayer — Talking with God',
    content: (
      <div className="space-y-4 text-slate-700 text-sm leading-relaxed">
        <p>Prayer is simply talking to God. He is not far away — He wants to hear from you every day.</p>
        <p><span className="font-semibold text-orange-600">Jeremiah 33:3</span> — <em>"Call to me and I will answer you and tell you great and unsearchable things you do not know."</em></p>
        <p><span className="font-semibold text-orange-600">Luke 22:40</span> — Jesus himself told His disciples to pray so they would not fall into temptation. Prayer keeps us close to God.</p>
        <p><span className="font-semibold text-orange-600">Psalm 95:2 & 100:4</span> — Come before God with thanksgiving and praise. Start your prayers by thanking Him.</p>
        <p><span className="font-semibold text-orange-600">Mark 11:24</span> — <em>"Whatever you ask for in prayer, believe that you have received it, and it will be yours."</em></p>
        <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
          <p className="font-semibold text-slate-800 mb-2">A simple way to pray — ACTS:</p>
          <ul className="space-y-1">
            <li><span className="font-bold text-orange-600">A</span>doration — Tell God how great He is.</li>
            <li><span className="font-bold text-orange-600">C</span>onfession — Be honest about your sins and ask for forgiveness.</li>
            <li><span className="font-bold text-orange-600">T</span>hanksgiving — Thank Him for what He has done.</li>
            <li><span className="font-bold text-orange-600">S</span>upplication — Bring your needs and the needs of others to Him.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    icon: <FaUsers className="w-6 h-6" />,
    title: '5. Church — Why You Need Community',
    content: (
      <div className="space-y-4 text-slate-700 text-sm leading-relaxed">
        <p>Following Jesus was never meant to be done alone. God designed us to grow together with other believers.</p>
        <p><span className="font-semibold text-orange-600">Hebrews 10:25</span> — <em>"Let us not give up meeting together, as some are in the habit of doing, but let us encourage one another — and all the more as you see the Day approaching."</em></p>
        <p>Being part of a church means you have people to pray with, learn with, and walk through life with. You encourage others, and others encourage you.</p>
        <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
          <p className="font-semibold text-slate-800">Next step:</p>
          <p>Join us this Sunday at TRGC. You don't have to have it all together — just come as you are.</p>
        </div>
      </div>
    ),
  },
  {
    icon: <FaHeart className="w-6 h-6" />,
    title: '6. Faith — Trusting God',
    content: (
      <div className="space-y-4 text-slate-700 text-sm leading-relaxed">
        <p>Faith is not a feeling — it is a choice to trust God even when you cannot see the full picture.</p>
        <p><span className="font-semibold text-orange-600">Hebrews 11:1</span> — <em>"Now faith is confidence in what we hope for and assurance about what we do not see."</em></p>
        <p><span className="font-semibold text-orange-600">Hebrews 11:6</span> — <em>"Without faith it is impossible to please God, because anyone who comes to Him must believe that He exists and that He rewards those who earnestly seek Him."</em></p>
        <p><span className="font-semibold text-orange-600">Romans 10:17</span> — <em>"Faith comes from hearing the message, and the message is heard through the word about Christ."</em> The more you read the Bible and hear God's Word, the stronger your faith grows.</p>
        <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
          <p className="font-semibold text-slate-800">Remember:</p>
          <p>Faith is like a muscle — it grows the more you use it. Trust God in the small things, and watch Him work.</p>
        </div>
      </div>
    ),
  },
  {
    icon: <FaShareAlt className="w-6 h-6" />,
    title: '7. Sharing Your Faith',
    content: (
      <div className="space-y-4 text-slate-700 text-sm leading-relaxed">
        <p>Once you know Jesus, the most natural thing is to want others to know Him too. Sharing your faith is not about being a preacher — it is about sharing what God has done in your life.</p>
        <p><span className="font-semibold text-orange-600">Mark 16:15</span> — <em>"Go into all the world and preach the gospel to all creation."</em> This is the Great Commission — every believer's calling.</p>
        <p><span className="font-semibold text-orange-600">Matthew 10:8</span> — <em>"Freely you have received; freely give."</em> What God has given you — grace, love, forgiveness — share it freely.</p>
        <p><span className="font-semibold text-orange-600">Titus 3:9-11</span> — Stay focused on what matters: the gospel and building people up. Avoid arguments that divide and distract.</p>
        <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
          <p className="font-semibold text-slate-800">How to start:</p>
          <p>Simply tell someone your story — what your life was like before Jesus, how you met Him, and how He has changed you. That is your testimony, and no one can argue with it.</p>
        </div>
      </div>
    ),
  },
];

export default function KnowGod() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div>
      <HeaderBanner
        title="Know God"
        image={`${process.env.PUBLIC_URL}/backgrounds/BG1.png`}
      />

      {/* Hero intro */}
      <section className="bg-[#0a0a0a] py-20 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-5">
          <p className="text-xs uppercase tracking-[0.4em] text-orange-500 font-semibold">Start Here</p>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            How to Begin a Relationship with Jesus
          </h2>
          <div className="w-16 h-[2px] bg-orange-500 mx-auto" />
          <p className="text-white/60 text-base md:text-lg leading-relaxed">
            God is not a distant force or a set of rules. He is a Person who loves you deeply and
            wants a real relationship with you. This page is for anyone who wants to understand
            what that means — and how to take the first step.
          </p>
          <p className="text-white font-semibold text-lg">Ready to follow Him?</p>
        </div>
      </section>

      {/* 3 Portrait Verse Cards */}
      <section className="bg-slate-50 py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {verseCards.map((card, i) => (
            <div
              key={i}
              className="relative w-full overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:scale-[1.02] aspect-[1080/1920]"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/backgrounds/Card-Verse-BG1.jpg)`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
              }}
            >
              <div className="absolute inset-0 bg-black/35" />
              <div className="relative z-10 flex h-full flex-col justify-between p-8 text-white">
                <p className="mb-4 text-sm uppercase tracking-widest text-white/75">{card.theme}</p>
                <blockquote className="flex-1 text-base font-light leading-relaxed italic md:text-lg">
                  {card.verse}
                </blockquote>
                <p className="mt-6 text-sm font-bold tracking-wider text-white/90">{card.ref}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Parallax divider */}
      <section
        className="relative h-56 bg-fixed bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/backgrounds/BG2.png)` }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 text-center px-4 space-y-2">
          <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wider">
            7 Things Every New Believer Should Know
          </h2>
          <p className="text-white/70 text-sm font-raleway">
            Simple, clear, and grounded in Scripture.
          </p>
        </div>
      </section>

      {/* 7 Teachings — Accordion */}
      <section className="bg-[#0a0a0a] py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-px">
          {teachings.map((t, i) => (
            <div key={i} className="border-b border-white/10 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white/5 transition-colors duration-200"
                aria-expanded={openIndex === i}
              >
                <div className="flex items-center gap-3">
                  <span className="text-orange-500 flex-shrink-0">{t.icon}</span>
                  <span className="text-base font-bold text-white">{t.title}</span>
                </div>
                <span className="text-white/40 flex-shrink-0 ml-4">
                  {openIndex === i ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 pt-2 border-t border-white/10 [&_p]:text-white/60 [&_span.font-semibold]:text-orange-400 [&_.bg-orange-50]:bg-white/5 [&_.bg-orange-50]:border-orange-500 [&_.bg-orange-50_p]:text-white/70 [&_.bg-orange-50_.font-semibold]:text-white [&_ul]:text-white/60">
                  {t.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative py-24 px-6 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/backgrounds/BG1.png)` }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-wide">
            Take Your Next Step
          </h2>
          <p className="text-white/80 text-base md:text-lg leading-relaxed font-raleway">
            You don't have to figure this out alone. Join us this Sunday, get baptized,
            or send us a prayer request — we are here for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/plan-visit"
              className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold uppercase tracking-wider transition-colors duration-300"
            >
              Plan a Visit
            </Link>
            <Link
              to="/baptism"
              className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-black font-semibold uppercase tracking-wider transition-all duration-300"
            >
              Learn About Baptism
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
