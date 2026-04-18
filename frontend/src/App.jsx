import { Routes, Route } from "react-router-dom";
import Navbar    from "./components/Navbar";
import Footer    from "./components/Footer";
import Home      from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import About     from "./pages/About";
import Contact   from "./pages/Contact";

function App() {
  return (
    /*
     * Root layout — 3-layer background system:
     *   Layer 1: dark base + SVG noise texture (on <body> via index.css)
     *   Layer 2: .animated-gradient overlay — 270deg #16BFFD → #CB3066,
     *            400% background-size animated over 15s, opacity-50
     *   Layer 3: relative z-10 content wrapper — Navbar, pages, Footer
     */
    <div className="min-h-screen w-full relative bg-[#0d1b2a] font-sans antialiased flex flex-col">

      {/* Layer 2 — animated gradient, fixed so it covers viewport on scroll */}
      <div className="animated-gradient fixed inset-0 z-0 opacity-60 pointer-events-none" />

      {/* Layer 3 — all content above the gradient */}
      <div className="relative z-10 flex flex-col flex-1">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/"          element={<Home />}      />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about"     element={<About />}     />
            <Route path="/contact"   element={<Contact />}   />
          </Routes>
        </main>
        <Footer />
      </div>

    </div>
  );
}

export default App;
