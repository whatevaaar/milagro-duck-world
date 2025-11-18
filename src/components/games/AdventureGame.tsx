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
      { text: "🦋 Explorar el jardín de flores", nextId: "jardin" },
      { text: "🎨 Pintar al aire libre", nextId: "pintar_naturaleza" },
      { text: "🏕️ Hacer un picnic especial", nextId: "picnic" }
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
  },
  pintar_naturaleza: {
    id: "pintar_naturaleza",
    text: "Patito Milagro tomó sus pinturas y su caballete y salió a buscar el lugar perfecto para pintar. El sol brillaba hermoso y había tantos paisajes por capturar...",
    choices: [
      { text: "🌄 Pintar el amanecer en la colina", nextId: "pintar_amanecer" },
      { text: "🌊 Pintar las olas del lago", nextId: "pintar_lago" }
    ]
  },
  pintar_amanecer: {
    id: "pintar_amanecer",
    text: "Patito Milagro subió a la colina más alta y comenzó a pintar los colores dorados y rosados del amanecer. Cada pincelada capturaba la magia del momento. Cuando terminó, tenía una obra maestra que brillaba con luz propia. 🌄✨",
    choices: [
      { text: "🎨 Enseñar pintura a otros", nextId: "ensenar_pintura" },
      { text: "🖼️ Guardar el cuadro como tesoro", nextId: "guardar_cuadro" }
    ]
  },
  ensenar_pintura: {
    id: "ensenar_pintura",
    text: "Patito Milagro organizó clases de pintura al aire libre. Enseñó a sus amigos a ver la belleza en cada detalle de la naturaleza. Pronto, todos estaban creando sus propias obras de arte. El arte los unió aún más. 🎨👥",
    isEnding: true
  },
  guardar_cuadro: {
    id: "guardar_cuadro",
    text: "Patito Milagro colgó su pintura del amanecer en el lugar más especial de su cabañita. Cada mañana al despertar, veía el cuadro y recordaba ese momento perfecto. Le daba energía para enfrentar cada nuevo día. 🖼️💛",
    isEnding: true
  },
  pintar_lago: {
    id: "pintar_lago",
    text: "Sentado junto al lago, Patito Milagro pintó las olas brillantes y los reflejos del sol en el agua. El movimiento del agua hacía cada momento único. Su pintura capturaba la danza eterna del lago.",
    choices: [
      { text: "🎁 Regalar el cuadro al pueblo", nextId: "regalar_cuadro" },
      { text: "🏛️ Exhibir en una galería", nextId: "galeria_arte" }
    ]
  },
  regalar_cuadro: {
    id: "regalar_cuadro",
    text: "Patito Milagro donó su pintura al pueblo para que todos pudieran disfrutarla. La colocaron en la plaza principal donde traía alegría a todos los que pasaban. El arte de Patito alegró a toda la comunidad. 🎁🏘️",
    isEnding: true
  },
  galeria_arte: {
    id: "galeria_arte",
    text: "La pintura de Patito Milagro fue seleccionada para exhibirse en la galería más importante del bosque. Muchos animales vinieron a admirar su arte. Se convirtió en un artista reconocido, inspirando a otros. 🏛️⭐",
    isEnding: true
  },
  picnic: {
    id: "picnic",
    text: "Patito Milagro decidió preparar un picnic especial. Empacó sándwiches, frutas frescas y jugos naturales. Ahora tenía que decidir dónde sería el mejor lugar para disfrutar este festín...",
    choices: [
      { text: "🌳 Bajo el gran árbol centenario", nextId: "picnic_arbol" },
      { text: "🏖️ A la orilla del lago", nextId: "picnic_lago" }
    ]
  },
  picnic_arbol: {
    id: "picnic_arbol",
    text: "Bajo la sombra del gran árbol centenario, Patito Milagro extendió su manta y comenzó su picnic. El árbol parecía protegerlo con sus ramas. De repente, vio a unos amigos pasar cerca...",
    choices: [
      { text: "👋 Invitar a todos al picnic", nextId: "picnic_compartido" },
      { text: "📖 Disfrutar en soledad con un libro", nextId: "picnic_tranquilo" }
    ]
  },
  picnic_compartido: {
    id: "picnic_compartido",
    text: "Patito Milagro invitó a todos sus amigos. Compartieron la comida, contaron historias y rieron juntos. Lo que comenzó como un picnic se convirtió en una fiesta improvisada llena de alegría. La comida sabía mejor cuando se compartía. 👥🎉",
    isEnding: true
  },
  picnic_tranquilo: {
    id: "picnic_tranquilo",
    text: "Patito Milagro disfrutó de su picnic en paz, leyendo su libro favorito bajo el árbol. Los pájaros cantaban suavemente y la brisa era perfecta. Fue un momento de serenidad y reflexión que necesitaba. 📖🌳",
    isEnding: true
  },
  picnic_lago: {
    id: "picnic_lago",
    text: "A la orilla del lago, con los pies en el agua, Patito Milagro disfrutaba su picnic. El sonido de las olas era relajante. Mientras comía, notó algo especial en el agua...",
    choices: [
      { text: "🐟 Compartir con los peces", nextId: "alimentar_peces" },
      { text: "🎵 Cantar junto al lago", nextId: "cantar_lago" }
    ]
  },
  alimentar_peces: {
    id: "alimentar_peces",
    text: "Patito Milagro compartió un poco de su comida con los peces del lago. Ellos nadaban alegres haciendo círculos de gratitud. Se hizo amigo de cada pez, aprendiendo que compartir siempre multiplica la felicidad. 🐟💙",
    isEnding: true
  },
  cantar_lago: {
    id: "cantar_lago",
    text: "Patito Milagro comenzó a cantar hermosas melodías junto al lago. Su voz resonaba en el agua creando ecos mágicos. Los animales del lago salieron a escucharlo. Fue un concierto privado para la naturaleza. 🎵🌊",
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
      { text: "🌈 Buscar el arcoíris", nextId: "buscar_arcoiris" },
      { text: "🎪 Construir cosas con la lluvia", nextId: "construccion_lluvia" },
      { text: "🍪 Hornear galletas calientes", nextId: "hornear" }
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
  },
  construccion_lluvia: {
    id: "construccion_lluvia",
    text: "Patito Milagro tuvo una idea creativa: usar la lluvia para construir cosas divertidas. Se puso su impermeable favorito y salió con mucha energía...",
    choices: [
      { text: "⛵ Hacer barquitos de papel", nextId: "barquitos_papel" },
      { text: "🏰 Construir castillos de barro", nextId: "castillos_barro" }
    ]
  },
  barquitos_papel: {
    id: "barquitos_papel",
    text: "Patito Milagro hizo varios barquitos de papel de colores. Los puso en los arroyos que formaba la lluvia y organizó una carrera de barquitos. Cada uno tenía un nombre especial...",
    choices: [
      { text: "🏆 Hacer una competencia con amigos", nextId: "carrera_barquitos" },
      { text: "💌 Enviar mensajes en los barcos", nextId: "mensajes_barquitos" }
    ]
  },
  carrera_barquitos: {
    id: "carrera_barquitos",
    text: "Los amigos de Patito se unieron y cada uno hizo su propio barquito. La carrera fue emocionante, los barcos navegaban por las corrientes de lluvia. Todos se divirtieron muchísimo y el ganador recibió una corona de hojas. 🏆⛵",
    isEnding: true
  },
  mensajes_barquitos: {
    id: "mensajes_barquitos",
    text: "Patito Milagro escribió mensajes de amor y esperanza en cada barquito. Los dejó navegar por los arroyos esperando que llegaran a alguien que los necesitara. Era como enviar abrazos líquidos por el mundo. 💌🌊",
    isEnding: true
  },
  castillos_barro: {
    id: "castillos_barro",
    text: "Con el barro perfecto que dejaba la lluvia, Patito Milagro comenzó a construir castillos elaborados. Torres, puentes y murallas. Era como un arquitecto de la naturaleza...",
    choices: [
      { text: "👑 Crear un reino completo", nextId: "reino_barro" },
      { text: "🎨 Hacer esculturas artísticas", nextId: "esculturas_barro" }
    ]
  },
  reino_barro: {
    id: "reino_barro",
    text: "Patito Milagro construyó un reino entero de barro con castillos, aldeas y caminos. Invitó a los insectos y pequeños animales a ser parte de su reino temporal. Fue rey por un día en su creación. 👑🏰",
    isEnding: true
  },
  esculturas_barro: {
    id: "esculturas_barro",
    text: "Las manos de Patito crearon esculturas increíbles: corazones, estrellas y figuras de animales. Cada escultura era única. Cuando la lluvia paró, su galería al aire libre atrajo a muchos admiradores. 🎨✨",
    isEnding: true
  },
  hornear: {
    id: "hornear",
    text: "El aroma de las galletas horneándose llenó la cabañita mientras la lluvia caía afuera. Patito Milagro preparaba diferentes tipos de galletas con amor. El calor del horno hacía todo más acogedor...",
    choices: [
      { text: "🍪 Decorar galletas con arte", nextId: "decorar_galletas" },
      { text: "🎁 Preparar canastas de regalo", nextId: "canastas_galletas" }
    ]
  },
  decorar_galletas: {
    id: "decorar_galletas",
    text: "Con glaseado de colores, Patito Milagro decoró cada galleta como si fuera una pequeña obra de arte. Hizo formas de nubes, gotas de lluvia y arcoíris. Cada galleta contaba una historia del día lluvioso...",
    choices: [
      { text: "📸 Fotografiar las galletas artísticas", nextId: "fotos_galletas" },
      { text: "🎪 Hacer una exhibición de galletas", nextId: "exhibicion_galletas" }
    ]
  },
  fotos_galletas: {
    id: "fotos_galletas",
    text: "Patito Milagro fotografió sus galletas desde ángulos creativos, creando un portafolio de arte comestible. Compartió las fotos en línea y muchos se inspiraron para crear sus propias galletas artísticas. 📸🍪",
    isEnding: true
  },
  exhibicion_galletas: {
    id: "exhibicion_galletas",
    text: "Organizó una pequeña exhibición de galletas artísticas en su cabañita. Los vecinos vinieron a admirar y probar. Al final, todos se comieron el arte felizmente. Fue la exhibición más deliciosa de todas. 🎪🍪",
    isEnding: true
  },
  canastas_galletas: {
    id: "canastas_galletas",
    text: "Patito Milagro preparó hermosas canastas llenas de galletas recién horneadas. El aroma era irresistible. Ahora tenía que decidir cómo compartir toda esta bondad...",
    choices: [
      { text: "🏘️ Llevarlas a los vecinos", nextId: "regalar_vecinos" },
      { text: "🎉 Hacer una fiesta del té", nextId: "fiesta_te" }
    ]
  },
  regalar_vecinos: {
    id: "regalar_vecinos",
    text: "A pesar de la lluvia, Patito Milagro visitó cada casa del vecindario entregando canastas de galletas. Las sonrisas que recibió valieron cada gota de lluvia. Alegró el día gris de muchos corazones. 🏘️💛",
    isEnding: true
  },
  fiesta_te: {
    id: "fiesta_te",
    text: "Patito Milagro organizó una fiesta del té dentro de su acogedora cabañita. Con galletas calientes, té aromático y la lluvia de fondo, fue la reunión perfecta. Los amigos charlaron y rieron por horas. 🎉☕",
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
      { text: "🏮 Hacer una fiesta de linternas", nextId: "linternas" },
      { text: "🌙 Paseo nocturno por el bosque", nextId: "paseo_nocturno" },
      { text: "🔥 Hacer una fogata mágica", nextId: "fogata" }
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
  },
  paseo_nocturno: {
    id: "paseo_nocturno",
    text: "Patito Milagro comenzó a caminar por el sendero del bosque iluminado por la luna. Todo se veía diferente y mágico de noche. Los árboles proyectaban sombras misteriosas pero hermosas...",
    choices: [
      { text: "🌳 Explorar el claro del bosque", nextId: "claro_bosque" },
      { text: "💫 Seguir las luciérnagas", nextId: "seguir_luciernagas" }
    ]
  },
  claro_bosque: {
    id: "claro_bosque",
    text: "En el claro del bosque, la luz de la luna creaba un círculo perfecto. Era como un escenario natural. Patito Milagro sintió la magia del lugar...",
    choices: [
      { text: "🎭 Hacer una presentación bajo la luna", nextId: "presentacion_luna" },
      { text: "🧘 Meditar en silencio", nextId: "meditar_luna" }
    ]
  },
  presentacion_luna: {
    id: "presentacion_luna",
    text: "Patito Milagro comenzó a actuar y cantar bajo la luz de la luna. Los animales nocturnos se reunieron para ver su presentación. Fue el teatro más íntimo y especial, con las estrellas como público. 🎭🌙",
    isEnding: true
  },
  meditar_luna: {
    id: "meditar_luna",
    text: "Sentado en el claro, Patito Milagro meditó bajo la luna llena. Sintió una paz profunda y una conexión con el universo. Los secretos de la noche susurraban en su corazón. Fue una experiencia transformadora. 🧘✨",
    isEnding: true
  },
  seguir_luciernagas: {
    id: "seguir_luciernagas",
    text: "Las luciérnagas formaron un camino brillante que Patito siguió con curiosidad. Lo llevaron a lugares del bosque que nunca había visto. Era como seguir estrellas terrestres...",
    choices: [
      { text: "🏡 Descubrir un jardín secreto", nextId: "jardin_secreto_noche" },
      { text: "🌊 Llegar a un estanque mágico", nextId: "estanque_magico" }
    ]
  },
  jardin_secreto_noche: {
    id: "jardin_secreto_noche",
    text: "Las luciérnagas revelaron un jardín secreto donde las flores brillaban en la oscuridad. Era un lugar que solo aparecía de noche. Patito Milagro pasó horas maravillado entre flores luminosas. 🌺💫",
    isEnding: true
  },
  estanque_magico: {
    id: "estanque_magico",
    text: "El estanque reflejaba las estrellas perfectamente, como si hubiera dos cielos. Patito Milagro nadó entre estrellas reflejadas, sintiendo que flotaba en el cosmos. Fue una experiencia celestial. 🌊⭐",
    isEnding: true
  },
  fogata: {
    id: "fogata",
    text: "Patito Milagro preparó una fogata perfecta. Las llamas bailaban alegremente iluminando la noche. El calor era reconfortante bajo las estrellas...",
    choices: [
      { text: "📖 Contar historias alrededor del fuego", nextId: "historias_fogata" },
      { text: "🎵 Cantar canciones nocturnas", nextId: "canciones_fogata" }
    ]
  },
  historias_fogata: {
    id: "historias_fogata",
    text: "Patito Milagro invitó a sus amigos a compartir historias junto al fuego. Cada uno contó cuentos de aventuras, misterios y magia. Las sombras de la fogata hacían las historias más emocionantes...",
    choices: [
      { text: "👻 Contar historias de misterio", nextId: "historias_misterio" },
      { text: "💛 Compartir historias de amistad", nextId: "historias_amistad" }
    ]
  },
  historias_misterio: {
    id: "historias_misterio",
    text: "Las historias de misterio mantuvieron a todos al borde de sus asientos. Pero siempre terminaban bien, con lecciones de valentía. La fogata crepitaba acompañando cada relato emocionante. 👻🔥",
    isEnding: true
  },
  historias_amistad: {
    id: "historias_amistad",
    text: "Cada historia de amistad tocaba el corazón de los presentes. Risas y algunas lágrimas de alegría fluyeron libremente. La fogata iluminaba sus rostros llenos de amor. Fue una noche de conexión profunda. 💛🔥",
    isEnding: true
  },
  canciones_fogata: {
    id: "canciones_fogata",
    text: "Las canciones resonaban en la noche mientras el fuego bailaba al ritmo. Patito Milagro dirigía el coro bajo las estrellas. Cada canción era más hermosa que la anterior...",
    choices: [
      { text: "🎼 Componer una canción nueva", nextId: "componer_cancion" },
      { text: "🎤 Hacer un concierto improvisado", nextId: "concierto_fogata" }
    ]
  },
  componer_cancion: {
    id: "componer_cancion",
    text: "Inspirado por la noche y la fogata, Patito Milagro compuso una canción nueva sobre la belleza de la oscuridad y la luz que llevamos dentro. Todos la cantaron juntos por primera vez. Se convirtió en un himno de esperanza. 🎼✨",
    isEnding: true
  },
  concierto_fogata: {
    id: "concierto_fogata",
    text: "El concierto improvisado atrajo a animales de todo el bosque. Todos se sentaron alrededor de la fogata disfrutando de la música. Fue el mejor concierto que el bosque había presenciado. La música unió a todos. 🎤🔥",
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
      { text: "💎 Explorar la cueva cristalina", nextId: "cueva" },
      { text: "🏰 Encontrar el castillo encantado", nextId: "castillo_encantado" },
      { text: "🌟 Atravesar el portal de luz", nextId: "portal_luz" }
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
  },
  castillo_encantado: {
    id: "castillo_encantado",
    text: "Patito Milagro llegó a un majestuoso castillo hecho de cristal y luz. Los muros brillaban con colores del arcoíris. Un guardián mágico apareció y le dio la bienvenida...",
    choices: [
      { text: "👑 Explorar el salón del trono", nextId: "salon_trono" },
      { text: "📚 Visitar la biblioteca mágica", nextId: "biblioteca_magica" }
    ]
  },
  salon_trono: {
    id: "salon_trono",
    text: "En el salón del trono, Patito Milagro encontró un trono especial que brillaba invitándolo a sentarse. Al hacerlo, visiones mágicas le mostraron el pasado y futuro del reino...",
    choices: [
      { text: "🔮 Ver el futuro del mundo", nextId: "ver_futuro" },
      { text: "📜 Aprender del pasado", nextId: "aprender_pasado" }
    ]
  },
  ver_futuro: {
    id: "ver_futuro",
    text: "Las visiones le mostraron un futuro brillante donde todos los seres vivían en armonía. Patito Milagro vio que sus acciones de bondad ayudarían a crear ese futuro. Se sintió inspirado a ser mejor cada día. 🔮🌟",
    isEnding: true
  },
  aprender_pasado: {
    id: "aprender_pasado",
    text: "El trono le enseñó sobre los héroes del pasado que habían construido el reino con amor y sacrificio. Patito Milagro aprendió lecciones valiosas de sabiduría antigua que llevaría en su corazón. 📜✨",
    isEnding: true
  },
  biblioteca_magica: {
    id: "biblioteca_magica",
    text: "La biblioteca contenía libros que escribían solos, contando historias que nunca terminaban. Cada libro era una aventura infinita. Patito Milagro eligió uno para leer...",
    choices: [
      { text: "📖 Leer el libro de los sueños", nextId: "libro_suenos" },
      { text: "✍️ Escribir en el libro eterno", nextId: "libro_eterno" }
    ]
  },
  libro_suenos: {
    id: "libro_suenos",
    text: "El libro de los sueños le mostró todos los sueños hermosos que los seres del mundo habían tenido. Patito Milagro viajó a través de paisajes oníricos increíbles. Aprendió que los sueños son semillas de realidad. 📖💫",
    isEnding: true
  },
  libro_eterno: {
    id: "libro_eterno",
    text: "Patito Milagro escribió su historia en el libro eterno, donde permanecería para siempre. Futuras generaciones leerían sobre sus aventuras y aprenderían de su bondad. Se convirtió en leyenda. ✍️📚",
    isEnding: true
  },
  portal_luz: {
    id: "portal_luz",
    text: "Patito Milagro cruzó el portal de luz y fue transportado a una dimensión donde todo era posible. Los colores no existían en su mundo, las formas desafiaban la lógica, pero todo era hermoso...",
    choices: [
      { text: "🌌 Explorar galaxias de color", nextId: "galaxias_color" },
      { text: "🎨 Crear tu propia realidad", nextId: "crear_realidad" }
    ]
  },
  galaxias_color: {
    id: "galaxias_color",
    text: "Patito Milagro voló a través de galaxias hechas de colores puros. Tocó nebulosas de emociones y nadó en ríos de melodías. Cada lugar era una experiencia sensorial única...",
    choices: [
      { text: "💫 Traer un color nuevo al mundo", nextId: "color_nuevo" },
      { text: "🎵 Capturar una melodía estelar", nextId: "melodia_estelar" }
    ]
  },
  color_nuevo: {
    id: "color_nuevo",
    text: "Patito Milagro encontró un color que no existía en su mundo y lo trajo consigo. Cuando regresó, ese nuevo color empezó a aparecer en las flores y mariposas. Había enriquecido su mundo con nueva belleza. 💫🎨",
    isEnding: true
  },
  melodia_estelar: {
    id: "melodia_estelar",
    text: "Capturó una melodía que solo existía entre las estrellas. La trajo a su mundo y la compartió. La canción tenía el poder de sanar corazones tristes y traer paz. Su regalo cambió muchas vidas. 🎵✨",
    isEnding: true
  },
  crear_realidad: {
    id: "crear_realidad",
    text: "En esta dimensión, Patito Milagro podía crear lo que imaginara. Usó este poder para diseñar un lugar perfecto...",
    choices: [
      { text: "🏡 Crear el hogar perfecto para todos", nextId: "hogar_perfecto" },
      { text: "🌈 Diseñar un parque de alegría infinita", nextId: "parque_alegria" }
    ]
  },
  hogar_perfecto: {
    id: "hogar_perfecto",
    text: "Patito Milagro creó un hogar donde cada ser podía encontrar amor, seguridad y felicidad. Era un lugar sin fin que se adaptaba a las necesidades de cada visitante. Su sueño de un refugio para todos se hizo realidad. 🏡💛",
    isEnding: true
  },
  parque_alegria: {
    id: "parque_alegria",
    text: "Diseñó un parque mágico donde la tristeza no existía, donde cada juego traía risas y cada rincón guardaba sorpresas felices. Todos los que entraban salían con corazones renovados. Su creación se convirtió en fuente de alegría eterna. 🌈🎡",
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
