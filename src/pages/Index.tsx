
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';

import { EmergencyNumbers } from '@/components/EmergencyNumbers';
import { FirstAid } from '@/components/FirstAid';
import { Treatments } from '@/components/Treatments';
import { MentalHealth } from '@/components/MentalHealth';
import { DailyTip } from '@/components/DailyTip';
import { DietPlan } from '@/components/DietPlan';
import { PersonalityTest } from '@/components/PersonalityTest';
import { LocationSearch } from '@/components/LocationSearch';
import { SiteGuideBot } from '@/components/SiteGuideBot';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { AdSlot } from '@/components/AdSlot';
import { useAuth } from '@/contexts/AuthContext';

const Index = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      <AdSlot id="home-top" format="banner" />
      <EmergencyNumbers />
      <FirstAid />
      <Treatments />
      <AdSlot id="home-mid" format="inline" />
      <MentalHealth />
      <DailyTip />
      {user && <DietPlan />}
      {user && <PersonalityTest />}
      <AdSlot id="home-bottom" format="banner" />
      <LocationSearch />
      <SiteGuideBot />
      <BackToTop />
      <Footer />
    </div>
  );
};

export default Index;
