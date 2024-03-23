import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
import { LandingContent } from "@/components/landing-content";
import { LandingFooter } from "@/components/landing-footer";
import { LandingFaq } from "@/components/landing-faq";

const LandingPage = () => {
  return (
    <div className="h-full ">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
      <LandingFaq />
      <LandingFooter />
    </div>
  );
};

export default LandingPage;
