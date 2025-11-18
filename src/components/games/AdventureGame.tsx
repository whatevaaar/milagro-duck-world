import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, ArrowLeft } from "lucide-react";

type StoryNode = {
  id: string;
  text: string;
  image?: string;
  choices?: {
    text: string;
    nextId: string;
  }[];
  isEnding?: boolean;
};

const storyData: Record<string, StoryNode> = {
  start: {
    id: "start",
    text: "Era un día soleado y cálido. Patito Milagro acababa de despertar en su acogedora cabañita junto al lago. Los rayos del sol entraban por la ventana y el aire olía a flores frescas. Patito Milagro se estiró y bostezó. ¡Qué hermoso día para una aventura! 🌞🏡",
    choices: [
      { text: "🏃 Salir a correr por el bosque", nextId: "correr" },
      { text: "🏊 Nadar en el lago cristalino", nextId: "nadar" },
      { text: "🦋 Explorar el jardín de flores", nextId: "jardin" }
    ]
  },
  correr: {
    id: "correr",
    text: "Patito Milagro decidió salir a correr. Con sus patitas corrió por el sendero del bosque, sintiendo la brisa fresca en sus plumas. De repente, escuchó un sonido dulce...",
    choices: [
      { text: "🎵 Seguir el canto de los pájaros", nextId: "pajaros" },
      { text: "🐿️ Ayudar a una ardilla con sus nueces", nextId: "ardilla" }
    ]
  },
  nadar: {
    id: "nadar",
    text: "¡Splash! Patito Milagro se lanzó al agua cristalina del lago. El agua estaba perfecta, ni muy fría ni muy caliente. Mientras nadaba felizmente, vio algo brillante en el fondo del lago...",
    choices: [
      { text: "✨ Bucear a ver qué es", nextId: "bucear" },
      { text: "🦆 Jugar con otros patitos", nextId: "otros_patos" }
    ]
  },
  jardin: {
    id: "jardin",
    text: "Patito Milagro caminó hacia el hermoso jardín lleno de flores de colores. Las mariposas volaban alegremente de flor en flor. Una mariposa azul brillante se posó cerca de él...",
    choices: [
      { text: "🦋 Seguir a la mariposa mágica", nextId: "mariposa" },
      { text: "🌸 Recoger flores para decorar", nextId: "flores" }
    ]
  },
  pajaros: {
    id: "pajaros",
    text: "Patito Milagro siguió el hermoso canto hasta encontrar un grupo de pájaros cantando en un árbol. Los pájaros lo invitaron a su concierto matutino. ¡Qué melodía tan hermosa! Patito Milagro aprendió una nueva canción y la cantó todo el camino a casa. 🎶",
    isEnding: true
  },
  ardilla: {
    id: "ardilla",
    text: "Patito Milagro ayudó a la pequeña ardilla a recoger sus nueces que se habían caído. La ardilla, muy agradecida, compartió con él unas deliciosas avellanas y le mostró su casa en el árbol. ¡Hicieron una nueva amistad! 🐿️💛",
    isEnding: true
  },
  bucear: {
    id: "bucear",
    text: "Patito Milagro buceó profundo y descubrió que el brillo era una hermosa concha marina con colores del arcoíris. La tomó como tesoro y la llevó a casa para recordar su aventura. ¡Qué día tan especial! 🐚✨",
    isEnding: true
  },
  otros_patos: {
    id: "otros_patos",
    text: "Patito Milagro nadó hacia un grupo de patitos que jugaban en el lago. Juntos hicieron carreras de natación, se zambulleron y formaron una fila de patitos nadando. ¡Fue el mejor día de juegos en el lago! 🦆🦆🦆",
    isEnding: true
  },
  mariposa: {
    id: "mariposa",
    text: "La mariposa llevó a Patito Milagro a un claro secreto del bosque lleno de flores brillantes que nunca había visto. Era como un jardín mágico. Patito Milagro pasó la tarde en ese lugar especial, sintiéndose muy afortunado. 🦋✨",
    isEnding: true
  },
  flores: {
    id: "flores",
    text: "Patito Milagro recolectó las flores más bonitas del jardín con mucho cuidado. Hizo un hermoso ramo y lo llevó a su cabañita. El aroma de las flores llenó su hogar de alegría y color. ¡Su cabañita nunca se había visto tan linda! 🌸🏡",
    isEnding: true
  }
};

export const AdventureGame = () => {
  const [currentNodeId, setCurrentNodeId] = useState<string>("start");
  const [history, setHistory] = useState<string[]>(["start"]);

  const currentNode = storyData[currentNodeId];

  const handleChoice = (nextId: string) => {
    setCurrentNodeId(nextId);
    setHistory([...history, nextId]);
  };

  const goBack = () => {
    if (history.length > 1) {
      const newHistory = history.slice(0, -1);
      setHistory(newHistory);
      setCurrentNodeId(newHistory[newHistory.length - 1]);
    }
  };

  const restart = () => {
    setCurrentNodeId("start");
    setHistory(["start"]);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <BookOpen className="w-8 h-8 text-primary" />
          <h3 className="text-2xl font-bold text-primary">📖 Elige tu Aventura</h3>
        </div>
        <div className="flex gap-2">
          {history.length > 1 && (
            <Button onClick={goBack} variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver
            </Button>
          )}
          <Button onClick={restart} variant="outline" size="sm">
            Reiniciar Historia
          </Button>
        </div>
      </div>

      <Card className="p-8 space-y-6 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed text-foreground whitespace-pre-line">
            {currentNode.text}
          </p>
        </div>

        {currentNode.isEnding ? (
          <div className="space-y-4">
            <Card className="p-6 bg-gradient-to-r from-primary/20 to-accent/20 border-2 border-primary">
              <div className="text-center space-y-3">
                <div className="text-6xl">🌟</div>
                <h4 className="text-2xl font-bold text-primary">¡Fin de la Aventura!</h4>
                <p className="text-lg">
                  Patito Milagro vivió un día maravilloso lleno de amor y alegría. 💛
                </p>
              </div>
            </Card>
            <div className="flex justify-center gap-4">
              <Button onClick={restart} size="lg" className="px-8">
                📖 Nueva Aventura
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <p className="text-center text-lg font-semibold text-primary">
              ¿Qué decides hacer?
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentNode.choices?.map((choice, index) => (
                <Button
                  key={index}
                  onClick={() => handleChoice(choice.nextId)}
                  variant="outline"
                  size="lg"
                  className="h-auto py-6 text-lg font-semibold hover:scale-105 transition-transform hover:bg-primary/10 hover:border-primary"
                >
                  {choice.text}
                </Button>
              ))}
            </div>
          </div>
        )}
      </Card>

      <div className="text-center text-sm text-muted-foreground">
        💡 Todas las decisiones llevan a aventuras hermosas y felices
      </div>
    </div>
  );
};
