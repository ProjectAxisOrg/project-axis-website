import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useEasterEggs, useProjectAxisClickEasterEgg } from '@/hooks/use-easter-eggs';

interface CountdownData {
  months: number;
  years: number;
  weeks: number;
}

export function HeroSection() {
  useEasterEggs();
  useProjectAxisClickEasterEgg();

  const [countdown, setCountdown] = useState<CountdownData>({
    months: 37,
    years: 2,
    weeks: 8,
  });

  // Update countdown every second for smooth animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(prev => ({
        months: prev.months,
        years: prev.years,
        weeks: prev.weeks,
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTimeline = () => {
    document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Background vector pattern - faint neural network */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="network" patternUnits="userSpaceOnUse" width="200" height="200">
              <circle cx="50" cy="50" r="3" fill="currentColor" />
              <circle cx="150" cy="50" r="3" fill="currentColor" />
              <circle cx="50" cy="150" r="3" fill="currentColor" />
              <circle cx="150" cy="150" r="3" fill="currentColor" />
              <line x1="50" y1="50" x2="150" y2="50" stroke="currentColor" strokeWidth="1" />
              <line x1="50" y1="50" x2="50" y2="150" stroke="currentColor" strokeWidth="1" />
              <line x1="150" y1="50" x2="150" y2="150" stroke="currentColor" strokeWidth="1" />
              <line x1="50" y1="150" x2="150" y2="150" stroke="currentColor" strokeWidth="1" />
              <line x1="50" y1="50" x2="150" y2="150" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
            </pattern>
          </defs>
          <rect width="1200" height="800" fill="url(#network)" />
        </svg>
      </div>

      <div className="relative z-10 text-center max-w-4xl">
        {/* Main Title */}
        <div className="mb-8">
          <h1
            className="font-mono text-hero font-bold text-black mb-4 uppercase tracking-tighter cursor-pointer transition-all duration-200 hover:text-[#00C853]"
            data-easter-egg="project-axis"
          >
            Project Axis
          </h1>
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="h-1 w-12 bg-black" />
            <p className="text-lg font-mono text-gray-700 font-semibold">Est. AGI Emergence</p>
            <div className="h-1 w-12 bg-black" />
          </div>
        </div>

        {/* Subheading */}
        <p className="font-sans text-xl text-black mb-12 leading-relaxed max-w-2xl mx-auto">
          Documenting the Rise of Artificial General Intelligence
        </p>

        {/* Countdown Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-2xl mx-auto">
          {/* AGI Months */}
          <div className="border-4 border-black bg-white p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:border-[#00C853] cursor-pointer group">
            <div className="text-6xl font-mono font-bold text-[#00C853] mb-2 group-hover:scale-110 transition-transform duration-300">
              {String(countdown.months).padStart(2, '0')}
            </div>
            <p className="font-mono text-sm font-bold uppercase text-black tracking-wide">
              Months to AGI
            </p>
            <div className="h-0.5 w-0 bg-[#00C853] group-hover:w-full transition-all duration-500 mt-4" />
          </div>

          {/* ASI Years */}
          <div className="border-4 border-black bg-white p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:border-[#00C853] cursor-pointer group">
            <div className="text-6xl font-mono font-bold text-[#00C853] mb-2 group-hover:scale-110 transition-transform duration-300">
              {String(countdown.years).padStart(2, '0')}
            </div>
            <p className="font-mono text-sm font-bold uppercase text-black tracking-wide">
              Years to ASI
            </p>
            <div className="h-0.5 w-0 bg-[#00C853] group-hover:w-full transition-all duration-500 mt-4" />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={scrollToTimeline}
            className="px-8 py-3 border-3 border-black bg-white text-black font-mono font-bold uppercase hover:bg-black hover:text-white hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 relative overflow-hidden group"
          >
            <span className="relative z-10">View Timeline</span>
            <div className="absolute inset-0 bg-black transform -skew-x-12 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>
          <button
            onClick={scrollToAbout}
            className="px-8 py-3 bg-[#00C853] text-black border-3 border-[#00C853] font-mono font-bold uppercase hover:bg-black hover:border-black hover:text-white hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 relative overflow-hidden group"
          >
            <span className="relative z-10">Read the Forecast</span>
            <div className="absolute inset-0 bg-black transform -skew-x-12 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <p className="font-mono text-xs uppercase text-gray-600 font-semibold">Scroll to explore</p>
          <ChevronDown className="w-5 h-5 text-[#00C853]" />
        </div>
      </div>
    </section>
  );
}
