import { useState } from "react";

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
    <div className="space-y-16">
      {/* About the Church */}
      <section className="relative h-96 md:h-[500px] w-full">
        <img
          src="https://images.unsplash.com/photo-1603133872877-c07f1f32bdfb?auto=format&fit=crop&w=1600&q=80"
          alt="About the Church"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About the Church</h2>
          <p className="text-white max-w-3xl">
            Founded in 1995, TRGC is a Christ-centered community dedicated to worship, teaching the Bible,
            and serving others. Our church is a place where everyone is welcome.
          </p>
        </div>
      </section>

      <section className="bg-[#232323] py-16 px-6">
      {/* Section Title */}
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
                className={`w-6 h-6 transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
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
              className={`overflow-hidden transition-all duration-500 ${
                openIndex === index ? "max-h-96 py-6 px-6" : "max-h-0 px-6"
              }`}
              style={{ backgroundColor: "#232323" }}
            >
              <p className="text-gray-300 leading-relaxed">{belief.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

      {/* Mission */}
      <section className="relative h-96 md:h-[500px] w-full">
        <img
          src="https://images.unsplash.com/photo-1601838094015-197d5fa71505?auto=format&fit=crop&w=1600&q=80"
          alt="Mission"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Mission</h2>
          <p className="text-white max-w-3xl">
            Our mission is to make disciples of all nations, cultivate a Christ-centered community,
            and demonstrate God’s love through service and outreach.
          </p>
        </div>
      </section>

      {/* Vision */}
      <section className="relative h-96 md:h-[500px] w-full">
        <img
          src="https://images.unsplash.com/photo-1520697222864-90c8a55f3d9c?auto=format&fit=crop&w=1600&q=80"
          alt="Vision"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Vision</h2>
          <p className="text-white max-w-3xl">
            Our vision is to be a thriving spiritual family where every member grows in faith,
            serves with joy, and impacts our community for Christ.
          </p>
        </div>
      </section>

      <section></section>
    </div>
  );
}
