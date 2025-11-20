import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Music, Volume2, VolumeX } from "lucide-react";
import { TrebleClef3D } from "./TrebleClef3D";

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
        className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 hover:from-purple-500 hover:via-blue-500 hover:to-cyan-400 shadow-[0_12px_30px_-8px_rgba(139,92,246,0.5)] animate-float border-4 border-white/30 p-0 overflow-hidden"
      >
        <div className="w-full h-full">
          <TrebleClef3D />
        </div>
      </Button>
    </div>
  );
};
