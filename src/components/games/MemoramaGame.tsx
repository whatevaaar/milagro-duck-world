import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import patito1 from "@/assets/patito-1.png";
import patito2 from "@/assets/patito-2.jpg";
import patito3 from "@/assets/patito-3.jpg";
import patito4 from "@/assets/patito-4.jpg";
import patito5 from "@/assets/patito-5.jpg";
import patito6 from "@/assets/patito-6.jpg";

type CardType = {
  id: number;
  image: string;
  flipped: boolean;
  matched: boolean;
};

export const MemoramaGame = () => {
  const images = [patito1, patito2, patito3, patito4, patito5, patito6];
  const [cards, setCards] = useState<CardType[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [isWon, setIsWon] = useState(false);

  const initializeGame = () => {
    const gameCards = [...images, ...images].map((image, index) => ({
      id: index,
      image,
      flipped: false,
      matched: false,
    }));
    
    // Shuffle cards
    for (let i = gameCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [gameCards[i], gameCards[j]] = [gameCards[j], gameCards[i]];
    }
    
    setCards(gameCards);
    setFlippedCards([]);
    setMoves(0);
    setIsWon(false);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    if (flippedCards.length === 2) {
      setMoves(moves + 1);
      const [first, second] = flippedCards;
      
      if (cards[first].image === cards[second].image) {
        setTimeout(() => {
          setCards(prev => prev.map((card, idx) => 
            idx === first || idx === second ? { ...card, matched: true } : card
          ));
          setFlippedCards([]);
        }, 500);
      } else {
        setTimeout(() => {
          setCards(prev => prev.map((card, idx) => 
            idx === first || idx === second ? { ...card, flipped: false } : card
          ));
          setFlippedCards([]);
        }, 1000);
      }
    }
  }, [flippedCards]);

  useEffect(() => {
    if (cards.length > 0 && cards.every(card => card.matched)) {
      setIsWon(true);
    }
  }, [cards]);

  const handleCardClick = (index: number) => {
    if (flippedCards.length === 2 || cards[index].flipped || cards[index].matched) return;
    
    setCards(prev => prev.map((card, idx) => 
      idx === index ? { ...card, flipped: true } : card
    ));
    setFlippedCards(prev => [...prev, index]);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold text-primary">🧠 Memorama de Patitos</h3>
        <div className="flex gap-4 items-center">
          <p className="text-lg font-semibold">Movimientos: {moves}</p>
          <Button onClick={initializeGame} variant="outline">
            Reiniciar
          </Button>
        </div>
      </div>
      
      {isWon && (
        <Card className="p-6 bg-gradient-to-r from-primary/20 to-accent/20 border-2 border-primary">
          <p className="text-2xl font-bold text-center text-primary">
            🎉 ¡Felicidades! Completaste el memorama en {moves} movimientos 🦆
          </p>
        </Card>
      )}
      
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <div
            key={card.id}
            onClick={() => handleCardClick(index)}
            className={`aspect-square cursor-pointer transition-all duration-300 transform ${
              card.flipped || card.matched ? "" : "hover:scale-105"
            }`}
          >
            <div className="relative w-full h-full">
              {card.flipped || card.matched ? (
                <img
                  src={card.image}
                  alt="Patito"
                  className={`w-full h-full object-cover rounded-2xl border-4 ${
                    card.matched ? "border-primary" : "border-accent"
                  }`}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center border-4 border-primary/40">
                  <span className="text-6xl">🦆</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
