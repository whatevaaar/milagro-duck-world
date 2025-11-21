import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import patitoButton from "@/assets/patito-button.jpg";

interface DuckMenuButtonProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
  className?: string;
}

export const DuckMenuButton = ({ icon: Icon, label, onClick, className }: DuckMenuButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative group flex flex-col items-center gap-2 transition-all duration-300 hover:scale-110",
        className
      )}
    >
      {/* Real Patito Milagro Image as Button */}
      <div className="relative w-12 h-16 sm:w-14 sm:h-18 md:w-16 md:h-20">
        {/* Patito Milagro Image */}
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden shadow-[0_15px_30px_-8px_rgba(250,204,21,0.6)] border-2 sm:border-3 md:border-4 border-yellow-400 group-hover:shadow-[0_20px_40px_-10px_rgba(250,204,21,0.8)] transition-all duration-300 bg-gradient-to-br from-primary/20 to-accent/20">
          <img 
            src={patitoButton} 
            alt="Patito Milagro" 
            className="w-full h-full object-cover object-center scale-110"
          />
        </div>
        
        {/* Icon Badge below the image */}
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-1 sm:p-1.5 shadow-[0_8px_16px_-4px_rgba(250,204,21,0.5)] group-hover:scale-110 transition-transform duration-300 border border-yellow-400 sm:border-2">
          <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-primary" />
        </div>
        
        {/* Sparkles and hearts on hover */}
        <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-sparkle">
          <span className="text-base sm:text-lg md:text-xl drop-shadow-lg">✨</span>
        </div>
        <div className="absolute -top-1 -left-1 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-sparkle" style={{ animationDelay: '0.2s' }}>
          <span className="text-sm sm:text-base md:text-lg drop-shadow-lg">💛</span>
        </div>
        <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-bounce">
          <span className="text-xs sm:text-sm md:text-base drop-shadow-lg">🌟</span>
        </div>
        
        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-xl -z-10" />
      </div>
      
      <span className="font-bold text-[8px] sm:text-[9px] md:text-[10px] text-foreground group-hover:text-primary transition-colors text-center whitespace-nowrap px-1.5 sm:px-2 py-0.5 sm:py-1 bg-white/90 rounded-full shadow-[0_8px_16px_-4px_rgba(250,204,21,0.5)] group-hover:shadow-[0_12px_24px_-6px_rgba(250,204,21,0.7)] group-hover:scale-105 transition-all border border-yellow-400 sm:border-2 mt-0.5">
        {label}
      </span>
    </button>
  );
};
