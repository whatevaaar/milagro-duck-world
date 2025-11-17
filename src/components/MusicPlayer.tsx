import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Music, Volume2, VolumeX } from "lucide-react";

export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
    // Aquí se integraría el audio real del Patito Milagro
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={toggleMusic}
        className="w-16 h-16 rounded-full bg-primary hover:bg-primary/90 shadow-[0_12px_30px_-8px_hsl(199_89%_48%/0.4)] animate-float"
      >
        {isPlaying ? (
          <Volume2 className="w-8 h-8 text-primary-foreground" />
        ) : (
          <Music className="w-8 h-8 text-primary-foreground" />
        )}
      </Button>
    </div>
  );
};
