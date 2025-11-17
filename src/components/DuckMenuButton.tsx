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
        "relative group flex flex-col items-center gap-2 transition-all duration-300 hover:scale-110",
        className
      )}
    >
      {/* Duck-shaped button */}
      <div className="relative">
        {/* Duck body */}
        <div className="w-24 h-24 bg-primary rounded-[60%_60%_60%_60%/70%_70%_50%_50%] shadow-[0_8px_20px_-4px_hsl(45_100%_51%/0.4)] transform transition-all duration-300 group-hover:shadow-[0_12px_30px_-8px_hsl(45_100%_51%/0.6)] group-hover:animate-bounce flex items-center justify-center border-4 border-secondary/30">
          <Icon className="w-10 h-10 text-primary-foreground" />
        </div>
        
        {/* Duck beak */}
        <div className="absolute top-1/2 -right-2 w-6 h-4 bg-secondary rounded-r-full transform -translate-y-1/2 shadow-md" />
        
        {/* Duck eyes */}
        <div className="absolute top-6 left-6 w-3 h-3 bg-white rounded-full border-2 border-foreground">
          <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 bg-foreground rounded-full" />
        </div>
        <div className="absolute top-6 right-8 w-3 h-3 bg-white rounded-full border-2 border-foreground">
          <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 bg-foreground rounded-full" />
        </div>
        
        {/* Sparkle effect on hover */}
        <div className="absolute -top-1 -right-1 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="text-2xl animate-sparkle">✨</div>
        </div>
      </div>
      
      <span className="font-bold text-sm text-foreground group-hover:text-primary transition-colors text-center whitespace-nowrap">
        {label}
      </span>
    </button>
  );
};
