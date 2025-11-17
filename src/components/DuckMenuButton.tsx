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
      <div className="relative w-16 h-20">
        {/* Patito Milagro Image */}
        <div className="relative w-16 h-16 rounded-full overflow-hidden shadow-[0_6px_16px_-4px_hsl(45_100%_51%/0.5)] border-3 border-white/40 group-hover:shadow-[0_10px_24px_-6px_hsl(45_100%_51%/0.7)] group-hover:border-primary/60 transition-all duration-300 bg-gradient-to-br from-primary/20 to-accent/20">
          <img 
            src={patitoButton} 
            alt="Patito Milagro" 
            className="w-full h-full object-cover object-center scale-110"
          />
        </div>
        
        {/* Icon Badge below the image */}
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-1.5 shadow-md group-hover:scale-110 transition-transform duration-300 border-2 border-primary/40 group-hover:border-primary/70">
          <Icon className="w-4 h-4 text-primary" />
        </div>
        
        {/* Sparkles and hearts on hover */}
        <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-sparkle">
          <span className="text-xl drop-shadow-lg">✨</span>
        </div>
        <div className="absolute -top-1 -left-1 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-sparkle" style={{ animationDelay: '0.2s' }}>
          <span className="text-lg drop-shadow-lg">💛</span>
        </div>
        <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-bounce">
          <span className="text-base drop-shadow-lg">🌟</span>
        </div>
        
        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-xl -z-10" />
      </div>
      
      <span className="font-bold text-[10px] text-foreground group-hover:text-primary transition-colors text-center whitespace-nowrap px-2 py-1 bg-white/90 rounded-full shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all border border-primary/20 mt-0.5">
        {label}
      </span>
    </button>
  );
};
