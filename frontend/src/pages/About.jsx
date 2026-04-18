const techStack = [
  { icon: "", name: "React.js",     desc: "Frontend UI built with functional components, hooks, and React Router v6." },
  { icon: "", name: "Flask",        desc: "Lightweight Python REST API that serves ML predictions over HTTP." },
  { icon: "", name: "Scikit-learn", desc: "ML classification model trained on real automotive production data." },
  { icon: "", name: "Pickle",       desc: "Serialized model and StandardScaler for fast, consistent inference." },
  { icon: "", name: "Tailwind CSS", desc: "Utility-first CSS framework for rapid, responsive UI development." },
  { icon: "", name: "Vite",         desc: "Lightning-fast build tool and dev server for modern React projects." },
];

const steps = [
  { step: "01", title: "Input Metrics",    desc: "User enters production data: volume, defect rate, quality score, maintenance hours, and more." },
  { step: "02", title: "API Request",      desc: "React sends a POST request to the Flask backend with the input values as structured JSON." },
  { step: "03", title: "Preprocessing",    desc: "Flask maps fields, fills defaults, and scales the feature array using the trained StandardScaler." },
  { step: "04", title: "ML Prediction",    desc: "The trained classification model predicts whether a defect is likely (1) or not (0)." },
  { step: "05", title: "Result Displayed", desc: "The prediction label and confidence score are returned and rendered dynamically in the UI." },
];

function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-6 py-16">

        {/* ── Header ── */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-bold uppercase tracking-widest text-black mb-5">
            About the Project
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold mt-2 mb-6 leading-tight text-black">
            Automotive Defect{" "}
            <span className="text-gray-900">
              Detection System
            </span>
          </h1>
          <p className="text-black text-xl max-w-2xl mx-auto leading-relaxed">
            A full-stack machine learning application designed to predict
            manufacturing defects in automotive production lines using real-time
            operational data.
          </p>
        </div>

        {/* ── Objective ── */}
        <section className="bg-blue-50 border border-blue-100 rounded-2xl p-10 mb-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-5 text-black flex items-center gap-3">
            Objective
          </h2>
          <p className="text-black text-lg leading-relaxed">
            The goal of this project is to build an end-to-end intelligent system
            that assists automotive manufacturers in identifying potential defects
            before they escalate. By analyzing key production metrics — such as
            defect rate, quality score, maintenance hours, and energy efficiency —
            the system provides instant, data-driven predictions to support quality
            control teams and reduce operational costs.
          </p>
        </section>

        {/* ── How It Works ── */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-8 text-black flex items-center gap-3">
            How It Works
          </h2>
          <div className="flex flex-col gap-4">
            {steps.map(({ step, title, desc }) => (
              <div
                key={step}
                className="flex gap-6 bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-200 shadow-sm"
              >
                <span className="text-black font-extrabold text-xl min-w-[2.5rem] mt-0.5">
                  {step}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-black mb-2">{title}</h3>
                  <p className="text-black text-base leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Tech Stack ── */}
        <section>
          <h2 className="text-2xl font-bold mb-8 text-black flex items-center gap-3">
             Technologies Used
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {techStack.map(({ icon, name, desc }) => (
              <div
                key={name}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-200 shadow-sm group"
              >
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="text-lg font-bold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  {name}
                </h3>
                <p className="text-black text-base leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

export default About;
