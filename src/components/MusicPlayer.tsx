import { useState } from "react";
import { Button } from "@/components/ui/button";
import claveSol from "@/assets/clave-sol-3d.jpg";

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
        className="w-24 h-24 rounded-full bg-gradient-to-br from-slate-700 via-amber-700 to-amber-500 hover:from-slate-600 hover:via-amber-600 hover:to-amber-400 shadow-[0_12px_30px_-8px_rgba(217,119,6,0.5)] animate-float border-4 border-white/40 p-1 overflow-hidden transition-all duration-300 hover:scale-105"
      >
        <img 
          src={claveSol} 
          alt="Clave de Sol" 
          className={`w-full h-full object-contain ${isPlaying ? 'animate-spin' : ''}`}
          style={{ animationDuration: isPlaying ? '3s' : '0s' }}
        />
      </Button>
    </div>
  );
};
