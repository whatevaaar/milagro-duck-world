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
    <div className="fixed bottom-4 right-10 z-50">
      <div className="relative">
        {/* Estela fosforescente */}
        <div className="absolute inset-0 rounded-full bg-yellow-400 blur-2xl opacity-60 animate-pulse" style={{ animationDuration: '2s' }} />
        <div className="absolute inset-0 rounded-full bg-yellow-300 blur-xl opacity-40 animate-pulse" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
        
        <Button
          onClick={toggleMusic}
          className="relative w-20 h-20 rounded-full bg-yellow-100/90 hover:bg-yellow-200/95 shadow-[0_8px_20px_-6px_hsl(199_89%_48%/0.5),0_0_40px_10px_rgba(250,204,21,0.5)] hover:shadow-[0_10px_24px_-6px_hsl(199_89%_48%/0.7),0_0_60px_15px_rgba(250,204,21,0.7)] animate-float border-2 border-primary/30 hover:border-primary/60 p-0 overflow-hidden transition-all duration-300 hover:scale-105 backdrop-blur-sm"
          style={{ animationDuration: '4s' }}
        >
          <div className="w-full h-full bg-yellow-100 rounded-full flex items-center justify-center">
            <img 
              src={claveSol} 
              alt="Clave de Sol" 
              className="w-full h-full object-contain mix-blend-multiply"
            />
          </div>
        </Button>
      </div>
    </div>
  );
};
