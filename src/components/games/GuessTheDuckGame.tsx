import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import patito1 from "@/assets/patito-1.png";
import patito2 from "@/assets/patito-2.jpg";
import patito3 from "@/assets/patito-3.jpg";
import patito4 from "@/assets/patito-4.jpg";
import patito5 from "@/assets/patito-5.jpg";
import patito6 from "@/assets/patito-6.jpg";
import patito7 from "@/assets/patito-7.jpg";
import patito8 from "@/assets/patito-8.png";
import patito9 from "@/assets/patito-9.jpg";

type Question = {
  image: string;
  correctAnswer: string;
  options: string[];
  hint: string;
};

const questions: Question[] = [
  {
    image: patito1,
    correctAnswer: "Nadando feliz",
    options: ["Nadando feliz", "Volando alto", "Durmiendo", "Comiendo pan"],
    hint: "¿Qué está haciendo este patito?"
  },
  {
    image: patito2,
    correctAnswer: "Amarillo brillante",
    options: ["Amarillo brillante", "Verde oscuro", "Azul cielo", "Rojo fuego"],
    hint: "¿De qué color es principalmente este patito?"
  },
  {
    image: patito3,
    correctAnswer: "En el agua",
    options: ["En el agua", "En un árbol", "En el cielo", "En una cueva"],
    hint: "¿Dónde está este patito?"
  },
  {
    image: patito4,
    correctAnswer: "Muy contento",
    options: ["Muy contento", "Muy triste", "Muy enojado", "Muy asustado"],
    hint: "¿Cómo se ve este patito?"
  },
  {
    image: patito5,
    correctAnswer: "Explorando",
    options: ["Explorando", "Escondido", "Bailando", "Cantando"],
    hint: "¿Qué aventura tiene este patito?"
  }
];

export const GuessTheDuckGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [gameFinished, setGameFinished] = useState(false);

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setShowResult(true);
    
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setShowResult(false);
    setSelectedAnswer(null);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setGameFinished(true);
    }
  };

  const resetGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setGameFinished(false);
  };

  if (gameFinished) {
    return (
      <div className="space-y-6 text-center">
        <h3 className="text-3xl font-bold text-primary">🎮 Adivina el Patito</h3>
        <Card className="p-8 bg-gradient-to-br from-primary/20 to-accent/20 border-4 border-primary space-y-4">
          <div className="text-6xl mb-4">🏆</div>
          <h4 className="text-2xl font-bold text-primary">¡Juego Terminado!</h4>
          <p className="text-3xl font-bold">
            Puntuación: {score} de {questions.length}
          </p>
          <p className="text-xl">
            {score === questions.length 
              ? "¡Perfecto! Eres un experto en patitos 🦆" 
              : score >= questions.length / 2 
              ? "¡Muy bien! Conoces bien a los patitos 👏"
              : "¡Sigue intentando! Los patitos te esperan 💛"}
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
        <h3 className="text-2xl font-bold text-primary">🎮 Adivina el Patito</h3>
        <div className="flex gap-4 items-center">
          <p className="text-lg font-semibold">Pregunta {currentQuestion + 1}/{questions.length}</p>
          <p className="text-lg font-semibold">Puntos: {score}</p>
        </div>
      </div>

      <Card className="p-6 space-y-6">
        <div className="flex justify-center">
          <img 
            src={questions[currentQuestion].image} 
            alt="Patito misterioso"
            className="w-64 h-64 object-cover rounded-2xl border-4 border-primary shadow-lg"
          />
        </div>

        <div className="text-center">
          <p className="text-xl font-bold text-primary mb-4">
            {questions[currentQuestion].hint}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {questions[currentQuestion].options.map((option) => (
            <Button
              key={option}
              onClick={() => handleAnswer(option)}
              disabled={showResult}
              variant={
                showResult
                  ? option === questions[currentQuestion].correctAnswer
                    ? "default"
                    : option === selectedAnswer
                    ? "destructive"
                    : "outline"
                  : "outline"
              }
              className={`h-auto py-4 text-lg ${
                showResult && option === questions[currentQuestion].correctAnswer
                  ? "bg-primary"
                  : ""
              }`}
            >
              {option}
            </Button>
          ))}
        </div>

        {showResult && (
          <div className="text-center space-y-4">
            <p className={`text-xl font-bold ${
              selectedAnswer === questions[currentQuestion].correctAnswer 
                ? "text-primary" 
                : "text-destructive"
            }`}>
              {selectedAnswer === questions[currentQuestion].correctAnswer 
                ? "¡Correcto! 🎉" 
                : "No es correcto 😢"}
            </p>
            <Button onClick={nextQuestion} size="lg">
              {currentQuestion < questions.length - 1 ? "Siguiente Pregunta" : "Ver Resultados"}
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
};
