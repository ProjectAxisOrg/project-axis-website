import { useState } from 'react';
import { useInView } from '@/hooks/use-in-view';
import { ChevronDown } from 'lucide-react';

type FilterType = 'all' | 'fact' | 'forecast' | 'speculation';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  type: 'fact' | 'forecast' | 'speculation';
  details?: string[];
}

const timelineEvents: TimelineEvent[] = [
  {
    year: '2022',
    title: 'ChatGPT Launch',
    description: 'ChatGPT reaches 100M users faster than any application in history, bringing AI to mainstream.',
    type: 'fact',
    details: [
      'Reached 100M users in just 2 months',
      'RLHF (Reinforcement Learning from Human Feedback) alignment',
      'Sparked global AI conversation and mainstream awareness',
    ],
  },
  {
    year: '2023',
    title: 'Multimodal AI Maturity',
    description: 'GPT-4 and competing systems demonstrate reliable multimodal capabilities across text, vision, and reasoning.',
    type: 'fact',
    details: [
      'GPT-4 vision capabilities and improved reasoning',
      'Multimodal models processing images and text simultaneously',
      'Emergence of more sophisticated chain-of-thought reasoning',
    ],
  },
  {
    year: '2024',
    title: 'Reasoning Advancements',
    description: 'Frontier multimodal AI models establish advanced reasoning capabilities across text, image, audio, video, and code.',
    type: 'fact',
    details: [
      'Advanced reasoning capabilities with test-time compute',
      'Google Gemini 2.0 introduces a live multimodal API and tool-use integrations.',
      'Potential indicators of approaching AGI capabilities',
    ],
  },
  {
    year: '2027-2028',
    title: 'AGI Emergence Window',
    description: 'Based on scaling trends and capability jumps, AGI emergence is estimated within this timeframe.',
    type: 'forecast',
    details: [
      'Projected based on current capability scaling curves',
      'Multiple research teams pursuing different architectures',
      'Critical period for AI safety and alignment research',
    ],
  },
  {
    year: '2028-2030',
    title: 'ASI Development',
    description: 'Artificial Superintelligence may emerge from recursive self-improvement cycles.',
    type: 'speculation',
    details: [
      'Recursive self-improvement potential',
      'Exponential capability growth scenarios',
      'Civilizational impact assessment required',
    ],
  },
];

export function TimelineSection() {
  const { ref, hasBeenInView } = useInView({ threshold: 0.1 });
  const [filter, setFilter] = useState<FilterType>('all');
  const [expandedEvents, setExpandedEvents] = useState<Set<string>>(new Set());

  const filteredEvents = filter === 'all' 
    ? timelineEvents 
    : timelineEvents.filter(event => event.type === filter);

  const toggleExpand = (year: string) => {
    const newExpanded = new Set(expandedEvents);
    if (newExpanded.has(year)) {
      newExpanded.delete(year);
    } else {
      newExpanded.add(year);
    }
    setExpandedEvents(newExpanded);
  };

  const getTypeStyles = (type: 'fact' | 'forecast' | 'speculation') => {
    switch (type) {
      case 'fact':
        return { bg: 'bg-black', text: 'text-white', label: '■ Fact' };
      case 'forecast':
        return { bg: 'bg-[#00C853]', text: 'text-black', label: '■ Forecast' };
      case 'speculation':
        return { bg: 'bg-gray-400', text: 'text-black', label: '■ Speculation' };
    }
  };

  return (
    <section id="timeline" className="min-h-screen bg-white px-6 py-20" ref={ref}>
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Title */}
        <div className={`mb-12 transition-all duration-700 ${hasBeenInView ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="font-mono text-5xl font-bold text-black uppercase mb-4">
            The Axis Timeline
          </h2>
          <div className="w-24 h-1 bg-[#00C853]" />
          <p className="font-sans text-gray-700 mt-4">Click any event to see more details</p>
        </div>

        {/* Filter Buttons */}
        <div className="mb-12 flex flex-wrap gap-3">
          {['all', 'fact', 'forecast', 'speculation'].map((f) => {
            const filterType = f as FilterType;
            const isActive = filter === filterType;
            const labels: Record<FilterType, string> = {
              all: 'All Events',
              fact: '■ Fact',
              forecast: '■ Forecast',
              speculation: '■ Speculation',
            };

            return (
              <button
                key={f}
                onClick={() => setFilter(filterType)}
                className={`px-6 py-2 border-2 font-mono font-bold uppercase text-sm transition-all duration-300 hover:shadow-md transform hover:scale-105 ${
                  filterType === 'all'
                    ? isActive
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-black border-black hover:bg-gray-100'
                    : filterType === 'forecast'
                    ? isActive
                      ? 'bg-[#00C853] text-black border-[#00C853]'
                      : 'bg-white text-[#00C853] border-[#00C853] hover:bg-[#f0f0f0]'
                    : filterType === 'speculation'
                    ? isActive
                      ? 'bg-gray-400 text-black border-gray-400'
                      : 'bg-white text-gray-600 border-gray-400 hover:bg-gray-100'
                    : isActive
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-black border-black hover:bg-gray-100'
                }`}
              >
                {labels[filterType]}
              </button>
            );
          })}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line connector */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-black via-[#00C853] to-black transform md:-translate-x-1/2" />

          {/* Timeline Events */}
          <div className="space-y-8">
            {filteredEvents.map((event, index) => {
              const { bg, text, label } = getTypeStyles(event.type);
              const isEven = index % 2 === 0;
              const delay = hasBeenInView ? `${index * 100}ms` : '0ms';
              const isExpanded = expandedEvents.has(event.year);

              return (
                <div
                  key={event.year}
                  className={`flex gap-8 ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} flex-col transition-all duration-700 ${hasBeenInView ? 'animate-slide-up' : 'opacity-0'}`}
                  style={{ animationDelay: delay }}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                    <button
                      onClick={() => toggleExpand(event.year)}
                      className={`w-full border-3 border-black bg-white p-6 text-left transition-all duration-300 hover:shadow-lg transform hover:scale-102 active:scale-98 ${isExpanded ? 'ring-2 ring-[#00C853] ring-offset-2' : ''}`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className={`inline-block ${bg} ${text} px-3 py-1 font-mono text-xs font-bold mb-3 uppercase`}>
                            {label}
                          </div>
                          <h3 className="font-mono text-2xl font-bold text-black mb-2 uppercase">
                            {event.title}
                          </h3>
                          <p className="font-sans text-gray-700 mb-2">{event.description}</p>
                          <p className="font-mono text-lg font-bold text-[#00C853]">{event.year}</p>
                        </div>
                        <div className={`flex-shrink-0 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                          <ChevronDown className="w-6 h-6 text-[#00C853]" />
                        </div>
                      </div>

                      {/* Expanded Details */}
                      {isExpanded && event.details && (
                        <div className="mt-6 pt-6 border-t-2 border-gray-200 animate-slide-up">
                          <p className="font-mono text-xs uppercase font-bold text-gray-600 mb-4">Additional Details</p>
                          <ul className="space-y-2">
                            {event.details.map((detail, i) => (
                              <li key={i} className="font-sans text-sm text-gray-800 flex gap-3">
                                <span className="text-[#00C853] font-bold mt-1">→</span>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </button>
                  </div>

                  {/* Dot connector */}
                  <div className="flex-0 flex items-center justify-center">
                    <div className={`w-6 h-6 rounded-full border-3 border-black transition-all duration-300 ${isExpanded ? 'bg-[#00C853] shadow-lg' : 'bg-[#00C853]'}`} />
                  </div>

                  {/* Empty space for layout */}
                  <div className="hidden md:flex flex-1" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
