import { useState } from "react";

function Contact() {
  const [form,      setForm]      = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
  };

  const inputClass =
    "bg-gray-50 border border-gray-200 hover:border-blue-400 focus:border-blue-500 rounded-xl px-5 py-3.5 text-gray-900 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all w-full";

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-6 py-16">

        {/* ── Header ── */}
        <div className="text-center mb-14">
          <span className="inline-block text-sm font-bold uppercase tracking-widest text-black mb-5">
            Get In Touch
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold mt-2 mb-5 leading-tight text-black">
            Contact{" "}
            <span className="text-gray-900">
              Us
            </span>
          </h1>
          <p className="text-black text-xl max-w-xl mx-auto leading-relaxed">
            Have questions, feedback, or want to collaborate? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* ── Contact form ── */}
          <div className="bg-white border border-gray-200 rounded-2xl p-10 shadow-md">
            {submitted ? (
              <div className="text-center py-10">
                <div className="text-6xl mb-5"></div>
                <h2 className="text-2xl font-extrabold text-emerald-600 mb-3">Message Sent!</h2>
                <p className="text-black text-lg leading-relaxed">
                  Thanks for reaching out. We'll get back to you soon.
                </p>
                <button
                  onClick={() => { setForm({ name: "", email: "", message: "" }); setSubmitted(false); }}
                  className="mt-8 px-7 py-3 border border-gray-200 hover:border-blue-400 text-black hover:text-blue-600 rounded-xl text-base font-semibold transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <h2 className="text-2xl font-bold text-black mb-2">Send a Message</h2>

                {[
                  { id: "name",  label: "Your Name",    type: "text",  placeholder: "John Doe"         },
                  { id: "email", label: "Email Address", type: "email", placeholder: "john@example.com" },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id} className="flex flex-col gap-2">
                    <label htmlFor={id} className="text-base font-semibold text-black">
                      {label}
                    </label>
                    <input
                      id={id} type={type} placeholder={placeholder}
                      value={form[id]} onChange={handleChange} required
                      className={inputClass}
                    />
                  </div>
                ))}

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-base font-semibold text-black">
                    Message
                  </label>
                  <textarea
                    id="message" rows={5}
                    placeholder="Write your message here…"
                    value={form.message} onChange={handleChange} required
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-lg font-bold rounded-xl transition-all shadow-lg shadow-blue-500/25 mt-1"
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>

          {/* ── Developer & Project info ── */}
          <div className="flex flex-col gap-6">

            {/* Developer card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md">
              <h2 className="text-xl font-bold mb-6 text-black"> Developer</h2>
              <div className="flex flex-col gap-5 text-base text-black">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-extrabold text-lg shadow-md">
                    P
                  </div>
                  <div>
                    <p className="text-black font-bold text-lg">Kashi</p>
                    <p className="text-gray-700 text-sm">ML & Full-Stack Developer</p>
                  </div>
                </div>
                {[
                  { icon: "", label: "kashi123@email.com",          href: "mailto:kashi123@email.com"  },
                  { icon: "", label: "github.com/kashi",      href: "https://github.com/"    },
                  { icon: "", label: "linkedin.com/in/kashi", href: "https://linkedin.com/"  },
                ].map(({ icon, label, href }) => (
                  <div key={label} className="flex items-center gap-4">
                    <span className="text-2xl w-8 text-center">{icon}</span>
                    <a href={href} target="_blank" rel="noreferrer"
                      className="text-black hover:text-blue-600 transition-colors text-base">
                      {label}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Project info card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md">
              <h2 className="text-xl font-bold mb-6 text-black"> Project Info</h2>
              <div className="flex flex-col gap-4">
                {[
                  { label: "Project", value: "Automotive Defect Detection System", color: "text-gray-900"    },
                  { label: "Stack",   value: "React · Flask · Scikit-learn",        color: "text-gray-900"    },
                  { label: "Type",    value: "Student ML Project",                  color: "text-gray-900"    },
                  { label: "Status",  value: "Active",                              color: "text-emerald-600" },
                ].map(({ label, value, color }) => (
                  <div key={label} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                    <span className="text-black text-base font-medium">{label}</span>
                    <span className={`${color} text-base font-semibold`}>{value}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
