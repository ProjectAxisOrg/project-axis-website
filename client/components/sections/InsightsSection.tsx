import { ExternalLink } from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';

interface ExpertQuote {
  id: string;
  name: string;
  title: string;
  quote: string;
  source: string;
  sourceUrl: string;
}

const expertQuotes: ExpertQuote[] = [
  {
    id: '1',
    name: 'Geoffrey Hinton',
    title: 'AI Pioneer, Google',
    quote: 'It\'s now clear that deep learning is the right framework for understanding how the brain works.',
    source: 'Interview - Nature',
    sourceUrl: 'https://example.com',
  },
  {
    id: '2',
    name: 'Yoshua Bengio',
    title: 'Deep Learning Researcher',
    quote: 'We are facing the most serious challenge humanity has ever faced: making the transition to AGI safely.',
    source: 'Address - Toronto Conference',
    sourceUrl: 'https://example.com',
  },
  {
    id: '3',
    name: 'Demis Hassabis',
    title: 'CEO, DeepMind',
    quote: 'The ultimate goal of our research is to build artificial general intelligence to help tackle the world\'s most pressing problems.',
    source: 'DeepMind Blog',
    sourceUrl: 'https://example.com',
  },
  {
    id: '4',
    name: 'Stuart Russell',
    title: 'AI Safety Researcher, UC Berkeley',
    quote: 'The transition to AGI is not something to be feared if we solve the alignment problem first.',
    source: 'Podcast - Lex Fridman',
    sourceUrl: 'https://example.com',
  },
];

export function InsightsSection() {
  const { ref, hasBeenInView } = useInView({ threshold: 0.1 });

  return (
    <section className="min-h-screen bg-white px-6 py-20" ref={ref}>
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Title */}
        <div className={`mb-16 transition-all duration-700 ${hasBeenInView ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="font-mono text-5xl font-bold text-black uppercase mb-4">
            Voices from the Frontier
          </h2>
          <div className="w-24 h-1 bg-[#00C853]" />
        </div>

        {/* Quote Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertQuotes.map((expert, index) => {
            const delay = hasBeenInView ? `${index * 100}ms` : '0ms';
            return (
              <div
                key={expert.id}
                className={`group border-4 border-black bg-white p-8 hover:shadow-lg transition-all duration-700 relative overflow-hidden ${hasBeenInView ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: delay }}
              >
                {/* Green glow effect on hover */}
                <div className="absolute inset-0 bg-[#00C853] opacity-0 group-hover:opacity-5 transition-opacity duration-300" />

                <div className="relative z-10">
                  {/* Quote Mark */}
                  <div className="text-5xl font-mono text-[#00C853] mb-4">"</div>

                  {/* Quote Text */}
                  <p className="font-sans text-lg text-black mb-6 leading-relaxed italic">
                    {expert.quote}
                  </p>

                  {/* Divider */}
                  <div className="h-1 w-16 bg-[#00C853] mb-6" />

                  {/* Expert Info */}
                  <div className="mb-4">
                    <p className="font-mono font-bold text-black uppercase">{expert.name}</p>
                    <p className="font-sans text-sm text-gray-700">{expert.title}</p>
                  </div>

                  {/* View Source Button */}
                  <a
                    href={expert.sourceUrl}
                    className="inline-flex items-center gap-2 px-4 py-2 border-2 border-[#00C853] bg-white text-[#00C853] font-mono text-xs font-bold uppercase hover:bg-[#00C853] hover:text-black transition-all duration-200"
                  >
                    <span>{expert.source}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
