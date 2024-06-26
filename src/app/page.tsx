import AboutSection from "../components/about/AboutSection";
import BlogSection from "../components/blogs/BlogSection";
import ContactSection from "../components/contact/ContactSection";
import FeatureSection from "../components/feautures/FeatureSection";
import HeroSection from "../components/hero/HeroSection";
import TeamSection from "../components/team/TeamSection";
import WhySection from "../components/why/WhySection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <FeatureSection />
      <AboutSection />
      <WhySection />
      <TeamSection />
      <BlogSection />
      <ContactSection />
    </main>
  );
}
