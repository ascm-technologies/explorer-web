import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      {/* Logo / Brand */}
      <Link to="/" className="brand-text">
        Explorer
      </Link>

      {/* Navigation */}
      <nav className="nav-links">
        <Link to="/" className="hover:text-accent">Home</Link>
        <Link to="/privacy-policy" className="hover:text-accent">Privacy</Link>
        <Link to="/terms" className="hover:text-accent">Terms</Link>
      </nav>
    </header>

  );
}
