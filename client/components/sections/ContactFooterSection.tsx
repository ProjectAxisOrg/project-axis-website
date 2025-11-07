import { useState } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';

export function ContactFooterSection() {
  const { ref, hasBeenInView } = useInView({ threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      // Here you would normally send the form data to a server
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

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

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Text Content */}
            <div className={`transition-all duration-700 ${hasBeenInView ? 'animate-slide-left' : 'opacity-0'}`}>
              <p className="font-sans text-lg text-black mb-6 leading-relaxed">
                Have a question about Project Axis? Want to contribute research, share insights, or collaborate on AI observation projects? I'd love to hear from you.
              </p>
              <p className="font-sans text-base text-gray-700 mb-8 leading-relaxed">
                Let's connect and explore the frontier of AGI together. Whether you're a researcher, observer, or visionary—reach out.
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

            {/* Contact Form */}
            <div className={`border-4 border-black p-8 bg-white transition-all duration-700 hover:shadow-xl ${hasBeenInView ? 'animate-slide-right' : 'opacity-0'}`}>
              <h3 className="font-mono text-xl font-bold text-black uppercase mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block font-mono text-sm font-bold text-black mb-2 uppercase">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-2 border-2 border-black font-sans focus:outline-none focus:ring-2 focus:ring-[#00C853] focus:ring-offset-2 transition-all duration-200"
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block font-mono text-sm font-bold text-black mb-2 uppercase">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="observer@projectaxis.org"
                    className="w-full px-4 py-2 border-2 border-black font-sans focus:outline-none focus:ring-2 focus:ring-[#00C853] focus:ring-offset-2 transition-all duration-200"
                    required
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block font-mono text-sm font-bold text-black mb-2 uppercase">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    className="w-full px-4 py-2 border-2 border-black font-sans focus:outline-none focus:ring-2 focus:ring-[#00C853] focus:ring-offset-2 transition-all duration-200"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block font-mono text-sm font-bold text-black mb-2 uppercase">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows={5}
                    className="w-full px-4 py-2 border-2 border-black font-sans focus:outline-none focus:ring-2 focus:ring-[#00C853] focus:ring-offset-2 transition-all duration-200 resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#00C853] text-black border-2 border-[#00C853] font-mono font-bold uppercase hover:bg-black hover:text-white hover:border-black hover:shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                {/* Success Message */}
                {submitted && (
                  <div className="p-4 bg-[#00C853] border-2 border-[#00C853] text-black text-center">
                    <p className="font-mono text-sm font-bold">✓ Message sent successfully!</p>
                    <p className="font-sans text-xs mt-1">We'll get back to you soon.</p>
                  </div>
                )}
              </form>
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
