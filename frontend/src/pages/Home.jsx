import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// ─── Animation Variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden:  { opacity: 0, y: 44 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.13, ease: "easeOut" },
  }),
};

const fadeIn = {
  hidden:  { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

// ─── Scroll-triggered wrapper ─────────────────────────────────────────────────
function AnimatedSection({ children, className = "" }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} className={className}>
      {children}
    </motion.div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const features = [
  {
    icon: "",
    title: "Detect Defects Early",
    desc: "Identify manufacturing anomalies before they reach the assembly line, reducing costly recalls and rework.",
    gradient: "from-blue-100 to-transparent",
    border:   "hover:border-blue-300",
    shadow:   "group-hover:shadow-blue-100",
    tag:      "text-blue-600",
  },
  {
    icon: "",
    title: "Reduce Manual Inspection",
    desc: "Automate quality checks with ML predictions, freeing your team from repetitive inspection tasks.",
    gradient: "from-cyan-100 to-transparent",
    border:   "hover:border-cyan-300",
    shadow:   "group-hover:shadow-cyan-100",
    tag:      "text-cyan-600",
  },
  {
    icon: "",
    title: "Improve Product Quality",
    desc: "Continuously learn from production data to raise quality scores and meet industry standards consistently.",
    gradient: "from-indigo-100 to-transparent",
    border:   "hover:border-indigo-300",
    shadow:   "group-hover:shadow-indigo-100",
    tag:      "text-indigo-600",
  },
  {
    icon: "",
    title: "Minimize Operational Costs",
    desc: "Cut waste, energy overuse, and downtime by acting on predictive insights before problems escalate.",
    gradient: "from-sky-100 to-transparent",
    border:   "hover:border-sky-300",
    shadow:   "group-hover:shadow-sky-100",
    tag:      "text-sky-600",
  },
];

const steps = [
  { number: "01", icon: "", title: "Input Data",     desc: "Enter production metrics — volume, defect rate, quality score, maintenance hours, and more." },
  { number: "02", icon: "", title: "API Processing", desc: "React sends a secure POST request to the Flask REST API with your data as structured JSON." },
  { number: "03", icon: "", title: "ML Prediction",  desc: "The trained Scikit-learn model scales inputs and classifies whether a defect is likely." },
  { number: "04", icon: "", title: "Get Result",      desc: "Receive an instant prediction — Defective or Non-Defective — with a confidence score." },
];

const stats = [
  { value: "16",        label: "ML Features"   },
  { value: "99%",       label: "Uptime"        },
  { value: "<1s",       label: "Response Time" },
  { value: "Real-Time", label: "Predictions"   },
];

// ─── Component ────────────────────────────────────────────────────────────────
function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 pt-32 pb-28 overflow-hidden">

        {/* Soft light glow blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[550px] bg-blue-100/60 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-24 left-8  w-80 h-80 bg-cyan-100/50  rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute bottom-0 right-8 w-80 h-80 bg-indigo-100/50 rounded-full blur-[110px] pointer-events-none" />

        {/* Live badge */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blue-200 bg-blue-50 text-black text-sm font-semibold uppercase tracking-widest mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Machine Learning · Automotive Quality Control
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={fadeUp} initial="hidden" animate="visible" custom={1}
          className="text-6xl sm:text-7xl md:text-8xl font-extrabold leading-[1.05] tracking-tight mb-7 max-w-5xl text-gray-900"
        >
          AI-Powered{" "}
          <span className="text-gray-900">
            Defect Detection
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={fadeUp} initial="hidden" animate="visible" custom={2}
          className="text-black text-xl md:text-2xl max-w-2xl leading-relaxed mb-12 font-light"
        >
          An intelligent ML platform that predicts manufacturing defects in real
          time — helping automotive teams reduce waste, improve quality, and make
          data-driven decisions on the production floor.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={3}
          className="flex flex-wrap gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/dashboard")}
            className="px-9 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-lg font-bold rounded-xl shadow-xl shadow-blue-500/25 transition-all"
          >
            Get Started →
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/dashboard")}
            className="px-9 py-4 border border-gray-300 hover:border-blue-400 bg-white hover:bg-blue-50 text-gray-700 hover:text-blue-600 text-lg font-semibold rounded-xl transition-all"
          >
            View Dashboard
          </motion.button>
        </motion.div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white/80 to-transparent pointer-events-none" />
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────────────────── */}
      <AnimatedSection>
        <div className="max-w-5xl mx-auto px-6 py-6">
          <motion.div
            variants={fadeIn} custom={0}
            className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-200 border border-gray-200 rounded-2xl overflow-hidden bg-gray-50"
          >
            {stats.map(({ value, label }, i) => (
              <motion.div
                key={label} variants={fadeIn} custom={i}
                className="flex flex-col items-center justify-center py-9 px-4 hover:bg-blue-50/60 transition-colors"
              >
                <span className="text-4xl font-extrabold text-gray-900">
                  {value}
                </span>
                <span className="text-black text-base mt-1.5 font-medium">{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ── FEATURES ─────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <AnimatedSection className="text-center mb-18">
          <motion.p variants={fadeUp} custom={0} className="text-black text-sm font-bold uppercase tracking-widest mb-4">
            Why DefectDetector
          </motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 leading-tight text-gray-900">
            Smart Predictions.{" "}
            <span className="text-gray-900">
              Real Impact.
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-black text-xl max-w-2xl mx-auto leading-relaxed">
            Four core capabilities that transform how automotive manufacturers
            approach quality control.
          </motion.p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 mt-14">
          {features.map(({ icon, title, desc, gradient, border, shadow, tag }, i) => (
            <AnimatedSection key={title}>
              <motion.div
                variants={fadeUp} custom={i * 0.4}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`group relative rounded-2xl border border-gray-200 ${border} bg-white p-8 overflow-hidden cursor-default shadow-md ${shadow} hover:shadow-xl transition-all duration-300`}
              >
                {/* Hover gradient fill */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                {/* Corner arc */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gray-50 rounded-bl-full" />

                <div className="relative z-10">
                  <div className="text-5xl mb-5">{icon}</div>
                  <h3 className={`text-xl font-bold mb-3 text-black`}>{title}</h3>
                  <p className="text-black text-lg leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────────── */}
      <section className="relative py-28 px-6 overflow-hidden bg-gray-50">

        <div className="relative max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-18">
            <motion.p variants={fadeUp} custom={0} className="text-black text-sm font-bold uppercase tracking-widest mb-4">
              The Process
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 leading-tight text-gray-900">
              How It{" "}
              <span className="text-gray-900">
                Works
              </span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-black text-xl max-w-2xl mx-auto leading-relaxed">
              From raw production data to actionable defect predictions in under a second.
            </motion.p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {steps.map(({ number, title, desc, icon }, i) => (
              <AnimatedSection key={number}>
                <motion.div
                  variants={fadeUp} custom={i * 0.4}
                  whileHover={{ y: -7 }}
                  className="relative flex flex-col items-start p-8 rounded-2xl border border-gray-200 bg-white hover:border-blue-300 hover:shadow-lg transition-all duration-300 group h-full shadow-sm"
                >
                  {/* Watermark number */}
                  <span className="absolute top-5 right-5 text-6xl font-black text-gray-900/[0.04] group-hover:text-gray-900/[0.07] transition-colors select-none">
                    {number}
                  </span>

                  <div className="text-4xl mb-5">{icon}</div>
                  <span className="text-xs font-bold text-black uppercase tracking-widest mb-2">
                    Step {number}
                  </span>
                  <h3 className="text-xl font-bold text-black mb-3">{title}</h3>
                  <p className="text-black text-base leading-relaxed">{desc}</p>

                  {/* Connector */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-blue-400/50 to-transparent z-10" />
                  )}
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section className="px-6 py-28 bg-white">
        <AnimatedSection>
          <motion.div
            variants={fadeUp} custom={0}
            className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden border border-blue-100 p-16 text-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 shadow-xl shadow-blue-100/60"
          >
            {/* Corner blobs */}
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-blue-200/40 rounded-full blur-3xl" />
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-cyan-200/40 rounded-full blur-3xl" />
            {/* Subtle grid texture */}
            <div
              className="absolute inset-0 opacity-[0.025]"
              style={{ backgroundImage: "linear-gradient(#000 1px,transparent 1px),linear-gradient(90deg,#000 1px,transparent 1px)", backgroundSize: "40px 40px" }}
            />

            <div className="relative z-10">
              <motion.p variants={fadeUp} custom={0} className="text-black text-sm font-bold uppercase tracking-widest mb-5">
                Get Started Today
              </motion.p>

              <motion.h2 variants={fadeUp} custom={1} className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-gray-900">
                Transform Your{" "}
                <span className="text-gray-900">
                  Quality Control
                </span>
              </motion.h2>

              <motion.p variants={fadeUp} custom={2} className="text-black text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                Stop relying on manual inspection. Let AI analyze your production
                metrics and flag defects before they cost you time and money.
              </motion.p>

              <motion.button
                variants={fadeUp} custom={3}
                whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.97 }}
                onClick={() => navigate("/dashboard")}
                className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold rounded-xl shadow-xl shadow-blue-500/30 transition-all text-xl"
              >
                Start Now
                <span>→</span>
              </motion.button>

              <p className="text-black text-sm mt-6">
                No setup required · Flask backend · Open source
              </p>
            </div>
          </motion.div>
        </AnimatedSection>
      </section>

    </div>
  );
}

export default Home;
