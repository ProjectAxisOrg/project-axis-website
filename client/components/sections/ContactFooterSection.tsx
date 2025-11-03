import { useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';

export function ContactFooterSection() {
  const { ref, hasBeenInView } = useInView({ threshold: 0.2 });
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="min-h-screen bg-white px-6 py-20 flex items-center" ref={ref}>
        <div className="max-w-4xl mx-auto w-full">
          {/* Section Title */}
          <div className={`mb-16 transition-all duration-700 ${hasBeenInView ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="font-mono text-5xl font-bold text-black uppercase mb-4">
              Join the Observation
            </h2>
            <div className="w-24 h-1 bg-[#00C853]" />
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Text Content */}
            <div>
              <p className="font-sans text-lg text-black mb-6 leading-relaxed">
                Stay updated on the latest developments in AI research, AGI emergence predictions, and breakthrough discoveries. Join our community of researchers, students, and AI enthusiasts tracking the rise of artificial general intelligence.
              </p>
              <p className="font-sans text-base text-gray-700 leading-relaxed">
                Receive monthly digests of curated research, timeline updates, and exclusive insights from the Project Axis team.
              </p>
            </div>

            {/* Email Signup Form */}
            <div className="border-4 border-black p-8 bg-white">
              <h3 className="font-mono text-xl font-bold text-black uppercase mb-6">
                Subscribe for Updates
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block font-mono text-sm font-bold text-black mb-2 uppercase">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="observer@projectaxis.org"
                    className="w-full px-4 py-3 border-2 border-black font-sans focus:outline-none focus:ring-2 focus:ring-[#00C853] focus:ring-offset-2"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#00C853] text-black border-2 border-[#00C853] font-mono font-bold uppercase hover:bg-black hover:text-white hover:border-black transition-all duration-200"
                >
                  Subscribe
                </button>

                {submitted && (
                  <p className="text-[#00C853] font-mono text-sm text-center font-bold">
                    ✓ Successfully subscribed!
                  </p>
                )}
              </form>

              {/* Privacy Note */}
              <p className="font-sans text-xs text-gray-600 mt-6">
                We respect your privacy. Unsubscribe at any time. <a href="#" className="underline hover:text-black">Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white px-6 py-16">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <h3 className="font-mono text-2xl font-bold text-[#00C853] uppercase mb-4">
                Project Axis
              </h3>
              <p className="font-sans text-gray-300 text-sm leading-relaxed">
                Documenting the Rise of Artificial General Intelligence
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-mono text-sm font-bold uppercase text-[#00C853] mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="font-sans text-gray-300 hover:text-[#00C853] transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="font-sans text-gray-300 hover:text-[#00C853] transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#timeline" className="font-sans text-gray-300 hover:text-[#00C853] transition-colors">
                    Timeline
                  </a>
                </li>
                <li>
                  <a href="#contact" className="font-sans text-gray-300 hover:text-[#00C853] transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-mono text-sm font-bold uppercase text-[#00C853] mb-4">
                Resources
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="font-sans text-gray-300 hover:text-[#00C853] transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="font-sans text-gray-300 hover:text-[#00C853] transition-colors">
                    Research Papers
                  </a>
                </li>
                <li>
                  <a href="#" className="font-sans text-gray-300 hover:text-[#00C853] transition-colors">
                    Data Archive
                  </a>
                </li>
                <li>
                  <a href="#" className="font-sans text-gray-300 hover:text-[#00C853] transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 py-8" />

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright and Links */}
            <div className="flex flex-col sm:flex-row items-center gap-4 text-gray-400 font-sans text-sm">
              <p>© 2024 Project Axis. All rights reserved.</p>
              <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full" />
              <a href="#" className="hover:text-[#00C853] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#00C853] transition-colors">
                Terms of Service
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-gray-300 hover:text-[#00C853] transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#00C853] transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#00C853] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
