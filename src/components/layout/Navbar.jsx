import{ useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Container from "../ui/Container";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <header className="navbar">
        {/* Logo / Brand */}
        <Link to="/" className="brand-text">
          Explorer
        </Link>

        {/* Mobile Toggle */}
        <button
          className="nav-toggle"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Navigation */}
        <nav className={`nav-links ${open ? "open" : ""}`}>

          <Link to="/" className="hover:text-accent">Home</Link>
          <Link to="/privacy-policy" className="hover:text-accent">Privacy</Link>
          <Link to="/terms" className="hover:text-accent">Terms</Link>
        </nav>
      </header>
    </Container>

  );
}
