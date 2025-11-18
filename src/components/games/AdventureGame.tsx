import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, ArrowLeft, Sun, Cloud, Moon, Sparkles } from "lucide-react";

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

type StoryBook = {
  id: string;
  title: string;
  icon: any;
  description: string;
  data: Record<string, StoryNode>;
};

const sunnyStory: Record<string, StoryNode> = {
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

const rainyStory: Record<string, StoryNode> = {
  start: {
    id: "start",
    text: "Las nubes grises cubrían el cielo y comenzaron a caer las primeras gotas de lluvia. Patito Milagro miró por la ventana de su cabañita mientras escuchaba el sonido relajante de la lluvia. ¿Qué aventura tendría en este día lluvioso? ☔💧",
    choices: [
      { text: "☔ Salir a bailar bajo la lluvia", nextId: "bailar_lluvia" },
      { text: "🏠 Quedarse en casa con actividades", nextId: "casa_lluvia" },
      { text: "🌈 Buscar el arcoíris", nextId: "buscar_arcoiris" }
    ]
  },
  bailar_lluvia: {
    id: "bailar_lluvia",
    text: "Patito Milagro se puso sus botitas de lluvia favoritas y salió a chapotear en los charcos. ¡Splash! ¡Splash! Cada salto hacía volar gotas de agua brillantes. Era como jugar con diamantes líquidos...",
    choices: [
      { text: "🦆 Invitar a otros patitos a jugar", nextId: "jugar_charcos" },
      { text: "🎶 Cantar una canción de lluvia", nextId: "cantar_lluvia" }
    ]
  },
  casa_lluvia: {
    id: "casa_lluvia",
    text: "Patito Milagro decidió hacer de su cabañita un lugar mágico. Preparó chocolate caliente y se acomodó junto a la ventana para ver llover. El sonido era tan relajante...",
    choices: [
      { text: "📚 Leer un libro de aventuras", nextId: "leer_libro" },
      { text: "🎨 Pintar el paisaje lluvioso", nextId: "pintar_lluvia" }
    ]
  },
  buscar_arcoiris: {
    id: "buscar_arcoiris",
    text: "Patito Milagro notó que la lluvia estaba parando y el sol comenzaba a salir. ¡Era el momento perfecto para buscar un arcoíris! Salió corriendo con su paraguas...",
    choices: [
      { text: "🌈 Seguir el arcoíris hasta su final", nextId: "final_arcoiris" },
      { text: "📸 Tomar fotos del arcoíris", nextId: "fotos_arcoiris" }
    ]
  },
  jugar_charcos: {
    id: "jugar_charcos",
    text: "Llegaron más patitos y juntos hicieron una competencia de saltos en charcos. ¡Las risas llenaban el aire! Patito Milagro ganó el premio al salto más divertido. Todos terminaron mojados pero muy felices. 🦆💦",
    isEnding: true
  },
  cantar_lluvia: {
    id: "cantar_lluvia",
    text: "Patito Milagro comenzó a cantar una hermosa melodía que imitaba el sonido de la lluvia. Los pájaros en los árboles se unieron a su canción, creando una sinfonía natural maravillosa. ¡Fue un concierto inolvidable! 🎵☔",
    isEnding: true
  },
  leer_libro: {
    id: "leer_libro",
    text: "Patito Milagro abrió su libro favorito de aventuras y se transportó a mundos mágicos. Mientras leía, la lluvia seguía cayendo afuera, haciendo todo más acogedor. Fue una tarde perfecta de lectura. 📚✨",
    isEnding: true
  },
  pintar_lluvia: {
    id: "pintar_lluvia",
    text: "Con sus acuarelas, Patito Milagro pintó el paisaje lluvioso que veía por la ventana. Los tonos grises y azules se mezclaban hermosamente. Creó una obra de arte que guardó como recuerdo de ese día especial. 🎨💙",
    isEnding: true
  },
  final_arcoiris: {
    id: "final_arcoiris",
    text: "Patito Milagro siguió el arcoíris hasta encontrar un prado lleno de flores de todos los colores. Era como si el arcoíris hubiera tocado la tierra. Pasó la tarde entre flores brillantes y mariposas. 🌈🌸",
    isEnding: true
  },
  fotos_arcoiris: {
    id: "fotos_arcoiris",
    text: "Patito Milagro tomó las fotos más hermosas del arcoíris desde diferentes ángulos. Cada foto era única y especial. Las compartió con sus amigos y todos quedaron maravillados con la belleza de la naturaleza. 📸🌈",
    isEnding: true
  }
};

const nightStory: Record<string, StoryNode> = {
  start: {
    id: "start",
    text: "La luna llena brillaba en el cielo estrellado. Patito Milagro salió de su cabañita y quedó maravillado con la belleza de la noche. Las estrellas parpadeaban como diamantes y el aire olía a jazmín. ¿Qué aventura nocturna viviría? 🌙✨",
    choices: [
      { text: "⭐ Observar las estrellas", nextId: "estrellas" },
      { text: "🦉 Conocer a los animales nocturnos", nextId: "animales_noche" },
      { text: "🏮 Hacer una fiesta de linternas", nextId: "linternas" }
    ]
  },
  estrellas: {
    id: "estrellas",
    text: "Patito Milagro se recostó en la hierba suave y comenzó a observar las estrellas. El cielo era un mapa de constelaciones brillantes. De pronto, vio una estrella fugaz cruzar el cielo...",
    choices: [
      { text: "🌠 Pedir un deseo", nextId: "deseo" },
      { text: "🔭 Buscar más estrellas fugaces", nextId: "mas_estrellas" }
    ]
  },
  animales_noche: {
    id: "animales_noche",
    text: "Mientras caminaba por el bosque iluminado por la luna, Patito Milagro escuchó sonidos misteriosos. No eran de miedo, sino de curiosidad. Los animales nocturnos estaban despertando...",
    choices: [
      { text: "🦉 Seguir al búho sabio", nextId: "buho" },
      { text: "🦗 Escuchar el coro de grillos", nextId: "grillos" }
    ]
  },
  linternas: {
    id: "linternas",
    text: "Patito Milagro tuvo una idea maravillosa: ¡hacer una fiesta de linternas! Comenzó a preparar linternas de colores para iluminar el jardín de forma mágica...",
    choices: [
      { text: "🎉 Invitar a todos los amigos", nextId: "fiesta_amigos" },
      { text: "💫 Hacer linternas flotantes", nextId: "linternas_flotantes" }
    ]
  },
  deseo: {
    id: "deseo",
    text: "Patito Milagro cerró sus ojitos y pidió un deseo muy especial: que todos los patitos del mundo pudieran tener un hogar lleno de amor. La estrella pareció brillar más fuerte, como si hubiera escuchado su deseo. 🌠💛",
    isEnding: true
  },
  mas_estrellas: {
    id: "mas_estrellas",
    text: "Patito Milagro contó más de diez estrellas fugaces esa noche. Cada una parecía una carta de amor del universo. Guardó ese momento en su corazón para siempre. Fue una noche verdaderamente mágica. ✨🌌",
    isEnding: true
  },
  buho: {
    id: "buho",
    text: "El búho sabio llevó a Patito Milagro a un árbol ancestral y le contó historias antiguas del bosque. Patito Milagro aprendió sobre la sabiduría de la naturaleza y la importancia de cuidar a todos los seres vivos. 🦉📖",
    isEnding: true
  },
  grillos: {
    id: "grillos",
    text: "Patito Milagro se sentó a escuchar la sinfonía nocturna de los grillos. El ritmo era hipnotizante y relajante. Pronto se le unieron luciérnagas que iluminaban el camino como lucecitas mágicas. 🦗✨",
    isEnding: true
  },
  fiesta_amigos: {
    id: "fiesta_amigos",
    text: "Todos los amigos llegaron con sus propias linternas. El jardín se transformó en un lugar de cuento de hadas con luces de colores por todos lados. Bailaron, rieron y celebraron la amistad bajo las estrellas. 🎉🏮",
    isEnding: true
  },
  linternas_flotantes: {
    id: "linternas_flotantes",
    text: "Patito Milagro hizo linternas especiales que podían flotar en el aire. Las soltó una por una y el cielo se llenó de luces brillantes que subían hacia las estrellas. Era como si la tierra y el cielo se conectaran. 💫🏮",
    isEnding: true
  }
};

const magicStory: Record<string, StoryNode> = {
  start: {
    id: "start",
    text: "Patito Milagro encontró un camino brillante en el bosque que nunca había visto antes. Las flores a su alrededor emanaban una luz suave y el aire estaba lleno de destellos dorados. ¡Había encontrado un lugar mágico! ✨🌟",
    choices: [
      { text: "🔮 Seguir el camino mágico", nextId: "camino_magico" },
      { text: "🦄 Buscar criaturas mágicas", nextId: "criaturas" },
      { text: "💎 Explorar la cueva cristalina", nextId: "cueva" }
    ]
  },
  camino_magico: {
    id: "camino_magico",
    text: "El camino llevó a Patito Milagro a un jardín donde las flores cantaban y bailaban. Era el jardín de los deseos, donde todo lo que imaginas puede hacerse realidad...",
    choices: [
      { text: "🌺 Plantar un árbol de los deseos", nextId: "arbol_deseos" },
      { text: "🎭 Unirse al baile de las flores", nextId: "baile_flores" }
    ]
  },
  criaturas: {
    id: "criaturas",
    text: "Patito Milagro conoció a un unicornio amigable que brillaba con luz propia. El unicornio le invitó a conocer el reino mágico donde viven las criaturas especiales...",
    choices: [
      { text: "🦄 Volar con el unicornio", nextId: "volar_unicornio" },
      { text: "🧚 Conocer a las hadas del bosque", nextId: "hadas" }
    ]
  },
  cueva: {
    id: "cueva",
    text: "La cueva estaba llena de cristales que reflejaban la luz en mil colores. Cada cristal parecía guardar un recuerdo feliz de alguien. Era la cueva de los recuerdos hermosos...",
    choices: [
      { text: "💎 Dejar un recuerdo feliz", nextId: "dejar_recuerdo" },
      { text: "🌈 Ver los recuerdos de otros", nextId: "ver_recuerdos" }
    ]
  },
  arbol_deseos: {
    id: "arbol_deseos",
    text: "Patito Milagro plantó una semilla especial y al instante creció un árbol hermoso lleno de frutos dorados. Cada fruto era un deseo que se haría realidad para alguien necesitado. 🌳✨",
    isEnding: true
  },
  baile_flores: {
    id: "baile_flores",
    text: "Patito Milagro bailó con las flores al ritmo de una melodía celestial. Con cada paso, más flores nacían y el jardín se llenaba de colores y fragancias maravillosas. ¡Fue el baile más mágico de su vida! 🌸💃",
    isEnding: true
  },
  volar_unicornio: {
    id: "volar_unicornio",
    text: "Patito Milagro montó en el unicornio y juntos volaron sobre nubes de algodón, cruzaron arcoíris y tocaron las estrellas. Desde arriba, el mundo se veía aún más hermoso. 🦄☁️",
    isEnding: true
  },
  hadas: {
    id: "hadas",
    text: "Las hadas llevaron a Patito Milagro a su aldea en el árbol más antiguo del bosque. Le enseñaron a hacer magia con el corazón y le dieron un polvillo de estrellas como regalo. 🧚✨",
    isEnding: true
  },
  dejar_recuerdo: {
    id: "dejar_recuerdo",
    text: "Patito Milagro dejó su recuerdo más preciado: el amor y la amistad que sentía por todos. El cristal brilló con una luz cálida y dorada que llenó toda la cueva de felicidad. 💎💛",
    isEnding: true
  },
  ver_recuerdos: {
    id: "ver_recuerdos",
    text: "Patito Milagro vio recuerdos hermosos de risas, abrazos, primeras veces y momentos de amor. Se dio cuenta de que el mundo estaba lleno de momentos mágicos y decidió crear más cada día. 🌈✨",
    isEnding: true
  }
};

const storyBooks: StoryBook[] = [
  {
    id: "sunny",
    title: "Un Día Soleado",
    icon: Sun,
    description: "Aventuras bajo el cálido sol",
    data: sunnyStory
  },
  {
    id: "rainy",
    title: "Día Lluvioso",
    icon: Cloud,
    description: "Diversión entre gotas y charcos",
    data: rainyStory
  },
  {
    id: "night",
    title: "Aventura Nocturna",
    icon: Moon,
    description: "Magia bajo las estrellas",
    data: nightStory
  },
  {
    id: "magic",
    title: "Reino Mágico",
    icon: Sparkles,
    description: "Un mundo de fantasía y maravillas",
    data: magicStory
  }
];

export const AdventureGame = () => {
  const [selectedStory, setSelectedStory] = useState<StoryBook | null>(null);
  const [currentNodeId, setCurrentNodeId] = useState<string>("start");
  const [history, setHistory] = useState<string[]>(["start"]);

  const currentStory = selectedStory?.data || {};
  const currentNode = currentStory[currentNodeId];

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

  const backToMenu = () => {
    setSelectedStory(null);
    setCurrentNodeId("start");
    setHistory(["start"]);
  };

  // Story selection menu
  if (!selectedStory) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <BookOpen className="w-8 h-8 text-primary" />
          <h3 className="text-2xl font-bold text-primary">📖 Elige tu Aventura</h3>
        </div>

        <Card className="p-6 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
          <p className="text-lg text-center mb-6 text-foreground">
            Selecciona la aventura que quieres vivir con Patito Milagro:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {storyBooks.map((story) => {
              const IconComponent = story.icon;
              return (
                <Button
                  key={story.id}
                  onClick={() => setSelectedStory(story)}
                  variant="outline"
                  className="h-auto p-6 flex flex-col items-center gap-3 hover:scale-105 transition-transform hover:bg-primary/10 hover:border-primary"
                >
                  <IconComponent className="w-12 h-12 text-primary" />
                  <div className="text-center">
                    <h4 className="text-xl font-bold mb-1">{story.title}</h4>
                    <p className="text-sm text-muted-foreground">{story.description}</p>
                  </div>
                </Button>
              );
            })}
          </div>
        </Card>

        <div className="text-center text-sm text-muted-foreground">
          💡 Cada aventura tiene múltiples caminos y finales hermosos
        </div>
      </div>
    );
  }

  // Story playing interface
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center flex-wrap gap-2">
        <div className="flex items-center gap-3">
          <BookOpen className="w-8 h-8 text-primary" />
          <div>
            <h3 className="text-2xl font-bold text-primary">📖 {selectedStory.title}</h3>
            <p className="text-sm text-muted-foreground">{selectedStory.description}</p>
          </div>
        </div>
        <div className="flex gap-2">
          {history.length > 1 && (
            <Button onClick={goBack} variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver
            </Button>
          )}
          <Button onClick={restart} variant="outline" size="sm">
            Reiniciar
          </Button>
          <Button onClick={backToMenu} variant="outline" size="sm">
            Cambiar Historia
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
