import { useState } from 'react';
import HeaderBanner from '../Components/HeaderBanner';
import { FaPray } from 'react-icons/fa';

export default function PrayerRequest() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', request: '', private: false });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire to backend / email service
    setSubmitted(true);
  };

  return (
    <div>
      <HeaderBanner
        title="Prayer Request"
        image={`${process.env.PUBLIC_URL}/backgrounds/BG1.png`}
      />

      <section className="bg-[#f9f9f9] py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <FaPray className="w-10 h-10 text-orange-500 mx-auto" />
            <p className="text-xs uppercase tracking-[0.4em] text-orange-500 font-semibold">We're Here For You</p>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight">
              Submit a Prayer Request
            </h2>
            <div className="w-16 h-[2px] bg-orange-500 mx-auto" />
            <p className="text-slate-600 text-base leading-relaxed">
              Our prayer team reads every request and prays over each one. You are not alone.
            </p>
            <blockquote className="border-l-4 border-orange-500 pl-5 text-left text-slate-500 italic text-sm">
              "Do not be anxious about anything, but in every situation, by prayer and petition,
              with thanksgiving, present your requests to God." — Philippians 4:6
            </blockquote>
          </div>

          {submitted ? (
            <div className="text-center py-16 space-y-4">
              <FaPray className="w-12 h-12 text-orange-500 mx-auto" />
              <h3 className="text-2xl font-bold text-slate-900">We've Received Your Request</h3>
              <p className="text-slate-600">Our prayer team will be lifting you up in prayer. God hears every word.</p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: '', email: '', request: '', private: false }); }}
                className="mt-4 px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold uppercase tracking-wider text-sm transition-colors duration-300"
              >
                Submit Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full bg-white border border-slate-300 px-4 py-3 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-orange-500 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Email <span className="text-slate-400 font-normal">(optional)</span></label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full bg-white border border-slate-300 px-4 py-3 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-orange-500 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Your Prayer Request</label>
                <textarea
                  name="request"
                  value={form.request}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Share what's on your heart..."
                  className="w-full bg-white border border-slate-300 px-4 py-3 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-orange-500 transition resize-none"
                />
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="private"
                  id="private"
                  checked={form.private}
                  onChange={handleChange}
                  className="w-4 h-4 accent-orange-500"
                />
                <label htmlFor="private" className="text-sm text-slate-600">
                  Keep this request private (only seen by the prayer team)
                </label>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold uppercase tracking-wider transition-colors duration-300"
              >
                Submit Prayer Request
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
