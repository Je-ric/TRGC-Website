import { useState, useEffect } from 'react'; // Added useEffect
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Home from './pages/Home';
import About from './pages/About';
import Leadership from './pages/Leadership';
import Ministry from './pages/Ministry';
import Give from './pages/Give';
import Events from './pages/Events';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Track scroll state

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Detect scroll to apply glass effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <nav className={`fixed top-0 w-full z-50 h-28 transition-all duration-300 ${isScrolled ? 'bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="flex justify-between items-center w-full">
            
            <div className="text-white font-bold text-xl">
              <Link to="/">
                <img src="/img/logo.png" alt="Risen Generation" className="h-10 w-auto hover:opacity-80 transition duration-300" />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <NavLink to="/" className={({ isActive }) => isActive ? "text-orange-500 font-semibold" : "text-white hover:text-gray-300 transition duration-300"}>
                Home
              </NavLink>
              <NavLink to="/about" className={({ isActive }) => isActive ? "text-orange-500 font-semibold" : "text-white hover:text-gray-300 transition duration-300"}>
                About
              </NavLink>
              <NavLink to="/leadership" className={({ isActive }) => isActive ? "text-orange-500 font-semibold" : "text-white hover:text-gray-300 transition duration-300"}>
                Leadership
              </NavLink>
              <NavLink to="/ministry" className={({ isActive }) => isActive ? "text-orange-500 font-semibold" : "text-white hover:text-gray-300 transition duration-300"}>
                Ministry
              </NavLink>
              <NavLink to="/give" className={({ isActive }) => isActive ? "text-orange-500 font-semibold" : "text-white hover:text-gray-300 transition duration-300"}>
                Give
              </NavLink>
              <NavLink to="/events" className={({ isActive }) => isActive ? "text-orange-500 font-semibold" : "text-white hover:text-gray-300 transition duration-300"}>
                Events
              </NavLink>
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

          {/* Mobile Menu - Black BG, White Text */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-black border-t border-white/20 shadow-lg">
              <div className="px-4 pt-2 pb-3 space-y-1">
                <NavLink to="/" className={({ isActive }) => `block px-3 py-2 transition duration-300 ${isActive ? "text-orange-500 font-semibold" : "text-white hover:text-gray-300"}`} onClick={toggleMenu}>
                  Home
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => `block px-3 py-2 transition duration-300 ${isActive ? "text-orange-500 font-semibold" : "text-white hover:text-gray-300"}`} onClick={toggleMenu}>
                  About
                </NavLink>
                <NavLink to="/leadership" className={({ isActive }) => `block px-3 py-2 transition duration-300 ${isActive ? "text-orange-500 font-semibold" : "text-white hover:text-gray-300"}`} onClick={toggleMenu}>
                  Leadership
                </NavLink>
                <NavLink to="/ministry" className={({ isActive }) => `block px-3 py-2 transition duration-300 ${isActive ? "text-orange-500 font-semibold" : "text-white hover:text-gray-300"}`} onClick={toggleMenu}>
                  Ministry
                </NavLink>
                <NavLink to="/give" className={({ isActive }) => `block px-3 py-2 transition duration-300 ${isActive ? "text-orange-500 font-semibold" : "text-white hover:text-gray-300"}`} onClick={toggleMenu}>
                  Give
                </NavLink>
                <NavLink to="/events" className={({ isActive }) => `block px-3 py-2 transition duration-300 ${isActive ? "text-orange-500 font-semibold" : "text-white hover:text-gray-300"}`} onClick={toggleMenu}>
                  Events
                </NavLink>
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
          <Route path="/events" element={<Events />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
