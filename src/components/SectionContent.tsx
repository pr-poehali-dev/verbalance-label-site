import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Track {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration: string;
  coverUrl: string;
  genre: string;
}

interface Artist {
  id: number;
  name: string;
  genre: string;
  imageUrl: string;
  bio: string;
}

interface SectionContentProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  mockTracks: Track[];
  mockArtists: Artist[];
  handlePlayTrack: (track: Track) => void;
  currentTrack: Track | null;
  isPlaying: boolean;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedGenre: string | null;
  setSelectedGenre: (genre: string | null) => void;
  genres: string[];
  filteredTracks: Track[];
}

const SectionContent = ({
  activeSection,
  setActiveSection,
  mockTracks,
  mockArtists,
  handlePlayTrack,
  currentTrack,
  isPlaying,
  searchQuery,
  setSearchQuery,
  selectedGenre,
  setSelectedGenre,
  genres,
  filteredTracks
}: SectionContentProps) => {
  return (
    <>
      {activeSection === 'home' && (
        <>
          <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-background to-background" />
            <div className="absolute inset-0" style={{
              backgroundImage: `url(https://cdn.poehali.dev/projects/6e385ae8-7ab2-4c80-a7a7-91a06cbf30e3/files/bc779efa-124f-4cc8-adbe-dbaeaade00b2.jpg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.1
            }} />
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center animate-fade-in">
                <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
                  🎵 Independent Label Since 2024
                </Badge>
                <h2 className="text-5xl md:text-7xl font-heading font-black mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
                  Verbalance Lab Production
                </h2>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-body">
                  Создаём звуки будущего. Независимый лейбл электронной и хип-хоп музыки
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" onClick={() => setActiveSection('releases')} className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-semibold">
                    <Icon name="Play" size={20} className="mr-2" />
                    Слушать релизы
                  </Button>
                  <Button size="lg" onClick={() => setActiveSection('artists')} variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    <Icon name="Users" size={20} className="mr-2" />
                    Наши артисты
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-card/50">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-3xl font-heading font-bold mb-2">Новые релизы</h3>
                  <p className="text-muted-foreground">Свежие треки от артистов лейбла</p>
                </div>
                <Button onClick={() => setActiveSection('releases')} variant="ghost" className="text-primary hover:text-primary/80">
                  Все релизы
                  <Icon name="ArrowRight" size={18} className="ml-2" />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {mockTracks.slice(0, 4).map((track) => (
                  <Card key={track.id} className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-scale-in bg-card/80 backdrop-blur">
                    <CardContent className="p-4">
                      <div className="relative mb-4 overflow-hidden rounded-lg">
                        <img 
                          src={track.coverUrl} 
                          alt={track.title}
                          className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Button
                            size="icon"
                            onClick={() => handlePlayTrack(track)}
                            className="bg-primary hover:bg-primary/90 rounded-full w-14 h-14 animate-scale-in"
                          >
                            <Icon 
                              name={currentTrack?.id === track.id && isPlaying ? "Pause" : "Play"} 
                              size={24} 
                            />
                          </Button>
                        </div>
                      </div>
                      <h4 className="font-heading font-semibold mb-1 truncate">{track.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2 truncate">{track.artist}</p>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="text-xs">{track.genre}</Badge>
                        <span className="text-xs text-muted-foreground">{track.duration}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-heading font-bold mb-2">Артисты лейбла</h3>
                <p className="text-muted-foreground">Талантливые музыканты Verbalance Lab</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {mockArtists.map((artist) => (
                  <Card key={artist.id} className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-fade-in bg-card/80 backdrop-blur">
                    <CardContent className="p-6">
                      <div className="relative mb-4 overflow-hidden rounded-xl">
                        <img 
                          src={artist.imageUrl} 
                          alt={artist.name}
                          className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <h4 className="font-heading font-bold text-white text-xl mb-1">{artist.name}</h4>
                          <p className="text-sm text-white/80">{artist.genre}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{artist.bio}</p>
                      <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                        <Icon name="User" size={16} className="mr-2" />
                        Профиль артиста
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {activeSection === 'releases' && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-4xl font-heading font-bold mb-2">Каталог релизов</h2>
              <p className="text-muted-foreground">Все треки и альбомы Verbalance Lab</p>
            </div>

            <div className="mb-8 space-y-4">
              <div className="relative">
                <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Поиск по названию или артисту..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-card border-border"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {genres.map((genre) => (
                  <Button
                    key={genre}
                    variant={selectedGenre === genre ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedGenre(genre === 'All' ? null : genre)}
                    className={selectedGenre === genre ? "bg-primary" : ""}
                  >
                    {genre === 'All' ? 'Все' : genre}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              {filteredTracks.map((track, index) => (
                <Card key={track.id} className="hover:border-primary/50 transition-all duration-200 animate-fade-in bg-card/80 backdrop-blur" style={{ animationDelay: `${index * 50}ms` }}>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <Button
                        size="icon"
                        variant={currentTrack?.id === track.id && isPlaying ? "default" : "outline"}
                        onClick={() => handlePlayTrack(track)}
                        className={currentTrack?.id === track.id && isPlaying ? "animate-pulse-slow bg-primary" : ""}
                      >
                        <Icon name={currentTrack?.id === track.id && isPlaying ? "Pause" : "Play"} size={20} />
                      </Button>

                      <img 
                        src={track.coverUrl} 
                        alt={track.title}
                        className="w-16 h-16 rounded-lg object-cover"
                      />

                      <div className="flex-1 min-w-0">
                        <h4 className="font-heading font-semibold truncate">{track.title}</h4>
                        <p className="text-sm text-muted-foreground truncate">{track.artist} · {track.album}</p>
                      </div>

                      <Badge variant="secondary">{track.genre}</Badge>
                      
                      <span className="text-sm text-muted-foreground w-12 text-right">{track.duration}</span>

                      <div className="flex gap-2">
                        <Button size="icon" variant="ghost">
                          <Icon name="Heart" size={18} />
                        </Button>
                        <Button size="icon" variant="ghost">
                          <Icon name="Share2" size={18} />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeSection === 'artists' && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-heading font-bold mb-2">Артисты лейбла</h2>
              <p className="text-muted-foreground text-lg">Знакомьтесь с талантами Verbalance Lab Production</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mockArtists.map((artist) => (
                <Card key={artist.id} className="group hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 animate-scale-in bg-card/80 backdrop-blur overflow-hidden">
                  <div className="relative h-80 overflow-hidden">
                    <img 
                      src={artist.imageUrl} 
                      alt={artist.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-heading font-bold text-white text-2xl mb-2">{artist.name}</h3>
                      <p className="text-white/90 font-medium">{artist.genre}</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-6">{artist.bio}</p>
                    <div className="flex gap-3">
                      <Button onClick={() => setActiveSection('releases')} className="flex-1 bg-primary hover:bg-primary/90">
                        <Icon name="Play" size={16} className="mr-2" />
                        Треки
                      </Button>
                      <Button variant="outline" className="flex-1 border-primary text-primary hover:bg-primary/10">
                        <Icon name="User" size={16} className="mr-2" />
                        Профиль
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeSection === 'services' && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12 text-center">
                <h2 className="text-4xl font-heading font-bold mb-2">Наши услуги</h2>
                <p className="text-muted-foreground text-lg">Профессиональная работа со звуком на всех этапах</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: "Mic", title: "Студийная запись", desc: "Профессиональная запись вокала и инструментов в оборудованной студии" },
                  { icon: "Sliders", title: "Сведение и мастеринг", desc: "Качественная обработка и финализация ваших треков" },
                  { icon: "Music", title: "Битмейкинг", desc: "Создание авторских битов и инструменталов под ключ" },
                  { icon: "Disc", title: "Продюсирование", desc: "Полное продюсирование проекта от идеи до релиза" }
                ].map((service, index) => (
                  <Card key={index} className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-fade-in bg-card/80 backdrop-blur">
                    <CardContent className="p-6">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Icon name={service.icon as any} size={28} className="text-white" />
                      </div>
                      <h3 className="font-heading font-bold text-xl mb-2">{service.title}</h3>
                      <p className="text-muted-foreground mb-4">{service.desc}</p>
                      <Button variant="link" className="text-primary p-0 h-auto font-semibold">
                        Узнать подробнее
                        <Icon name="ArrowRight" size={16} className="ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="mt-12 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
                <CardContent className="p-8 text-center">
                  <h3 className="font-heading font-bold text-2xl mb-3">Готовы начать работу?</h3>
                  <p className="text-muted-foreground mb-6">Свяжитесь с нами для обсуждения вашего проекта</p>
                  <Button onClick={() => setActiveSection('contact')} size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    <Icon name="Mail" size={20} className="mr-2" />
                    Связаться с нами
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {activeSection === 'blog' && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-4xl font-heading font-bold mb-2">Блог лейбла</h2>
              <p className="text-muted-foreground text-lg">Новости, интервью и закулисье музыкальной индустрии</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Как мы записывали новый альбом Nova Pulse", date: "15 января 2026", image: "https://cdn.poehali.dev/projects/6e385ae8-7ab2-4c80-a7a7-91a06cbf30e3/files/bc779efa-124f-4cc8-adbe-dbaeaade00b2.jpg" },
                { title: "Тренды электронной музыки 2026", date: "12 января 2026", image: "https://cdn.poehali.dev/projects/6e385ae8-7ab2-4c80-a7a7-91a06cbf30e3/files/70de5073-81a7-474e-88f0-4f77e3a8123b.jpg" },
                { title: "Интервью с Flow Master: путь артиста", date: "8 января 2026", image: "https://cdn.poehali.dev/projects/6e385ae8-7ab2-4c80-a7a7-91a06cbf30e3/files/0a389b9e-58b3-468d-afaa-ee445d19a1c2.jpg" }
              ].map((post, index) => (
                <Card key={index} className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-fade-in bg-card/80 backdrop-blur overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Icon name="Calendar" size={14} />
                      <span>{post.date}</span>
                    </div>
                    <h3 className="font-heading font-bold text-xl mb-4 line-clamp-2">{post.title}</h3>
                    <Button variant="link" className="text-primary p-0 h-auto font-semibold">
                      Читать далее
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeSection === 'contact' && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="mb-12 text-center">
                <h2 className="text-4xl font-heading font-bold mb-2">Контакты</h2>
                <p className="text-muted-foreground text-lg">Свяжитесь с Verbalance Lab Production</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  { icon: "Mail", title: "Email", value: "info@verbalancelab.com" },
                  { icon: "Phone", title: "Телефон", value: "+7 (999) 123-45-67" },
                  { icon: "MapPin", title: "Адрес", value: "Москва, ул. Студийная, 1" },
                  { icon: "Clock", title: "Режим работы", value: "Пн-Пт: 10:00 - 20:00" }
                ].map((contact, index) => (
                  <Card key={index} className="bg-card/80 backdrop-blur">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                        <Icon name={contact.icon as any} size={20} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold mb-1">{contact.title}</h3>
                        <p className="text-muted-foreground">{contact.value}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-card/80 backdrop-blur">
                <CardContent className="p-8">
                  <h3 className="font-heading font-bold text-xl mb-6">Отправить сообщение</h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input placeholder="Ваше имя" className="bg-background border-border" />
                      <Input type="email" placeholder="Email" className="bg-background border-border" />
                    </div>
                    <Input placeholder="Тема сообщения" className="bg-background border-border" />
                    <textarea 
                      placeholder="Ваше сообщение"
                      rows={5}
                      className="w-full px-3 py-2 rounded-md bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                      <Icon name="Send" size={18} className="mr-2" />
                      Отправить сообщение
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default SectionContent;
