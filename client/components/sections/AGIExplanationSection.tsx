import { useInView } from '@/hooks/use-in-view';
import { Brain, Zap, Target, LineChart } from 'lucide-react';

interface AGIConceptProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
}

function AGIConcept({ icon, title, description, details }: AGIConceptProps) {
  return (
    <div className="border-2 border-black p-6 bg-white hover:shadow-lg transition-all duration-300 group hover:bg-[#f9fff7]">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 text-[#00C853] group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <div className="flex-1">
          <h4 className="font-mono text-lg font-bold text-black uppercase mb-2">{title}</h4>
          <p className="font-sans text-sm text-gray-700 mb-4">{description}</p>
          <ul className="space-y-2">
            {details.map((detail, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[#00C853] font-bold mt-1 flex-shrink-0">›</span>
                <span className="font-sans text-xs text-gray-600">{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function AGIExplanationSection() {
  const { ref, hasBeenInView } = useInView({ threshold: 0.1 });

  const agiConcepts: AGIConceptProps[] = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'What is AGI?',
      description: 'Artificial General Intelligence represents a system capable of understanding, learning, and applying knowledge across diverse domains at or beyond human level.',
      details: [
        'Can perform any intellectual task that humans can',
        'Transfers knowledge between different domains',
        'Adapts to novel situations without retraining',
        'Understands context and nuance in language and reasoning',
      ],
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Narrow vs General AI',
      description: 'Today\'s AI systems are specialized (narrow) - excelling in specific domains but lacking general reasoning and transfer capabilities.',
      details: [
        'Narrow AI: Expert in one task (chess, image recognition)',
        'General AI: Flexible problem-solving across domains',
        'Current LLMs blur the line through emergent capabilities',
        'AGI would represent a fundamental shift in AI capability',
      ],
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Measuring Progress',
      description: 'We track AGI readiness through benchmark categories that assess key dimensions of artificial intelligence.',
      details: [
        'Reasoning: Complex multi-step logical problem solving',
        'Coding: Software development and implementation',
        'Vision: Image understanding and visual reasoning',
        'Knowledge: Breadth and accuracy of world understanding',
        'Instruction Following: Ability to understand and execute user intent',
      ],
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: 'Path to AGI',
      description: 'The trajectory toward AGI involves scaling models, improving reasoning, reducing hallucinations, and enabling real-time interaction with systems.',
      details: [
        'Scaling laws show consistent performance improvements',
        'Emergent capabilities appear with sufficient model size',
        'Multi-modal integration (text, vision, reasoning)',
        'Real-time reasoning and planning capabilities',
        'Autonomous tool use and system interaction',
      ],
    },
  ];

  return (
    <section id="agi" className="min-h-screen bg-white px-6 py-20" ref={ref}>
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Title */}
        <div className={`mb-16 transition-all duration-700 ${hasBeenInView ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="font-mono text-5xl font-bold text-black uppercase mb-4">
            Understanding AGI
          </h2>
          <div className="w-24 h-1 bg-[#00C853]" />
          <p className="font-sans text-gray-700 mt-4">
            A comprehensive guide to Artificial General Intelligence and the metrics tracking our progress toward this milestone
          </p>
        </div>

        {/* Core Definition */}
        <div className={`border-4 border-black p-8 bg-white mb-12 transition-all duration-700 ${hasBeenInView ? 'animate-slide-up' : 'opacity-0'}`} style={{ transitionDelay: '100ms' }}>
          <h3 className="font-mono text-2xl font-bold text-black uppercase mb-4">The AGI Definition</h3>
          <p className="font-sans text-gray-700 leading-relaxed mb-4">
            Artificial General Intelligence (AGI) is a hypothetical form of AI that would have the ability to understand, learn, and apply knowledge across a wide range of domains with human-level or superhuman capability. Unlike current narrow AI systems—which excel in specific tasks—AGI would possess cognitive flexibility, adaptability, and reasoning capabilities that enable it to handle novel problems in diverse fields without task-specific retraining.
          </p>
          <p className="font-sans text-gray-700 leading-relaxed">
            The transition to AGI would represent a fundamental shift in technology's relationship with human capability, potentially serving as a gateway to artificial superintelligence (ASI) and transforming nearly every aspect of human civilization.
          </p>
        </div>

        {/* AGI Concepts Grid */}
        <div className={`mb-12 transition-all duration-700 ${hasBeenInView ? 'animate-slide-up' : 'opacity-0'}`} style={{ transitionDelay: '200ms' }}>
          <h3 className="font-mono text-2xl font-bold text-black uppercase mb-6">Key Concepts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {agiConcepts.map((concept, index) => {
              const delay = hasBeenInView ? `${index * 50}ms` : '0ms';
              return (
                <div
                  key={concept.title}
                  className="transition-all duration-700 opacity-0"
                  style={{
                    animation: hasBeenInView ? `slideUp 0.6s ease-out forwards` : 'none',
                    animationDelay: delay,
                  }}
                >
                  <AGIConcept {...concept} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Readiness Indicators */}
        <div className={`border-4 border-black p-8 bg-[#f9fff7] transition-all duration-700 mb-12 ${hasBeenInView ? 'animate-fade-in' : 'opacity-0'}`} style={{ transitionDelay: '400ms' }}>
          <h3 className="font-mono text-2xl font-bold text-black uppercase mb-6">AGI Readiness Indicators</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-mono text-lg font-bold text-[#00C853] uppercase mb-4">Technical Milestones</h4>
              <ul className="space-y-3">
                {[
                  'Multi-domain reasoning across sciences',
                  'Open-ended problem solving',
                  'Common sense understanding',
                  'Long-term memory and learning',
                  'Autonomous goal setting',
                  'Real-time knowledge integration',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#00C853] font-bold mt-1">✓</span>
                    <span className="font-sans text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-lg font-bold text-[#00C853] uppercase mb-4">Capability Benchmarks</h4>
              <ul className="space-y-3">
                {[
                  'Human-level reasoning (90%+ on complex tasks)',
                  'Programming at expert level',
                  'Scientific discovery and research',
                  'Robust instruction comprehension',
                  'Cross-domain transfer learning',
                  'Safe and aligned behavior',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#00C853] font-bold mt-1">✓</span>
                    <span className="font-sans text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Timeline Context */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700 ${hasBeenInView ? 'animate-slide-up' : 'opacity-0'}`} style={{ transitionDelay: '500ms' }}>
          <div className="border-2 border-black p-6 bg-white hover:shadow-lg transition-all duration-300">
            <p className="font-mono text-sm uppercase font-bold text-[#00C853] mb-3">Near Term (2025-2027)</p>
            <ul className="space-y-2">
              <li className="font-sans text-xs text-gray-700">• Advanced reasoning models</li>
              <li className="font-sans text-xs text-gray-700">• Multimodal integration</li>
              <li className="font-sans text-xs text-gray-700">• Increased benchmark scores</li>
              <li className="font-sans text-xs text-gray-700">• Improved real-world application</li>
            </ul>
          </div>
          <div className="border-2 border-black p-6 bg-white hover:shadow-lg transition-all duration-300">
            <p className="font-mono text-sm uppercase font-bold text-[#00C853] mb-3">Medium Term (2027-2030)</p>
            <ul className="space-y-2">
              <li className="font-sans text-xs text-gray-700">• General reasoning abilities</li>
              <li className="font-sans text-xs text-gray-700">• Cross-domain transfer</li>
              <li className="font-sans text-xs text-gray-700">• Autonomous research</li>
              <li className="font-sans text-xs text-gray-700">• AGI emergence window</li>
            </ul>
          </div>
          <div className="border-2 border-black p-6 bg-white hover:shadow-lg transition-all duration-300">
            <p className="font-mono text-sm uppercase font-bold text-[#00C853] mb-3">Long Term (2030+)</p>
            <ul className="space-y-2">
              <li className="font-sans text-xs text-gray-700">• AGI emergence</li>
              <li className="font-sans text-xs text-gray-700">• Superintelligence (ASI)</li>
              <li className="font-sans text-xs text-gray-700">• Transformed civilization</li>
              <li className="font-sans text-xs text-gray-700">• Unprecedented opportunities</li>
            </ul>
          </div>
        </div>

        {/* Bottom Note */}
        <div className={`mt-12 text-center transition-all duration-700 ${hasBeenInView ? 'animate-fade-in' : 'opacity-0'}`} style={{ transitionDelay: '600ms' }}>
          <p className="font-sans text-sm text-gray-700">
            <span className="font-bold">Project Axis Mission:</span> We track and analyze the progress toward AGI to provide transparency and insight into this critical moment in human history. Our benchmarks reflect current consensus on AGI readiness metrics.
          </p>
        </div>
      </div>
    </section>
  );
}
