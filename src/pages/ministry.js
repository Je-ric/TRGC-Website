import HeaderBanner from "../Components/HeaderBanner";

export default function Ministry() {
  const ministries = [
    {
      title: "Children",
      description: "Nurturing children in faith through fun and engaging programs.",
      image: "img/test-image.webp",
      leader: "John Doe",
    },
    {
      title: "Youth",
      description: "Equipping the next generation to grow in faith and leadership.",
      image: "img/test-image.webp",
      leader: "John Doe",
    },
    {
      title: "Parents",
      description: "Supporting parents in raising spiritually grounded families.",
      image: "img/test-image.webp",
      leader: "John Doe",
    },
    {
      title: "Senior",
      description: "Caring for the senior members of our church community.",
      image: "img/test-image.webp",
      leader: "John Doe",
    },
    {
      title: "Music",
      description: "Leading the congregation in heartfelt worship and praise.",
      image: "img/test-image.webp",
      leader: "John Doe",
    },
    {
      title: "Technical",
      description: "Handling audio, video, lighting, and technical setups.",
      image: "img/test-image.webp",
      leader: "John Doe",
    },
    {
      title: "Finance",
      description: "Managing church resources responsibly and transparently.",
      image: "img/test-image.webp",
      leader: "John Doe",
    },
    {
      title: "MIS",
      description: "Managing church data and information systems efficiently.",
      image: "img/test-image.webp",
      leader: "John Doe",
    },
    {
      title: "Ushering",
      description: "Welcoming and guiding members and guests during services.",
      image: "img/test-image.webp",
      leader: "John Doe",
    },
    {
      title: "Intercessory",
      description: "Praying for the needs of the congregation and the world.",
      image: "img/test-image.webp",
      leader: "John Doe",
    },
    {
      title: "Evangelism",
      description: "Spreading the gospel and reaching out to the community.",
      image: "img/test-image.webp",
      leader: "John Doe",
    },
    {
      title: "Facilities",
      description: "Maintaining and managing church buildings and grounds.",
      image: "img/test-image.webp",
      leader: "John Doe",
    },
  ];

  return (
    <div>
      <div>
        <HeaderBanner
          title="Ministry"
          image="img/Ministry.jpg"
        />

        <div className="w-full py-1">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {ministries.map((ministry) => (
              <div
                key={ministry.title}
                className="relative group w-full h-[28rem] overflow-hidden cursor-pointer"
              >
                {/* Image */}
                <img
                  src={ministry.image}
                  alt={ministry.title}
                  className="
              w-full h-full object-cover object-center 
              filter opacity-90 grayscale 
              transition-all duration-500 
              group-hover:grayscale-0 group-hover:scale-110 group-hover:blur-sm
            "
                />

                <div className="absolute inset-0 bg-black/50 z-5 pointer-events-none"></div>

                {/* Default visible text (title + description) */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6 z-10 pointer-events-none
                          transition-opacity duration-500 opacity-100 group-hover:opacity-0">
                  <h2 className="text-3xl md:text-4xl font-bold">{ministry.title}</h2>
                  <p className="text-white/90 mt-4 text-lg md:text-xl">{ministry.description}</p>
                </div>

                {/* Hover overlay - shows all info including leader */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6 bg-gradient-to-t from-black/60 via-red/40 to-blue/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                  <h2 className="text-3xl md:text-4xl font-bold">{ministry.title}</h2>
                  <p className="text-white/90 mt-4 text-lg md:text-xl">{ministry.description}</p>
                  <p className="text-white font-bold text-2xl mt-6">Ministry Leader: {ministry.leader}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
