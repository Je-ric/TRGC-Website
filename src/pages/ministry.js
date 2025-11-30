import HeaderBanner from "../Components/HeaderBanner";

export default function Ministry() {
  const ministries = [
    {
      title: "Children's Ministry",
      description: "Guiding children to know and love God through creative, Christ-centered programs.",
      image: "img/test-image.webp",
      leader: "John Doe",
    },
    {
      title: "Youth Ministry",
      description: "Empowering students to grow spiritually, build godly character, and develop leadership.",
      image: "img/test-image.webp",
      leader: "John Doe",
    },
    {
      title: "Parents Ministry",
      description: "Equipping parents with biblical principles to nurture strong, faith-filled families.",
      image: "img/test-image.webp",
      leader: "John Doe",
    },
    {
      title: "Seniors Ministry",
      description: "Providing care, fellowship, and spiritual encouragement to our senior adults.",
      image: "img/test-image.webp",
      leader: "John Doe",
    },
    {
      title: "Worship Ministry",
      description: "Leading the church in authentic worship through music, vocals, and creative expressions.",
      image: "img/test-image.webp",
      leader: "John Doe",
    },
    {
      title: "Technical Ministry",
      description: "Supporting worship and events through sound, media, lighting, and production excellence.",
      image: "img/test-image.webp",
      leader: "John Doe",
    },
    {
      title: "Finance Ministry",
      description: "Stewarding church finances with integrity, transparency, and biblical principles.",
      image: "img/test-image.webp",
      leader: "John Doe",
    },
    {
      title: "MIS Ministry",
      description: "Managing church information systems, technology, and data to support ministry operations.",
      image: "img/test-image.webp",
      leader: "John Doe",
    },
    {
      title: "Ushering Ministry",
      description: "Creating a warm, welcoming environment and assisting members during services.",
      image: "img/test-image.webp",
      leader: "John Doe",
    },
    {
      title: "Intercessory Ministry",
      description: "Standing in prayer for the church, community, and global needs with dedication and faith.",
      image: "img/test-image.webp",
      leader: "John Doe",
    },
    {
      title: "Evangelism Ministry",
      description: "Sharing the gospel and reaching people through outreach, discipleship, and missions.",
      image: "img/test-image.webp",
      leader: "John Doe",
    },
    {
      title: "Facilities Ministry",
      description: "Overseeing the maintenance, cleanliness, and safety of all church facilities and grounds.",
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

                <div className="absolute inset-0 
  bg-gradient-to-br 
  from-red-500/20 
  via-transparent 
  to-red-800/20 
  z-5 pointer-events-none">
                </div>



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
                  <strong className="text-white font-bold text-2xl mt-6">Ministry Leader: {ministry.leader}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
