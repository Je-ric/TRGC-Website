import HeaderBanner from "../Components/HeaderBanner";

export default function Ministry() {
  const ministries = [
    {
      title: "Kid's Ministry",
      description: "Guiding children to know and love God through creative, Christ-centered programs.",
      image: `${process.env.PUBLIC_URL}/img/test-image.webp`,
      leader: "John Doe",
    },
    {
      title: "Youth Ministry",
      description: "Empowering students to grow spiritually, build godly character, and develop leadership.",
      image: `${process.env.PUBLIC_URL}/img/test-image.webp`,
      leader: "John Doe",
    },
    {
      title: "Parents Ministry",
      description: "Equipping parents with biblical principles to nurture strong, faith-filled families.",
      image: `${process.env.PUBLIC_URL}/img/test-image.webp`,
      leader: "John Doe",
    },
    {
      title: "Seniors Ministry",
      description: "Providing care, fellowship, and spiritual encouragement to our senior adults.",
      image: `${process.env.PUBLIC_URL}/img/test-image.webp`,
      leader: "John Doe",
    },
    {
      title: "Worship Ministry",
      description: "Leading the church in authentic worship through music, vocals, and creative expressions.",
      image: `${process.env.PUBLIC_URL}/img/test-image.webp`,
      leader: "John Doe",
    },
    {
      title: "Technical Ministry",
      description: "Supporting worship and events through sound, media, lighting, and production excellence.",
      image: `${process.env.PUBLIC_URL}/img/test-image.webp`,
      leader: "John Doe",
    },
    {
      title: "Finance Ministry",
      description: "Stewarding church finances with integrity, transparency, and biblical principles.",
      image: `${process.env.PUBLIC_URL}/img/test-image.webp`,
      leader: "John Doe",
    },
    {
      title: "Multimedia Ministry",
      description: "Managing church information systems, technology, and data to support ministry operations.",
      image: `${process.env.PUBLIC_URL}/img/test-image.webp`,
      leader: "John Doe",
    },
    {
      title: "Ushering Ministry",
      description: "Creating a warm, welcoming environment and assisting members during services.",
      image: `${process.env.PUBLIC_URL}/img/test-image.webp`,
      leader: "John Doe",
    },
    {
      title: "Prayer Ministry",
      description: "Standing in prayer for the church, community, and global needs with dedication and faith.",
      image: `${process.env.PUBLIC_URL}/img/test-image.webp`,
      leader: "John Doe",
    },
    {
      title: "Evangelism Ministry",
      description: "Sharing the gospel and reaching people through outreach, discipleship, and missions.",
      image: `${process.env.PUBLIC_URL}/img/test-image.webp`,
      leader: "John Doe",
    },
    {
      title: "Facilities Ministry",
      description: "Overseeing the maintenance, cleanliness, and safety of all church facilities and grounds.",
      image: `${process.env.PUBLIC_URL}/img/test-image.webp`,
      leader: "John Doe",
    },
    {
      title: "Food Ministry",
      description: "Overseeing the maintenance, cleanliness, and safety of all church facilities and grounds.",
      image: `${process.env.PUBLIC_URL}/img/test-image.webp`,
      leader: "John Doe",
    },
  ];


  return (
    <div>
      <HeaderBanner
        title="Ministry"
        image={`${process.env.PUBLIC_URL}/backgrounds/BG1.png`} />

      <section className="bg-[#0a0a0a] py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-orange-500 font-semibold">Serving Together</p>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            Our Ministries
          </h2>
          <div className="w-16 h-[2px] bg-orange-500 mx-auto" />
          <p className="text-white/60 text-base md:text-lg leading-relaxed">
            Every ministry at TRGC exists to build up the body of Christ — equipping believers, reaching the lost, and serving our community with love and excellence.
          </p>
        </div>
      </section>

      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200">
          {ministries.map((ministry) => (
            <div
              key={ministry.title}
              role="article"
              aria-label={ministry.title}
              className="relative group w-full h-80 md:h-96 overflow-hidden cursor-pointer bg-black"
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



              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6 z-10 pointer-events-none transition-opacity duration-500 opacity-100 group-hover:opacity-0">
                <h2 className="text-2xl md:text-3xl font-bold">{ministry.title}</h2>
                <p className="text-white/90 mt-3 text-sm md:text-base">{ministry.description}</p>
              </div>

              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                <h2 className="text-2xl md:text-3xl font-bold">{ministry.title}</h2>
                <p className="text-white/90 mt-3 text-sm md:text-base">{ministry.description}</p>
                <p className="text-orange-400 font-semibold text-base mt-5">Ministry Leader: {ministry.leader}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
