import { Routes, Route } from "react-router-dom";
import Navbar   from "./components/Navbar";
import Footer   from "./components/Footer";
import Home     from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import About    from "./pages/About";
import Contact  from "./pages/Contact";

function App() {
  return (
    <div className="min-h-screen text-gray-900 font-sans antialiased flex flex-col" style={{ background: '#1C92D2' }}>
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
  );
}

export default App;
