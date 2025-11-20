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
        className="w-16 h-16 rounded-full bg-gradient-to-br from-primary via-yellow-400 to-orange-400 hover:from-yellow-400 hover:via-orange-400 hover:to-primary shadow-[0_12px_30px_-8px_hsl(199_89%_48%/0.4)] animate-float border-4 border-white/30"
      >
        {isPlaying ? (
          <Volume2 className="w-9 h-9 text-white drop-shadow-lg" strokeWidth={2.5} />
        ) : (
          <Music className="w-9 h-9 text-white drop-shadow-lg" strokeWidth={2.5} />
        )}
      </Button>
    </div>
  );
};
