import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface DuckButtonProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
  className?: string;
}

export const DuckButton = ({ icon: Icon, label, onClick, className }: DuckButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className={cn(
        "relative group h-auto py-6 px-8 bg-primary hover:bg-primary/90 text-primary-foreground",
        "rounded-[2rem] shadow-[0_8px_20px_-4px_hsl(45_100%_51%/0.3)]",
        "transform transition-all duration-300 hover:scale-110 hover:-translate-y-2",
        "border-4 border-secondary/30",
        "flex flex-col items-center gap-3",
        className
      )}
    >
      <div className="bg-white/20 p-4 rounded-full group-hover:animate-bounce">
        <Icon className="w-8 h-8" />
      </div>
      <span className="font-bold text-lg whitespace-nowrap">{label}</span>
      <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
    </Button>
  );
};
