import { Link } from 'react-router-dom';
import {
  Activity,
  BrainCircuit,
  Building2,
  Dumbbell,
  HeartPulse,
  Hospital,
  Pill,
  ShieldPlus,
  Sparkles,
  Stethoscope,
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';

const articles = [
  {
    icon: Dumbbell,
    title: 'أهمية الجيم والتمارين الرياضية',
    description:
      'تعلم كيف ترفع التمارين الرياضية من اللياقة، وتدعم القلب، وتحسن المزاج، وتساعدك على استقرار الوزن مع نظام صحي مستدام.',
  },
  {
    icon: BrainCircuit,
    title: 'الذكاء الاصطناعي يحسب السعرات والبروتينات اليومية',
    description:
      'استخدم تقنيات ذكية لتحديد احتياجك من السعرات والبروتينات بشكل أفضل، مع تخطيط يومي يتوافق مع أهدافك الصحية.',
  },
  {
    icon: Sparkles,
    title: 'دور الذكاء الاصطناعي في التوجيه الصحي',
    description:
      'يفهم الموقع الأعراض والأنماط اليومية، ويضع لك توجيهًا مُبسطًا يساعدك على اتخاذ قرارات صحية أسرع وأكثر ثقة.',
  },
  {
    icon: Stethoscope,
    title: 'تشخيص مبكر وأفضل فهم للأعراض',
    description:
      'من خلال ربط الأعراض والتاريخ الصحي، يمكنك توجيه نفسك إلى الخطوات المناسبة بشكل أسرع قبل أن تتفاقم المشكلة.',
  },
  {
    icon: ShieldPlus,
    title: 'ترشيح أفضل العلاجات المتاحة',
    description:
      'يقدم لك الموقع خيارات علاجية مريحة في صورة واضحة وسهلة، مع إبراز أهم الميزات والبدائل الموثوقة.',
  },
  {
    icon: Hospital,
    title: 'بحث عن المستشفيات والمراكز الصحية',
    description:
      'تستطيع البحث عن المستشفيات والمراكز الطبية القريبة بسهولة، مع توجيهك إلى الرعاية المناسبة في منطقتك.',
  },
  {
    icon: Building2,
    title: 'بحث عن المراكز النفسية والعيادات',
    description:
      'يوفر الموقع مسارًا بسيطًا للبحث عن المراكز النفسية والعناية النفسية المهنية عند الحاجة إلى دعم إضافي.',
  },
  {
    icon: Pill,
    title: 'بحث عن الصيدليات وأماكن الأدوية',
    description:
      'يساعدك على العثور بسرعة على أقرب صيدلية أو مكان مناسب للحصول على الأدوية والإرشادات اللازمة.',
  },
  {
    icon: HeartPulse,
    title: 'أهمية الإسعافات الأولية في الطوارئ',
    description:
      'تعلم مهارات أساسية للاستجابة الفورية في الحالات الطارئة، مما يحد من الأذى ويزيد فرص النجاة أو الاستقرار.',
  },
  {
    icon: Activity,
    title: 'موقع صحي فعلي لكامل الرحلة الصحية',
    description:
      'يجمع الموقع بين التثقيف الصحي، الذكاء الاصطناعي، التغذية، الرياضة، والصحة النفسية في تجربة متكاملة تناسب الجميع.',
  },
];

const ArticlesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-12">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
            مقالات ومحتوى صحي
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-foreground">
            10 مقالات رئيسية تبرز قيمة الموقع في الرعاية الصحية
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            هذه الصفحة تعرض أهم المواضيع الصحية التي يركز عليها الموقع، وتساعد في جذب الزوار ومحركات البحث عبر محتوى واضح وذو قيمة عملية.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article, index) => {
            const Icon = article.icon;
            return (
              <article
                key={index}
                className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="mb-3 text-xl font-bold text-foreground">{article.title}</h2>
                <p className="text-sm leading-7 text-muted-foreground">{article.description}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link to="/">
            <Button className="bg-gradient-medical">العودة إلى الصفحة الرئيسية</Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ArticlesPage;
