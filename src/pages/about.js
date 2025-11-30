import { useState } from "react";
import HeaderBanner from "../Components/HeaderBanner";
import PrismaticAurora from "../Components/ui/PrismaticAurora";
import {
  FaCross,
  FaBible,
  FaDove,
  FaPrayingHands,
  FaFire,
  FaGift,
  FaAppleAlt,
  FaUsers,
  FaStar
} from 'react-icons/fa';
import { ChevronDown } from "lucide-react"


export default function About() {
  const [openIndex, setOpenIndex] = useState(null);

  const beliefs = [
    {
      title: "The Trinity",
      content: "There is one God, eternally coexistent in three persons: Father, Son and Holy Spirit. God the Father is the creator of heaven and earth and the sustainer of all things. There is but one God, infinite, eternal and perfect in holiness, truth and love. He is all-powerful, all-knowing and everywhere.",
      icon: <FaCross className="w-4 h-4" />
    },
    {
      title: "Jesus Christ",
      content: "The deity of Jesus Christ of Nazareth, His virgin birth, His sinless life, His miracles, His vicarious and atoning death through His shed blood, His burial, His bodily resurrection, and His ascension to the right hand of the Father, and His personal return in power and glory. He is the Head of His body, the Church.",
      icon: <FaPrayingHands className="w-4 h-4" />
    },
    {
      title: "The Holy Spirit",
      content: "God the Holy Spirit convicts the world of sin, righteousness and judgement, unites man to Jesus Christ in faith, brings about the new birth, and dwells within the believer, enabling him to grow in sanctification and righteousness, and become a gift of God to the church.",
      icon: <FaDove className="w-4 h-4" />
    },
    {
      title: "The Bible",
      content: "The Bible is the inspired, only infallible and authoritative Word of God. It is our supreme authority in all matters of faith and conduct.",
      icon: <FaBible className="w-4 h-4" />
    },
    {
      title: "Salvation",
      content: "We believe that salvation, with its forgiveness of sins, impartation of new nature and eternal life is a free gift from God upon receiving Jesus Christ as Savior and Lord.",
      icon: <FaStar className="w-4 h-4" />
    },
    {
      title: "Holy Spirit's Ministry",
      content: "The present ministry of the Holy Spirit, by whose indwelling the Christian is enabled to live a godly life.",
      icon: <FaUsers className="w-4 h-4" />
    },
    {
      title: "Baptism of the Spirit",
      content: "The baptism of the Holy Spirit, with the evidence of speaking in tongues, is available to all that believe in Jesus Christ, and will totally surrender their lives to the complete, perfect will of God.",
      icon: <FaFire className="w-4 h-4" />
    },
    {
      title: "Gifts of the Spirit",
      content: "The gifts of the Holy Spirit (the word of wisdom, the word of knowledge, faith, gifts of healing, working of miracles, prophecy, discerning of spirits, diverse kinds of tongues and the interpretation of tongues) are available today through the Holy Spirit, and are for the church.",
      icon: <FaGift className="w-4 h-4" />
    },
    {
      title: "Fruit of the Spirit",
      content: "The fruit of the Holy Spirit (love, joy, peace, long-suffering, gentleness, goodness, faith, meekness and temperance) and the character of God must be evident in the life of every disciple to live and walk by the Spirit.",
      icon: <FaAppleAlt className="w-4 h-4" />
    }
  ];

  return (
    <div>
      <HeaderBanner
        title="About"
        image="img/Church.jpg"
      />


      <section className="bg-white] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-black mb-6">Who We Are</h2>
          <p className="text-black max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate odio quibusdam, placeat exercitationem adipisci eos sint reprehenderit, repudiandae cumque numquam, similique unde obcaecati reiciendis facilis tenetur. Omnis dolor cumque exercitationem.
          </p>
        </div>
      </section>

      {/* ============================================================================================================================== */}

      <PrismaticAurora>
        <div className="pb-48">

          {/* GRID WRAPPER — 2x2 on large screens, 1x4 on mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Mission - Image */}
            <div className="flex justify-center w-full h-full">
              <img
                src="img/Mission.jpg"
                alt="Mission"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Mission - Text */}
            <div className="text-left space-y-6 px-6 py-10 md:px-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
                Mission
              </h2>

              <ul className="text-base md:text-lg lg:text-xl space-y-4 leading-relaxed text-white/80">
                <li className="flex gap-3">
                  <span className="text-red-400">•</span>
                  To equip and train every living saint for purposes of righteousness and lifestyle (2 Tim. 3:16-17) through holiness.
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">•</span>
                  To rebuild and restructure according to the original biblical pattern — apostolic foundation, prophetic ministries, and Church (Eph. 2:20, Eph. 4:11).
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">•</span>
                  To revive father and son relationship (Mal. 4:6), guided by Kingdom laws and divine order.
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">•</span>
                  To raise up a new breed of people without greed, worthy of each calling as love-slaves to Christ (Mat. 28:18-20).
                </li>
              </ul>
            </div>

            {/* Vision - Text (SWAPPED TO COME FIRST) */}
            <div className="text-left space-y-6 px-6 py-10 md:px-10 order-1 lg:order-none">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-indigo-400 to-blue-300 bg-clip-text text-transparent">
                Vision
              </h2>

              <ul className="text-base md:text-lg lg:text-xl space-y-4 leading-relaxed text-white/80">
                <li className="flex gap-3">
                  <span className="text-indigo-400">•</span>
                  Church empowerment (Acts 18) and regaining genuine Kingdom identity (Rev. 22:1-5).
                </li>
                <li className="flex gap-3">
                  <span className="text-indigo-400">•</span>
                  Unified faith among believers.
                </li>
                <li className="flex gap-3">
                  <span className="text-indigo-400">•</span>
                  Attaining maturity through the knowledge of the Son of God.
                </li>
                <li className="flex gap-3">
                  <span className="text-indigo-400">•</span>
                  The fullness of Christ in the lives of the saints (Eph. 4:13).
                </li>
                <li className="flex gap-3">
                  <span className="text-indigo-400">•</span>
                  A glorious church as the bride of our Lord Jesus Christ (Rev. 19:7).
                </li>
              </ul>
            </div>

            {/* Vision - Image (NOW SECOND) */}
            <div className="flex justify-center w-full h-full order-2 lg:order-none">
              <img
                src="img/Vision.jpg"
                alt="Vision"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </PrismaticAurora>




      {/* <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background"> */}
      <section
        className="relative py-16 z-10 bg-cover bg-no-repeat bg-top -mt-32" // for overlap
        style={{
          backgroundImage: "url('/img/TornPaper.jpg')",
        }}
      >
        <div className="relative z-10">

          <div className="max-w-4xl mx-auto mt-14">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Believe</h2>
              <p className="text-muted-foreground">Our faith is grounded in biblical truth</p>
            </div>

            <div className="space-y-3">
              {beliefs.map((belief, idx) => (
                <div
                  key={idx}
                  className="bg-card/50 border border-border rounded-lg overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between hover:bg-card/70 transition-colors text-left"
                  >
                    <h3 className="text-lg font-semibold text-foreground">{belief.title}</h3>
                    <ChevronDown
                      className={`w-5 h-5 text-primary transition-transform duration-300 ${openIndex === idx ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                  {openIndex === idx && (
                    <div className="px-6 pb-5 pt-2  border-t border-border text-muted-foreground">{belief.content}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ============================================================================================================================== */}
      <section className="bg-black text-white w-full">

      </section>


      <section className="bg-[#1a1a1a] py-20 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">


          {/* Logo */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="img/Logo.jpg"
              alt="Church Logo"
              className="w-72 h-72 object-contain drop-shadow-xl"
            />
          </div>


          {/* Symbolism Description */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-indigo-400">Logo Symbolism</h2>
            <ul className="text-gray-300 list-disc list-inside space-y-3 text-lg">
              <li><strong>The Inner Circle</strong> — Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li><strong>The Outer Circle</strong> — Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li><strong>The Cross</strong> — Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li><strong>The Rays</strong> — Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ul>
          </div>
        </div>
      </section>



    </div>
  );
}
