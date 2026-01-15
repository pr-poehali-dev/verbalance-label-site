import { useState } from 'react';
import Navigation from '@/components/Navigation';
import SectionContent from '@/components/SectionContent';
import AudioPlayer from '@/components/AudioPlayer';
import Footer from '@/components/Footer';

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

const mockTracks: Track[] = [
  {
    id: 1,
    title: "Midnight Echo",
    artist: "Nova Pulse",
    album: "Digital Dreams",
    duration: "3:45",
    coverUrl: "https://cdn.poehali.dev/projects/6e385ae8-7ab2-4c80-a7a7-91a06cbf30e3/files/70de5073-81a7-474e-88f0-4f77e3a8123b.jpg",
    genre: "Electronic"
  },
  {
    id: 2,
    title: "Urban Nights",
    artist: "Flow Master",
    album: "City Lights",
    duration: "4:12",
    coverUrl: "https://cdn.poehali.dev/projects/6e385ae8-7ab2-4c80-a7a7-91a06cbf30e3/files/70de5073-81a7-474e-88f0-4f77e3a8123b.jpg",
    genre: "Hip-Hop"
  },
  {
    id: 3,
    title: "Synthetic Soul",
    artist: "Nova Pulse",
    album: "Digital Dreams",
    duration: "3:28",
    coverUrl: "https://cdn.poehali.dev/projects/6e385ae8-7ab2-4c80-a7a7-91a06cbf30e3/files/70de5073-81a7-474e-88f0-4f77e3a8123b.jpg",
    genre: "Electronic"
  },
  {
    id: 4,
    title: "Velocity",
    artist: "Beat Smith",
    album: "Motion",
    duration: "3:56",
    coverUrl: "https://cdn.poehali.dev/projects/6e385ae8-7ab2-4c80-a7a7-91a06cbf30e3/files/70de5073-81a7-474e-88f0-4f77e3a8123b.jpg",
    genre: "Trap"
  }
];

const mockArtists: Artist[] = [
  {
    id: 1,
    name: "Nova Pulse",
    genre: "Electronic / Synthwave",
    imageUrl: "https://cdn.poehali.dev/projects/6e385ae8-7ab2-4c80-a7a7-91a06cbf30e3/files/0a389b9e-58b3-468d-afaa-ee445d19a1c2.jpg",
    bio: "Pioneering the future of electronic music with atmospheric soundscapes"
  },
  {
    id: 2,
    name: "Flow Master",
    genre: "Hip-Hop / Rap",
    imageUrl: "https://cdn.poehali.dev/projects/6e385ae8-7ab2-4c80-a7a7-91a06cbf30e3/files/0a389b9e-58b3-468d-afaa-ee445d19a1c2.jpg",
    bio: "Crafting authentic urban narratives through rhythm and poetry"
  },
  {
    id: 3,
    name: "Beat Smith",
    genre: "Trap / Bass",
    imageUrl: "https://cdn.poehali.dev/projects/6e385ae8-7ab2-4c80-a7a7-91a06cbf30e3/files/0a389b9e-58b3-468d-afaa-ee445d19a1c2.jpg",
    bio: "Pushing boundaries with hard-hitting beats and experimental production"
  }
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const genres = ['All', 'Electronic', 'Hip-Hop', 'Trap', 'Bass'];

  const filteredTracks = mockTracks.filter(track => {
    const matchesSearch = track.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         track.artist.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = !selectedGenre || selectedGenre === 'All' || track.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  const handlePlayTrack = (track: Track) => {
    if (currentTrack?.id === track.id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentTrack(track);
      setIsPlaying(true);
    }
  };

  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      <SectionContent
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        mockTracks={mockTracks}
        mockArtists={mockArtists}
        handlePlayTrack={handlePlayTrack}
        currentTrack={currentTrack}
        isPlaying={isPlaying}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
        genres={genres}
        filteredTracks={filteredTracks}
      />

      <AudioPlayer
        currentTrack={currentTrack}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        setCurrentTrack={setCurrentTrack}
      />

      <Footer setActiveSection={setActiveSection} />
    </div>
  );
};

export default Index;
