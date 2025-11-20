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
        className="w-12 h-20 rounded-b-lg bg-gradient-to-b from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 shadow-[0_8px_20px_-6px_rgba(0,0,0,0.3)] animate-float border-2 border-gray-800 relative overflow-visible"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          {isPlaying ? (
            <Volume2 className="w-6 h-6 text-gray-800 drop-shadow-sm" strokeWidth={2.5} />
          ) : (
            <Music className="w-6 h-6 text-gray-800 drop-shadow-sm" strokeWidth={2.5} />
          )}
        </div>
      </Button>
    </div>
  );
};
