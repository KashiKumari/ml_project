import { useState } from "react";

const FIELDS = [
  { id: "Production_Volume", label: "Production Volume",  placeholder: "e.g. 1500"  },
  { id: "Material_Cost",     label: "Production Cost",    placeholder: "e.g. 45000" },
  { id: "Defect_Rate",       label: "Defect Rate (%)",    placeholder: "e.g. 3.2"   },
  { id: "Quality_Score",     label: "Quality Score",      placeholder: "e.g. 87"    },
  { id: "Maintenance_Hours", label: "Maintenance Hours",  placeholder: "e.g. 12"    },
  { id: "Stockout_Rate",     label: "Stockout Rate (%)",  placeholder: "e.g. 1.5"   },
  { id: "Energy_Efficiency", label: "Energy Efficiency",  placeholder: "e.g. 0.78"  },
];

const initialForm = Object.fromEntries(FIELDS.map(({ id }) => [id, ""]));

function Dashboard() {
  const [form,    setForm]    = useState(initialForm);
  const [result,  setResult]  = useState(null);
  const [error,   setError]   = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));

  const handleReset = () => { setForm(initialForm); setResult(null); setError(""); };

  const predict = async () => {
    const empty = FIELDS.filter(({ id }) => form[id].trim() === "");
    if (empty.length) {
      setError(`Please fill in: ${empty.map((f) => f.label).join(", ")}`);
      return;
    }
    setLoading(true); setResult(null); setError("");
    try {
      const payload = Object.fromEntries(FIELDS.map(({ id }) => [id, parseFloat(form[id])]));
      const res = await fetch("https://ml-project-g64n.onrender.com/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || data.error) setError(data.error || "Server returned an error.");
      else setResult(data);
    } catch {
      setError("Cannot reach the server. Make sure Flask is running on port 5000.");
    } finally {
      setLoading(false);
    }
  };

  const isDefective = result?.prediction === 1;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-16">

        {/* ── Header ── */}
        <div className="mb-12 text-center">
          <span className="inline-block text-sm font-bold uppercase tracking-widest text-black mb-4">
            Prediction Engine
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight text-gray-900">
            Prediction{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Dashboard
            </span>
          </h1>
          <p className="text-black text-xl leading-relaxed max-w-xl mx-auto">
            Enter your production metrics below and get an instant ML-powered
            defect prediction.
          </p>
        </div>

        {/* ── Form card ── */}
        <div className="bg-white border border-gray-200 rounded-2xl p-10 shadow-md">

          <h2 className="text-xl font-bold text-black mb-7">Production Metrics</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {FIELDS.map(({ id, label, placeholder }) => (
                <div key={id} className="flex flex-col gap-2">
                  <label htmlFor={id} className="text-base font-semibold text-black">
                    {label}
                  </label>
                  <input
                    id={id}
                    type="number"
                    placeholder={placeholder}
                    value={form[id]}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-200 hover:border-blue-400 focus:border-blue-500 rounded-xl px-5 py-3.5 text-gray-900 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                  />
                </div>
              ))}
          </div>

          {/* Error banner */}
          {error && (
            <div className="mt-7 flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl px-5 py-4 text-red-600 text-base">
              <span className="text-xl mt-0.5"></span>
              <span>{error}</span>
            </div>
          )}

          {/* Action buttons */}
          <div className="mt-8 flex gap-4">
            <button
              onClick={predict}
              disabled={loading}
              className="flex-1 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed text-white text-lg font-bold rounded-xl transition-all shadow-lg shadow-blue-500/25"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Analyzing…
                </span>
              ) : "Run Prediction"}
            </button>
            <button
              onClick={handleReset}
              className="px-7 py-4 border border-gray-200 hover:border-gray-400 text-black hover:text-black text-base font-semibold rounded-xl transition-all"
            >
              Reset
            </button>
          </div>
        </div>

        {/* ── Result card ── */}
        {result && (
          <div className={`mt-8 rounded-2xl border p-10 text-center shadow-md transition-all ${
            isDefective
              ? "bg-red-50 border-red-200"
              : "bg-emerald-50 border-emerald-200"
          }`}>
            <div className="text-6xl mb-5">{isDefective ? "" : ""}</div>

            <h2 className={`text-4xl font-extrabold mb-2 ${isDefective ? "text-red-600" : "text-emerald-600"}`}>
              {result.label}
            </h2>

            <p className="text-black text-lg mt-3">
              Model confidence:{" "}
              <span className="font-bold text-gray-900 text-xl">{result.confidence}%</span>
            </p>

            {/* Confidence bar */}
            <div className="mt-6 bg-gray-200 rounded-full h-3 overflow-hidden max-w-sm mx-auto">
              <div
                className={`h-3 rounded-full transition-all duration-700 ${
                  isDefective
                    ? "bg-gradient-to-r from-red-500 to-red-400"
                    : "bg-gradient-to-r from-emerald-500 to-cyan-400"
                }`}
                style={{ width: `${result.confidence}%` }}
              />
            </div>

            <p className={`mt-6 text-lg font-medium ${isDefective ? "text-red-500" : "text-emerald-600"}`}>
              {isDefective
                ? " Defect detected — review your production parameters."
                : " No defect detected — production looks healthy."}
            </p>
          </div>
        )}

      </div>
    </div>
  );
}

export default Dashboard;
