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
    name: 'Sam Altman',
    title: '"CEO, OpenAI',
    quote: 'My guess is we will hit AGI sooner than most people in the world think and it will matter much less ... We are beginning to turn our aim beyond (AGI), to superintelligence in the true sense of the word.',
    source: 'Magazine - Time',
    sourceUrl: 'https://time.com/7205596/sam-altman-superintelligence-agi',
  },
  {
    id: '2',
    name: 'Demis Hassabus',
    title: 'CEO, DeepMind',
    quote: 'AGI - AI that is smarter than humans - will not be a job-killer. Instead it will usher in a golden era for humanity, potentially enabling galactic colonisation.',
    source: 'Interview - Times of India',
    sourceUrl: 'https://timesofindia.indiatimes.com/technology/tech-news/google-deepmind-ceo-denis-hassabis-superintelligent-ai-wont-be-a-job-killer-will-help-humans-colonise-the-galaxy-in-5-years/articleshow/121729769.cms',
  },
  {
    id: '3',
    name: 'Geoffrey Hinton',
    title: '"Godfather of AI"',
    quote: 'My fear isnt that AI becomes conscious -- its that it becomes competent.',
    source: 'CBS - Interview',
    sourceUrl: 'https://www.cbsnews.com/news/geoffrey-hinton-ai-dangers-60-minutes-transcript',
  },
  {
    "id": "5",
    "name": "Anthony Aguirre",
    "title": "Professor of Physics, University of California, Santa Cruz",
    "quote": "This essay argues that we should keep the future human by closing the \"gates\" to smarter-than-human, autonomous, general-purpose AI – sometimes called “AGI” – and especially to the highly-superhuman version sometimes called “superintelligence.”",
    "source": "Statement - KeepTheFutureHuman",
    "sourceUrl": "https://keepthefuturehuman.ai/wp-content/uploads/2025/03/Keep_the_Future_Human__AnthonyAguirre__5March2025.pdf"
  }
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
                className={`group border-4 border-black bg-white p-8 hover:shadow-2xl transition-all duration-700 relative overflow-hidden transform hover:scale-105 hover:-translate-y-2 hover:border-[#00C853] ${hasBeenInView ? 'animate-slide-up' : 'opacity-0'}`}
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
                    className="inline-flex items-center gap-2 px-4 py-2 border-2 border-[#00C853] bg-white text-[#00C853] font-mono text-xs font-bold uppercase hover:bg-[#00C853] hover:text-black transition-all duration-300 transform hover:scale-105 active:scale-95 group"
                  >
                    <span>{expert.source}</span>
                    <ExternalLink className="w-3 h-3 group-hover:rotate-45 transition-transform duration-300" />
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
