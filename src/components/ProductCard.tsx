import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  name: string;
  price: string;
  emoji: string;
  description: string;
}

export const ProductCard = ({ name, price, emoji, description }: ProductCardProps) => {
  return (
    <Card className="bg-card border-2 sm:border-3 md:border-4 border-primary/20 shadow-[0_8px_20px_-4px_hsl(45_100%_51%/0.3)] transform transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_30px_-8px_hsl(199_89%_48%/0.4)] overflow-hidden">
      <CardHeader className="bg-gradient-to-br from-primary/10 to-accent/10 p-3 sm:p-4 md:p-6">
        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center mb-2 sm:mb-3 md:mb-4 animate-float">{emoji}</div>
        <CardTitle className="text-lg sm:text-xl md:text-2xl font-bold text-primary text-center">{name}</CardTitle>
      </CardHeader>
      <CardContent className="pt-3 sm:pt-4 md:pt-6 p-3 sm:p-4 md:p-6">
        <p className="text-center text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">{description}</p>
        <p className="text-2xl sm:text-2xl md:text-3xl font-bold text-secondary text-center">{price}</p>
      </CardContent>
      <CardFooter className="p-3 sm:p-4 md:p-6">
        <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold py-3 sm:py-4 md:py-6 text-base sm:text-lg rounded-xl sm:rounded-2xl shadow-[0_4px_12px_-2px_hsl(33_100%_60%/0.4)] transform transition-all hover:scale-105">
          <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
          Agregar al Carrito
        </Button>
      </CardFooter>
    </Card>
  );
};
