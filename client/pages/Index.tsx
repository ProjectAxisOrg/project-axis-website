import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { TimelineSection } from '@/components/sections/TimelineSection';
import { ForecastDashboard } from '@/components/sections/ForecastDashboard';
import { BenchmarkDashboard } from '@/components/sections/BenchmarkDashboard';
import { InsightsSection } from '@/components/sections/InsightsSection';
import { PublicationsSection } from '@/components/sections/PublicationsSection';
import { ContactFooterSection } from '@/components/sections/ContactFooterSection';
import { ProgressIndicator } from '@/components/ProgressIndicator';

export default function Index() {
  return (
    <div className="w-full bg-white">
      <ProgressIndicator />
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <ForecastDashboard />
      <BenchmarkDashboard />
      <InsightsSection />
      <PublicationsSection />
      <ContactFooterSection />
    </div>
  );
}
