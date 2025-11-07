import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface NavigationItem {
  id: string;
  name: string;
  icon: string;
}

const navigationItems: NavigationItem[] = [
  { id: 'hero', name: 'Project Axis', icon: '🚀' },
  { id: 'about', name: 'About', icon: '📊' },
  { id: 'timeline', name: 'Timeline', icon: '⏱️' },
  { id: 'forecast', name: 'Forecast', icon: '📈' },
  { id: 'benchmarks', name: 'Benchmarks', icon: '⚡' },
  { id: 'insights', name: 'Insights', icon: '💭' },
  { id: 'publications', name: 'Publications', icon: '📚' },
  { id: 'contact', name: 'Contact', icon: '✉️' },
];

export function NavigatorMenu() {
  const [currentSection, setCurrentSection] = useState('about');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      let activeSection = 'about';
      navigationItems.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            activeSection = item.id;
          }
        }
      });
      setCurrentSection(activeSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="border-4 border-black bg-white overflow-hidden transition-all duration-300 hover:shadow-xl">
      {/* Header with Collapse Button */}
      <div className="p-8 flex items-center justify-between gap-4 border-b-4 border-black">
        <div className="flex items-center gap-3 flex-1">
          <div className={`w-3 h-3 bg-[#00C853] rounded-full transition-all duration-300 flex-shrink-0`} />
          <h3 className={`font-mono font-bold text-black uppercase transition-all duration-300 ${isCollapsed ? 'opacity-0 invisible' : 'opacity-100 visible'} text-lg`}>
            Navigate Site
          </h3>
        </div>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="flex-shrink-0 p-2 hover:bg-gray-100 transition-all duration-300 rounded border-2 border-black hover:border-[#00C853] group"
          title={isCollapsed ? 'Expand' : 'Collapse'}
        >
          <ChevronDown
            className={`w-5 h-5 text-black group-hover:text-[#00C853] transition-transform duration-300 ${isCollapsed ? '-rotate-90' : ''}`}
          />
        </button>
      </div>

      {/* Collapsible Content */}
      <div className={`transition-all duration-300 overflow-hidden ${isCollapsed ? 'max-h-0' : 'max-h-[1200px]'}`}>
        <div className="p-8 space-y-1">
          <p className="font-sans text-sm text-gray-700 mb-6">
            Jump to any section of Project Axis
          </p>

          {/* Navigation Items */}
          <div className="space-y-2">
            {navigationItems.map((item, index) => {
              const isActive = currentSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`w-full px-4 py-3 border-2 font-mono text-sm font-bold uppercase transition-all duration-300 flex items-center justify-between group ${
                    isActive
                      ? 'border-[#00C853] bg-[#f9fff7] text-[#00C853] shadow-md'
                      : 'border-black bg-white text-black hover:border-[#00C853] hover:bg-gray-50'
                  }`}
                  style={{ transitionDelay: `${index * 30}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.name}</span>
                  </div>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                      hoveredItem === item.id || isActive ? 'translate-x-2' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              );
            })}
          </div>

          {/* Progress Indicator */}
          <div className="mt-8 pt-6 border-t-2 border-black">
            <p className="font-mono text-xs uppercase font-bold text-gray-600 mb-3">
              Navigation Progress
            </p>
            <div className="w-full h-2 border-2 border-black bg-white">
              <div
                className="h-full bg-gradient-to-r from-[#00C853] to-[#00C853] transition-all duration-300"
                style={{
                  width: `${((navigationItems.findIndex(item => item.id === currentSection) + 1) / navigationItems.length) * 100}%`,
                }}
              />
            </div>
            <p className="font-mono text-xs text-gray-600 mt-2">
              {navigationItems.findIndex(item => item.id === currentSection) + 1} / {navigationItems.length} sections
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
