import { useState } from "react";
import { DuckMenuButton } from "@/components/DuckMenuButton";
import { MusicPlayer } from "@/components/MusicPlayer";
import { SectionCard } from "@/components/SectionCard";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { 
  Camera, 
  Video, 
  Theater, 
  Heart, 
  Target, 
  Mail,
  Calendar,
  Star,
  Sparkles,
  ShoppingBag,
  Gamepad2
} from "lucide-react";
import { MemoramaGame } from "@/components/games/MemoramaGame";
import { GuessTheDuckGame } from "@/components/games/GuessTheDuckGame";
import { CountDucksGame } from "@/components/games/CountDucksGame";
import { AdventureGame } from "@/components/games/AdventureGame";
import patitoHero from "@/assets/patito-hero.jpg";
import forestBackground from "@/assets/forest-background.jpg";
import patito1 from "@/assets/patito-1.png";
import patito2 from "@/assets/patito-2.jpg";
import patito3 from "@/assets/patito-3.jpg";
import patito4 from "@/assets/patito-4.jpg";
import patito5 from "@/assets/patito-5.jpg";
import patito6 from "@/assets/patito-6.jpg";
import patito7 from "@/assets/patito-7.jpg";
import patito8 from "@/assets/patito-8.png";
import patito9 from "@/assets/patito-9.jpg";
import patitoNavidad1 from "@/assets/patito-navidad-1.jpg";
import patitoNavidad2 from "@/assets/patito-navidad-2.jpg";
import patitoNavidad3 from "@/assets/patito-navidad-3.jpg";
import patitoNavidad4 from "@/assets/patito-navidad-4.jpg";
import patitoNavidad5 from "@/assets/patito-navidad-5.jpg";
import patitoNavidad6 from "@/assets/patito-navidad-6.png";
import patitoNavidad7 from "@/assets/patito-navidad-7.jpg";
import patitoNavidad8 from "@/assets/patito-navidad-8.jpg";
import patitoNavidad9 from "@/assets/patito-navidad-9.jpg";
import patitoNavidad10 from "@/assets/patito-navidad-10.jpg";
import patitoNavidad11 from "@/assets/patito-navidad-11.jpg";
import patitoNavidad12 from "@/assets/patito-navidad-12.jpg";
import patitoNavidad13 from "@/assets/patito-navidad-13.jpg";
import patitoNavidad14 from "@/assets/patito-navidad-14.jpg";
import patitoNavidad15 from "@/assets/patito-navidad-15.png";
import patitoNavidad16 from "@/assets/patito-navidad-16.jpg";
import patitoNavidad17 from "@/assets/patito-navidad-17.jpg";
import patitoNavidad18 from "@/assets/patito-navidad-18.jpg";
import patitoNavidad19 from "@/assets/patito-navidad-19.png";
import patitoVideo1 from "@/assets/patito-video-1.mp4";
import patitoVideo2 from "@/assets/patito-video-2.mp4";
import patitoVideo3 from "@/assets/patito-video-3.mp4";
import patitoVideo4 from "@/assets/patito-video-4.mp4";
import patitoVideo5 from "@/assets/patito-video-5.mp4";
import patitoVideo6 from "@/assets/patito-video-6.mp4";
import patitoVideo7 from "@/assets/patito-video-7.mp4";
import patitoVideo8 from "@/assets/patito-video-8.mp4";
import patitoVideo9 from "@/assets/patito-video-9.mp4";
import patitoVideo10 from "@/assets/patito-video-10.mp4";
import patitoVideo11 from "@/assets/patito-video-11.mp4";
import patitoVideo12 from "@/assets/patito-video-12.mp4";
import patitoVideo13 from "@/assets/patito-video-13.mp4";
import patitoVideo14 from "@/assets/patito-video-14.mp4";
import patitoVideo15 from "@/assets/patito-video-15.mp4";
import patitoVideo16 from "@/assets/patito-video-16.mp4";
import patitoInicio from "@/assets/patito-inicio.jpg";
import patitoPaso2 from "@/assets/patito-paso-2.jpg";
import patitoPaso3 from "@/assets/patito-paso-3.jpg";
import patitoPaso4 from "@/assets/patito-paso-4.jpg";
import patitoPaso5 from "@/assets/patito-paso-5.jpg";
import patitoPaso6 from "@/assets/patito-paso-6.jpg";
import albergueFinal from "@/assets/albergue-final.jpg";
import donateImage from "@/assets/donate-image.jpg";
import cajaRegalo from "@/assets/caja-regalo.jpg";
import botonSeleccion from "@/assets/boton-seleccion.jpg";
import botonDorado from "@/assets/boton-dorado-nuevo-2.png";
import victoriaDorada from "@/assets/victoria-dorada.jpg";

const Index = () => {
  const [activeGame, setActiveGame] = useState<"memorama" | "guess" | "count" | "adventure">("memorama");
  const [showGames, setShowGames] = useState(false);
  const [showColoring, setShowColoring] = useState(false);
  const [duckProgress, setDuckProgress] = useState(0);
  const [activeStageLight, setActiveStageLight] = useState<number | null>(null);
  const [isGoldenLightActive, setIsGoldenLightActive] = useState(false);
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-accent via-background to-muted">
      <MusicPlayer />
      
      {/* Hero Section with Circular Navigation */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${forestBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll'
        }}
      >
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-accent/40 via-background/30 to-background/50 backdrop-blur-[2px]" />
        
        <div className="container mx-auto px-2 sm:px-4 py-6 sm:py-12 relative z-10">
          <div className="relative flex items-center justify-center min-h-[90vh] pt-4">
            
            {/* Title above the duck */}
            <div className="absolute -top-8 sm:-top-12 left-1/2 transform -translate-x-1/2 text-center z-40 w-full px-2">
              <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-titan text-yellow-400 drop-shadow-[0_0_30px_rgba(255,215,0,0.9)] [text-shadow:_2px_2px_0_#000,_-2px_-2px_0_#000,_2px_-2px_0_#000,_-2px_2px_0_#000] px-3 sm:px-6 py-2 sm:py-3 block">
                EL MUNDO DE PATITO
              </h1>
              <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-titan text-yellow-400 drop-shadow-[0_0_30px_rgba(255,215,0,0.9)] [text-shadow:_2px_2px_0_#000,_-2px_-2px_0_#000,_2px_-2px_0_#000,_-2px_2px_0_#000] px-3 sm:px-6 py-1 sm:py-2 block mt-0">
                MILAGRO
              </h2>
            </div>
            
            {/* Central Patito Logo - GRANDE CENTRADO */}
            <div className="relative z-10 flex flex-col items-center -mt-8 sm:-mt-16">
              <div className="animate-float">
                <img 
                  src={patitoHero} 
                  alt="Patito Milagro"
                  className="w-48 h-48 sm:w-56 sm:h-56 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-[0_30px_60px_-15px_rgba(250,204,21,0.9)] border-4 sm:border-8 border-yellow-400 bg-white/90"
                />
              </div>
            </div>
            
            {/* Subtitle in bottom left corner */}
            <div className="absolute bottom-[2%] sm:bottom-[0%] left-[2%] sm:left-[-0.5%] z-40 animate-float" style={{ animationDuration: '6s' }}>
              <p className="text-[0.65rem] sm:text-xs md:text-sm font-baloo font-bold text-yellow-400 px-2 sm:px-4 py-1 sm:py-2 inline-flex items-center gap-1 sm:gap-2 [text-shadow:_0_0_20px_rgba(253,224,71,1),_0_0_40px_rgba(234,179,8,0.8),_0_0_60px_rgba(234,179,8,0.6),_2px_2px_0_#000,_-2px_-2px_0_#000,_2px_-2px_0_#000,_-2px_2px_0_#000] drop-shadow-[0_0_30px_rgba(253,224,71,1)]">
                UN MUNDO DE FELICIDAD Y TERNURA 
                <Sparkles className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 inline-block text-orange-400 fill-orange-400 drop-shadow-[0_0_10px_rgba(251,146,60,1)]" />
                <span className="text-xs sm:text-sm md:text-base">🦆</span>
                <Heart className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 inline-block text-red-500 fill-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,1)]" />
              </p>
            </div>

            {/* Bubble Navigation Menu - Circular Layout Around Central Duck */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
              <div className="relative w-[100vmin] h-[100vmin] max-w-[850px] max-h-[850px] pointer-events-auto scale-75 sm:scale-90 md:scale-100">
                
                {/* Top Left - Fotos (con palomita) */}
                <div className="absolute top-[28%] left-[6%] transform -translate-x-1/2 -translate-y-1/2 animate-bounce" style={{ animationDelay: '0s' }}>
                  <div className="bg-yellow-100/90 rounded-full p-2 shadow-[0_8px_20px_-6px_hsl(199_89%_48%/0.5)] backdrop-blur-sm border-2 border-accent/30">
                    <DuckMenuButton 
                      icon={Camera} 
                      label="Fotos" 
                      onClick={() => scrollToSection("fotos")}
                    />
                  </div>
                </div>

                {/* Top Center Left - Nosotros */}
                <div className="absolute top-[8%] left-[16%] transform -translate-x-1/2 -translate-y-1/2 animate-float" style={{ animationDelay: '0.3s' }}>
                  <div className="bg-yellow-100/90 rounded-full p-2 shadow-[0_8px_20px_-6px_hsl(199_89%_48%/0.5)] backdrop-blur-sm border-2 border-accent/30">
                    <DuckMenuButton 
                      icon={Sparkles} 
                      label="Nosotros" 
                      onClick={() => scrollToSection("sobre-nosotros")}
                    />
                  </div>
                </div>

                {/* Top Right - Obra (con palomita) */}
                <div className="absolute top-[28%] right-[6%] transform translate-x-1/2 -translate-y-1/2 animate-bounce" style={{ animationDelay: '0.2s' }}>
                  <div className="bg-yellow-100/90 rounded-full p-2 shadow-[0_8px_20px_-6px_hsl(199_89%_48%/0.5)] backdrop-blur-sm border-2 border-accent/30">
                    <DuckMenuButton 
                      icon={Theater} 
                      label="Obra" 
                      onClick={() => scrollToSection("obra")}
                    />
                  </div>
                </div>

                {/* Top Center Right - Valores */}
                <div className="absolute top-[8%] right-[16%] transform translate-x-1/2 -translate-y-1/2 animate-float" style={{ animationDelay: '0.5s' }}>
                  <div className="bg-yellow-100/90 rounded-full p-2 shadow-[0_8px_20px_-6px_hsl(199_89%_48%/0.5)] backdrop-blur-sm border-2 border-primary/30">
                    <DuckMenuButton 
                      icon={Star} 
                      label="Valores" 
                      onClick={() => scrollToSection("valores")}
                    />
                  </div>
                </div>

                {/* Left - Contacto (con palomita) */}
                <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 animate-float" style={{ animationDelay: '0.4s' }}>
                  <div className="bg-yellow-100/90 rounded-full p-2 shadow-[0_8px_20px_-6px_hsl(199_89%_48%/0.5)] backdrop-blur-sm border-2 border-primary/30">
                    <DuckMenuButton 
                      icon={Mail} 
                      label="Contacto" 
                      onClick={() => scrollToSection("contacto")}
                    />
                  </div>
                </div>

                {/* Right - Funciones (con palomita) */}
                <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 animate-float" style={{ animationDelay: '0.6s' }}>
                  <div className="bg-yellow-100/90 rounded-full p-2 shadow-[0_8px_20px_-6px_hsl(199_89%_48%/0.5)] backdrop-blur-sm border-2 border-secondary/30">
                    <DuckMenuButton 
                      icon={Calendar} 
                      label="Funciones" 
                      onClick={() => scrollToSection("funciones")}
                    />
                  </div>
                </div>

                {/* Bottom Left - Misión */}
                <div className="absolute bottom-[14.6%] left-[14.6%] transform -translate-x-1/2 translate-y-1/2 animate-bounce" style={{ animationDelay: '0.8s' }}>
                  <div className="bg-yellow-100/90 rounded-full p-2 shadow-[0_8px_20px_-6px_hsl(199_89%_48%/0.5)] backdrop-blur-sm border-2 border-secondary/30">
                    <DuckMenuButton 
                      icon={Target} 
                      label="Misión" 
                      onClick={() => scrollToSection("mision")}
                    />
                  </div>
                </div>

                {/* Bottom Right - Tienda (con palomita) */}
                <div className="absolute bottom-[14.6%] right-[14.6%] transform translate-x-1/2 translate-y-1/2 animate-bounce" style={{ animationDelay: '1s' }}>
                  <div className="bg-yellow-100/90 rounded-full p-2 shadow-[0_8px_20px_-6px_hsl(199_89%_48%/0.5)] backdrop-blur-sm border-2 border-primary/30">
                    <DuckMenuButton 
                      icon={ShoppingBag} 
                      label="Tienda" 
                      onClick={() => scrollToSection("tienda")}
                    />
                  </div>
                </div>

                {/* Bottom Center Right - Donaciones */}
                <div className="absolute bottom-[5%] right-[28%] transform translate-x-1/2 translate-y-1/2 animate-float" style={{ animationDelay: '1.2s' }}>
                  <div className="bg-yellow-100/90 rounded-full p-2 shadow-[0_8px_20px_-6px_hsl(199_89%_48%/0.5)] backdrop-blur-sm border-2 border-accent/30">
                    <DuckMenuButton 
                      icon={Heart} 
                      label="Donaciones" 
                      onClick={() => scrollToSection("donaciones")}
                    />
                  </div>
                </div>

                {/* Bottom Center Left - Sorpresas */}
                <div className="absolute bottom-[5%] left-[28%] transform -translate-x-1/2 translate-y-1/2 animate-float" style={{ animationDelay: '1.4s' }}>
                  <div className="bg-yellow-100/90 rounded-full p-2 shadow-[0_8px_20px_-6px_hsl(199_89%_48%/0.5)] backdrop-blur-sm border-2 border-secondary/30">
                    <DuckMenuButton 
                      icon={Gamepad2} 
                      label="Sorpresas" 
                      onClick={() => scrollToSection("sorpresas")}
                    />
                  </div>
                </div>

                {/* Bottom Center Left - Videos */}
                <div className="absolute bottom-[5%] left-[42%] transform -translate-x-1/2 translate-y-1/2 animate-float" style={{ animationDelay: '1.4s' }}>
                  <div className="bg-yellow-100/90 rounded-full p-2 shadow-[0_8px_20px_-6px_hsl(199_89%_48%/0.5)] backdrop-blur-sm border-2 border-primary/30">
                    <DuckMenuButton 
                      icon={Video} 
                      label="Videos" 
                      onClick={() => scrollToSection("videos")}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float blur-xl" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/20 rounded-full animate-bounce blur-xl" />
        <div className="absolute top-1/2 right-20 w-24 h-24 bg-accent/20 rounded-full animate-float blur-xl" style={{ animationDelay: '1s' }} />
      </section>

      {/* Sections */}
      <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-12 md:py-20 space-y-12 sm:space-y-16 md:space-y-24">
        
        {/* Fotos Section */}
        <section id="fotos" className="scroll-mt-20">
          <SectionCard title="📸 Galería de Fotos" description="¡Mira todas las aventuras del Patito Milagro!">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
              {[patito1, patito2, patito3, patito4, patito5, patito6, patito7, patito8, patito9, patitoNavidad1, patitoNavidad2, patitoNavidad3, patitoNavidad4, patitoNavidad5, patitoNavidad6, patitoNavidad7, patitoNavidad8, patitoNavidad9, patitoNavidad10, patitoNavidad11, patitoNavidad12, patitoNavidad15, patitoNavidad16, patitoNavidad17, patitoNavidad18, patitoNavidad19, patitoNavidad13, patitoNavidad14].map((img, i) => (
                <div 
                  key={i}
                  className="aspect-square bg-muted rounded-3xl border-4 border-primary/20 overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_30px_-8px_hsl(199_89%_48%/0.4)] cursor-pointer"
                >
                  <img 
                    src={img} 
                    alt={`Patito Milagro ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </SectionCard>
        </section>

        {/* Videos Section */}
        <section id="videos" className="scroll-mt-20">
          <SectionCard title="🎬 Videos del Patito" description="¡Disfruta de los mejores momentos en video!">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              {[patitoVideo1, patitoVideo4, patitoVideo5, patitoVideo6, patitoVideo7, patitoVideo8, patitoVideo9, patitoVideo10, patitoVideo11, patitoVideo12, patitoVideo13, patitoVideo14, patitoVideo15, patitoVideo16].map((video, i) => (
                <div 
                  key={i}
                  className="aspect-video bg-muted rounded-3xl border-4 border-accent/30 overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_30px_-8px_hsl(199_89%_48%/0.4)]"
                >
                  <video 
                    src={video}
                    controls
                    className="w-full h-full object-cover"
                  >
                    Tu navegador no soporta el elemento de video.
                  </video>
                </div>
              ))}
            </div>
          </SectionCard>
        </section>

        {/* Obra de Teatro Section */}
        <section id="obra" className="scroll-mt-20">
          <SectionCard title="🎭 La Obra de Teatro" description="¡Una historia mágica que no te puedes perder!">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-primary/30">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-3 sm:mb-4">✨ Las Memorias de un Representante Médico ✨</h3>
                <p className="text-base sm:text-lg md:text-xl text-foreground leading-relaxed">
                  Se trata de un rinconcito donde Patito Milagro decidió emprender su viaje artístico para actuar en una obra de teatro donde Patito Milagro juega el papel de un patito que se recupera de una fuerte gripita y va su dueño Alets por él con la veterinaria que lo curó. Su dueño Alets va por él muy contento y feliz para volverlo a cuidar con muchísimo amor y cariño. Esta obra donde participa Patito Milagro se llama Las Memorias de un Representante Médico.
                </p>
                <p className="text-base sm:text-lg md:text-xl text-foreground leading-relaxed mt-3 sm:mt-4">
                  Se trata de una obra cómica, interactiva y musical que no olvidarás jamás, llena de sonrisas, regalos y rifas sorpresas. ¡Una experiencia maravillosa! 🌟
                </p>
              </div>
              <Button 
                size="lg" 
                onClick={() => scrollToSection('funciones')}
                className="w-full py-4 sm:py-6 md:py-8 text-lg sm:text-xl md:text-2xl font-bold bg-secondary hover:bg-secondary/90 rounded-2xl sm:rounded-3xl shadow-[0_8px_20px_-4px_hsl(33_100%_60%/0.4)] transform transition-all hover:scale-105"
              >
                ¡Conoce más sobre la obra! 🎪
              </Button>
            </div>
          </SectionCard>
        </section>

        {/* Funciones Section */}
        <section id="funciones" className="scroll-mt-20">
          <SectionCard title="📅 Próximas Funciones" description="¡No te pierdas ninguna presentación!">
            <div className="space-y-3 sm:space-y-4">
              {[
                { fecha: "Sábado 25 de Enero", hora: "4:00 PM", lugar: "Teatro Principal" },
                { fecha: "Domingo 26 de Enero", hora: "11:00 AM", lugar: "Teatro Principal" },
                { fecha: "Domingo 26 de Enero", hora: "4:00 PM", lugar: "Teatro Principal" },
              ].map((funcion, i) => (
                <div 
                  key={i}
                  className="bg-card p-3 sm:p-4 md:p-6 rounded-2xl sm:rounded-3xl border-2 sm:border-3 md:border-4 border-accent/30 transform transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_20px_-4px_hsl(199_89%_48%/0.4)]"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                    <div className="w-full sm:w-auto">
                      <p className="text-lg sm:text-xl md:text-2xl font-bold text-primary">{funcion.fecha}</p>
                      <p className="text-base sm:text-lg md:text-xl text-foreground">🕐 {funcion.hora}</p>
                      <p className="text-sm sm:text-base md:text-lg text-muted-foreground">📍 {funcion.lugar}</p>
                    </div>
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg w-full sm:w-auto">
                      Reservar 🎟️
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>
        </section>

        {/* Tienda Section */}
        <section id="tienda" className="scroll-mt-20">
          <SectionCard title="🛍️ Tienda del Patito Milagro" description="¡Llévate un pedacito de magia a casa!">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              <ProductCard 
                name="Playera del Patito"
                price="$299 MXN"
                emoji="👕"
                description="Playera de algodón suave con el adorable Patito Milagro"
              />
              <ProductCard 
                name="Peluche Patito"
                price="$499 MXN"
                emoji="🧸"
                description="Peluche súper suave y abrazable del Patito Milagro"
              />
              <ProductCard 
                name="Juguetes Patito"
                price="$199 MXN"
                emoji="🎪"
                description="Set de juguetes para divertirse con el Patito"
              />
              <ProductCard 
                name="Boletos Obra"
                price="$150 MXN"
                emoji="🎭"
                description="Boletos para la obra de teatro del Patito Milagro"
              />
              <ProductCard 
                name="Gorra del Patito"
                price="$249 MXN"
                emoji="🧢"
                description="Gorra ajustable con bordado del Patito Milagro"
              />
              <ProductCard 
                name="Mochila Patito"
                price="$399 MXN"
                emoji="🎒"
                description="Mochila escolar con diseño del Patito Milagro"
              />
              <ProductCard 
                name="Libro para Colorear"
                price="$99 MXN"
                emoji="📚"
                description="Libro con dibujos del Patito para colorear"
              />
              <ProductCard 
                name="Taza Mágica"
                price="$179 MXN"
                emoji="☕"
                description="Taza con diseño que cambia con el calor"
              />
            </div>
            
            <div className="mt-6 sm:mt-8 text-center">
              <Button 
                size="lg" 
                className="px-6 sm:px-8 md:px-12 py-4 sm:py-6 md:py-8 text-lg sm:text-xl md:text-2xl font-bold bg-primary hover:bg-primary/90 rounded-2xl sm:rounded-3xl shadow-[0_12px_30px_-8px_hsl(45_100%_51%/0.4)] transform transition-all hover:scale-105"
              >
                <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 mr-2 sm:mr-3" />
                Ver Todo el Catálogo
              </Button>
            </div>
          </SectionCard>
        </section>

        {/* Donaciones Section */}
        <section id="donaciones" className="scroll-mt-20">
          <SectionCard title="💛 Apoya al Patito Milagro" description="Tu ayuda hace la diferencia">
            <div className="space-y-6 sm:space-y-8">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground text-center leading-relaxed px-2 sm:px-4">
                Patito Milagro tiene un gran sueño en donde tú eres el protagonista principal, ya que a través de tu donativo, podrá cumplir que su gran sueño, se vuelva realidad, ya que Patito Milagro quiere conseguir un espacio, para construir un hermoso albergue que se llamará <strong className="text-yellow-400">EL MUNDO DE PATITO MILAGRO</strong>, donde construirá un hermoso albergue donde todos los patitos que no tienen un hogar digno o un lugar donde vivir, puedan vivir, de una manera feliz y maravillosa, para que el ser pato se convierta en una verdadera experiencia de amor y ternura para los patitos que decidan vivir aquí, es por ello que gracias a tu donativo, el gran sueño de Patito Milagro, se convertirá en un verdadero MILAGRO de amor, ternura y esperanza para los patitos, si te gustaría ayudar a que Patito Milagro llegue a su meta de cumplir su gran sueño, te compartimos su número de cuenta de Patito Milagro para que Patito Milagro pueda llegar a su meta lo antes posible, de cumplirse su sueño, te invitará a que asistas y cortes el listón de la apertura del albergue: <strong className="text-yellow-400">EL MUNDO DE PATITO MILAGRO</strong>, ¿te animas?, ¡mil gracias!! por tu DONATIVO. 🦆💫💛
              </p>
              
              {/* Contenedor principal con fondo de bosque */}
              <div className="relative p-3 sm:p-4 md:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-yellow-400/50 overflow-hidden">
                {/* Fondo con imagen */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-70"
                  style={{ backgroundImage: `url(${forestBackground})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/10 to-green-400/10" />
                
                <div className="relative space-y-4 sm:space-y-6">
                  {/* Título del progreso ARRIBA */}
                  <h3 className="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold text-center mb-1 sm:mb-2 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
                    <span className="text-lg sm:text-xl md:text-2xl">🏠</span>
                    <span className="text-yellow-300 [text-shadow:_2px_2px_0_#1e3a8a,_-2px_-2px_0_#1e3a8a,_2px_-2px_0_#1e3a8a,_-2px_2px_0_#1e3a8a,_1px_1px_0_#1e3a8a,_-1px_-1px_0_#1e3a8a,_1px_-1px_0_#1e3a8a,_-1px_1px_0_#1e3a8a] px-2">
                      Camino hacia EL MUNDO DE PATITO MILAGRO
                    </span>
                    <span className="text-lg sm:text-xl md:text-2xl">🏠</span>
                  </h3>
                  
                   {/* Área del camino con patito y albergue */}
                   <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 bg-yellow-100/50 dark:bg-yellow-900/20 rounded-xl sm:rounded-2xl border border-yellow-400/30 sm:border-2 overflow-x-auto overflow-y-hidden">
                     {/* Línea del camino - pasa por la mitad de las esferas */}
                     <div className="absolute top-[60%] left-4 right-4 h-1 bg-yellow-400/50 transform -translate-y-1/2" />
                     
                       {/* INICIO - Patito en punto de partida */}
                       <div className="absolute left-[2%] top-[56%] transform -translate-y-1/2">
                       <div className="flex flex-col items-center gap-1">
                          <img 
                            src={patitoInicio} 
                            alt="Patito Milagro - Inicio" 
                            className="w-24 h-24 object-cover rounded-full border-4 border-yellow-400 shadow-lg animate-float"
                            style={{ animationDelay: '0s', animationDuration: '3s' }}
                          />
                          <span className="text-xs font-bold text-yellow-600 dark:text-yellow-400">
                            INICIO
                          </span>
                        </div>
                      </div>
                    
                       {/* Punto 1 - Primera donación */}
                       <div className="absolute left-[16%] top-1/2 transform -translate-y-1/2">
                       <div className="flex flex-col items-center gap-1">
                         {/* Texto DONACION arriba */}
                         <span className="text-xs font-bold text-yellow-600 dark:text-yellow-400 tracking-wide">
                           DONACIÓN
                         </span>
                         {/* Imagen DONATE 1 */}
                         <div
                           onClick={() => setDuckProgress(1)}
                           className={`relative cursor-pointer transition-all hover:scale-105 ${
                             duckProgress >= 1 ? 'opacity-70' : 'opacity-100'
                           }`}
                         >
                           <img 
                             src={donateImage} 
                             alt="Donate 1"
                             className="w-10 h-auto rounded-lg shadow-lg border-2 border-yellow-400"
                           />
                           {duckProgress >= 1 && (
                             <div className="absolute inset-0 bg-green-500/30 rounded-lg flex items-center justify-center">
                               <span className="text-xl">✅</span>
                             </div>
                           )}
                         </div>
                         <div className="relative">
                           {/* Green phosphorescent glow when active */}
                           {activeStageLight === 1 && (
                             <>
                               <div className="absolute inset-0 rounded-full bg-[rgb(102,255,102)] blur-3xl opacity-70 animate-pulse" style={{ animationDuration: '2s' }} />
                               <div className="absolute inset-0 rounded-full bg-[rgb(139,195,74)] blur-2xl opacity-50 animate-pulse" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
                             </>
                           )}
                            <img 
                              src={patitoPaso2} 
                              alt="Patito Milagro - Paso 1" 
                              className={`relative w-24 h-24 object-cover rounded-full border-4 shadow-lg transition-all duration-300 animate-float ${
                                activeStageLight === 1 
                                  ? 'border-[rgb(106,176,76)] shadow-[0_0_40px_10px_rgba(106,176,76,0.8)]' 
                                  : 'border-yellow-400'
                              }`}
                              style={{ animationDelay: '0.5s', animationDuration: '3.2s' }}
                            />
                         </div>
                         <span className="text-xs font-bold text-yellow-600 dark:text-yellow-400">
                           ETAPA 1
                         </span>
                         {/* Green Light Button */}
                         <button
                           onClick={() => setActiveStageLight(activeStageLight === 1 ? null : 1)}
                           className={`relative mt-1 transition-all duration-300 transform hover:scale-110 ${
                             activeStageLight === 1 ? 'opacity-100' : 'opacity-70 hover:opacity-90'
                           }`}
                         >
                           <img 
                             src={botonSeleccion} 
                             alt="Botón de selección" 
                             className="w-8 h-8 object-contain"
                           />
                         </button>
                       </div>
                     </div>
                    
                      {/* Punto 2 - Segunda donación */}
                      <div className="absolute left-[30%] top-1/2 transform -translate-y-1/2">
                       <div className="flex flex-col items-center gap-1">
                         {/* Texto DONACION arriba */}
                         <span className="text-xs font-bold text-yellow-600 dark:text-yellow-400 tracking-wide">
                           DONACIÓN
                         </span>
                         {/* Imagen DONATE 2 */}
                         <div
                           onClick={() => setDuckProgress(2)}
                           className={`relative cursor-pointer transition-all hover:scale-105 ${
                             duckProgress >= 2 ? 'opacity-70' : 'opacity-100'
                           }`}
                         >
                           <img 
                             src={donateImage} 
                             alt="Donate 2"
                             className="w-10 h-auto rounded-lg shadow-lg border-2 border-yellow-400"
                           />
                           {duckProgress >= 2 && (
                             <div className="absolute inset-0 bg-green-500/30 rounded-lg flex items-center justify-center">
                               <span className="text-xl">✅</span>
                             </div>
                           )}
                         </div>
                         <div className="relative">
                           {activeStageLight === 2 && (
                             <>
                               <div className="absolute inset-0 rounded-full bg-[rgb(102,255,102)] blur-3xl opacity-70 animate-pulse" style={{ animationDuration: '2s' }} />
                               <div className="absolute inset-0 rounded-full bg-[rgb(139,195,74)] blur-2xl opacity-50 animate-pulse" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
                             </>
                           )}
                            <img 
                              src={patitoPaso4} 
                              alt="Patito Milagro - Paso 2" 
                              className={`relative w-24 h-24 object-cover rounded-full border-4 shadow-lg transition-all duration-300 animate-float ${
                                activeStageLight === 2 
                                  ? 'border-[rgb(106,176,76)] shadow-[0_0_40px_10px_rgba(106,176,76,0.8)]' 
                                  : 'border-yellow-400'
                              }`}
                              style={{ animationDelay: '1s', animationDuration: '3.4s' }}
                            />
                         </div>
                         <span className="text-xs font-bold text-yellow-600 dark:text-yellow-400">
                           ETAPA 2
                         </span>
                         <button
                           onClick={() => setActiveStageLight(activeStageLight === 2 ? null : 2)}
                           className={`relative mt-1 transition-all duration-300 transform hover:scale-110 ${
                             activeStageLight === 2 ? 'opacity-100' : 'opacity-70 hover:opacity-90'
                           }`}
                         >
                           <img 
                             src={botonSeleccion} 
                             alt="Botón de selección" 
                             className="w-8 h-8 object-contain"
                           />
                         </button>
                       </div>
                     </div>
                    
                      {/* Punto 3 - Tercera donación */}
                      <div className="absolute left-[44%] top-1/2 transform -translate-y-1/2">
                       <div className="flex flex-col items-center gap-1">
                         {/* Texto DONACION arriba */}
                         <span className="text-xs font-bold text-yellow-600 dark:text-yellow-400 tracking-wide">
                           DONACIÓN
                         </span>
                         {/* Imagen DONATE 3 */}
                         <div
                           onClick={() => setDuckProgress(3)}
                           className={`relative cursor-pointer transition-all hover:scale-105 ${
                             duckProgress >= 3 ? 'opacity-70' : 'opacity-100'
                           }`}
                         >
                           <img 
                             src={donateImage} 
                             alt="Donate 3"
                             className="w-10 h-auto rounded-lg shadow-lg border-2 border-yellow-400"
                           />
                           {duckProgress >= 3 && (
                             <div className="absolute inset-0 bg-green-500/30 rounded-lg flex items-center justify-center">
                               <span className="text-xl">✅</span>
                             </div>
                           )}
                         </div>
                         <div className="relative">
                           {activeStageLight === 3 && (
                             <>
                               <div className="absolute inset-0 rounded-full bg-[rgb(102,255,102)] blur-3xl opacity-70 animate-pulse" style={{ animationDuration: '2s' }} />
                               <div className="absolute inset-0 rounded-full bg-[rgb(139,195,74)] blur-2xl opacity-50 animate-pulse" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
                             </>
                           )}
                            <img 
                              src={patitoPaso3} 
                              alt="Patito Milagro - Paso 3" 
                              className={`relative w-24 h-24 object-cover rounded-full border-4 shadow-lg transition-all duration-300 animate-float ${
                                activeStageLight === 3 
                                  ? 'border-[rgb(106,176,76)] shadow-[0_0_40px_10px_rgba(106,176,76,0.8)]' 
                                  : 'border-yellow-400'
                              }`}
                              style={{ animationDelay: '1.5s', animationDuration: '3.6s' }}
                            />
                         </div>
                         <span className="text-xs font-bold text-yellow-600 dark:text-yellow-400">
                           ETAPA 3
                         </span>
                         <button
                           onClick={() => setActiveStageLight(activeStageLight === 3 ? null : 3)}
                           className={`relative mt-1 transition-all duration-300 transform hover:scale-110 ${
                             activeStageLight === 3 ? 'opacity-100' : 'opacity-70 hover:opacity-90'
                           }`}
                         >
                           <img 
                             src={botonSeleccion} 
                             alt="Botón de selección" 
                             className="w-8 h-8 object-contain"
                           />
                         </button>
                       </div>
                     </div>
                    
                      {/* Punto 4 - Cuarta donación */}
                      <div className="absolute left-[58%] top-1/2 transform -translate-y-1/2">
                       <div className="flex flex-col items-center gap-1">
                         {/* Texto DONACION arriba */}
                         <span className="text-xs font-bold text-yellow-600 dark:text-yellow-400 tracking-wide">
                           DONACIÓN
                         </span>
                         {/* Imagen DONATE 4 */}
                         <div
                           onClick={() => setDuckProgress(4)}
                           className={`relative cursor-pointer transition-all hover:scale-105 ${
                             duckProgress >= 4 ? 'opacity-70' : 'opacity-100'
                           }`}
                         >
                           <img 
                             src={donateImage} 
                             alt="Donate 4"
                             className="w-10 h-auto rounded-lg shadow-lg border-2 border-yellow-400"
                           />
                           {duckProgress >= 4 && (
                             <div className="absolute inset-0 bg-green-500/30 rounded-lg flex items-center justify-center">
                               <span className="text-xl">✅</span>
                             </div>
                           )}
                         </div>
                         <div className="relative">
                           {activeStageLight === 4 && (
                             <>
                               <div className="absolute inset-0 rounded-full bg-[rgb(102,255,102)] blur-3xl opacity-70 animate-pulse" style={{ animationDuration: '2s' }} />
                               <div className="absolute inset-0 rounded-full bg-[rgb(139,195,74)] blur-2xl opacity-50 animate-pulse" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
                             </>
                           )}
                            <img 
                              src={patitoPaso5} 
                              alt="Patito Milagro - Paso 4" 
                              className={`relative w-24 h-24 object-cover rounded-full border-4 shadow-lg transition-all duration-300 animate-float ${
                                activeStageLight === 4 
                                  ? 'border-[rgb(106,176,76)] shadow-[0_0_40px_10px_rgba(106,176,76,0.8)]' 
                                  : 'border-yellow-400'
                              }`}
                              style={{ animationDelay: '2s', animationDuration: '3.8s' }}
                            />
                         </div>
                         <span className="text-xs font-bold text-yellow-600 dark:text-yellow-400">
                           ETAPA 4
                         </span>
                         <button
                           onClick={() => setActiveStageLight(activeStageLight === 4 ? null : 4)}
                           className={`relative mt-1 transition-all duration-300 transform hover:scale-110 ${
                             activeStageLight === 4 ? 'opacity-100' : 'opacity-70 hover:opacity-90'
                           }`}
                         >
                           <img 
                             src={botonSeleccion} 
                             alt="Botón de selección" 
                             className="w-8 h-8 object-contain"
                           />
                         </button>
                       </div>
                     </div>
                    
                      {/* Punto 5 - Quinta donación */}
                      <div className="absolute left-[72%] top-1/2 transform -translate-y-1/2">
                       <div className="flex flex-col items-center gap-1">
                         {/* Texto DONACION arriba */}
                         <span className="text-xs font-bold text-yellow-600 dark:text-yellow-400 tracking-wide">
                           DONACIÓN
                         </span>
                         {/* Imagen DONATE 5 */}
                         <div
                           onClick={() => setDuckProgress(5)}
                           className={`relative cursor-pointer transition-all hover:scale-105 ${
                             duckProgress >= 5 ? 'opacity-70' : 'opacity-100'
                           }`}
                         >
                           <img 
                             src={donateImage} 
                             alt="Donate 5"
                             className="w-10 h-auto rounded-lg shadow-lg border-2 border-yellow-400"
                           />
                           {duckProgress >= 5 && (
                             <div className="absolute inset-0 bg-green-500/30 rounded-lg flex items-center justify-center">
                               <span className="text-xl">✅</span>
                             </div>
                           )}
                         </div>
                         <div className="relative">
                           {activeStageLight === 5 && (
                             <>
                               <div className="absolute inset-0 rounded-full bg-[rgb(102,255,102)] blur-3xl opacity-70 animate-pulse" style={{ animationDuration: '2s' }} />
                               <div className="absolute inset-0 rounded-full bg-[rgb(139,195,74)] blur-2xl opacity-50 animate-pulse" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
                             </>
                           )}
                            <img 
                              src={patitoPaso6} 
                              alt="Patito Milagro - Paso 5" 
                              className={`relative w-24 h-24 object-cover rounded-full border-4 shadow-lg transition-all duration-300 animate-float ${
                                activeStageLight === 5 
                                  ? 'border-[rgb(106,176,76)] shadow-[0_0_40px_10px_rgba(106,176,76,0.8)]' 
                                  : 'border-yellow-400'
                              }`}
                              style={{ animationDelay: '2.5s', animationDuration: '4s' }}
                            />
                         </div>
                         <span className="text-xs font-bold text-yellow-600 dark:text-yellow-400">
                           ETAPA 5
                         </span>
                         <button
                           onClick={() => setActiveStageLight(activeStageLight === 5 ? null : 5)}
                           className={`relative mt-1 transition-all duration-300 transform hover:scale-110 ${
                             activeStageLight === 5 ? 'opacity-100' : 'opacity-70 hover:opacity-90'
                           }`}
                         >
                           <img 
                             src={botonSeleccion} 
                             alt="Botón de selección" 
                             className="w-8 h-8 object-contain"
                           />
                         </button>
                       </div>
                     </div>
                    
                     {/* Albergue (META) */}
                       <div className="absolute left-[86%] top-1/2 transform -translate-y-1/2">
                        <div className="flex flex-col items-center gap-1">
                           <img 
                             src={albergueFinal} 
                             alt="Albergue Patito Milagro" 
                             className={`w-24 h-24 object-cover rounded-xl border-4 border-yellow-400 shadow-2xl transition-all ${duckProgress === 5 ? 'animate-bounce' : 'animate-float'}`}
                             style={{ animationDelay: '0.3s', animationDuration: '3.5s' }}
                           />
                           <span className="-mt-1 text-xs font-bold text-yellow-600 dark:text-yellow-400">
                             SUEÑO CUMPLIDO
                           </span>
                          {duckProgress === 5 && (
                            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                              <span className="text-xl animate-bounce">🎉 ¡META! 🎉</span>
                            </div>
                          )}
                          {/* Golden Button */}
                          <button
                            onClick={() => setIsGoldenLightActive(!isGoldenLightActive)}
                            className={`relative mt-1 transition-all duration-300 transform hover:scale-110 ${
                              isGoldenLightActive ? 'opacity-100' : 'opacity-70 hover:opacity-90'
                            }`}
                          >
                            {isGoldenLightActive && (
                              <>
                                {/* Golden glow effect */}
                                <div className="absolute inset-0 rounded-full bg-yellow-400 blur-xl opacity-70 animate-pulse" style={{ animationDuration: '1.5s' }} />
                                <div className="absolute inset-0 rounded-full bg-amber-500 blur-lg opacity-50 animate-pulse" style={{ animationDuration: '2s', animationDelay: '0.3s' }} />
                                {/* Sparkles */}
                                <div className="absolute -top-2 -left-2 text-yellow-300 animate-ping" style={{ animationDuration: '1s' }}>✨</div>
                                <div className="absolute -top-2 -right-2 text-amber-400 animate-ping" style={{ animationDuration: '1.2s', animationDelay: '0.2s' }}>⭐</div>
                                <div className="absolute -bottom-2 -left-2 text-yellow-400 animate-ping" style={{ animationDuration: '1.4s', animationDelay: '0.4s' }}>✨</div>
                                <div className="absolute -bottom-2 -right-2 text-amber-300 animate-ping" style={{ animationDuration: '1.6s', animationDelay: '0.6s' }}>⭐</div>
                              </>
                            )}
                            <img 
                              src={victoriaDorada} 
                              alt="Victoria dorada" 
                              className="relative w-10 h-10 object-contain"
                            />
                          </button>
                        </div>
                      </div>
                  </div>
                  
                   {/* Contador de donativos */}
                  <div className="text-center">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 bg-gradient-to-r from-green-700/95 via-yellow-500/95 to-green-700/95 px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl border border-yellow-400 sm:border-2 shadow-2xl">
                      <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-300 animate-pulse" />
                      <p className="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold bg-gradient-to-r from-blue-800 via-blue-900 to-blue-800 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(30,64,175,1)] text-center">
                        DONATIVOS RECIBIDOS 
                      </p>
                      <img 
                        src={cajaRegalo} 
                        alt="Caja de Regalo" 
                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain animate-bounce mix-blend-multiply brightness-110 contrast-125 saturate-150"
                      />
                      <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-300 animate-pulse" />
                    </div>
                  </div>
                  
                  {duckProgress === 5 && (
                    <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 p-6 rounded-2xl text-center animate-pulse">
                      <p className="text-xl font-bold text-white drop-shadow-lg">
                        🎊 ¡FELICIDADES! ¡Patito Milagro llegó a su META! 🎊
                      </p>
                      <p className="text-lg text-white mt-2">
                        ¡Estás invitado a cortar el listón de inauguración! 🎀
                      </p>
                    </div>
                  )}
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="w-full py-4 sm:py-6 md:py-8 text-lg sm:text-xl md:text-2xl font-bold bg-secondary hover:bg-secondary/90 rounded-2xl sm:rounded-3xl shadow-[0_12px_30px_-8px_hsl(33_100%_60%/0.4)] transform transition-all hover:scale-105"
              >
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 mr-2 sm:mr-3" />
                Donar Ahora
              </Button>
            </div>
          </SectionCard>
        </section>

        {/* Sobre Nosotros Section */}
        <section id="sobre-nosotros" className="scroll-mt-20">
          <SectionCard title="✨ Sobre Patito Milagro" description="Más que una marca, un movimiento de esperanza">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-sm sm:text-base md:text-lg text-foreground leading-relaxed">
                Patito Milagro es un proyecto que combina creatividad, arte y compromiso social con un objetivo noble: 
                generar conciencia y esperanza a través de la ternura. Nuestra empresa nace del deseo de unir el mundo 
                de los productos con causa —como peluches y playeras— con el poder transformador del arte escénico, 
                mediante una obra de teatro protagonizada por nuestro entrañable personaje, el patito Milagro.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-foreground leading-relaxed">
                Más allá de ofrecer artículos de calidad y experiencias artísticas, buscamos inspirar valores de 
                empatía, respeto y amor hacia los animales. Parte de los recursos obtenidos se destinan a una causa 
                fundamental: la construcción de un albergue para patitos sin hogar, un espacio donde puedan recibir 
                cuidado, refugio y la oportunidad de una nueva vida.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-foreground leading-relaxed font-semibold">
                Patito Milagro es más que una marca; es un movimiento que invita a creer que los milagros pueden 
                surgir cuando las personas se unen con un propósito común: ayudar, crear y compartir esperanza.
              </p>
            </div>
          </SectionCard>
        </section>

        {/* Misión y Visión Section */}
        <section id="mision" className="scroll-mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <SectionCard title="🎯 Nuestra Misión">
              <p className="text-sm sm:text-base md:text-lg text-foreground leading-relaxed">
                La misión de Patito Milagro es demostrar que los milagros existen cuando se unen la creatividad 
                y el respeto por la naturaleza y los animales. A través de nuestros productos y de la magia del 
                teatro, trabajamos para transformar cada sonrisa en una acción solidaria que contribuya a la 
                construcción de un hogar digno para los patitos que más lo necesitan.
              </p>
            </SectionCard>
            
            <SectionCard title="🌟 Nuestra Visión">
              <p className="text-sm sm:text-base md:text-lg text-foreground leading-relaxed">
                La visión de Patito Milagro es que cada persona que conozca a nuestro patito —ya sea en un 
                escenario, en una tienda o en un abrazo de peluche— se sienta parte de un milagro colectivo: 
                un mundo donde todos los patitos puedan vivir rodeados de amor, cuidado y esperanza.
              </p>
            </SectionCard>
          </div>
        </section>

        {/* Valores Section */}
        <section id="valores" className="scroll-mt-20">
          <SectionCard title="💎 Nuestros Valores" description="Los principios que nos guían">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-3 sm:p-4 md:p-6 rounded-2xl sm:rounded-3xl border border-primary/30 sm:border-2 transform transition-all hover:scale-105">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-2 sm:mb-3">❤️ Amor</h3>
                <p className="text-foreground leading-relaxed text-sm sm:text-base">
                  El motor que impulsa cada acción y cada creación en Patito Milagro. Creemos en el amor como 
                  la fuerza capaz de generar cambios reales.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-secondary/20 to-secondary/5 p-3 sm:p-4 md:p-6 rounded-2xl sm:rounded-3xl border border-secondary/30 sm:border-2 transform transition-all hover:scale-105">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-secondary mb-2 sm:mb-3">🤝 Empatía</h3>
                <p className="text-foreground leading-relaxed text-sm sm:text-base">
                  Nos ponemos en el lugar de los demás —humanos y animales— para comprender sus necesidades 
                  y actuar con sensibilidad.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-accent/20 to-accent/5 p-3 sm:p-4 md:p-6 rounded-2xl sm:rounded-3xl border border-accent/30 sm:border-2 transform transition-all hover:scale-105">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-accent mb-2 sm:mb-3">🎨 Creatividad</h3>
                <p className="text-foreground leading-relaxed text-sm sm:text-base">
                  Fomentamos la imaginación como herramienta para transmitir mensajes positivos y construir 
                  soluciones que inspiren.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-3 sm:p-4 md:p-6 rounded-2xl sm:rounded-3xl border border-primary/30 sm:border-2 transform transition-all hover:scale-105">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-2 sm:mb-3">🤲 Solidaridad</h3>
                <p className="text-foreground leading-relaxed text-sm sm:text-base">
                  Cada producto, cada obra y cada gesto están pensados para ayudar y generar un impacto 
                  positivo en nuestra comunidad.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-secondary/20 to-secondary/5 p-3 sm:p-4 md:p-6 rounded-2xl sm:rounded-3xl border border-secondary/30 sm:border-2 transform transition-all hover:scale-105">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-secondary mb-2 sm:mb-3">🌿 Respeto por la vida</h3>
                <p className="text-foreground leading-relaxed text-sm sm:text-base">
                  Promovemos el cuidado y la protección de todos los seres vivos, fomentando una convivencia 
                  responsable con la naturaleza.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-accent/20 to-accent/5 p-3 sm:p-4 md:p-6 rounded-2xl sm:rounded-3xl border border-accent/30 sm:border-2 transform transition-all hover:scale-105">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-accent mb-2 sm:mb-3">✨ Esperanza</h3>
                <p className="text-foreground leading-relaxed text-sm sm:text-base">
                  Creemos que cada pequeño acto de bondad puede convertirse en un milagro capaz de transformar 
                  el mundo.
                </p>
              </div>
            </div>
          </SectionCard>
        </section>

        {/* Contacto Section */}
        <section id="contacto" className="scroll-mt-20">
          <SectionCard title="📧 Contáctanos" description="¡Nos encantaría saber de ti!">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-muted p-3 sm:p-4 md:p-6 rounded-2xl sm:rounded-3xl border-2 sm:border-3 md:border-4 border-primary/20">
                  <h4 className="text-base sm:text-lg md:text-xl font-bold text-primary mb-2">📱 Teléfono</h4>
                  <p className="text-sm sm:text-base md:text-lg text-foreground">5545211175</p>
                </div>
                <div className="bg-muted p-3 sm:p-4 md:p-6 rounded-2xl sm:rounded-3xl border-2 sm:border-3 md:border-4 border-accent/20">
                  <h4 className="text-base sm:text-lg md:text-xl font-bold text-accent mb-2">✉️ Email</h4>
                  <p className="text-sm sm:text-base md:text-lg text-foreground break-all">magia@patitomilagro.com.mx</p>
                </div>
              </div>
              <Button 
                size="lg" 
                className="w-full py-4 sm:py-6 md:py-8 text-lg sm:text-xl md:text-2xl font-bold bg-accent hover:bg-accent/90 rounded-2xl sm:rounded-3xl shadow-[0_8px_20px_-4px_hsl(199_89%_48%/0.4)] transform transition-all hover:scale-105"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 mr-2 sm:mr-3" />
                Enviar Mensaje
              </Button>
            </div>
          </SectionCard>
        </section>

        {/* Sorpresas Section */}
        <section id="sorpresas" className="scroll-mt-20">
          <SectionCard title="🎁 Zona de Sorpresas" description="¡Diversión extra para ti!">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              <div 
                className="bg-gradient-to-br from-primary/30 to-secondary/30 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border-2 sm:border-3 md:border-4 border-primary/20 text-center space-y-3 sm:space-y-4 transform transition-all hover:scale-105 cursor-pointer"
                onClick={() => {
                  setShowColoring(!showColoring);
                  setShowGames(false);
                }}
              >
                <div className="text-4xl sm:text-5xl md:text-6xl animate-bounce">🎨</div>
                <h4 className="text-base sm:text-lg md:text-xl font-bold text-primary">Dibujos para Colorear</h4>
              </div>
              <div className="bg-gradient-to-br from-accent/30 to-primary/30 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border-2 sm:border-3 md:border-4 border-accent/20 text-center space-y-3 sm:space-y-4 transform transition-all hover:scale-105 cursor-pointer">
                <div className="text-4xl sm:text-5xl md:text-6xl animate-wiggle">🎵</div>
                <h4 className="text-base sm:text-lg md:text-xl font-bold text-accent">Canciones</h4>
              </div>
              <div 
                className="bg-gradient-to-br from-secondary/30 to-accent/30 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border-2 sm:border-3 md:border-4 border-secondary/20 text-center space-y-3 sm:space-y-4 transform transition-all hover:scale-105 cursor-pointer"
                onClick={() => {
                  setShowGames(!showGames);
                  setShowColoring(false);
                }}
              >
                <div className="text-4xl sm:text-5xl md:text-6xl animate-sparkle">🎮</div>
                <h4 className="text-base sm:text-lg md:text-xl font-bold text-secondary">Juegos Interactivos</h4>
              </div>
            </div>

            {/* Dibujos para Colorear desplegables */}
            {showColoring && (
              <div className="mt-6 sm:mt-8 animate-fade-in">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-3 sm:p-4 md:p-6 rounded-2xl sm:rounded-3xl border-2 sm:border-3 md:border-4 border-primary/30">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 sm:mb-6 text-primary">🎨 Dibujos para Colorear</h3>
                  <p className="text-center text-sm sm:text-base md:text-lg text-foreground mb-4 sm:mb-6">
                    ¡Descarga estas imágenes de Patito Milagro y coloréalas como más te guste!
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
                    {[
                      { img: patito1, name: "Patito 1" },
                      { img: patito2, name: "Patito 2" },
                      { img: patito3, name: "Patito 3" },
                      { img: patito4, name: "Patito 4" },
                      { img: patito5, name: "Patito 5" }
                    ].map((duck, index) => (
                      <div 
                        key={index}
                        className="group relative bg-white p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl shadow-lg border-2 sm:border-3 md:border-4 border-primary/30 transform transition-all hover:scale-105 hover:shadow-2xl"
                      >
                        <img
                          src={duck.img}
                          alt={duck.name}
                          className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-lg filter grayscale contrast-125 brightness-110"
                        />
                        <p className="text-center mt-2 sm:mt-3 font-bold text-primary text-xs sm:text-sm md:text-base">{duck.name}</p>
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl sm:rounded-2xl">
                          <p className="text-white font-bold text-xs sm:text-sm px-2 text-center">Click derecho → Guardar imagen</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Juegos desplegables */}
            {showGames && (
              <div className="mt-8 animate-fade-in">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-6 rounded-3xl border-4 border-primary/30">
                  <h3 className="text-3xl font-bold text-center mb-6 text-primary">🎮 Juegos Interactivos</h3>
                  <div className="space-y-6">
                    <div className="flex gap-4 justify-center flex-wrap">
                      <Button
                        onClick={() => setActiveGame("memorama")}
                        variant={activeGame === "memorama" ? "default" : "outline"}
                        size="lg"
                        className="px-8"
                      >
                        🧠 Memorama
                      </Button>
                      <Button
                        onClick={() => setActiveGame("guess")}
                        variant={activeGame === "guess" ? "default" : "outline"}
                        size="lg"
                        className="px-8"
                      >
                        🎮 Adivina el Patito
                      </Button>
                      <Button
                        onClick={() => setActiveGame("count")}
                        variant={activeGame === "count" ? "default" : "outline"}
                        size="lg"
                        className="px-8"
                      >
                        🔢 Cuenta Patitos
                      </Button>
                      <Button
                        onClick={() => setActiveGame("adventure")}
                        variant={activeGame === "adventure" ? "default" : "outline"}
                        size="lg"
                        className="px-8"
                      >
                        🗺️ Elige tu Aventura
                      </Button>
                    </div>

                    <div className="mt-8">
                      {activeGame === "memorama" && <MemoramaGame />}
                      {activeGame === "guess" && <GuessTheDuckGame />}
                      {activeGame === "count" && <CountDucksGame />}
                      {activeGame === "adventure" && <AdventureGame />}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </SectionCard>
        </section>


      </div>

      {/* Footer */}
      <footer className="bg-primary/10 py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3">
              <Star className="w-8 h-8 text-primary animate-sparkle" />
              <h3 className="text-3xl font-bold text-primary">Patito Milagro</h3>
              <Star className="w-8 h-8 text-primary animate-sparkle" />
            </div>
            <p className="text-xl text-foreground font-bold">
              Un mundo de felicidad y ternura 💛✨🦆
            </p>
            <p className="text-muted-foreground">
              © 2025 Patito Milagro. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
