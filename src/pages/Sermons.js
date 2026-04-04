import HeaderBanner from '../Components/HeaderBanner';
import { FaFacebookF, FaExternalLinkAlt } from 'react-icons/fa';

// Replace these video IDs with actual TRGC Facebook Live video IDs
const sermons = [
  {
    title: 'Sunday Service',
    date: 'Latest',
    embedUrl: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Frisengenerationchurch%2Fvideos%2F1&show_text=false',
  },
  {
    title: 'Sunday Service',
    date: 'Previous Week',
    embedUrl: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Frisengenerationchurch%2Fvideos%2F2&show_text=false',
  },
  {
    title: 'Sunday Service',
    date: '2 Weeks Ago',
    embedUrl: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Frisengenerationchurch%2Fvideos%2F3&show_text=false',
  },
];

export default function Sermons() {
  return (
    <div>
      <HeaderBanner
        title="Sermons"
        image={`${process.env.PUBLIC_URL}/backgrounds/BG1.png`}
      />

      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <p className="text-sm uppercase tracking-[0.3em] text-orange-500">Watch & Grow</p>
          <h2 className="text-3xl md:text-4xl font-black text-slate-800 uppercase tracking-wide">
            Latest Services
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Missed a Sunday? Watch our latest services below. We go live every Sunday at 9:30 AM on Facebook.
          </p>
          <a
            href="https://www.facebook.com/TheRisenGen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold uppercase tracking-wider text-sm transition-colors duration-300"
          >
            <FaFacebookF /> Watch on Facebook <FaExternalLinkAlt className="w-3 h-3" />
          </a>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {sermons.map((s, i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-slate-50">
              <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                <iframe
                  src={s.embedUrl}
                  title={`${s.title} — ${s.date}`}
                  className="absolute inset-0 w-full h-full"
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                />
              </div>
              <div className="p-4 space-y-1">
                <p className="text-xs uppercase tracking-widest text-orange-500">{s.date}</p>
                <h3 className="text-base font-bold text-slate-800">{s.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-400 text-xs mt-10 font-raleway">
          * Replace the Facebook video IDs in <code>src/pages/Sermons.js</code> with actual TRGC video URLs.
        </p>
      </section>
    </div>
  );
}
