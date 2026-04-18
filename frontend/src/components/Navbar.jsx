import { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/",          label: "Home",      end: true },
  { to: "/dashboard", label: "Dashboard"            },
  { to: "/about",     label: "About"                },
  { to: "/contact",   label: "Contact"              },
];

const linkClass = ({ isActive }) =>
  isActive
    ? "text-white font-semibold border-b-2 border-white/70 pb-0.5 text-lg"
    : "text-white/80 hover:text-white transition-colors duration-200 text-lg";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="glass sticky top-0 z-50 shadow-lg shadow-black/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#16BFFD] to-[#CB3066] flex items-center justify-center text-base font-black text-white shadow-lg shadow-[#16BFFD]/30">
            D
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-white">
            Defect<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#16BFFD] to-[#CB3066]">Detector</span>
          </span>
        </NavLink>

        {/* Desktop links */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map(({ to, label, end }) => (
            <NavLink key={to} to={to} end={end} className={linkClass}>
              {label}
            </NavLink>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1 focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white/80 transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white/80 transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white/80 transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass border-t border-white/10 px-6 py-5 flex flex-col gap-5">
          {links.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
