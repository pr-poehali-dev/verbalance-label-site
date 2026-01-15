import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation = ({ activeSection, setActiveSection }: NavigationProps) => {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Music" size={24} className="text-white" />
            </div>
            <h1 className="text-2xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Verbalance Lab
            </h1>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            {['home', 'releases', 'artists', 'services', 'blog', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`font-medium transition-colors capitalize ${
                  activeSection === section 
                    ? 'text-primary' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {section === 'home' ? 'Главная' : 
                 section === 'releases' ? 'Релизы' :
                 section === 'artists' ? 'Артисты' :
                 section === 'services' ? 'Услуги' :
                 section === 'blog' ? 'Блог' : 'Контакты'}
              </button>
            ))}
          </div>

          <Button size="sm" className="bg-primary hover:bg-primary/90">
            <Icon name="Bell" size={16} className="mr-2" />
            Подписаться
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
