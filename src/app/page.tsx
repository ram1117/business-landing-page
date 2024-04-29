import FeatureSection from "../components/feautures/FeatureSection";
import HeroSection from "../components/hero/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <FeatureSection />
    </main>
  );
}
