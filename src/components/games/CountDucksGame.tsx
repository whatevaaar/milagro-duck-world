import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export const CountDucksGame = () => {
  const [duckCount, setDuckCount] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);
  const maxRounds = 5;

  const generateDucks = () => {
    const count = Math.floor(Math.random() * 10) + 1;
    setDuckCount(count);
    setUserAnswer("");
    setShowResult(false);
  };

  useEffect(() => {
    generateDucks();
  }, []);

  const checkAnswer = () => {
    const answer = parseInt(userAnswer);
    setShowResult(true);
    
    if (answer === duckCount) {
      setScore(score + 1);
    }
  };

  const nextRound = () => {
    if (round < maxRounds) {
      setRound(round + 1);
      generateDucks();
    }
  };

  const resetGame = () => {
    setRound(1);
    setScore(0);
    generateDucks();
  };

  if (round > maxRounds) {
    return (
      <div className="space-y-6 text-center">
        <h3 className="text-3xl font-bold text-primary">🔢 Cuenta los Patitos</h3>
        <Card className="p-8 bg-gradient-to-br from-primary/20 to-accent/20 border-4 border-primary space-y-4">
          <div className="text-6xl mb-4">🏆</div>
          <h4 className="text-2xl font-bold text-primary">¡Juego Terminado!</h4>
          <p className="text-3xl font-bold">
            Puntuación Final: {score} de {maxRounds}
          </p>
          <p className="text-xl">
            {score === maxRounds 
              ? "¡Perfecto! ¡Cuentas como un campeón! 🦆" 
              : score >= maxRounds / 2 
              ? "¡Muy bien! ¡Sigues mejorando! 👏"
              : "¡Sigue practicando! ¡Tú puedes! 💛"}
          </p>
          <Button 
            onClick={resetGame} 
            size="lg"
            className="mt-4"
          >
            Jugar de Nuevo
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold text-primary">🔢 Cuenta los Patitos</h3>
        <div className="flex gap-4 items-center">
          <p className="text-lg font-semibold">Ronda {round}/{maxRounds}</p>
          <p className="text-lg font-semibold">Puntos: {score}</p>
        </div>
      </div>

      <Card className="p-8 space-y-6">
        <div className="text-center mb-6">
          <p className="text-xl font-bold text-primary mb-4">
            ¿Cuántos patitos ves? 🦆
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 p-6 bg-accent/10 rounded-2xl min-h-[200px] items-center">
          {Array.from({ length: duckCount }).map((_, index) => (
            <span 
              key={index} 
              className="text-6xl animate-bounce"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              🦆
            </span>
          ))}
        </div>

        {!showResult ? (
          <div className="space-y-4">
            <div className="flex gap-4 items-center justify-center">
              <Input
                type="number"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="¿Cuántos?"
                className="max-w-xs text-center text-2xl h-16"
                min="1"
                max="10"
              />
            </div>
            <div className="flex justify-center">
              <Button 
                onClick={checkAnswer} 
                size="lg"
                disabled={!userAnswer}
                className="w-48"
              >
                Verificar
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-center space-y-4">
            <div className={`p-6 rounded-2xl ${
              parseInt(userAnswer) === duckCount 
                ? "bg-primary/20 border-2 border-primary" 
                : "bg-destructive/20 border-2 border-destructive"
            }`}>
              <p className="text-2xl font-bold mb-2">
                {parseInt(userAnswer) === duckCount 
                  ? "¡Correcto! 🎉" 
                  : "¡No es correcto! 😢"}
              </p>
              <p className="text-xl">
                La respuesta correcta es: <span className="font-bold">{duckCount}</span>
              </p>
            </div>
            <Button onClick={nextRound} size="lg">
              Siguiente Ronda
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
};
