
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
import {
  Activity,
  BrainCircuit,
  Building2,
  Cross,
  Dumbbell,
  HeartPulse,
  Hospital,
  ShieldPlus,
  Sparkles,
  Stethoscope,
  Pill,
} from 'lucide-react';

const seoHighlights = [
  {
    icon: Dumbbell,
    title: 'أهمية الجيم والتمارين الرياضية',
    description: 'نساعدك على فهم كيف تساهم التمارين المنتظمة في تحسين اللياقة، دعم القلب، تقليل التوتر، وتحقيق نتائج صحية مستدامة.',
  },
  {
    icon: BrainCircuit,
    title: 'الذكاء الاصطناعي يحسب السعرات والبروتينات اليومية',
    description: 'من خلال أدوات ذكية توضح الكميات المثالية من البروتين والسعرات وفق أهدافك اليومية، سواء كنت تريد فقدان الوزن أو بناء العضلات.',
  },
  {
    icon: Sparkles,
    title: 'دور الذكاء الاصطناعي في التوجيه الصحي',
    description: 'يوفر الموقع تحليلات مبسطة تدعم اتخاذ القرار الصحي بشكل أسرع، خاصة عند ربط الأعراض بالشخصية أو النظام الغذائي اليومي.',
  },
  {
    icon: Stethoscope,
    title: 'تشخيص مبكر وأفضل فهم للأعراض',
    description: 'تساعدك البنية التفاعلية في التعرف على الأعراض الشائعة وربطها بأنماط صحية معينة، مع توجيهك نحو الخطوات المناسبة.',
  },
  {
    icon: ShieldPlus,
    title: 'ترشيح أفضل العلاجات المتاحة',
    description: 'يمنحك الموقع مسارًا واضحًا لتصفح العلاجات المناسبة مع إبراز الفروق بين الخيارات المتاحة بأسلوب سهل ومباشر.',
  },
  {
    icon: Hospital,
    title: 'بحث عن المستشفيات والمراكز الصحية',
    description: 'يمكنك العثور على أماكن الرعاية الطبية القريبة والوصول إلى معلومات أسهل حول الخدمات الصحية المتاحة في منطقتك.',
  },
  {
    icon: Building2,
    title: 'بحث عن المراكز النفسية وعيادات الصحة النفسية',
    description: 'يوفر لك أداة مريحة للبحث عن المراكز النفسية والعيادات التي تساعدك في التعامل مع التوتر، القلق، والتحديات النفسية بشكل احترافي.',
  },
  {
    icon: Pill,
    title: 'بحث عن الصيدليات وأماكن توفر الأدوية',
    description: 'يسهل عليك تحديد أقرب الصيدليات أو الأماكن المناسبة للحصول على الأدوية، مع دعم البحث السريع في السوق المحلي.',
  },
  {
    icon: HeartPulse,
    title: 'أهمية الإسعافات الأولية في حالات الطوارئ',
    description: 'تعرض المنصة نصائح عملية ومباشرة عن الإسعافات الأولية لتقليل المخاطر وتقديم دعم أولي قبل الوصول إلى الطبيب أو المستشفى.',
  },
  {
    icon: Activity,
    title: 'معلومات صحية موثوقة وتجربة متكاملة',
    description: 'الموقع يجمع بين التثقيف الصحي، الذكاء الاصطناعي، العلاج، التغذية، الجيم، والمرافق الصحية في تجربة واحدة وسهلة الاستخدام.',
  },
];

const Index = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />

      <section id="seo-highlights" className="py-16 md:py-20 bg-gradient-to-b from-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              10 أسباب تجعل موقعك خيارًا مثاليًا للبحث عن الرعاية الصحية
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              يجمع موقع إسعفني بين التغذية، الجيم، الذكاء الاصطناعي، التوجيه الطبي، الإسعافات الأولية، والعناية النفسية في تجربة متكاملة ترفع من التفاعل وتدعم محركات البحث.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
            {seoHighlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <article
                  key={index}
                  className="rounded-2xl border border-border bg-card p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-7 text-muted-foreground">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      
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
