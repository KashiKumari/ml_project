import { Link } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home",      to: "/"          },
  { label: "Dashboard", to: "/dashboard" },
  { label: "About",     to: "/about"     },
  { label: "Contact",   to: "/contact"   },
];

const PRODUCT_LINKS = [
  { label: "Defect Prediction",  to: "/dashboard" },
  { label: "Quality Analysis",   to: "/dashboard" },
  { label: "Production Metrics", to: "/dashboard" },
  { label: "ML Model Info",      to: "/about"     },
];

const RESOURCE_LINKS = [
  { label: "How It Works",  to: "/about"   },
  { label: "Tech Stack",    to: "/about"   },
  { label: "API Reference", to: "/about"   },
  { label: "Get In Touch",  to: "/contact" },
];

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "https://twitter.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="glass relative mt-auto overflow-hidden border-t border-white/10">

      {/* Brand accent line using brand gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#16BFFD]/60 to-[#CB3066]/60" />

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-8">

        {/* ── Top grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2.5 mb-5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#16BFFD] to-[#CB3066] flex items-center justify-center text-white font-black text-base shadow-md shadow-[#16BFFD]/20 group-hover:shadow-[#16BFFD]/40 transition-shadow">
                D
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">
                Defect<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#16BFFD] to-[#CB3066]">Detector</span>
              </span>
            </Link>

            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              An ML-powered platform that predicts automotive manufacturing
              defects in real time — helping teams reduce waste and improve
              product quality.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {SOCIALS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white/60 hover:text-white hover:border-[#16BFFD]/50 hover:bg-white/10 transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-bold text-white/50 uppercase tracking-widest mb-5">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-white/70 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-[#16BFFD] transition-all duration-200 rounded-full" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-bold text-white/50 uppercase tracking-widest mb-5">
              Product
            </h3>
            <ul className="flex flex-col gap-3">
              {PRODUCT_LINKS.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-white/70 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-[#16BFFD] transition-all duration-200 rounded-full" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-bold text-white/50 uppercase tracking-widest mb-5">
              Resources
            </h3>
            <ul className="flex flex-col gap-3">
              {RESOURCE_LINKS.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-white/70 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-[#16BFFD] transition-all duration-200 rounded-full" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent mb-8" />

        {/* ── Bottom bar ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            © {year}{" "}
            <span className="text-white/70 font-medium">DefectDetector</span>
            {" "}· Automotive Defect Detection System
          </p>

          <div className="flex items-center gap-2 text-white/50 text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>System operational</span>
            <span className="mx-2 text-white/20">|</span>
            <span>Built with React · Flask · Scikit-learn</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
