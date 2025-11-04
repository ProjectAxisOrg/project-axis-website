import { useInView } from '@/hooks/use-in-view';
import { NavigatorMenu } from './NavigatorMenu';

export function AboutSection() {
  const { ref, hasBeenInView } = useInView({ threshold: 0.2 });

  return (
    <section id="about" className="min-h-screen bg-white px-6 py-20 flex items-center" ref={ref}>
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Title */}
        <div className={`mb-16 transition-all duration-700 ${hasBeenInView ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="font-mono text-5xl font-bold text-black uppercase mb-4">
            About Project Axis
          </h2>
          <div className="w-24 h-1 bg-[#00C853]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`transition-all duration-700 ${hasBeenInView ? 'animate-slide-left' : 'opacity-0'}`}>
            {/* Main Content Box */}
            <div className="border-4 border-black p-8 mb-8 bg-white hover:shadow-2xl transition-all duration-300 hover:border-[#00C853] transform hover:scale-105">
              <p className="font-sans text-lg text-black leading-relaxed mb-6">
                <span className="font-bold">Project Axis</span> is an independent, student-led observatory that tracks and explains the evolution of AI. Through verified data, curated timelines, and public insight, it clarifies how close humanity may be to achieving AGI.
              </p>
              <p className="font-sans text-base text-gray-800 leading-relaxed">
                We synthesize research from leading institutions, analyze emerging capabilities, and provide transparent frameworks for understanding AI development trajectories. Our mission is to ensure the conversation around AGI remains grounded in evidence, accessible to the public, and informed by the latest scientific understanding.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="border-2 border-black p-4 text-center hover:border-[#00C853] hover:shadow-lg hover:bg-[#f9fff7] transition-all duration-300 cursor-pointer transform hover:scale-105">
                <div className="text-3xl font-mono font-bold text-[#00C853] mb-1">50+</div>
                <p className="font-mono text-xs uppercase font-semibold text-black">Data Points</p>
              </div>
              <div className="border-2 border-black p-4 text-center hover:border-[#00C853] hover:shadow-lg hover:bg-[#f9fff7] transition-all duration-300 cursor-pointer transform hover:scale-105">
                <div className="text-3xl font-mono font-bold text-[#00C853] mb-1">12</div>
                <p className="font-mono text-xs uppercase font-semibold text-black">Expert Sources</p>
              </div>
            </div>
          </div>

          {/* Visual Element - Stylized Neural Network */}
          <div className={`flex items-center justify-center transition-all duration-700 ${hasBeenInView ? 'animate-slide-right' : 'opacity-0'}`}>
            <div className="relative w-full max-w-sm aspect-square border-4 border-black bg-white p-8 flex items-center justify-center hover:shadow-2xl transition-all duration-300 hover:border-[#00C853] transform hover:scale-105 group">
              <svg className="w-full h-full group-hover:animate-pulse" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                {/* Central Node */}
                <circle cx="200" cy="200" r="20" fill="#00C853" strokeWidth="3" stroke="black" />
                
                {/* Layer 1 - Surrounding Nodes */}
                {[0, 1, 2, 3, 4, 5].map((i) => {
                  const angle = (i / 6) * Math.PI * 2;
                  const x = 200 + Math.cos(angle) * 120;
                  const y = 200 + Math.sin(angle) * 120;
                  return (
                    <g key={`layer1-${i}`}>
                      <line x1="200" y1="200" x2={x} y2={y} stroke="black" strokeWidth="2" />
                      <circle cx={x} cy={y} r="12" fill="white" strokeWidth="2" stroke="black" />
                    </g>
                  );
                })}

                {/* Layer 2 - Outer Nodes */}
                {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
                  const angle = (i / 8) * Math.PI * 2;
                  const x = 200 + Math.cos(angle) * 200;
                  const y = 200 + Math.sin(angle) * 200;
                  const connIndex = Math.floor(i / 1.33) % 6;
                  const connAngle = (connIndex / 6) * Math.PI * 2;
                  const connX = 200 + Math.cos(connAngle) * 120;
                  const connY = 200 + Math.sin(connAngle) * 120;
                  return (
                    <g key={`layer2-${i}`} opacity="0.7">
                      <line x1={connX} y1={connY} x2={x} y2={y} stroke="#00C853" strokeWidth="1" />
                      <circle cx={x} cy={y} r="8" fill="white" strokeWidth="1.5" stroke="#00C853" />
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>
        </div>

        {/* Navigator Menu */}
        <div className={`mt-16 transition-all duration-700 ${hasBeenInView ? 'animate-fade-in' : 'opacity-0'}`} style={{ transitionDelay: '300ms' }}>
          <NavigatorMenu />
        </div>
      </div>
    </section>
  );
}
