import { useState } from 'react';
import { useInView } from '@/hooks/use-in-view';

type FilterType = 'all' | 'fact' | 'forecast' | 'speculation';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  type: 'fact' | 'forecast' | 'speculation';
}

const timelineEvents: TimelineEvent[] = [
  {
    year: '2018',
    title: 'GPT-1 Released',
    description: 'OpenAI introduces the first Generative Pre-trained Transformer, marking a major leap in language modeling.',
    type: 'fact',
  },
  {
    year: '2020',
    title: 'GPT-3 Era Begins',
    description: 'GPT-3 demonstrates few-shot learning capabilities that shock the research community.',
    type: 'fact',
  },
  {
    year: '2022',
    title: 'ChatGPT Launch',
    description: 'ChatGPT reaches 100M users faster than any application in history, bringing AI to mainstream.',
    type: 'fact',
  },
  {
    year: '2023',
    title: 'Multimodal AI Maturity',
    description: 'GPT-4 and competing systems demonstrate reliable multimodal capabilities across text, vision, and reasoning.',
    type: 'fact',
  },
  {
    year: '2024',
    title: 'Reasoning Breakthroughs',
    description: 'O3/O4 models show emergent reasoning capabilities suggesting possible approach to AGI.',
    type: 'forecast',
  },
  {
    year: '2025-2026',
    title: 'AGI Emergence Window',
    description: 'Based on scaling trends and capability jumps, AGI emergence is estimated within this timeframe.',
    type: 'forecast',
  },
  {
    year: '2027-2030',
    title: 'ASI Development',
    description: 'Artificial Superintelligence may emerge from recursive self-improvement cycles.',
    type: 'speculation',
  },
];

export function TimelineSection() {
  const { ref, hasBeenInView } = useInView({ threshold: 0.1 });
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredEvents = filter === 'all' 
    ? timelineEvents 
    : timelineEvents.filter(event => event.type === filter);

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
        </div>

        {/* Filter Buttons */}
        <div className="mb-12 flex flex-wrap gap-3">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 border-2 border-black font-mono font-bold uppercase text-sm transition-all duration-200 ${
              filter === 'all'
                ? 'bg-black text-white'
                : 'bg-white text-black hover:bg-gray-100'
            }`}
          >
            All Events
          </button>
          <button
            onClick={() => setFilter('fact')}
            className={`px-6 py-2 border-2 border-black font-mono font-bold uppercase text-sm transition-all duration-200 ${
              filter === 'fact'
                ? 'bg-black text-white'
                : 'bg-white text-black hover:bg-gray-100'
            }`}
          >
            ■ Fact
          </button>
          <button
            onClick={() => setFilter('forecast')}
            className={`px-6 py-2 border-2 border-[#00C853] font-mono font-bold uppercase text-sm transition-all duration-200 ${
              filter === 'forecast'
                ? 'bg-[#00C853] text-black'
                : 'bg-white text-[#00C853] hover:bg-[#f0f0f0]'
            }`}
          >
            ■ Forecast
          </button>
          <button
            onClick={() => setFilter('speculation')}
            className={`px-6 py-2 border-2 border-gray-400 font-mono font-bold uppercase text-sm transition-all duration-200 ${
              filter === 'speculation'
                ? 'bg-gray-400 text-black'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            ■ Speculation
          </button>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line connector */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-black transform md:-translate-x-1/2" />

          {/* Timeline Events */}
          <div className="space-y-8">
            {filteredEvents.map((event, index) => {
              const { bg, text, label } = getTypeStyles(event.type);
              const isEven = index % 2 === 0;

              return (
                <div
                  key={event.year}
                  className={`flex gap-8 ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} flex-col`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="border-3 border-black bg-white p-6">
                      <div className={`inline-block ${bg} ${text} px-3 py-1 font-mono text-xs font-bold mb-3 uppercase`}>
                        {label}
                      </div>
                      <h3 className="font-mono text-2xl font-bold text-black mb-2 uppercase">
                        {event.title}
                      </h3>
                      <p className="font-sans text-gray-700 mb-2">{event.description}</p>
                      <p className="font-mono text-lg font-bold text-[#00C853]">{event.year}</p>
                    </div>
                  </div>

                  {/* Dot connector */}
                  <div className="flex-0 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full border-3 border-black bg-[#00C853]" />
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
