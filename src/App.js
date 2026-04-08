import { useState, useEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route, NavLink, Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import Home from './pages/Home';
import About from './pages/About';
import Leadership from './pages/Leadership';
import Ministry from './pages/Ministry';
import Give from './pages/Give';
import Connect from './pages/Connect';
import KnowGod from './pages/KnowGod';
import Baptism from './pages/Baptism';
import PlanVisit from './pages/PlanVisit';
import Sermons from './pages/Sermons';
import PrayerRequest from './pages/PrayerRequest';
import Footer from './Components/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef(null);

  const desktopLinkClass = ({ isActive }) =>
    isActive
      ? 'text-orange-400 font-semibold'
      : 'text-white/95 hover:text-orange-200 transition duration-300';

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close Connect dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (moreRef.current && !moreRef.current.contains(e.target)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const moreLinks = [
    { to: '/connect', label: 'Connect' },
    { to: '/sermons', label: 'Sermons' },
    { to: '/baptism', label: 'Baptism' },
    { to: '/prayer-request', label: 'Prayer Request' },
    { to: '/leadership', label: 'Leadership' },
  ];

  return (
    <Router basename="/">
      <ScrollToTop />
      <nav className={`fixed top-0 w-full z-50 h-16 md:h-28 transition-all duration-300 ${isScrolled ? 'bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)]' : 'bg-gradient-to-b from-black/70 via-black/35 to-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="flex justify-between items-center w-full">

            <div className="flex items-center space-x-3">
              <Link to="/" className="flex items-center space-x-2">
                <img
                  src={`${process.env.PUBLIC_URL}/img/Logo.png`}
                  alt="Risen Generation"
                  className="h-12 w-auto hover:opacity-80 transition duration-300"
                />
                <span className="text-white font-bold text-xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
                  Risen Generation Church
                </span>
              </Link>
            </div>


            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink to="/" className={desktopLinkClass}>
                Home
              </NavLink>
              <NavLink to="/plan-visit" className={desktopLinkClass}>
                Plan a Visit
              </NavLink>
              <NavLink to="/about" className={desktopLinkClass}>
                About
              </NavLink>
              <NavLink to="/know-god" className={desktopLinkClass}>
                Know God
              </NavLink>
              <NavLink to="/ministry" className={desktopLinkClass}>
                Ministries
              </NavLink>
              <NavLink to="/give" className={desktopLinkClass}>
                Give
              </NavLink>

              {/* More dropdown */}
              <div className="relative" ref={moreRef}>
                <button
                  onClick={() => setMoreOpen(!moreOpen)}
                  className="flex items-center gap-1 text-white/95 hover:text-orange-200 transition duration-300 focus:outline-none"
                >
                  More <FaChevronDown className={`w-3 h-3 transition-transform duration-200 ${moreOpen ? 'rotate-180' : ''}`} />
                </button>
                {moreOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-black/90 backdrop-blur-md border border-white/10 shadow-xl z-50">
                    {moreLinks.map(({ to, label }) => (
                      <NavLink
                        key={to}
                        to={to}
                        onClick={() => setMoreOpen(false)}
                        className={({ isActive }) =>
                          `block px-4 py-3 text-sm transition duration-200 border-b border-white/5 last:border-0 ${
                            isActive ? 'text-orange-500 font-semibold' : 'text-white hover:text-orange-400 hover:bg-white/5'
                          }`
                        }
                      >
                        {label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white hover:text-gray-300 focus:outline-none transition duration-300"
              >
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu overlay backdrop */}
          {isMenuOpen && (
            <div
              className="md:hidden fixed inset-0 bg-black/40 z-[-1]"
              onClick={() => setIsMenuOpen(false)}
            />
          )}

          {/* Mobile Menu - Black BG, White Text */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-black border-t border-white/20 shadow-lg">
              <div className="px-4 pt-2 pb-3 space-y-1">
                <NavLink to="/" className={({ isActive }) => `block px-3 py-2 transition duration-300 ${isActive ? "text-orange-500 font-semibold" : "text-white hover:text-gray-300"}`} onClick={toggleMenu}>Home</NavLink>
                <NavLink to="/plan-visit" className={({ isActive }) => `block px-3 py-2 transition duration-300 ${isActive ? "text-orange-500 font-semibold" : "text-white hover:text-gray-300"}`} onClick={toggleMenu}>Plan a Visit</NavLink>
                <NavLink to="/about" className={({ isActive }) => `block px-3 py-2 transition duration-300 ${isActive ? "text-orange-500 font-semibold" : "text-white hover:text-gray-300"}`} onClick={toggleMenu}>About</NavLink>
                <NavLink to="/know-god" className={({ isActive }) => `block px-3 py-2 transition duration-300 ${isActive ? "text-orange-500 font-semibold" : "text-white hover:text-gray-300"}`} onClick={toggleMenu}>Know God</NavLink>
                <NavLink to="/ministry" className={({ isActive }) => `block px-3 py-2 transition duration-300 ${isActive ? "text-orange-500 font-semibold" : "text-white hover:text-gray-300"}`} onClick={toggleMenu}>Ministries</NavLink>
                <NavLink to="/give" className={({ isActive }) => `block px-3 py-2 transition duration-300 ${isActive ? "text-orange-500 font-semibold" : "text-white hover:text-gray-300"}`} onClick={toggleMenu}>Give</NavLink>
                <div className="border-t border-white/10 pt-1">
                  <p className="px-3 py-1 text-xs uppercase tracking-widest text-white/40">More</p>
                  {moreLinks.map(({ to, label }) => (
                    <NavLink key={to} to={to} className={({ isActive }) => `block px-3 py-2 transition duration-300 ${isActive ? "text-orange-500 font-semibold" : "text-white hover:text-gray-300"}`} onClick={toggleMenu}>
                      {label}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Page content - Add padding-top to account for fixed nav */}
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/ministry" element={<Ministry />} />
          <Route path="/give" element={<Give />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/know-god" element={<KnowGod />} />
          <Route path="/baptism" element={<Baptism />} />
          <Route path="/plan-visit" element={<PlanVisit />} />
          <Route path="/sermons" element={<Sermons />} />
          <Route path="/prayer-request" element={<PrayerRequest />} />
        </Routes>
      </div>

      <Footer />

    </Router>

  );
}

export default App;
