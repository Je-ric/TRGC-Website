import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Leadership from './pages/Leadership';
import Ministry from './pages/Ministry';
import Give from './pages/Give';
import Events from './pages/Events';
import History from './pages/History';

function App() {
  return (
    <Router>
      {/* Navigation bar */}
      <nav className="bg-gray-800 text-white p-4 flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/leadership">Leadership</Link>
        <Link to="/ministry">Ministry</Link>
        <Link to="/give">Give</Link>
        <Link to="/events">Events</Link>
        <Link to="/history">History</Link>
      </nav>

      {/* Page content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/ministry" element={<Ministry />} />
        <Route path="/give" element={<Give />} />
        <Route path="/events" element={<Events />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  );
}

export default App;
