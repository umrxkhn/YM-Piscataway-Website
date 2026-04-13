import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="/#home" className="font-heading text-xl font-bold text-primary tracking-wider">
          YM Piscataway
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={`/${link.href}`}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/connect"
            className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
          >
            Connect
          </Link>
          <a
            href="/#contact"
            className="bg-gold-gradient text-primary-foreground px-5 py-2 rounded-md text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Join Us
          </a>
        </div>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-background border-t border-border px-4 pb-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={`/${link.href}`}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-foreground/70 hover:text-primary py-2"
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/connect"
            onClick={() => setOpen(false)}
            className="block text-sm font-medium text-foreground/70 hover:text-primary py-2"
          >
            Connect
          </Link>
          <a
            href="/#contact"
            onClick={() => setOpen(false)}
            className="block bg-gold-gradient text-primary-foreground px-5 py-2 rounded-md text-sm font-semibold text-center"
          >
            Join Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
