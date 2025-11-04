import { useState } from 'react';
import { useInView } from '@/hooks/use-in-view';
import { Award } from 'lucide-react';

interface ModelBenchmark {
  name: string;
  reasoning: number;
  knowledge: number;
  vision: number;
  coding: number;
  instruction: number;
  releaseYear: number;
  color: string;
}

interface BenchmarkCategory {
  name: string;
  description: string;
  key: keyof Omit<ModelBenchmark, 'name' | 'releaseYear' | 'color'>;
}

const models: ModelBenchmark[] = [
  {
    name: 'OpenAI GPT-5',
    reasoning: 93,
    knowledge: 91,
    vision: 84,
    coding: 75,
    instruction: 92,
    releaseYear: 2025,
    color: 'from-blue-500 to-blue-600',
  },
  {
    name: 'Grok 4',
    reasoning: 94,
    knowledge: 88,
    vision: 78,
    coding: 75,
    instruction: 90,
    releaseYear: 2025,
    color: 'from-purple-500 to-purple-600',
  },
  {
    name: 'OpenAI o3',
    reasoning: 92,
    knowledge: 89,
    vision: 83,
    coding: 65,
    instruction: 91,
    releaseYear: 2025,
    color: 'from-red-500 to-red-600',
  },
  {
    name: 'Meta Llama 3.3 70B',
    reasoning: 87,
    knowledge: 89,
    vision: 60,
    coding: 88,
    instruction: 87,
    releaseYear: 2024,
    color: 'from-green-500 to-green-600',
  },
  {
    name: 'Google Gemini 2.5 Pro',
    reasoning: 94.0,
    knowledge: 90,
    vision: 84,
    coding: 60,
    instruction: 92,
    releaseYear: 2025,
    color: 'from-amber-500 to-amber-600',
  },
];

const benchmarks: BenchmarkCategory[] = [
  {
    name: 'Reasoning',
    description: 'Complex multi-step logical reasoning and problem solving',
    key: 'reasoning',
  },
  {
    name: 'Knowledge',
    description: 'Breadth and accuracy of world knowledge',
    key: 'knowledge',
  },
  {
    name: 'Vision',
    description: 'Image understanding and visual reasoning',
    key: 'vision',
  },
  {
    name: 'Coding',
    description: 'Code generation and software development',
    key: 'coding',
  },
  {
    name: 'Instruction Following',
    description: 'Ability to follow complex user instructions',
    key: 'instruction',
  },
];

export function BenchmarkDashboard() {
  const { ref, hasBeenInView } = useInView({ threshold: 0.1 });
  const [selectedBenchmark, setSelectedBenchmark] = useState<keyof Omit<ModelBenchmark, 'name' | 'releaseYear' | 'color'>>('reasoning');
  const [hoveredModel, setHoveredModel] = useState<string | null>(null);

  const selectedBenchmarkData = benchmarks.find(b => b.key === selectedBenchmark);

  return (
    <section id="benchmarks" className="min-h-screen bg-white px-6 py-20" ref={ref}>
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Title */}
        <div className={`mb-16 transition-all duration-700 ${hasBeenInView ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="font-mono text-5xl font-bold text-black uppercase mb-4">
            AI Model Benchmarks
          </h2>
          <div className="w-24 h-1 bg-[#00C853]" />
          <p className="font-sans text-gray-700 mt-4">Comparing top AI models across key capability dimensions</p>
        </div>

        {/* Benchmark Category Selector */}
        <div className={`mb-12 transition-all duration-700 ${hasBeenInView ? 'animate-slide-up' : 'opacity-0'}`}>
          <p className="font-mono text-sm uppercase font-bold text-gray-600 mb-4">Select Benchmark Category</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {benchmarks.map((benchmark, index) => {
              const delay = hasBeenInView ? `${index * 50}ms` : '0ms';
              const isSelected = selectedBenchmark === benchmark.key;

              return (
                <button
                  key={benchmark.key}
                  onClick={() => setSelectedBenchmark(benchmark.key)}
                  className={`p-4 border-2 transition-all duration-300 transform hover:scale-105 active:scale-95 ${isSelected ? 'border-[#00C853] bg-[#f9fff7] shadow-lg' : 'border-black bg-white hover:shadow-md'}`}
                  style={{ transitionDelay: delay }}
                >
                  <p className="font-mono text-sm font-bold text-black uppercase">{benchmark.name}</p>
                  <p className="font-sans text-xs text-gray-600 mt-2">{benchmark.description}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Benchmark Chart */}
        <div className={`border-4 border-black p-8 bg-white mb-12 transition-all duration-700 hover:shadow-xl ${hasBeenInView ? 'animate-fade-in' : 'opacity-0'}`} style={{ transitionDelay: '200ms' }}>
          {/* Selected Benchmark Info */}
          <div className="mb-8 pb-8 border-b-2 border-gray-200">
            <h3 className="font-mono text-2xl font-bold text-black uppercase mb-2">
              {selectedBenchmarkData?.name}
            </h3>
            <p className="font-sans text-gray-700">{selectedBenchmarkData?.description}</p>
          </div>

          {/* Model Comparison Bars */}
          <div className="space-y-8">
            {models.map((model, index) => {
              const score = model[selectedBenchmark];
              const delay = hasBeenInView ? `${index * 100}ms` : '0ms';

              return (
                <div
                  key={model.name}
                  className={`transition-all duration-700 ${hasBeenInView ? 'animate-slide-up' : 'opacity-0'}`}
                  style={{ animationDelay: delay }}
                  onMouseEnter={() => setHoveredModel(model.name)}
                  onMouseLeave={() => setHoveredModel(null)}
                >
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-32">
                      <p className="font-mono font-bold text-black">{model.name}</p>
                      <p className="font-sans text-xs text-gray-600">{model.releaseYear}</p>
                    </div>
                    <div className="flex-1">
                      <div className="h-8 border-3 border-black bg-white relative overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${model.color} transition-all duration-500 flex items-center justify-end pr-3 ${hoveredModel === model.name ? 'shadow-lg' : ''}`}
                          style={{ width: `${score}%` }}
                        >
                          <p className="font-mono text-xs font-bold text-white">{score}%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Model Comparison Grid */}
        <div className={`transition-all duration-700 ${hasBeenInView ? 'animate-fade-in' : 'opacity-0'}`} style={{ transitionDelay: '300ms' }}>
          <h3 className="font-mono text-2xl font-bold text-black uppercase mb-6">Full Comparison Matrix</h3>
          
          <div className="overflow-x-auto border-3 border-black">
            <table className="w-full">
              <thead>
                <tr className="border-b-3 border-black bg-[#f9f9f9]">
                  <th className="px-6 py-4 text-left border-r-2 border-black">
                    <p className="font-mono font-bold text-black">Model</p>
                  </th>
                  {benchmarks.map((benchmark) => (
                    <th key={benchmark.key} className="px-6 py-4 text-center border-r-2 border-black last:border-r-0">
                      <p className="font-mono font-bold text-black uppercase text-sm">{benchmark.name}</p>
                    </th>
                  ))}
                  <th className="px-6 py-4 text-center">
                    <p className="font-mono font-bold text-black">Avg Score</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {models.map((model, modelIndex) => {
                  const avgScore = Math.round(
                    (model.reasoning + model.knowledge + model.vision + model.coding + model.instruction) / 5
                  );

                  return (
                    <tr
                      key={model.name}
                      className={`border-b-2 border-black last:border-b-0 transition-all duration-300 ${hoveredModel === model.name ? 'bg-[#f9fff7]' : 'hover:bg-gray-50'}`}
                      onMouseEnter={() => setHoveredModel(model.name)}
                      onMouseLeave={() => setHoveredModel(null)}
                    >
                      <td className="px-6 py-4 border-r-2 border-black">
                        <div>
                          <p className="font-mono font-bold text-black">{model.name}</p>
                          <p className="font-sans text-xs text-gray-600">{model.releaseYear}</p>
                        </div>
                      </td>
                      {benchmarks.map((benchmark) => {
                        const score = model[benchmark.key];
                        return (
                          <td key={benchmark.key} className="px-6 py-4 text-center border-r-2 border-black last:border-r-0">
                            <div className="relative">
                              <div className="h-6 bg-white border-2 border-black flex items-center justify-center">
                                <div
                                  className={`absolute left-0 h-full bg-gradient-to-r ${model.color} transition-all duration-300`}
                                  style={{ width: `${score}%` }}
                                />
                                <p className="relative z-10 font-mono text-xs font-bold text-black">{score}%</p>
                              </div>
                            </div>
                          </td>
                        );
                      })}
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          {avgScore >= 90 && <Award className="w-4 h-4 text-[#00C853]" />}
                          <p className="font-mono font-bold text-black">{avgScore}%</p>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Key Insights */}
        <div className={`mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700 ${hasBeenInView ? 'animate-slide-up' : 'opacity-0'}`} style={{ transitionDelay: '400ms' }}>
          <div className="border-2 border-black p-6 bg-white hover:shadow-lg transition-all duration-300">
            <p className="font-mono text-sm uppercase font-bold text-[#00C853] mb-2">Top Reasoner</p>
            <p className="font-mono text-xl font-bold text-black">Gemini 2.5 Pro // Grok 4</p>
            <p className="font-sans text-xs text-gray-700 mt-2">94% on complex reasoning tasks</p>
          </div>
          <div className="border-2 border-black p-6 bg-white hover:shadow-lg transition-all duration-300">
            <p className="font-mono text-sm uppercase font-bold text-[#00C853] mb-2">Best Overall</p>
            <p className="font-mono text-xl font-bold text-black">OpenAI GPT-5</p>
            <p className="font-sans text-xs text-gray-700 mt-2">87% average across all benchmarks</p>
          </div>
          <div className="border-2 border-black p-6 bg-white hover:shadow-lg transition-all duration-300">
            <p className="font-mono text-sm uppercase font-bold text-[#00C853] mb-2">Vision Leader</p>
            <p className="font-mono text-xl font-bold text-black">Gemini 2.5 Pro // OpenAI GPT-5</p>
            <p className="font-sans text-xs text-gray-700 mt-2">84% on visual understanding</p>
          </div>
        </div>

        {/* Data Note */}
        <div className={`mt-12 text-center transition-all duration-700 ${hasBeenInView ? 'animate-fade-in' : 'opacity-0'}`} style={{ transitionDelay: '500ms' }}>
          <p className="font-sans text-sm text-gray-700">
            <span className="font-bold">Note:</span> Benchmarks are composite scores based on MMLU, GSM8K, HumanEval, ARC, and HellaSwag. Scores normalized to 0-100 scale.
          </p>
        </div>
      </div>
    </section>
  );
}
