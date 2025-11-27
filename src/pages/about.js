import { useState } from "react";
import HeaderBanner from "../Components/HeaderBanner";
import MissionImage from '../assets/img/Mission.jpg';
import VisionImage from '../assets/img/Vision.jpg';
import Church from '../assets/img/Church.jpg';
import LogoImage from '../assets/img/Logo.jpg';

export default function About() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const beliefs = [
    {
      title: "The Trinity",
      content: "There is one God, eternally coexistent in three persons: Father, Son and Holy Spirit. God the Father is the creator of heaven and earth and the sustainer of all things. There is but one God, infinite, eternal and perfect in holiness, truth and love. He is all-powerful, all-knowing and everywhere."
    },
    {
      title: "Jesus Christ",
      content: "The deity of Jesus Christ of Nazareth, His virgin birth, His sinless life, His miracles, His vicarious and atoning death through His shed blood, His burial, His bodily resurrection, and His ascension to the right hand of the Father, and His personal return in power and glory. He is the Head of His body, the Church."
    },
    {
      title: "The Holy Spirit",
      content: "God the Holy Spirit convicts the world of sin, righteousness and judgement, unites man to Jesus Christ in faith, brings about the new birth, and dwells within the believer, enabling him to grow in sanctification and righteousness, and become a gift of God to the church."
    },
    {
      title: "The Bible",
      content: "The Bible is the inspired, only infallible and authoritative Word of God. It is our supreme authority in all matters of faith and conduct."
    },
    {
      title: "Salvation",
      content: "We believe that salvation, with its forgiveness of sins, impartation of new nature and eternal life is a free gift from God upon receiving Jesus Christ as Savior and Lord."
    },
    {
      title: "Holy Spirit's Ministry",
      content: "The present ministry of the Holy Spirit, by whose indwelling the Christian is enabled to live a godly life."
    },
    {
      title: "Baptism of the Spirit",
      content: "The baptism of the Holy Spirit, with the evidence of speaking in tongues, is available to all that believe in Jesus Christ, and will totally surrender their lives to the complete, perfect will of God."
    },
    {
      title: "Gifts of the Spirit",
      content: "The gifts of the Holy Spirit (the word of wisdom, the word of knowledge, faith, gifts of healing, working of miracles, prophecy, discerning of spirits, diverse kinds of tongues and the interpretation of tongues) are available today through the Holy Spirit, and are for the church."
    },
    {
      title: "Fruit of the Spirit",
      content: "The fruit of the Holy Spirit (love, joy, peace, long-suffering, gentleness, goodness, faith, meekness and temperance) and the character of God must be evident in the life of every disciple to live and walk by the Spirit."
    }
  ];

  return (
    <div>
      <HeaderBanner
        title="About"
        image={Church}
      />


      <section className="bg-white] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-black mb-6">Who We Are</h2>
          <p className="text-black max-w-3xl mx-auto text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate odio quibusdam, placeat exercitationem adipisci eos sint reprehenderit, repudiandae cumque numquam, similique unde obcaecati reiciendis facilis tenetur. Omnis dolor cumque exercitationem.
          </p>
        </div>
      </section>

      {/* ============================================================================================================================== */}



      <section className="bg-[#232323] py-16 mx-auto">

        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">What We Believe</h2>
        </div>

        {/* Accordion */}
        <div className="max-w-6xl mx-auto divide-y divide-gray-700 space-y-4">
          {beliefs.map((belief, index) => (
            <div key={index}>
              {/* Accordion Header */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-5 flex justify-between items-center rounded-md bg-white text-black hover:bg-gray-200 transition-colors duration-300 focus:outline-none"
              >
                <h3 className="text-xl font-semibold">{belief.title}</h3>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                    }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Accordion Content */}
              <div
                className={`overflow-hidden transition-all duration-500 ${openIndex === index ? "max-h-96 py-6 px-6" : "max-h-0 px-6"
                  }`}
                style={{ backgroundColor: "#232323" }}
              >
                <p className="text-gray-300 leading-relaxed">{belief.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================================================================================== */}

      <section className="bg-black text-white">
        {/* Mission */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 flex justify-center">
            <img
              src={MissionImage}
              alt="Mission"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:w-1/2 text-left space-y-6 px-10">
            <h2 className="text-3xl md:text-4xl font-bold">Mission</h2>
            <ul className="md:text-lg space-y-4 list-disc list-inside">
              <li>To equip and train every living saint for purposes of righteousness and lifestyle (2 Tim. 3:16-17) through holiness.</li>
              <li>To rebuild and restructure according to the original biblical pattern — apostolic foundation, prophetic ministries, and Church (Eph. 2:20, Eph. 4:11).</li>
              <li>To revive father and son relationship (Mal. 4:6), guided by Kingdom laws, principles, and divine order, binding with the spirit of love and harmony (Mat. 5-7).</li>
              <li>To raise up a new breed of people without greed, worthy of each calling as love-slaves to Christ and the Great Commission (Mat. 28:18-20).</li>
            </ul>
          </div>
        </div>

        {/* Vision */}
        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/2 flex justify-center">
            <img
              src={VisionImage}
              alt="Vision"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:w-1/2 text-left space-y-6 px-10">
            <h2 className="text-3xl md:text-4xl font-bold">Vision</h2>
            <ul className="md:text-lg space-y-4 list-disc list-inside">
              <li>Church empowerment (Acts 18) and regaining genuine Kingdom identity (Rev. 22:1-5).</li>
              <li>Unified faith among believers.</li>
              <li>Attaining maturity through the knowledge of the Son of God.</li>
              <li>The fullness of Christ in the lives of the saints as heirs of the promised kingdom (Eph. 4:13).</li>
              <li>A glorious church as the bride of our Lord Jesus Christ (Rev. 19:7).</li>
            </ul>
          </div>
        </div>
      </section>



      <section className="bg-[#1a1a1a] py-20 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">


          {/* Logo */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={LogoImage} // <-- import this at the top of the file
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
