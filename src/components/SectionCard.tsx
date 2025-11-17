import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface SectionCardProps {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export const SectionCard = ({ title, description, children, className }: SectionCardProps) => {
  return (
    <Card className={cn(
      "bg-card border-4 border-primary/20 shadow-[0_8px_20px_-4px_hsl(45_100%_51%/0.3)]",
      "transform transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_30px_-8px_hsl(199_89%_48%/0.4)]",
      className
    )}>
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-primary">{title}</CardTitle>
        {description && (
          <CardDescription className="text-lg text-muted-foreground">{description}</CardDescription>
        )}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};
