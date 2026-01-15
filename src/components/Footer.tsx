import Icon from '@/components/ui/icon';

interface FooterProps {
  setActiveSection: (section: string) => void;
}

const Footer = ({ setActiveSection }: FooterProps) => {
  return (
    <footer className="border-t border-border py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Verbalance Lab</h3>
            <p className="text-sm text-muted-foreground">
              Независимый музыкальный лейбл. Создаём звуки будущего с 2024 года.
            </p>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Главная', section: 'home' },
                { label: 'Релизы', section: 'releases' },
                { label: 'Артисты', section: 'artists' },
                { label: 'Услуги', section: 'services' }
              ].map((item) => (
                <li key={item.section}>
                  <button 
                    onClick={() => setActiveSection(item.section)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm">
              {['Запись', 'Сведение', 'Мастеринг', 'Продюсирование'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => setActiveSection('services')}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold mb-4">Социальные сети</h4>
            <div className="flex gap-3">
              {['Instagram', 'Youtube', 'MessageCircle'].map((icon) => (
                <a 
                  key={icon}
                  href="#" 
                  className="w-10 h-10 rounded-lg bg-muted hover:bg-primary transition-colors flex items-center justify-center group"
                >
                  <Icon name={icon as any} size={20} className="text-muted-foreground group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2024 Verbalance Lab Production. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
