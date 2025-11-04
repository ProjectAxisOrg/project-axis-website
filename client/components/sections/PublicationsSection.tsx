import { FileText, Download } from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';

interface Publication {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  downloadUrl: string;
}

const publications: Publication[] = [
  {
    id: '1',
    title: 'The Dependency Era',
    description: 'An analysis of humanity\'s growing dependence on AI systems and its implications for AGI emergence.',
    date: 'March 2024',
    category: 'Research',
    downloadUrl: '#',
  },
  {
    id: '2',
    title: 'Forecast 2030',
    description: 'Comprehensive timeline projections of AI capability development through 2030, including AGI emergence probabilities.',
    date: 'February 2024',
    category: 'Forecast',
    downloadUrl: '#',
  },
  {
    id: '3',
    title: 'Scaling Laws & AGI',
    description: 'Deep dive into transformer scaling laws and their relationship to general intelligence emergence.',
    date: 'January 2024',
    category: 'Technical',
    downloadUrl: '#',
  },
  {
    id: '4',
    title: 'Safety Considerations',
    description: 'Examining alignment challenges and safety measures necessary for AGI development.',
    date: 'December 2023',
    category: 'Analysis',
    downloadUrl: '#',
  },
  {
    id: '5',
    title: 'Multimodal Reasoning',
    description: 'Study of recent breakthroughs in multimodal AI reasoning and their significance.',
    date: 'November 2023',
    category: 'Research',
    downloadUrl: '#',
  },
  {
    id: '6',
    title: 'Economic Impact Report',
    description: 'Analysis of AGI\'s potential economic implications and societal transformation scenarios.',
    date: 'October 2023',
    category: 'Economic',
    downloadUrl: '#',
  },
];

export function PublicationsSection() {
  const { ref, hasBeenInView } = useInView({ threshold: 0.1 });

  return (
    <section className="min-h-screen bg-white px-6 py-20" ref={ref}>
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Title */}
        <div className={`mb-16 transition-all duration-700 ${hasBeenInView ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="font-mono text-5xl font-bold text-black uppercase mb-4">
            Research Publications
          </h2>
          <div className="w-24 h-1 bg-[#00C853]" />
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publications.map((pub, index) => {
            const delay = hasBeenInView ? `${index * 100}ms` : '0ms';
            return (
              <div
                key={pub.id}
                className={`border-3 border-black bg-white p-6 hover:shadow-2xl transition-all duration-700 flex flex-col transform hover:scale-105 hover:-translate-y-2 hover:border-[#00C853] ${hasBeenInView ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: delay }}
              >
                {/* Document Header */}
                <div className="border-b-2 border-black pb-4 mb-4">
                  <div className="flex items-start gap-3 mb-3">
                    <FileText className="w-6 h-6 text-[#00C853] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-mono text-xs uppercase font-bold text-gray-600 mb-1">
                        {pub.category}
                      </p>
                      <h3 className="font-mono text-lg font-bold text-black leading-tight">
                        {pub.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <p className="font-sans text-sm text-gray-800 mb-4 flex-grow">
                  {pub.description}
                </p>

                {/* Footer */}
                <div className="border-t-2 border-black pt-4">
                  <p className="font-mono text-xs text-gray-600 mb-4">{pub.date}</p>
                  <a
                    href={pub.downloadUrl}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#00C853] text-black border-2 border-[#00C853] font-mono text-xs font-bold uppercase hover:bg-black hover:text-white hover:border-black transition-all duration-300 transform hover:scale-105 active:scale-95 group"
                  >
                    <span>Read Report</span>
                    <Download className="w-3 h-3 group-hover:translate-y-1 transition-transform duration-300" />
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
