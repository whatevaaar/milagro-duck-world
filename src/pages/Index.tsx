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
import patitoVideo1 from "@/assets/patito-video-1.mp4";
import patitoVideo2 from "@/assets/patito-video-2.mp4";
import patitoVideo3 from "@/assets/patito-video-3.mp4";
import patitoVideo4 from "@/assets/patito-video-4.mp4";
import patitoVideo5 from "@/assets/patito-video-5.mp4";

const Index = () => {
  const [activeGame, setActiveGame] = useState<"memorama" | "guess" | "count" | "adventure">("memorama");
  const [showGames, setShowGames] = useState(false);
  const [showColoring, setShowColoring] = useState(false);
  
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
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-accent/40 via-background/30 to-background/50 backdrop-blur-[2px]" />
        
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="relative flex items-center justify-center min-h-[90vh] pt-4">
            
            {/* Title above the duck */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 text-center z-40">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-titan text-yellow-400 drop-shadow-[0_0_30px_rgba(255,215,0,0.9)] [text-shadow:_2px_2px_0_#000,_-2px_-2px_0_#000,_2px_-2px_0_#000,_-2px_2px_0_#000] px-6 py-3 inline-block">
                EL MUNDO DE PATITO MILAGRO
              </h1>
            </div>
            
            {/* Central Patito Logo - GRANDE CENTRADO */}
            <div className="relative z-10 flex flex-col items-center -mt-16">
              <div className="animate-float">
                <img 
                  src={patitoHero} 
                  alt="Patito Milagro"
                  className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-[0_30px_60px_-15px_rgba(250,204,21,0.9)] border-8 border-yellow-400 bg-white/90"
                />
              </div>
            </div>
            
            {/* Subtitle in bottom left corner */}
            <div className="absolute bottom-[0%] left-[-0.5%] z-40 animate-float" style={{ animationDuration: '6s' }}>
              <p className="text-xs md:text-sm font-baloo font-bold text-yellow-400 px-4 py-2 inline-flex items-center gap-2 [text-shadow:_0_0_20px_rgba(253,224,71,1),_0_0_40px_rgba(234,179,8,0.8),_0_0_60px_rgba(234,179,8,0.6),_2px_2px_0_#000,_-2px_-2px_0_#000,_2px_-2px_0_#000,_-2px_2px_0_#000] drop-shadow-[0_0_30px_rgba(253,224,71,1)]">
                UN MUNDO DE FELICIDAD Y TERNURA 
                <Sparkles className="w-3 h-3 md:w-4 md:h-4 inline-block text-orange-400 fill-orange-400 drop-shadow-[0_0_10px_rgba(251,146,60,1)]" />
                <span className="text-sm md:text-base">🦆</span>
                <Heart className="w-3 h-3 md:w-4 md:h-4 inline-block text-red-500 fill-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,1)]" />
              </p>
            </div>

            {/* Bubble Navigation Menu - Circular Layout Around Central Duck */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
              <div className="relative w-[100vmin] h-[100vmin] max-w-[850px] max-h-[850px] pointer-events-auto">
                
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
      <div className="container mx-auto px-4 py-20 space-y-24">
        
        {/* Fotos Section */}
        <section id="fotos" className="scroll-mt-20">
          <SectionCard title="📸 Galería de Fotos" description="¡Mira todas las aventuras del Patito Milagro!">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[patito1, patito2, patito3, patito4, patito5, patito6, patito7, patito8, patito9].map((img, i) => (
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[patitoVideo1, patitoVideo4, patitoVideo5].map((video, i) => (
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
              <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-8 rounded-3xl border-4 border-primary/30">
                <h3 className="text-3xl font-bold text-primary mb-4">✨ Las Memorias de un Representante Médico ✨</h3>
                <p className="text-xl text-foreground leading-relaxed">
                  Se trata de un rinconcito donde Patito Milagro decidió emprender su viaje artístico para actuar en una obra de teatro donde Patito Milagro juega el papel de un patito que se recupera de una fuerte gripita y va su dueño Alets por él con la veterinaria que lo curó. Su dueño Alets va por él muy contento y feliz para volverlo a cuidar con muchísimo amor y cariño. Esta obra donde participa Patito Milagro se llama Las Memorias de un Representante Médico.
                </p>
                <p className="text-xl text-foreground leading-relaxed mt-4">
                  Se trata de una obra cómica, interactiva y musical que no olvidarás jamás, llena de sonrisas, regalos y rifas sorpresas. ¡Una experiencia maravillosa! 🌟
                </p>
              </div>
              <Button 
                size="lg" 
                onClick={() => scrollToSection('funciones')}
                className="w-full py-8 text-2xl font-bold bg-secondary hover:bg-secondary/90 rounded-3xl shadow-[0_8px_20px_-4px_hsl(33_100%_60%/0.4)] transform transition-all hover:scale-105"
              >
                ¡Conoce más sobre la obra! 🎪
              </Button>
            </div>
          </SectionCard>
        </section>

        {/* Funciones Section */}
        <section id="funciones" className="scroll-mt-20">
          <SectionCard title="📅 Próximas Funciones" description="¡No te pierdas ninguna presentación!">
            <div className="space-y-4">
              {[
                { fecha: "Sábado 25 de Enero", hora: "4:00 PM", lugar: "Teatro Principal" },
                { fecha: "Domingo 26 de Enero", hora: "11:00 AM", lugar: "Teatro Principal" },
                { fecha: "Domingo 26 de Enero", hora: "4:00 PM", lugar: "Teatro Principal" },
              ].map((funcion, i) => (
                <div 
                  key={i}
                  className="bg-card p-6 rounded-3xl border-4 border-accent/30 transform transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_20px_-4px_hsl(199_89%_48%/0.4)]"
                >
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <p className="text-2xl font-bold text-primary">{funcion.fecha}</p>
                      <p className="text-xl text-foreground">🕐 {funcion.hora}</p>
                      <p className="text-lg text-muted-foreground">📍 {funcion.lugar}</p>
                    </div>
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full px-8 py-6 text-lg">
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
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            
            <div className="mt-8 text-center">
              <Button 
                size="lg" 
                className="px-12 py-8 text-2xl font-bold bg-primary hover:bg-primary/90 rounded-3xl shadow-[0_12px_30px_-8px_hsl(45_100%_51%/0.4)] transform transition-all hover:scale-105"
              >
                <ShoppingBag className="w-8 h-8 mr-3" />
                Ver Todo el Catálogo
              </Button>
            </div>
          </SectionCard>
        </section>

        {/* Donaciones Section */}
        <section id="donaciones" className="scroll-mt-20">
          <SectionCard title="💛 Apoya al Patito Milagro" description="Tu ayuda hace la diferencia">
            <div className="bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 p-8 rounded-3xl border-4 border-primary/30 space-y-6">
              <p className="text-xl text-foreground text-center leading-relaxed">
                Patito Milagro tiene un gran sueño en donde tú eres el protagonista principal, ya que a través de tu donativo, podrá cumplir que su gran sueño, se vuelva realidad, ya que Patito Milagro quiere conseguir un espacio, para construir un hermoso albergue que se llamará <strong className="text-yellow-400">EL MUNDO DE PATITO MILAGRO</strong>, donde construirá un hermoso albergue donde todos los patitos que no tienen un hogar digno o un lugar donde vivir, puedan vivir, de una manera feliz y maravillosa, para que el ser pato se convierta en una verdadera experiencia de amor y ternura para los patitos que decidan vivir aquí, es por ello que gracias a tu donativo, el gran sueño de Patito Milagro, se convertirá en un verdadero MILAGRO de amor, ternura y esperanza para los patitos, si te gustaría ayudar a que Patito Milagro llegue a su meta de cumplir su gran sueño, te compartimos su número de cuenta de Patito Milagro para que Patito Milagro pueda llegar a su meta lo antes posible, de cumplirse su sueño, te invitará a que asistas y cortes el listón de la apertura del albergue: <strong className="text-yellow-400">EL MUNDO DE PATITO MILAGRO</strong>, ¿te animas?, ¡mil gracias!! por tu DONATIVO. 🦆💫💛
              </p>
              <Button 
                size="lg" 
                className="w-full py-8 text-2xl font-bold bg-secondary hover:bg-secondary/90 rounded-3xl shadow-[0_12px_30px_-8px_hsl(33_100%_60%/0.4)] transform transition-all hover:scale-105"
              >
                <Heart className="w-8 h-8 mr-3" />
                Donar Ahora
              </Button>
            </div>
          </SectionCard>
        </section>

        {/* Sobre Nosotros Section */}
        <section id="sobre-nosotros" className="scroll-mt-20">
          <SectionCard title="✨ Sobre Patito Milagro" description="Más que una marca, un movimiento de esperanza">
            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                Patito Milagro es un proyecto que combina creatividad, arte y compromiso social con un objetivo noble: 
                generar conciencia y esperanza a través de la ternura. Nuestra empresa nace del deseo de unir el mundo 
                de los productos con causa —como peluches y playeras— con el poder transformador del arte escénico, 
                mediante una obra de teatro protagonizada por nuestro entrañable personaje, el patito Milagro.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Más allá de ofrecer artículos de calidad y experiencias artísticas, buscamos inspirar valores de 
                empatía, respeto y amor hacia los animales. Parte de los recursos obtenidos se destinan a una causa 
                fundamental: la construcción de un albergue para patitos sin hogar, un espacio donde puedan recibir 
                cuidado, refugio y la oportunidad de una nueva vida.
              </p>
              <p className="text-lg text-foreground leading-relaxed font-semibold">
                Patito Milagro es más que una marca; es un movimiento que invita a creer que los milagros pueden 
                surgir cuando las personas se unen con un propósito común: ayudar, crear y compartir esperanza.
              </p>
            </div>
          </SectionCard>
        </section>

        {/* Misión y Visión Section */}
        <section id="mision" className="scroll-mt-20">
          <div className="grid md:grid-cols-2 gap-8">
            <SectionCard title="🎯 Nuestra Misión">
              <p className="text-lg text-foreground leading-relaxed">
                La misión de Patito Milagro es demostrar que los milagros existen cuando se unen la creatividad 
                y el respeto por la naturaleza y los animales. A través de nuestros productos y de la magia del 
                teatro, trabajamos para transformar cada sonrisa en una acción solidaria que contribuya a la 
                construcción de un hogar digno para los patitos que más lo necesitan.
              </p>
            </SectionCard>
            
            <SectionCard title="🌟 Nuestra Visión">
              <p className="text-lg text-foreground leading-relaxed">
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-6 rounded-3xl border-2 border-primary/30 transform transition-all hover:scale-105">
                <h3 className="text-2xl font-bold text-primary mb-3">❤️ Amor</h3>
                <p className="text-foreground leading-relaxed">
                  El motor que impulsa cada acción y cada creación en Patito Milagro. Creemos en el amor como 
                  la fuerza capaz de generar cambios reales.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-secondary/20 to-secondary/5 p-6 rounded-3xl border-2 border-secondary/30 transform transition-all hover:scale-105">
                <h3 className="text-2xl font-bold text-secondary mb-3">🤝 Empatía</h3>
                <p className="text-foreground leading-relaxed">
                  Nos ponemos en el lugar de los demás —humanos y animales— para comprender sus necesidades 
                  y actuar con sensibilidad.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-accent/20 to-accent/5 p-6 rounded-3xl border-2 border-accent/30 transform transition-all hover:scale-105">
                <h3 className="text-2xl font-bold text-accent mb-3">🎨 Creatividad</h3>
                <p className="text-foreground leading-relaxed">
                  Fomentamos la imaginación como herramienta para transmitir mensajes positivos y construir 
                  soluciones que inspiren.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-6 rounded-3xl border-2 border-primary/30 transform transition-all hover:scale-105">
                <h3 className="text-2xl font-bold text-primary mb-3">🤲 Solidaridad</h3>
                <p className="text-foreground leading-relaxed">
                  Cada producto, cada obra y cada gesto están pensados para ayudar y generar un impacto 
                  positivo en nuestra comunidad.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-secondary/20 to-secondary/5 p-6 rounded-3xl border-2 border-secondary/30 transform transition-all hover:scale-105">
                <h3 className="text-2xl font-bold text-secondary mb-3">🌿 Respeto por la vida</h3>
                <p className="text-foreground leading-relaxed">
                  Promovemos el cuidado y la protección de todos los seres vivos, fomentando una convivencia 
                  responsable con la naturaleza.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-accent/20 to-accent/5 p-6 rounded-3xl border-2 border-accent/30 transform transition-all hover:scale-105">
                <h3 className="text-2xl font-bold text-accent mb-3">✨ Esperanza</h3>
                <p className="text-foreground leading-relaxed">
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
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-muted p-6 rounded-3xl border-4 border-primary/20">
                  <h4 className="text-xl font-bold text-primary mb-2">📱 Teléfono</h4>
                  <p className="text-lg text-foreground">5545211175</p>
                </div>
                <div className="bg-muted p-6 rounded-3xl border-4 border-accent/20">
                  <h4 className="text-xl font-bold text-accent mb-2">✉️ Email</h4>
                  <p className="text-lg text-foreground">magia@patitomilagro.com.mx</p>
                </div>
              </div>
              <Button 
                size="lg" 
                className="w-full py-8 text-2xl font-bold bg-accent hover:bg-accent/90 rounded-3xl shadow-[0_8px_20px_-4px_hsl(199_89%_48%/0.4)] transform transition-all hover:scale-105"
              >
                <Mail className="w-8 h-8 mr-3" />
                Enviar Mensaje
              </Button>
            </div>
          </SectionCard>
        </section>

        {/* Sorpresas Section */}
        <section id="sorpresas" className="scroll-mt-20">
          <SectionCard title="🎁 Zona de Sorpresas" description="¡Diversión extra para ti!">
            <div className="grid md:grid-cols-3 gap-6">
              <div 
                className="bg-gradient-to-br from-primary/30 to-secondary/30 p-8 rounded-3xl border-4 border-primary/20 text-center space-y-4 transform transition-all hover:scale-105 cursor-pointer"
                onClick={() => {
                  setShowColoring(!showColoring);
                  setShowGames(false);
                }}
              >
                <div className="text-6xl animate-bounce">🎨</div>
                <h4 className="text-xl font-bold text-primary">Dibujos para Colorear</h4>
              </div>
              <div className="bg-gradient-to-br from-accent/30 to-primary/30 p-8 rounded-3xl border-4 border-accent/20 text-center space-y-4 transform transition-all hover:scale-105 cursor-pointer">
                <div className="text-6xl animate-wiggle">🎵</div>
                <h4 className="text-xl font-bold text-accent">Canciones</h4>
              </div>
              <div 
                className="bg-gradient-to-br from-secondary/30 to-accent/30 p-8 rounded-3xl border-4 border-secondary/20 text-center space-y-4 transform transition-all hover:scale-105 cursor-pointer"
                onClick={() => {
                  setShowGames(!showGames);
                  setShowColoring(false);
                }}
              >
                <div className="text-6xl animate-sparkle">🎮</div>
                <h4 className="text-xl font-bold text-secondary">Juegos Interactivos</h4>
              </div>
            </div>

            {/* Dibujos para Colorear desplegables */}
            {showColoring && (
              <div className="mt-8 animate-fade-in">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 rounded-3xl border-4 border-primary/30">
                  <h3 className="text-3xl font-bold text-center mb-6 text-primary">🎨 Dibujos para Colorear</h3>
                  <p className="text-center text-lg text-foreground mb-6">
                    ¡Descarga estas imágenes de Patito Milagro y coloréalas como más te guste!
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {[
                      { img: patito1, name: "Patito 1" },
                      { img: patito2, name: "Patito 2" },
                      { img: patito3, name: "Patito 3" },
                      { img: patito4, name: "Patito 4" },
                      { img: patito5, name: "Patito 5" }
                    ].map((duck, index) => (
                      <div 
                        key={index}
                        className="group relative bg-white p-4 rounded-2xl shadow-lg border-4 border-primary/30 transform transition-all hover:scale-105 hover:shadow-2xl"
                      >
                        <img
                          src={duck.img}
                          alt={duck.name}
                          className="w-full h-48 object-cover rounded-lg filter grayscale contrast-125 brightness-110"
                        />
                        <p className="text-center mt-3 font-bold text-primary">{duck.name}</p>
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl">
                          <p className="text-white font-bold text-sm">Click derecho → Guardar imagen</p>
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
