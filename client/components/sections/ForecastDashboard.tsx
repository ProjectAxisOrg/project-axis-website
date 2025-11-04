import { useState } from 'react';
import { useInView } from '@/hooks/use-in-view';
import { TrendingUp, BarChart3 } from 'lucide-react';

interface Forecast {
  source: string;
  year: number;
  confidence: number;
  methodology: string;
}

interface ScenarioData {
  name: string;
  probability: number;
  year: string;
  description: string;
}

const forecasts: Forecast[] = [
  {
    source: 'Project Axis Analysis',
    year: 2029,
    confidence: 65,
    methodology: 'Aggregation of scaling trends, benchmark velocities, compute growth, and expert survey data.',
  },
  {
    source: 'AI-2027 Forecast',
    year: 2027,
    confidence: 69,
    methodology: 'Scaling law trends + capability benchmarks',
  },
  {
    source: '80,000 Hours Trend Extrapolation',
    year: 2029,
    confidence: 60,
    methodology: 'Public report analysing compute, reasoning benchmarks, and bottleneck timelines',
  },
  {
    source: 'Expert Survey Aggregation',
    year: 2032,
    confidence: 55,
    methodology: 'large-scale expert and community surveys (e.g., Metaculus, Scholar polls)',
  },
  {
    source: 'Technology Bottleneck Model',
    year: 2034,
    confidence: 50,
    methodology: 'Analysis of hardware/software/social cascade constraints',
  },
];

const scenarios: ScenarioData[] = [
  {
    name: 'Early Emergence',
    probability: 18,
    year: '2024-2025',
    description: 'Rapid capability breakthroughs lead to AGI sooner than expected',
  },
  {
    name: 'Near-Term Emergence',
    probability: 45,
    year: '2025-2027',
    description: 'AGI emerges within the 24-month window (most likely scenario)',
  },
  {
    name: 'Mid-Term Emergence',
    probability: 28,
    year: '2028-2030',
    description: 'Emergence delayed due to technical challenges or regulatory pause',
  },
  {
    name: 'Extended Timeline',
    probability: 9,
    year: '2031+',
    description: 'Fundamental breakthroughs still needed; emergence pushed to beyond 2031',
  },
];

const capabilityFactors = [
  { name: 'Reasoning Capability', weight: 25, current: 62 },
  { name: 'Knowledge Integration', weight: 20, current: 78 },
  { name: 'Long-Context Understanding', weight: 18, current: 71 },
  { name: 'Autonomous Goal Completion', weight: 20, current: 45 },
  { name: 'Multi-Modal Reasoning', weight: 17, current: 68 },
];

export function ForecastDashboard() {
  const { ref, hasBeenInView } = useInView({ threshold: 0.1 });
  const [hoveredForecast, setHoveredForecast] = useState<string | null>(null);

  const avgYear = Math.round(
    forecasts.reduce((sum, f) => sum + f.year, 0) / forecasts.length
  );
  const avgConfidence = Math.round(
    forecasts.reduce((sum, f) => sum + f.confidence, 0) / forecasts.length
  );

  return (
    <section id="forecast" className="min-h-screen bg-white px-6 py-20" ref={ref}>
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Title */}
        <div className={`mb-16 transition-all duration-700 ${hasBeenInView ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="font-mono text-5xl font-bold text-black uppercase mb-4">
            AGI Probability Dashboard
          </h2>
          <div className="w-24 h-1 bg-[#00C853]" />
          <p className="font-sans text-gray-700 mt-4">Data-driven analysis of AGI emergence forecasts</p>
        </div>

        {/* Summary Stats */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 transition-all duration-700 ${hasBeenInView ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="border-3 border-black p-6 bg-white hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp className="w-5 h-5 text-[#00C853]" />
              <p className="font-mono text-xs uppercase font-bold text-gray-600">Consensus Year</p>
            </div>
            <p className="font-mono text-4xl font-bold text-black">{avgYear}</p>
            <p className="font-sans text-xs text-gray-700 mt-2">Average across all models</p>
          </div>

          <div className="border-3 border-black p-6 bg-white hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center gap-3 mb-3">
              <BarChart3 className="w-5 h-5 text-[#00C853]" />
              <p className="font-mono text-xs uppercase font-bold text-gray-600">Avg Confidence</p>
            </div>
            <p className="font-mono text-4xl font-bold text-black">{avgConfidence}%</p>
            <p className="font-sans text-xs text-gray-700 mt-2">Across all forecasts</p>
          </div>

          <div className="border-3 border-black p-6 bg-white hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <p className="font-mono text-xs uppercase font-bold text-gray-600 mb-3">Scenarios</p>
            <p className="font-mono text-4xl font-bold text-black">4</p>
            <p className="font-sans text-xs text-gray-700 mt-2">Key probability scenarios</p>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Forecast Models */}
          <div className={`transition-all duration-700 ${hasBeenInView ? 'animate-slide-left' : 'opacity-0'}`}>
            <h3 className="font-mono text-2xl font-bold text-black uppercase mb-6">Forecast Models</h3>
            
            <div className="space-y-4">
              {forecasts.map((forecast, index) => {
                const delay = hasBeenInView ? `${index * 100}ms` : '0ms';
                return (
                  <div
                    key={forecast.source}
                    className={`border-2 border-black p-5 bg-white hover:shadow-lg transition-all duration-700 cursor-pointer transform hover:scale-102 ${hasBeenInView ? 'animate-slide-up' : 'opacity-0'}`}
                    style={{ animationDelay: delay }}
                    onMouseEnter={() => setHoveredForecast(forecast.source)}
                    onMouseLeave={() => setHoveredForecast(null)}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <p className="font-mono text-sm font-bold text-black uppercase">{forecast.source}</p>
                        <p className="font-sans text-xs text-gray-600 mt-1">{forecast.methodology}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-mono text-2xl font-bold text-[#00C853]">{forecast.year}</p>
                        <p className="font-mono text-xs text-gray-600">EST. YEAR</p>
                      </div>
                    </div>

                    {/* Confidence Bar */}
                    <div className="mb-3">
                      <div className="flex justify-between mb-1">
                        <p className="font-mono text-xs font-bold text-gray-600">CONFIDENCE</p>
                        <p className="font-mono text-xs font-bold text-[#00C853]">{forecast.confidence}%</p>
                      </div>
                      <div className="w-full h-2 border-2 border-black bg-white">
                        <div
                          className={`h-full bg-[#00C853] transition-all duration-500 ${hoveredForecast === forecast.source ? 'animate-pulse' : ''}`}
                          style={{ width: `${forecast.confidence}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Probability Scenarios */}
          <div className={`transition-all duration-700 ${hasBeenInView ? 'animate-slide-right' : 'opacity-0'}`}>
            <h3 className="font-mono text-2xl font-bold text-black uppercase mb-6">Emergence Scenarios</h3>
            
            <div className="space-y-4">
              {scenarios.map((scenario, index) => {
                const delay = hasBeenInView ? `${index * 100 + 250}ms` : '0ms';
                return (
                  <div
                    key={scenario.name}
                    className={`border-2 border-black p-5 bg-white hover:shadow-lg transition-all duration-700 transform hover:scale-102 ${hasBeenInView ? 'animate-slide-up' : 'opacity-0'}`}
                    style={{ animationDelay: delay }}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <p className="font-mono text-sm font-bold text-black uppercase">{scenario.name}</p>
                        <p className="font-sans text-xs text-gray-600 mt-1">{scenario.description}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-mono text-2xl font-bold text-[#00C853]">{scenario.probability}%</p>
                        <p className="font-mono text-xs text-gray-600">PROBABILITY</p>
                      </div>
                    </div>

                    {/* Probability Bar */}
                    <div className="mb-2">
                      <div className="w-full h-3 border-2 border-black bg-white relative">
                        <div
                          className="h-full bg-gradient-to-r from-[#00C853] to-[#00C853] transition-all duration-500"
                          style={{ width: `${scenario.probability}%` }}
                        />
                      </div>
                    </div>
                    <p className="font-mono text-xs text-gray-600">{scenario.year}</p>
                  </div>
                );
              })}
            </div>

            {/* Total Check */}
            <div className="mt-6 pt-6 border-t-2 border-black">
              <div className="flex justify-between items-center">
                <p className="font-mono text-xs uppercase font-bold text-gray-600">Total Probability</p>
                <p className="font-mono text-lg font-bold text-black">
                  {scenarios.reduce((sum, s) => sum + s.probability, 0)}%
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Capability Factors */}
        <div className={`mt-16 transition-all duration-700 ${hasBeenInView ? 'animate-fade-in' : 'opacity-0'}`} style={{ transitionDelay: '300ms' }}>
          <div className="border-4 border-black p-8 bg-white">
            <h3 className="font-mono text-2xl font-bold text-black uppercase mb-8">AGI Readiness Factors</h3>
            
            <div className="space-y-6">
              {capabilityFactors.map((factor, index) => (
                <div key={factor.name}>
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <p className="font-mono text-sm font-bold text-black">{factor.name}</p>
                      <p className="font-mono text-xs text-gray-600">Importance: {factor.weight}%</p>
                    </div>
                    <p className="font-mono text-lg font-bold text-[#00C853]">{factor.current}%</p>
                  </div>
                  
                  <div className="w-full h-3 border-2 border-black bg-white">
                    <div
                      className={`h-full bg-[#00C853] transition-all duration-500 ${index % 2 === 0 ? 'animate-pulse' : ''}`}
                      style={{ width: `${factor.current}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Weighted Score */}
            <div className="mt-8 pt-8 border-t-4 border-black">
              <div className="flex justify-between items-center">
                <p className="font-mono text-sm font-bold text-black uppercase">Weighted AGI Readiness Score</p>
                <div className="text-right">
                  <p className="font-mono text-4xl font-bold text-[#00C853]">64%</p>
                  <p className="font-mono text-xs text-gray-600 mt-1">CURRENT ESTIMATE</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Data Note */}
        <div className={`mt-12 text-center transition-all duration-700 ${hasBeenInView ? 'animate-fade-in' : 'opacity-0'}`} style={{ transitionDelay: '400ms' }}>
          <p className="font-sans text-sm text-gray-700">
            <span className="font-bold">Note:</span> All forecasts are based on publicly available research, scaling trends, and expert consensus. 
            Actual AGI emergence depends on unforeseen breakthroughs and remains uncertain.
          </p>
        </div>
      </div>
    </section>
  );
}
