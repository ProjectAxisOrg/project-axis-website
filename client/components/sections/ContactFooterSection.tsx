import { useState } from 'react';
import { Mail, Github, Linkedin, Send, Zap, Users, Code } from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';

// I've removed the form-related logic since the form is being replaced.
export function ContactFooterSection() {
  const { ref, hasBeenInView } = useInView({ threshold: 0.2 });

  // Dummy state for demonstration, though not strictly needed without a form.
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="min-h-screen bg-white px-6 py-20 flex items-center" ref={ref}>
        <div className="max-w-5xl mx-auto w-full">
          {/* Section Title */}
          <div className={`mb-16 transition-all duration-700 ${hasBeenInView ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="font-mono text-5xl font-bold text-black uppercase mb-4">
              Get in Touch
            </h2>
            <div className="w-24 h-1 bg-[#00C853]" />
          </div>

          {/* Content Grid (Text Content on Left, New CTA Hub on Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Text Content (LEFT - Remains the same) */}
            <div className={`transition-all duration-700 ${hasBeenInView ? 'animate-slide-left' : 'opacity-0'}`}>
              <p className="font-sans text-lg text-black mb-6 leading-relaxed">
                Have a question about **Project Axis**? Want to contribute research, share insights, or collaborate on AI observation projects? I'd love to hear from you.
              </p>
              <p className="font-sans text-base text-gray-700 mb-8 leading-relaxed">
                Let's connect and explore the frontier of AGI together. Whether you're a researcher, observer, or visionary—reach out directly using the hub.
              </p>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                <div className="border-2 border-black p-4 hover:shadow-lg transition-all duration-300">
                  <p className="font-mono text-xs uppercase font-bold text-gray-600 mb-2">Email</p>
                  <p className="font-sans text-base text-black">admin@projectaxis.org</p>
                </div>
                <div className="border-2 border-black p-4 hover:shadow-lg transition-all duration-300">
                  <p className="font-mono text-xs uppercase font-bold text-gray-600 mb-2">Response Time</p>
                  <p className="font-sans text-base text-black">Within 48 hours</p>
                </div>
                <div className="border-2 border-black p-4 hover:shadow-lg transition-all duration-300">
                  <p className="font-mono text-xs uppercase font-bold text-gray-600 mb-2">Location</p>
                  <p className="font-sans text-base text-black">Global Observer Network</p>
                </div>
              </div>
            </div>

            {/* 🔥 NEW: Collaboration & Observation Hub (RIGHT - Replaces Form) */}
            <div className={`border-14 border-black p-8 text-black transition-all duration-700 hover:shadow-xl ${hasBeenInView ? 'animate-slide-right' : 'opacity-0'}`}>
              <h3 className="font-mono text-xl font-bold text-[#00C853] uppercase mb-6">
                Collaboration Hub
              </h3>

              <p className="font-sans text-gray-300 mb-8 leading-relaxed">
                We're actively seeking data contributors and expert reviewers. Engage with our project via the following key channels:
              </p>

              <div className="space-y-6">

                {/* 1. Direct Email */}
                <a
                  href="mailto:admin@projectaxis.org?subject=Project%20Axis%20Inquiry"
                  className="w-full flex items-center justify-start gap-4 p-4 border-2 border-[#00C853] bg-[#00C853] text-black font-mono font-bold uppercase hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <Mail className="w-6 h-6" />
                  <span>Initiate Contact</span>
                </a>

                {/* 2. Contribute Code/Data (GitHub) */}
                <a
                  href="https://github.com/ProjectAxisOrg/ProjectAxis-Data-Archive"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-start gap-4 p-4 border-2 border-white text-white font-mono font-bold uppercase hover:bg-gray-800 transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <Github className="w-6 h-6" />
                  <span>Contribute Data / Code</span>
                </a>

                {/* 3. View Documentation (Resource Link) */}
                <a
                  href="https://docs.google.com/document/d/1rCkqXrlmGUe6fSpgfZ8HmXYqM2gSGDXNR25jW1Jm4i8/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-start gap-4 p-4 border-2 border-gray-600 text-gray-300 font-mono font-bold uppercase hover:border-[#00C853] hover:text-[#00C853] transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <Code className="w-6 h-6" />
                  <span>Read Documentation</span>
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-700">
                <p className="font-mono text-xs uppercase text-gray-500 flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  JOIN THE OBSERVATION NETWORK
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer (Remains the same) */}
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
                  <a href="#" className="font-sans text-gray-300 hover:text-[#00C853] transition-colors duration-200">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="font-sans text-gray-300 hover:text-[#00C853] transition-colors duration-200">
                    About
                  </a>
                </li>
                <li>
                  <a href="#timeline" className="font-sans text-gray-300 hover:text-[#00C853] transition-colors duration-200">
                    Timeline
                  </a>
                </li>
                <li>
                  <a href="#contact" className="font-sans text-gray-300 hover:text-[#00C853] transition-colors duration-200">
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
                  <a target="_blank" href="https://docs.google.com/document/d/1rCkqXrlmGUe6fSpgfZ8HmXYqM2gSGDXNR25jW1Jm4i8/edit?usp=sharing" className="font-sans text-gray-300 hover:text-[#00C853] transition-colors duration-200">
                    Documentation
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://docs.google.com/document/d/1-QN_7iRRqrI6l2oeL8FDIQcac__y1O77OSdw9QO0Wlg/edit?tab=t.0" className="font-sans text-gray-300 hover:text-[#00C853] transition-colors duration-200">
                    Sources
                  </a>
                </li>
                <li>
                  <a target="_blank " href="https://github.com/ProjectAxisOrg/ProjectAxis-Data-Archive" className="font-sans text-gray-300 hover:text-[#00C853] transition-colors duration-200">
                    Data Archive
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
              <p>© 2025 Project Axis. All rights reserved.</p>
              <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full" />
              <a href="https://docs.google.com/document/d/1ymMatIJDDrih0Qzz1kaIVNeIwCH-yMObvxZmb2QTWFc/edit?tab=t.0" className="hover:text-[#00C853] transition-colors duration-200">
                Project Policy
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-6">
              <a
                href="mailto:observer@projectaxis.org"
                className="text-gray-300 hover:text-[#00C853] transition-colors duration-200 hover:scale-110 transform"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/ProjectAxisOrg"
                className="text-gray-300 hover:text-[#00C853] transition-colors duration-200 hover:scale-110 transform"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}