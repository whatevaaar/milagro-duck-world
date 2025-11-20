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
    <div className="fixed bottom-4 right-12 z-50">
      <Button
        onClick={toggleMusic}
        className="w-20 h-20 rounded-full bg-gradient-to-br from-slate-700 via-amber-700 to-amber-500 hover:from-slate-600 hover:via-amber-600 hover:to-amber-400 shadow-[0_0_40px_10px_rgba(234,179,8,0.6),0_0_80px_20px_rgba(253,224,71,0.4)] hover:shadow-[0_0_50px_15px_rgba(234,179,8,0.8),0_0_100px_25px_rgba(253,224,71,0.5)] animate-float border-4 border-white/40 p-1 overflow-hidden transition-all duration-300 hover:scale-105"
        style={{ animationDuration: '4s' }}
      >
        <img 
          src={claveSol} 
          alt="Clave de Sol" 
          className="w-full h-full object-contain"
        />
      </Button>
    </div>
  );
};
