export default function Ministry() {
  const ministries = [
    {
      title: "Youth",
      description: "Equipping the next generation to grow in faith and leadership.",
      image: "img/Give-1.jpg",
    },
    {
      title: "Worship",
      description: "Leading the congregation in heartfelt worship and praise.",
      image: "img/Give-1.jpg",
    },
    {
      title: "Finance",
      description: "Managing church resources responsibly and transparently.",
      image: "img/Give-1.jpg",
    },
    {
      title: "Children",
      description: "Nurturing children in faith through fun and engaging programs.",
      image: "img/Give-1.jpg",
    },
    {
      title: "Parents",
      description: "Supporting parents in raising spiritually grounded families.",
      image: "img/Give-1.jpg",
    },
    {
      title: "Senior",
      description: "Caring for the senior members of our church community.",
      image: "img/Give-1.jpg",
    },
    {
      title: "MIS",
      description: "Managing church data and information systems efficiently.",
      image: "img/Give-1.jpg",
    },
    {
      title: "Technical",
      description: "Handling audio, video, lighting, and technical setups.",
      image: "img/Give-1.jpg",
    },
    {
      title: "Intercessory",
      description: "Praying for the needs of the congregation and the world.",
      image: "img/Give-1.jpg",
    },
    {
      title: "Ushering",
      description: "Welcoming and guiding members and guests during services.",
      image: "img/Give-1.jpg",
    },
  ];

  return (
    <div className="p-8 max-w-[1200px] mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Ministries</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ministries.map((ministry) => (
          <div key={ministry.title} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
            <img
              src={ministry.image}
              alt={ministry.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{ministry.title}</h2>
              <p className="text-white/80">{ministry.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
