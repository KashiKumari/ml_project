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
    ? "text-gray-900 font-semibold border-b-2 border-gray-900 pb-0.5 text-lg"
    : "text-gray-900 hover:text-indigo-600 transition-colors duration-200 text-lg";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm shadow-black/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-base font-black text-white shadow-lg shadow-blue-500/30">
            D
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-gray-900">
            Defect<span className="text-gray-900">Detector</span>
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
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-5 flex flex-col gap-5">
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
