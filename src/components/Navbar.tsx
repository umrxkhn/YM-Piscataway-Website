import { useState } from "react";
import { Menu, X } from "lucide-react";
import ymLogo from "@/assets/ym-logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Connect", href: "#connect" },
  { label: "Donate", href: "#donate" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur-md border-b border-border">
      {/* Mobile layout */}
      <div className="md:hidden grid grid-cols-3 items-center h-16 px-4 bg-black">
        <div className="flex items-center justify-start">
          <button className="text-foreground" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <a href="#home" className="justify-self-center flex items-center">
          <img src={ymLogo} alt="YM Piscataway" className="h-10 w-10 object-contain" />
        </a>
        <a
          href="#contact"
          className="bg-gold-gradient text-primary-foreground px-3 py-1.5 rounded-md text-xs font-semibold justify-self-end transition-all duration-200 hover:scale-105 hover:shadow-[0_0_20px_2px_hsl(43_80%_50%/0.4)]"
        >
          Join Us
        </a>
      </div>

      {/* Desktop / tablet layout */}
      <div className="hidden md:flex items-center h-16 px-6 container mx-auto">
        <a href="#home" className="flex items-center mr-auto transition-all duration-200 hover:scale-105">
          <span className="font-heading text-xl font-bold text-primary tracking-wider whitespace-nowrap">
            YM Piscataway
          </span>
        </a>
        <div className="flex items-center gap-6 mx-auto">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="bg-gold-gradient text-primary-foreground px-5 py-2 rounded-md text-sm font-semibold ml-auto transition-all duration-200 hover:scale-105 hover:shadow-[0_0_20px_2px_hsl(43_80%_50%/0.4)]"
        >
          Join Us
        </a>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border px-4 pb-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-foreground/70 hover:text-primary py-2"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
