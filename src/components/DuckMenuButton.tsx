import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

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
        "relative group flex flex-col items-center gap-3 transition-all duration-300 hover:scale-110",
        className
      )}
    >
      {/* Duck Character */}
      <div className="relative w-28 h-32">
        {/* Duck Head */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-primary via-primary to-yellow-400 rounded-full shadow-[0_8px_20px_-4px_hsl(45_100%_51%/0.5)] border-4 border-white/30 group-hover:shadow-[0_12px_30px_-8px_hsl(45_100%_51%/0.7)] transition-all duration-300 flex items-center justify-center">
          {/* Icon in the center */}
          <Icon className="w-8 h-8 text-primary-foreground z-10" />
          
          {/* Feather tuft on top */}
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <div className="w-4 h-6 bg-gradient-to-t from-primary to-yellow-300 rounded-t-full transform rotate-12 shadow-sm" />
            <div className="absolute top-0 left-2 w-3 h-5 bg-gradient-to-t from-primary to-yellow-300 rounded-t-full transform -rotate-12 shadow-sm" />
          </div>
        </div>
        
        {/* Duck Eyes - Bigger and more expressive */}
        <div className="absolute top-5 left-5">
          <div className="w-5 h-5 bg-white rounded-full shadow-inner border-2 border-primary-foreground/20">
            <div className="absolute top-1 left-1 w-3 h-3 bg-primary-foreground rounded-full" />
            <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 bg-white rounded-full" />
          </div>
        </div>
        <div className="absolute top-5 right-5">
          <div className="w-5 h-5 bg-white rounded-full shadow-inner border-2 border-primary-foreground/20">
            <div className="absolute top-1 left-1 w-3 h-3 bg-primary-foreground rounded-full" />
            <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 bg-white rounded-full" />
          </div>
        </div>
        
        {/* Duck Beak - More detailed */}
        <div className="absolute top-10 -right-2 z-20">
          <div className="relative">
            {/* Top beak */}
            <div className="w-7 h-3 bg-gradient-to-r from-secondary to-orange-400 rounded-r-full shadow-md border-2 border-orange-500/30" />
            {/* Bottom beak */}
            <div className="w-6 h-2 bg-gradient-to-r from-secondary/90 to-orange-400/90 rounded-r-full shadow-sm mt-0.5 border-2 border-orange-600/20" />
          </div>
        </div>
        
        {/* Rosy Cheeks */}
        <div className="absolute top-11 left-3 w-3 h-2 bg-pink-300/60 rounded-full blur-[2px]" />
        <div className="absolute top-11 right-3 w-3 h-2 bg-pink-300/60 rounded-full blur-[2px]" />
        
        {/* Duck Body - Smaller oval below head */}
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-16 h-12 bg-gradient-to-b from-primary to-yellow-400 rounded-[50%] shadow-lg border-4 border-white/20" />
        
        {/* Wings */}
        <div className="absolute top-16 left-0 w-8 h-8 bg-gradient-to-br from-primary to-yellow-400 rounded-full transform -rotate-45 group-hover:rotate-0 transition-transform duration-300 shadow-md border-2 border-white/20" />
        <div className="absolute top-16 right-0 w-8 h-8 bg-gradient-to-bl from-primary to-yellow-400 rounded-full transform rotate-45 group-hover:rotate-0 transition-transform duration-300 shadow-md border-2 border-white/20" />
        
        {/* Feet */}
        <div className="absolute -bottom-2 left-6">
          <div className="flex gap-1">
            <div className="w-3 h-3 bg-secondary rounded-t-full shadow-sm border-2 border-orange-500/30" />
            <div className="w-3 h-3 bg-secondary rounded-t-full shadow-sm border-2 border-orange-500/30" />
          </div>
        </div>
        <div className="absolute -bottom-2 right-6">
          <div className="flex gap-1">
            <div className="w-3 h-3 bg-secondary rounded-t-full shadow-sm border-2 border-orange-500/30" />
            <div className="w-3 h-3 bg-secondary rounded-t-full shadow-sm border-2 border-orange-500/30" />
          </div>
        </div>
        
        {/* Sparkles and hearts on hover */}
        <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-sparkle">
          <span className="text-2xl">✨</span>
        </div>
        <div className="absolute -top-2 -left-2 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-sparkle" style={{ animationDelay: '0.2s' }}>
          <span className="text-xl">💛</span>
        </div>
        <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-bounce">
          <span className="text-lg">🌟</span>
        </div>
      </div>
      
      <span className="font-bold text-base text-foreground group-hover:text-primary transition-colors text-center whitespace-nowrap px-3 py-1 bg-white/80 rounded-full shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all">
        {label}
      </span>
    </button>
  );
};
