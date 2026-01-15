import { Button } from '@/components/ui/button';
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

interface AudioPlayerProps {
  currentTrack: Track | null;
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
  setCurrentTrack: (track: Track | null) => void;
}

const AudioPlayer = ({ currentTrack, isPlaying, setIsPlaying, setCurrentTrack }: AudioPlayerProps) => {
  if (!currentTrack) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border backdrop-blur-lg z-50 animate-fade-in">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-4">
          <img 
            src={currentTrack.coverUrl} 
            alt={currentTrack.title}
            className="w-14 h-14 rounded-lg"
          />
          
          <div className="flex-1 min-w-0">
            <h4 className="font-heading font-semibold truncate">{currentTrack.title}</h4>
            <p className="text-sm text-muted-foreground truncate">{currentTrack.artist}</p>
          </div>

          <div className="flex items-center gap-2">
            <Button size="icon" variant="ghost">
              <Icon name="SkipBack" size={20} />
            </Button>
            <Button 
              size="icon" 
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-primary hover:bg-primary/90 w-10 h-10"
            >
              <Icon name={isPlaying ? "Pause" : "Play"} size={20} />
            </Button>
            <Button size="icon" variant="ghost">
              <Icon name="SkipForward" size={20} />
            </Button>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Button size="icon" variant="ghost">
              <Icon name="Volume2" size={20} />
            </Button>
            <div className="w-24 h-1 bg-muted rounded-full">
              <div className="w-3/4 h-full bg-primary rounded-full" />
            </div>
          </div>

          <Button size="icon" variant="ghost" onClick={() => setCurrentTrack(null)}>
            <Icon name="X" size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
