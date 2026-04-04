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
import Mark from "../Components/ui/Mark";

export default function About() {

  const beliefs = [
    {
      title: "The Trinity",
      content: "There is one God, eternally coexistent in three persons: Father, Son and Holy Spirit. God the Father is the creator of heaven and earth and the sustainer of all things. There is but one God, infinite, eternal and perfect in holiness, truth and love. He is all-powerful, all-knowing and everywhere.",
      icon: <FaCross className="w-5 h-5" />
    },
    {
      title: "Jesus Christ",
      content: "The deity of Jesus Christ of Nazareth, His virgin birth, His sinless life, His miracles, His vicarious and atoning death through His shed blood, His burial, His bodily resurrection, and His ascension to the right hand of the Father, and His personal return in power and glory. He is the Head of His body, the Church.",
      icon: <FaPrayingHands className="w-5 h-5" />
    },
    {
      title: "The Holy Spirit",
      content: "God the Holy Spirit convicts the world of sin, righteousness and judgement, unites man to Jesus Christ in faith, brings about the new birth, and dwells within the believer, enabling him to grow in sanctification and righteousness, and become a gift of God to the church.",
      icon: <FaDove className="w-5 h-5" />
    },
    {
      title: "The Bible",
      content: "The Bible is the inspired, only infallible and authoritative Word of God. It is our supreme authority in all matters of faith and conduct.",
      icon: <FaBible className="w-5 h-5" />
    },
    {
      title: "Salvation",
      content: "We believe that salvation, with its forgiveness of sins, impartation of new nature and eternal life is a free gift from God upon receiving Jesus Christ as Savior and Lord.",
      icon: <FaStar className="w-5 h-5" />
    },
    {
      title: "Holy Spirit's Ministry",
      content: "The present ministry of the Holy Spirit, by whose indwelling the Christian is enabled to live a godly life.",
      icon: <FaUsers className="w-5 h-5" />
    },
    {
      title: "Baptism of the Spirit",
      content: "The baptism of the Holy Spirit, with the evidence of speaking in tongues, is available to all that believe in Jesus Christ, and will totally surrender their lives to the complete, perfect will of God.",
      icon: <FaFire className="w-5 h-5" />
    },
    {
      title: "Gifts of the Spirit",
      content: "The gifts of the Holy Spirit (the word of wisdom, the word of knowledge, faith, gifts of healing, working of miracles, prophecy, discerning of spirits, diverse kinds of tongues and the interpretation of tongues) are available today through the Holy Spirit, and are for the church.",
      icon: <FaGift className="w-5 h-5" />
    },
    {
      title: "Fruit of the Spirit",
      content: "The fruit of the Holy Spirit (love, joy, peace, gentleness, long-suffering, goodness, faith, meekness and temperance) and the character of God must be evident in the life of every disciple to live and walk by the Spirit.",
      icon: <FaAppleAlt className="w-5 h-5" />
    }
  ];

  return (
    <div>
      <HeaderBanner
        title="About"
        image={`${process.env.PUBLIC_URL}/backgrounds/BG1.png`}
      />

      <section className="bg-gradient-to-b from-slate-100 to-white py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-orange-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-slate-300 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto text-center space-y-8">
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>

          <h2 className="text-4xl md:text-5xl font-black text-slate-800 uppercase tracking-wider">
            Who We Are
          </h2>

          <p className="text-lg md:text-xl font-light text-slate-600 italic max-w-4xl mx-auto leading-relaxed">
            A community rooted in faith, united in purpose, and committed to spreading God's love.
          </p>

          <div className="max-w-4xl mx-auto">
            <p className="text-slate-700 text-lg leading-relaxed">
              The Risen Generation Church is a Spirit-filled, Bible-based community of believers committed to equipping every saint for righteousness, rebuilding according to the original biblical pattern, and raising up a generation fully surrendered to Christ.
            </p>
          </div>

          <blockquote className="text-slate-800 text-xl md:text-2xl font-semibold italic border-l-4 border-orange-500 pl-8 max-w-3xl mx-auto text-left">
            "We are called to be the hands and feet of Jesus, building a kingdom that lasts."
          </blockquote>

          <div className="w-16 h-1 bg-orange-500 mx-auto"></div>
        </div>
      </section>

      <PrismaticAurora>
        <div className="py-20 px-6 md:px-12 lg:px-16 pb-40">

          <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-4">
            Our <Mark color="white" backgroundColor="#EF4444">Purpose</Mark>
          </h2>

          <div className="flex flex-col lg:flex-row justify-center items-start gap-12 mb-20 mt-14 max-w-6xl mx-auto">
            <div className="flex flex-col items-start lg:w-1/2">
              <p className="text-orange-400 text-base md:text-lg mb-2 italic font-raleway">
                "Training hearts, transforming lives."
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold uppercase">
                Our Mission
              </h1>
            </div>

            <ul className="text-white space-y-4 lg:w-1/2 list-disc list-inside">
              <li>
                <p className="inline">
                  To equip and train every living saint for purposes of righteousness and lifestyle{" "}
                  <span className="text-orange-400 font-semibold">(2 Tim. 3:16-17)</span> through holiness.
                </p>
              </li>
              <li>
                <p className="inline">
                  To rebuild and restructure according to the original biblical pattern — apostolic foundation, prophetic ministries, and Church{" "}
                  <span className="text-orange-400 font-semibold">(Eph. 2:20, Eph. 4:11)</span>.
                </p>
              </li>
              <li>
                <p className="inline">
                  To revive father and son relationship{" "}
                  <span className="text-orange-400 font-semibold">(Mal. 4:6)</span>, guided by Kingdom laws and divine order.
                </p>
              </li>
              <li>
                <p className="inline">
                  To raise up a new breed of people without greed, worthy of each calling as love-slaves to Christ{" "}
                  <span className="text-orange-400 font-semibold">(Mat. 28:18-20)</span>.
                </p>
              </li>
            </ul>
          </div>

          <div className="flex flex-col lg:flex-row justify-center items-start gap-12 mb-20 mt-14 max-w-6xl mx-auto">
            <div className="flex flex-col items-start lg:w-1/2">
              <p className="text-orange-400 text-base md:text-lg mb-2 italic font-raleway">
                "A church fully alive in Christ and united in purpose."
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold uppercase">
                Our Vision
              </h1>
            </div>

            <ul className="text-white space-y-4 lg:w-1/2 list-disc list-inside">
              <li>
                <p className="inline">
                  Church empowerment <span className="text-orange-400 font-semibold">(Acts 18)</span> / Regaining genuine Kingdom identity <span className="text-orange-400 font-semibold">(Rev. 22:1-5)</span>.
                </p>
              </li>
              <li><p className="inline">Unified faith among believers.</p></li>
              <li><p className="inline">Attaining maturity through the knowledge of the Son of God.</p></li>
              <li><p className="inline">The fullness of Christ in the lives of the saints.</p></li>
              <li>
                <p className="inline">
                  A glorious church as the bride of our Lord Jesus Christ <span className="text-orange-400 font-semibold">(Rev. 19:7)</span>.
                </p>
              </li>
            </ul>
          </div>

        </div>
      </PrismaticAurora>

      <section
        className="relative py-16 z-10 bg-no-repeat bg-top -mt-24"
        style={{ backgroundImage: "url('/img/TornPaper.jpg')" }}
      >
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold mb-3 text-center text-black pt-24">
              What We <Mark>Believe</Mark>
            </h2>
            <p className="text-slate-600 font-raleway">Our faith is grounded in biblical truth</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-16">
            {beliefs.map((belief, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 flex flex-col shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center mb-4 gap-3">
                  <div className="text-orange-500 text-2xl flex-shrink-0">
                    {belief.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 border-b-2 border-orange-400 pb-0.5">
                    {belief.title}
                  </h3>
                </div>
                <p className="text-slate-700 text-sm md:text-base leading-relaxed">{belief.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PrismaticAurora>
        <div className="py-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.1)_0%,_transparent_70%)] opacity-50"></div>

          <div className="relative max-w-7xl mx-auto space-y-16">

            <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-4">
              Our <Mark color="white" backgroundColor="#EF4444">Logo</Mark>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

              <div className="md:col-span-2">
                <div className="group bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 shadow-2xl p-8 md:p-10 transition-all duration-500 hover:bg-white/10 hover:scale-[1.02]">
                  <div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left gap-10">

                    <div className="flex-1 space-y-3">
                      <h4 className="text-xl font-semibold text-white">Inner Circle</h4>
                      <p className="text-white/90 text-sm md:text-base leading-relaxed">
                        The inner circle represents the wholeness of a person created by God according
                        to His image and likeness to whom He has given dominion and rulership over all
                        the earth <span className="text-orange-400 font-semibold">(Genesis 1:26-28)</span>.
                      </p>
                    </div>

                    <div className="flex justify-center flex-shrink-0">
                      <img
                        src={`${process.env.PUBLIC_URL}/img/Logo-Circle2.png`}
                        alt="Circle Symbol"
                        className="w-40 h-40 object-contain drop-shadow-2xl transition-transform duration-500 group-hover:rotate-12"
                      />
                    </div>

                    <div className="flex-1 space-y-3">
                      <h4 className="text-xl font-semibold text-white">Outer Circle</h4>
                      <p className="text-white/90 text-sm md:text-base leading-relaxed">
                        The outside circle signifies the family of believers, whose lives are committed
                        to Jesus Christ as Lord, fitted together, growing together and building one
                        another to participate in building the Kingdom of God
                        <span className="text-orange-400 font-semibold"> (Ephesians 4:12-16)</span>.
                      </p>
                    </div>

                  </div>
                </div>
              </div>

              <div className="group bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 shadow-2xl p-8 transition-all duration-500 hover:bg-white/10 hover:scale-[1.02]">
                <div className="flex flex-col items-center text-center space-y-5">
                  <img
                    src={`${process.env.PUBLIC_URL}/img/Logo-Cross.png`}
                    alt="Cross Symbol"
                    className="w-40 h-40 object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-110"
                  />
                  <h3 className="text-xl font-bold text-orange-400">The Cross</h3>
                  <p className="text-white/90 text-sm md:text-base leading-relaxed">
                    Represents Jesus, our redeemer who died on the cross for us to live and have an abundant life
                    <span className="text-orange-400 font-semibold"> (John 10:10b)</span>.
                  </p>
                </div>
              </div>

              <div className="group bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 shadow-2xl p-8 transition-all duration-500 hover:bg-white/10 hover:scale-[1.02]">
                <div className="flex flex-col items-center text-center space-y-5">
                  <img
                    src={`${process.env.PUBLIC_URL}/img/Logo-Rays.png`}
                    alt="Rays Symbol"
                    className="w-40 h-40 object-contain drop-shadow-2xl transition-transform duration-500 group-hover:rotate-6"
                  />
                  <h3 className="text-xl font-bold text-yellow-400">The Rays</h3>
                  <p className="text-white/90 text-sm md:text-base leading-relaxed">
                    Represents the nine Fruits of the Holy Spirit to be manifested in one's life to be able to walk and live in the Spirit
                    <span className="text-orange-400 font-semibold"> (Galatians 5:22-23)</span>.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </PrismaticAurora>

    </div>
  );
}
