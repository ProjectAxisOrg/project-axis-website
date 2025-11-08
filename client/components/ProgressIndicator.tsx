import { useState, useEffect } from 'react';

interface Section {
  id: string;
  name: string;
}

const sections: Section[] = [
  { id: 'hero', name: 'Hero' },
  { id: 'about', name: 'About' },
  { id: 'timeline', name: 'Timeline' },
  { id: 'forecast', name: 'Forecast' },
  { id: 'benchmarks', name: 'Benchmarks' },
  { id: 'insights', name: 'Insights' },
  { id: 'publications', name: 'Publications' },
  { id: 'contact', name: 'Contact' },
];

export function ProgressIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      // Calculate overall scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(scrolled, 100));

      // Detect current section
      let activeSection = 'hero';
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            activeSection = section.id;
          }
        }
      });
      setCurrentSection(activeSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentSectionName = sections.find(s => s.id === currentSection)?.name || 'Project Axis';
  const dotsCount = sections.length;
  const currentIndex = sections.findIndex(s => s.id === currentSection);

  return (
    <>
      {/* Vertical Progress Bar (Left Side) */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col gap-3 z-40">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => {
              const element = document.getElementById(section.id);
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 hover:scale-150 ${
              currentSection === section.id
                ? 'bg-[#00C853] border-[#00C853] scale-125'
                : 'bg-white border-black hover:border-[#00C853]'
            }`}
            title={section.name}
          />
        ))}
      </div>

      {/* Bottom Progress Bar */}
      <div className="fixed bottom-0 left-0 right-0 h-1 bg-black z-50">
        <div
          className="h-full bg-[#00C853] transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Top Section Indicator */}
      <div className="fixed top-6 right-6 hidden sm:flex items-center gap-3 z-40 bg-white border-2 border-black px-4 py-2 font-mono text-xs uppercase font-bold">
        <span className="text-gray-600">Current Section:</span>
        <span className="text-[#00C853]">{currentSectionName}</span>
        <div className="flex gap-1">
          {Array.from({ length: dotsCount }).map((_, i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 transition-all duration-300 ${
                i === currentIndex ? 'bg-[#00C853]' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
