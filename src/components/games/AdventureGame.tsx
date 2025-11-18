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
    text: "Patito Milagro siguió el hermoso canto hasta encontrar un grupo de pájaros cantando en un árbol. Los pájaros lo invitaron a su concierto matutino. Había cardenales rojos, gorriones alegres y jilgueros amarillos. Todos juntos creaban una melodía mágica...",
    choices: [
      { text: "🎵 Aprender su canción", nextId: "aprender_cancion" },
      { text: "🎤 Hacer un dueto con ellos", nextId: "dueto_pajaros" }
    ]
  },
  aprender_cancion: {
    id: "aprender_cancion",
    text: "Patito Milagro prestó mucha atención y aprendió la hermosa canción. Los pájaros le enseñaron también sobre las diferentes notas y ritmos. Practicó hasta perfeccionarla y la cantó todo el camino a casa, sintiéndose muy orgulloso. 🎶✨",
    isEnding: true
  },
  dueto_pajaros: {
    id: "dueto_pajaros",
    text: "Patito Milagro y los pájaros hicieron el dueto más hermoso que el bosque había escuchado. Los animales se acercaron a escuchar y todos aplaudieron al final. Fue como un pequeño concierto en la naturaleza. ¡Qué momento tan especial! 🎤🎵",
    isEnding: true
  },
  ardilla: {
    id: "ardilla",
    text: "Patito Milagro ayudó a la pequeña ardilla a recoger sus nueces que se habían caído. La ardilla, muy agradecida, le contó que estaba preparando reservas para el invierno y le preguntó si quería ayudarla más...",
    choices: [
      { text: "🌰 Ayudar a organizar las nueces", nextId: "organizar_nueces" },
      { text: "🏡 Visitar su casa en el árbol", nextId: "casa_ardilla" }
    ]
  },
  organizar_nueces: {
    id: "organizar_nueces",
    text: "Juntos organizaron las nueces por tamaño y tipo en la despensa de la ardilla. Patito Milagro aprendió mucho sobre la importancia de planificar. La ardilla le regaló una nuez especial como agradecimiento por su ayuda. 🌰💛",
    isEnding: true
  },
  casa_ardilla: {
    id: "casa_ardilla",
    text: "La ardilla llevó a Patito Milagro a su acogedora casa en el árbol. Era pequeña pero muy bonita, con ventanas redondas y cortinas de hojas. Compartieron avellanas tostadas y se hicieron grandes amigos. 🏡🐿️",
    isEnding: true
  },
  bucear: {
    id: "bucear",
    text: "Patito Milagro buceó profundo y descubrió que el brillo era una hermosa concha marina con colores del arcoíris. Cuando la tocó, la concha se abrió revelando una perla brillante. ¿Qué haría con este tesoro?",
    choices: [
      { text: "💎 Guardarla como tesoro personal", nextId: "guardar_perla" },
      { text: "🎁 Regalársela a un amigo especial", nextId: "regalar_perla" }
    ]
  },
  guardar_perla: {
    id: "guardar_perla",
    text: "Patito Milagro llevó la perla a casa y la colocó en un lugar especial donde pudiera verla brillar cada día. Cada vez que la miraba, recordaba su aventura submarina y lo valiente que fue al bucear tan profundo. 🐚✨",
    isEnding: true
  },
  regalar_perla: {
    id: "regalar_perla",
    text: "Patito Milagro decidió regalar la perla a su mejor amigo que estaba triste. La alegría en los ojos de su amigo fue más valiosa que cualquier tesoro. Aprendió que compartir la felicidad la multiplica. 🎁💛",
    isEnding: true
  },
  otros_patos: {
    id: "otros_patos",
    text: "Patito Milagro nadó hacia un grupo de patitos que jugaban en el lago. Le propusieron jugar juntos y él aceptó emocionado. Había tantos juegos por elegir...",
    choices: [
      { text: "🏊 Hacer carreras de natación", nextId: "carreras_natacion" },
      { text: "🎪 Hacer trucos de buceo", nextId: "trucos_buceo" }
    ]
  },
  carreras_natacion: {
    id: "carreras_natacion",
    text: "Organizaron carreras desde una orilla del lago hasta la otra. Patito Milagro no ganó todas, pero se divirtió muchísimo. Al final, todos recibieron una medalla de hojas que ellos mismos hicieron. ¡Fue el mejor día de juegos! 🏊🏅",
    isEnding: true
  },
  trucos_buceo: {
    id: "trucos_buceo",
    text: "Cada patito mostró sus mejores trucos de buceo. Patito Milagro hizo una voltereta submarina perfecta que todos aplaudieron. Se zambulleron, giraron y saltaron juntos. Formaron un equipo de acrobacias acuáticas. 🎪🦆",
    isEnding: true
  },
  mariposa: {
    id: "mariposa",
    text: "La mariposa llevó a Patito Milagro por un camino secreto entre los árboles. Volaron (bueno, la mariposa volaba y Patito corría) hasta llegar a un claro hermoso lleno de flores que brillaban con luz propia. Era un lugar mágico...",
    choices: [
      { text: "✨ Explorar el jardín secreto", nextId: "jardin_secreto" },
      { text: "🦋 Conocer a más mariposas", nextId: "familia_mariposas" }
    ]
  },
  jardin_secreto: {
    id: "jardin_secreto",
    text: "Patito Milagro exploró cada rincón del jardín mágico. Encontró flores que cambiaban de color, otras que sonaban como campanitas y algunas que olían a galletas recién horneadas. Pasó la tarde maravillado por tanta belleza. 🌺✨",
    isEnding: true
  },
  familia_mariposas: {
    id: "familia_mariposas",
    text: "La mariposa azul presentó a Patito Milagro con toda su familia. Había mariposas de todos los colores del arcoíris. Le enseñaron cómo hacer los jardines más hermosos y le dieron semillas mágicas para plantar en su casa. 🦋🌈",
    isEnding: true
  },
  flores: {
    id: "flores",
    text: "Patito Milagro comenzó a recolectar flores con mucho cuidado, asegurándose de no dañar las plantas. Las rosas rojas olían dulce, las margaritas amarillas brillaban al sol. ¿Qué haría con este hermoso ramo?",
    choices: [
      { text: "🏡 Decorar su cabañita", nextId: "decorar_cabanita" },
      { text: "💐 Llevarlas a un amigo", nextId: "regalar_flores" }
    ]
  },
  decorar_cabanita: {
    id: "decorar_cabanita",
    text: "Patito Milagro llevó las flores a casa y las colocó en jarrones de diferentes tamaños. Organizó cada color cuidadosamente. Su cabañita se transformó en un lugar lleno de vida, color y aromas hermosos. ¡Nunca se había visto tan bonita! 🌸🏡",
    isEnding: true
  },
  regalar_flores: {
    id: "regalar_flores",
    text: "Patito Milagro llevó el ramo de flores a su amiga la tortuga que estaba enferma. Sus ojos brillaron de felicidad al ver las flores. El regalo la hizo sentir mucho mejor. Patito aprendió que dar alegría es la mejor medicina. 💐💚",
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
    text: "Llegaron más patitos y juntos organizaron los juegos más divertidos. Primero hicieron competencias de saltos, luego carreras de chapoteo. Patito Milagro propuso un nuevo juego...",
    choices: [
      { text: "🎨 Hacer arte con el barro", nextId: "arte_barro" },
      { text: "🏆 Competencia de salto más alto", nextId: "salto_alto" }
    ]
  },
  arte_barro: {
    id: "arte_barro",
    text: "Todos los patitos usaron el barro para crear esculturas y dibujos. Patito Milagro hizo una escultura de un corazón gigante. Al final, montaron una galería de arte bajo la lluvia. ¡Fue la exposición más original! 🎨💦",
    isEnding: true
  },
  salto_alto: {
    id: "salto_alto",
    text: "La competencia de saltos fue épica. Cada patito dio su mejor esfuerzo. Patito Milagro ganó el premio al salto más divertido con una voltereta en el aire. Todos rieron y terminaron mojados pero muy felices. 🏆🦆",
    isEnding: true
  },
  cantar_lluvia: {
    id: "cantar_lluvia",
    text: "Patito Milagro comenzó a cantar una hermosa melodía que imitaba el sonido de la lluvia. Su voz era tan dulce que atrajo la atención de otros animales...",
    choices: [
      { text: "🎵 Enseñar la canción a los pájaros", nextId: "ensenar_cancion_lluvia" },
      { text: "🎶 Crear una orquesta de lluvia", nextId: "orquesta_lluvia" }
    ]
  },
  ensenar_cancion_lluvia: {
    id: "ensenar_cancion_lluvia",
    text: "Los pájaros se acercaron curiosos y Patito Milagro les enseñó su canción de lluvia. Juntos la perfeccionaron agregando diferentes tonos. Se convirtió en la canción oficial del bosque para los días lluviosos. 🎵☔",
    isEnding: true
  },
  orquesta_lluvia: {
    id: "orquesta_lluvia",
    text: "Patito Milagro organizó una orquesta donde cada animal hacía un sonido diferente: gotas, truenos, viento. Los pájaros silbaban, las ranas croaban y él dirigía. ¡Fue un concierto inolvidable bajo la lluvia! 🎶🌧️",
    isEnding: true
  },
  leer_libro: {
    id: "leer_libro",
    text: "Patito Milagro abrió su libro favorito de aventuras. La historia era tan emocionante que se sintió parte de ella. Cada página lo transportaba a un nuevo mundo mágico...",
    choices: [
      { text: "📖 Terminar el libro completo", nextId: "terminar_libro" },
      { text: "✍️ Escribir su propia historia", nextId: "escribir_historia" }
    ]
  },
  terminar_libro: {
    id: "terminar_libro",
    text: "Patito Milagro leyó hasta la última página mientras la lluvia seguía cayendo afuera. El final fue hermoso y le enseñó una lección importante sobre la amistad. Cerró el libro sintiéndose inspirado y feliz. 📚✨",
    isEnding: true
  },
  escribir_historia: {
    id: "escribir_historia",
    text: "Inspirado por el libro, Patito Milagro decidió escribir su propia aventura. Escribió sobre un patito valiente que ayudaba a otros. La lluvia afuera hacía el momento perfecto para crear. Escribió página tras página de su imaginación. ✍️💛",
    isEnding: true
  },
  pintar_lluvia: {
    id: "pintar_lluvia",
    text: "Con sus acuarelas, Patito Milagro comenzó a pintar el paisaje lluvioso. Los colores se mezclaban hermosamente en el papel mojado, creando efectos únicos...",
    choices: [
      { text: "🎨 Pintar el arcoíris que aparece", nextId: "pintar_arcoiris" },
      { text: "🖼️ Hacer una serie de cuadros", nextId: "serie_cuadros" }
    ]
  },
  pintar_arcoiris: {
    id: "pintar_arcoiris",
    text: "Cuando salió el sol y apareció un arcoíris, Patito Milagro lo pintó con todos sus colores vibrantes. Cada tono era perfecto. Colgó su pintura en la pared donde la vería cada mañana. 🎨🌈",
    isEnding: true
  },
  serie_cuadros: {
    id: "serie_cuadros",
    text: "Patito Milagro pintó varios cuadros mostrando la lluvia en diferentes momentos: al inicio, durante la tormenta y al final con el sol saliendo. Creó toda una galería personal. Se sintió como un verdadero artista. 🖼️💙",
    isEnding: true
  },
  final_arcoiris: {
    id: "final_arcoiris",
    text: "Patito Milagro siguió el arcoíris hasta llegar a un prado mágico. El lugar estaba lleno de flores de todos los colores imaginables, como si el arcoíris hubiera tocado la tierra...",
    choices: [
      { text: "🌺 Recoger flores del arcoíris", nextId: "flores_arcoiris" },
      { text: "🦋 Jugar con las mariposas de colores", nextId: "mariposas_arcoiris" }
    ]
  },
  flores_arcoiris: {
    id: "flores_arcoiris",
    text: "Patito Milagro recogió flores de cada color del arcoíris. Cada una tenía un aroma único y especial. Hizo un ramo mágico que nunca se marchitaría, un regalo del arcoíris que brillaría por siempre. 🌺🌈",
    isEnding: true
  },
  mariposas_arcoiris: {
    id: "mariposas_arcoiris",
    text: "Mariposas de todos los colores llenaban el prado. Patito Milagro jugó con ellas toda la tarde. Las mariposas formaban arcoíris voladores a su alrededor. Fue como estar dentro de un sueño de colores. 🦋✨",
    isEnding: true
  },
  fotos_arcoiris: {
    id: "fotos_arcoiris",
    text: "Patito Milagro tomó fotos desde diferentes ángulos. Cada fotografía capturaba la belleza única del arcoíris. Luego decidió qué hacer con estas hermosas imágenes...",
    choices: [
      { text: "🖼️ Hacer una exposición de fotos", nextId: "exposicion_fotos" },
      { text: "💝 Compartir las fotos con amigos", nextId: "compartir_fotos" }
    ]
  },
  exposicion_fotos: {
    id: "exposicion_fotos",
    text: "Patito Milagro organizó una exposición fotográfica en su jardín. Todos vinieron a admirar las hermosas fotos del arcoíris. Fue una celebración de la belleza de la naturaleza. ¡Un éxito total! 🖼️📸",
    isEnding: true
  },
  compartir_fotos: {
    id: "compartir_fotos",
    text: "Patito Milagro imprimió las fotos y las regaló a sus amigos. Cada uno recibió una imagen del arcoíris para alegrar sus días grises. La belleza compartida se multiplicó en sonrisas. 💝🌈",
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
    text: "Patito Milagro cerró sus ojitos y pidió un deseo muy especial con todo su corazón. Cuando abrió los ojos, la estrella brillaba aún más fuerte, como si hubiera escuchado...",
    choices: [
      { text: "✨ Ver si el deseo se cumple", nextId: "deseo_cumplido" },
      { text: "🌟 Compartir el momento con amigos", nextId: "compartir_deseo" }
    ]
  },
  deseo_cumplido: {
    id: "deseo_cumplido",
    text: "Al día siguiente, Patito Milagro descubrió que su deseo se había cumplido: todos los patitos sin hogar del pueblo habían encontrado familias amorosas. Su corazón se llenó de alegría. Los milagros sí existen. 🌠💛",
    isEnding: true
  },
  compartir_deseo: {
    id: "compartir_deseo",
    text: "Patito Milagro corrió a buscar a sus amigos para contarles sobre la estrella fugaz. Juntos hicieron una ceremonia especial de deseos bajo las estrellas. Cada uno pidió algo hermoso para el mundo. 🌟🦆",
    isEnding: true
  },
  mas_estrellas: {
    id: "mas_estrellas",
    text: "Patito Milagro siguió observando el cielo y comenzó a contar estrellas fugaces. Una, dos, tres... ¡hasta diez! Cada una parecía llevar un mensaje especial del universo...",
    choices: [
      { text: "📝 Anotar cada deseo en un diario", nextId: "diario_deseos" },
      { text: "🎆 Celebrar con luces de bengala", nextId: "celebrar_estrellas" }
    ]
  },
  diario_deseos: {
    id: "diario_deseos",
    text: "Patito Milagro sacó su diario especial y escribió todos los deseos que pidió, uno por cada estrella fugaz. Guardó el diario como un tesoro para recordar esa noche mágica por siempre. 📝✨",
    isEnding: true
  },
  celebrar_estrellas: {
    id: "celebrar_estrellas",
    text: "Patito Milagro encendió bengalas que tenía guardadas para ocasiones especiales. Las luces chispeantes en la tierra hacían eco de las estrellas en el cielo. Fue una celebración celestial hermosa. 🎆🌌",
    isEnding: true
  },
  buho: {
    id: "buho",
    text: "El búho sabio llevó a Patito Milagro a un árbol ancestral muy especial. Sus ojos dorados brillaban con sabiduría. El búho comenzó a compartir historias antiguas del bosque...",
    choices: [
      { text: "📖 Escuchar leyendas antiguas", nextId: "leyendas_antiguas" },
      { text: "🦉 Aprender la sabiduría del búho", nextId: "sabiduria_buho" }
    ]
  },
  leyendas_antiguas: {
    id: "leyendas_antiguas",
    text: "El búho narró historias de cuando el bosque era joven, de animales valientes y de la magia que vive en cada árbol. Patito Milagro escuchó fascinado hasta el amanecer, sintiendo una conexión profunda con la naturaleza. 📖🦉",
    isEnding: true
  },
  sabiduria_buho: {
    id: "sabiduria_buho",
    text: "El búho le enseñó a Patito Milagro sobre la importancia de cuidar a todos los seres vivos, de ser paciente y de encontrar la belleza en las pequeñas cosas. Fueron lecciones que Patito llevaría en su corazón para siempre. 🦉✨",
    isEnding: true
  },
  grillos: {
    id: "grillos",
    text: "Patito Milagro se sentó a escuchar la sinfonía nocturna de los grillos. El ritmo era hipnotizante. Pronto notó que luciérnagas comenzaban a aparecer, iluminando la noche...",
    choices: [
      { text: "✨ Bailar con las luciérnagas", nextId: "bailar_luciernagas" },
      { text: "🎵 Unirse al coro de grillos", nextId: "coro_grillos" }
    ]
  },
  bailar_luciernagas: {
    id: "bailar_luciernagas",
    text: "Las luciérnagas formaron un círculo alrededor de Patito Milagro y él bailó siguiendo sus luces. Era como bailar en un escenario de estrellas. El momento fue tan mágico que no quería que terminara. ✨💃",
    isEnding: true
  },
  coro_grillos: {
    id: "coro_grillos",
    text: "Patito Milagro aprendió el ritmo de los grillos y se unió a su coro con suaves cuac-cuac que armonizaban perfectamente. Juntos crearon la música más hermosa de la noche. Los animales del bosque se durmieron con su melodía. 🦗🎵",
    isEnding: true
  },
  fiesta_amigos: {
    id: "fiesta_amigos",
    text: "Todos los amigos llegaron con sus propias linternas de colores. El jardín se transformó en un lugar de cuento de hadas. Patito Milagro propuso hacer algo especial...",
    choices: [
      { text: "🎶 Organizar un concierto nocturno", nextId: "concierto_nocturno" },
      { text: "🎨 Decorar todo el jardín juntos", nextId: "decorar_jardin" }
    ]
  },
  concierto_nocturno: {
    id: "concierto_nocturno",
    text: "Cada amigo tocó un instrumento diferente bajo las linternas brillantes. La música llenó la noche mágica. Bailaron y cantaron hasta que las estrellas empezaron a desaparecer con el amanecer. 🎶🌙",
    isEnding: true
  },
  decorar_jardin: {
    id: "decorar_jardin",
    text: "Juntos colgaron linternas en cada árbol y arbusto. Agregaron flores brillantes y cintas de colores. El jardín se convirtió en el lugar más hermoso del mundo, un paraíso iluminado de amistad. 🎨✨",
    isEnding: true
  },
  linternas_flotantes: {
    id: "linternas_flotantes",
    text: "Patito Milagro hizo linternas especiales que podían flotar en el aire. Una a una, las soltó al cielo nocturno. Brillaban hermosas subiendo hacia las estrellas...",
    choices: [
      { text: "🌟 Hacer un deseo con cada linterna", nextId: "deseos_linternas" },
      { text: "📸 Capturar el momento en una foto", nextId: "foto_linternas" }
    ]
  },
  deseos_linternas: {
    id: "deseos_linternas",
    text: "Con cada linterna que soltaba, Patito Milagro hacía un deseo diferente. Deseos de amor, paz, alegría y esperanza para todos. Las linternas llevaban sus deseos hacia el universo. Era como enviar cartas a las estrellas. 🌟💫",
    isEnding: true
  },
  foto_linternas: {
    id: "foto_linternas",
    text: "Patito Milagro tomó la foto más hermosa que jamás había capturado: cientos de linternas flotando hacia el cielo estrellado. Era una imagen que captaba la magia pura del momento. La guardó como su tesoro más preciado. 📸✨",
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
    text: "Patito Milagro plantó una semilla especial y al instante creció un árbol hermoso. Sus hojas brillaban y sus frutos eran dorados. El árbol tenía poderes mágicos...",
    choices: [
      { text: "🌟 Compartir los frutos mágicos", nextId: "compartir_frutos" },
      { text: "🌳 Cuidar el árbol especial", nextId: "cuidar_arbol" }
    ]
  },
  compartir_frutos: {
    id: "compartir_frutos",
    text: "Patito Milagro recogió los frutos dorados y los compartió con todos los animales del bosque que necesitaban ayuda. Cada fruto cumplía un deseo. La alegría se multiplicó por todo el reino. 🌟💛",
    isEnding: true
  },
  cuidar_arbol: {
    id: "cuidar_arbol",
    text: "Patito Milagro prometió cuidar el árbol de los deseos cada día. Lo regaba con agua de manantial y le cantaba canciones. El árbol creció más fuerte y hermoso, bendiciendo a todos los que se acercaban. 🌳✨",
    isEnding: true
  },
  baile_flores: {
    id: "baile_flores",
    text: "Patito Milagro bailó con las flores al ritmo de una melodía celestial. Con cada paso, más flores nacían del suelo. La danza era tan hermosa que atrajo visitantes mágicos...",
    choices: [
      { text: "🧚 Bailar con las hadas", nextId: "baile_hadas" },
      { text: "🎶 Enseñar el baile a otros", nextId: "ensenar_baile" }
    ]
  },
  baile_hadas: {
    id: "baile_hadas",
    text: "Las hadas se unieron al baile y juntos crearon una coreografía mágica. Los pétalos volaban en el aire formando patrones hermosos. Fue el baile más mágico que el jardín había presenciado. 🧚💃",
    isEnding: true
  },
  ensenar_baile: {
    id: "ensenar_baile",
    text: "Patito Milagro enseñó el baile de las flores a todos los animales del jardín. Pronto, todos bailaban juntos en armonía. El jardín se convirtió en un lugar de celebración eterna. 🎶🌸",
    isEnding: true
  },
  volar_unicornio: {
    id: "volar_unicornio",
    text: "Patito Milagro montó en el unicornio y juntos despegaron hacia el cielo. Volaron sobre nubes suaves y atravesaron arcoíris brillantes. El unicornio le preguntó si quería visitar un lugar especial...",
    choices: [
      { text: "⭐ Visitar el castillo de las nubes", nextId: "castillo_nubes" },
      { text: "🌈 Tocar el final del arcoíris", nextId: "final_arcoiris_magico" }
    ]
  },
  castillo_nubes: {
    id: "castillo_nubes",
    text: "El unicornio llevó a Patito Milagro a un castillo hecho de nubes donde vivían ángeles guardianes. Le mostraron vistas increíbles del mundo desde arriba y le dieron alas temporales para volar solo. 🏰☁️",
    isEnding: true
  },
  final_arcoiris_magico: {
    id: "final_arcoiris_magico",
    text: "Tocaron el final del arcoíris y encontraron un tesoro de luz pura. No era oro ni joyas, sino amor concentrado que podían compartir con el mundo. Patito lo guardó en su corazón. 🌈✨",
    isEnding: true
  },
  hadas: {
    id: "hadas",
    text: "Las hadas llevaron a Patito Milagro a su aldea secreta en el árbol más antiguo del bosque. Era un lugar lleno de luces brillantes y risas melodiosas. Las hadas querían compartir su magia...",
    choices: [
      { text: "✨ Aprender magia del corazón", nextId: "magia_corazon" },
      { text: "🎁 Recibir un regalo mágico", nextId: "regalo_magico" }
    ]
  },
  magia_corazon: {
    id: "magia_corazon",
    text: "Las hadas le enseñaron a Patito Milagro que la verdadera magia viene del corazón. Le mostraron cómo usar el amor y la bondad para crear pequeños milagros. Patito practicó y logró hacer brillar una flor. 🧚✨",
    isEnding: true
  },
  regalo_magico: {
    id: "regalo_magico",
    text: "Las hadas le dieron a Patito Milagro un frasco de polvillo de estrellas. Con él podría hacer que los deseos más puros se cumplieran. Patito prometió usarlo sabiamente para ayudar a otros. 🎁⭐",
    isEnding: true
  },
  dejar_recuerdo: {
    id: "dejar_recuerdo",
    text: "Patito Milagro tocó un cristal vacío y pensó en su recuerdo más preciado. El cristal comenzó a brillar capturando ese momento de amor y alegría...",
    choices: [
      { text: "💛 Compartir el recuerdo con otros", nextId: "compartir_recuerdo" },
      { text: "🔮 Preservar el recuerdo para siempre", nextId: "preservar_recuerdo" }
    ]
  },
  compartir_recuerdo: {
    id: "compartir_recuerdo",
    text: "El cristal proyectó el recuerdo de Patito Milagro en el aire para que todos lo vieran. Era un momento de pura amistad y amor. Todos los presentes sintieron calidez en sus corazones. 💛✨",
    isEnding: true
  },
  preservar_recuerdo: {
    id: "preservar_recuerdo",
    text: "Patito Milagro colocó cuidadosamente el cristal con su recuerdo en un lugar especial de la cueva. Allí brillaría por siempre, inspirando a futuras generaciones con su mensaje de amor. 🔮💎",
    isEnding: true
  },
  ver_recuerdos: {
    id: "ver_recuerdos",
    text: "Patito Milagro comenzó a tocar diferentes cristales. Cada uno le mostraba hermosos recuerdos de otros: risas, abrazos, momentos de amor. Se dio cuenta de algo importante...",
    choices: [
      { text: "🌟 Inspirarse para crear más recuerdos", nextId: "crear_recuerdos" },
      { text: "📖 Contar las historias que vio", nextId: "contar_historias" }
    ]
  },
  crear_recuerdos: {
    id: "crear_recuerdos",
    text: "Patito Milagro salió de la cueva inspirado. Decidió dedicar cada día a crear momentos hermosos con sus seres queridos. Cada nuevo recuerdo sería un cristal más en su propia cueva del corazón. 🌟💛",
    isEnding: true
  },
  contar_historias: {
    id: "contar_historias",
    text: "Patito Milagro se convirtió en el guardián de las historias de la cueva. Compartió con todos las bellas memorias que había visto, inspirando a otros a valorar cada momento. Fue un narrador de esperanza. 📖✨",
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
