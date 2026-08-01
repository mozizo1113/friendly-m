import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Moon, Sun, Menu, X, User, LogIn, Stethoscope, UserRound, MessageCircle, Dumbbell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { ScrollArea } from '@/components/ui/scroll-area';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold bg-gradient-medical bg-clip-text text-transparent">
              إسعفني
            </h1>
          </div>

          <nav className="hidden lg:flex items-center gap-4 ms-8">
            <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">
              {t('nav.home')}
            </a>
            <a href="#emergency" className="text-sm font-medium hover:text-primary transition-colors">
              {t('nav.emergency')}
            </a>
            <a 
              href="#first-aid" 
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={(e) => { e.preventDefault(); scrollToSection('first-aid'); }}
            >
              {t('nav.firstAid')}
            </a>
            <a 
              href="#treatments" 
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={(e) => { e.preventDefault(); scrollToSection('treatments'); }}
            >
              {t('nav.treatments')}
            </a>
            <a 
              href="#mental-health" 
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={(e) => { e.preventDefault(); scrollToSection('mental-health'); }}
            >
              {t('nav.mentalHealth')}
            </a>
            <a href="#daily-tip" className="text-sm font-medium hover:text-primary transition-colors">
              {t('nav.dailyTip')}
            </a>
            {user && (
              <a href="#diet-plan" className="text-sm font-medium hover:text-primary transition-colors">
                {t('nav.dietPlan')}
              </a>
            )}
            <a 
              href="#location" 
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={(e) => { e.preventDefault(); scrollToSection('location'); }}
            >
              أقرب المرافق الصحية
            </a>
            <Link to="/gym" className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1">
              <Dumbbell className="h-4 w-4" />
              الجيم والتغذية
            </Link>
            <Link to="/find-doctor" className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1">
              <Stethoscope className="h-4 w-4" />
              ابحث عن طبيب
            </Link>
            {user && (
              <Link to="/personal-diagnosis" className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1">
                <UserRound className="h-4 w-4" />
                شخصني
              </Link>
            )}
            {user && (
              <Link to="/community" className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1">
                <MessageCircle className="h-4 w-4" />
                المجتمع
              </Link>
            )}
          </nav>

          <div className="flex items-center gap-2">
            {user ? (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/dashboard')}
                className="hidden md:flex"
              >
                <User className="h-4 w-4 ml-2" />
                لوحة التحكم
              </Button>
            ) : (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/auth')}
                className="hidden md:flex"
              >
                <LogIn className="h-4 w-4 ml-2" />
                تسجيل الدخول
              </Button>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden rounded-full"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu with Scroll */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            <ScrollArea className="h-[60vh]">
              <div className="flex flex-col gap-3 pe-4">
                {user ? (
                  <a 
                    href="/dashboard" 
                    className="text-sm font-medium hover:text-primary transition-colors px-2 py-2 hover:bg-muted rounded-md flex items-center gap-2"
                    onClick={(e) => { e.preventDefault(); navigate('/dashboard'); setIsMobileMenuOpen(false); }}
                  >
                    <User className="h-4 w-4" />
                    لوحة التحكم
                  </a>
                ) : (
                  <a 
                    href="/auth" 
                    className="text-sm font-medium hover:text-primary transition-colors px-2 py-2 hover:bg-muted rounded-md flex items-center gap-2"
                    onClick={(e) => { e.preventDefault(); navigate('/auth'); setIsMobileMenuOpen(false); }}
                  >
                    <LogIn className="h-4 w-4" />
                    تسجيل الدخول
                  </a>
                )}
                <a 
                  href="#home" 
                  className="text-sm font-medium hover:text-primary transition-colors px-2 py-2 hover:bg-muted rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('nav.home')}
                </a>
                <a 
                  href="#emergency" 
                  className="text-sm font-medium hover:text-primary transition-colors px-2 py-2 hover:bg-muted rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('nav.emergency')}
                </a>
                <a 
                  href="#first-aid" 
                  className="text-sm font-medium hover:text-primary transition-colors px-2 py-2 hover:bg-muted rounded-md"
                  onClick={(e) => { e.preventDefault(); scrollToSection('first-aid'); }}
                >
                  {t('nav.firstAid')}
                </a>
                <a 
                  href="#treatments" 
                  className="text-sm font-medium hover:text-primary transition-colors px-2 py-2 hover:bg-muted rounded-md"
                  onClick={(e) => { e.preventDefault(); scrollToSection('treatments'); }}
                >
                  {t('nav.treatments')}
                </a>
                <a 
                  href="#mental-health" 
                  className="text-sm font-medium hover:text-primary transition-colors px-2 py-2 hover:bg-muted rounded-md"
                  onClick={(e) => { e.preventDefault(); scrollToSection('mental-health'); }}
                >
                  {t('nav.mentalHealth')}
                </a>
                <a 
                  href="#daily-tip" 
                  className="text-sm font-medium hover:text-primary transition-colors px-2 py-2 hover:bg-muted rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('nav.dailyTip')}
                </a>
                {user && (
                  <a 
                    href="#diet-plan" 
                    className="text-sm font-medium hover:text-primary transition-colors px-2 py-2 hover:bg-muted rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t('nav.dietPlan')}
                  </a>
                )}
                <a 
                  href="#location" 
                  className="text-sm font-medium hover:text-primary transition-colors px-2 py-2 hover:bg-muted rounded-md"
                  onClick={(e) => { e.preventDefault(); scrollToSection('location'); }}
                >
                  أقرب المرافق الصحية
                </a>
                <Link 
                  to="/gym" 
                  className="text-sm font-medium hover:text-primary transition-colors px-2 py-2 hover:bg-muted rounded-md flex items-center gap-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Dumbbell className="h-4 w-4" />
                  الجيم والتغذية
                </Link>
                <Link 
                  to="/find-doctor" 
                  className="text-sm font-medium hover:text-primary transition-colors px-2 py-2 hover:bg-muted rounded-md flex items-center gap-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Stethoscope className="h-4 w-4" />
                  ابحث عن طبيب
                </Link>
                {user && (
                  <Link 
                    to="/personal-diagnosis" 
                    className="text-sm font-medium hover:text-primary transition-colors px-2 py-2 hover:bg-muted rounded-md flex items-center gap-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <UserRound className="h-4 w-4" />
                    شخصني
                  </Link>
                )}
                {user && (
                  <Link 
                    to="/community" 
                    className="text-sm font-medium hover:text-primary transition-colors px-2 py-2 hover:bg-muted rounded-md flex items-center gap-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <MessageCircle className="h-4 w-4" />
                    المجتمع
                  </Link>
                )}
              </div>
            </ScrollArea>
          </nav>
        )}
      </div>
    </header>
  );
};
