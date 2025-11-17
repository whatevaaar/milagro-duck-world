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
  ShoppingBag
} from "lucide-react";
import patitoHero from "@/assets/patito-hero.jpg";
import forestBackground from "@/assets/forest-background.jpg";

const Index = () => {
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
          <div className="relative flex items-start justify-center pt-8 min-h-[85vh]">
            
            {/* Central Patito Logo - GRANDE */}
            <div className="relative z-20 -mt-8">
              <div className="animate-float">
                <img 
                  src={patitoHero} 
                  alt="Patito Milagro"
                  className="w-72 h-72 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] object-cover rounded-full shadow-[0_30px_60px_-15px_hsl(45_100%_51%/0.6)] border-8 border-primary/40 bg-white/90"
                />
              </div>
              
              {/* Title below the duck */}
              <div className="text-center mt-6">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary drop-shadow-[0_4px_20px_rgba(255,193,7,0.8)] bg-white/80 rounded-3xl px-8 py-4 inline-block">
                  Patito Milagro
                </h1>
                <p className="text-lg md:text-xl text-foreground font-bold mt-3 bg-white/70 rounded-2xl px-6 py-3 inline-block">
                  Un mundo de felicidad y ternura ✨🦆💛
                </p>
              </div>
            </div>

            {/* Bubble Navigation Menu - Around the duck */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Top Left */}
              <div className="absolute top-[10%] left-[15%] transform -translate-x-1/2 -translate-y-1/2 animate-float">
                <div className="bg-white/90 rounded-full p-4 shadow-[0_12px_30px_-8px_hsl(199_89%_48%/0.5)] backdrop-blur-sm border-4 border-primary/30">
                  <DuckMenuButton 
                    icon={Camera} 
                    label="Fotos" 
                    onClick={() => scrollToSection("fotos")}
                  />
                </div>
              </div>

              {/* Top Center */}
              <div className="absolute top-[5%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 animate-bounce">
                <div className="bg-white/90 rounded-full p-4 shadow-[0_12px_30px_-8px_hsl(199_89%_48%/0.5)] backdrop-blur-sm border-4 border-accent/30">
                  <DuckMenuButton 
                    icon={Video} 
                    label="Videos" 
                    onClick={() => scrollToSection("videos")}
                  />
                </div>
              </div>

              {/* Top Right */}
              <div className="absolute top-[10%] right-[15%] transform translate-x-1/2 -translate-y-1/2 animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="bg-white/90 rounded-full p-4 shadow-[0_12px_30px_-8px_hsl(199_89%_48%/0.5)] backdrop-blur-sm border-4 border-secondary/30">
                  <DuckMenuButton 
                    icon={Theater} 
                    label="Obra" 
                    onClick={() => scrollToSection("obra")}
                  />
                </div>
              </div>

              {/* Middle Left */}
              <div className="absolute top-[50%] left-[8%] transform -translate-x-1/2 -translate-y-1/2 animate-bounce" style={{ animationDelay: '0.3s' }}>
                <div className="bg-white/90 rounded-full p-4 shadow-[0_12px_30px_-8px_hsl(199_89%_48%/0.5)] backdrop-blur-sm border-4 border-primary/30">
                  <DuckMenuButton 
                    icon={Calendar} 
                    label="Funciones" 
                    onClick={() => scrollToSection("funciones")}
                  />
                </div>
              </div>

              {/* Middle Right */}
              <div className="absolute top-[50%] right-[8%] transform translate-x-1/2 -translate-y-1/2 animate-float" style={{ animationDelay: '0.7s' }}>
                <div className="bg-white/90 rounded-full p-4 shadow-[0_12px_30px_-8px_hsl(199_89%_48%/0.5)] backdrop-blur-sm border-4 border-accent/30">
                  <DuckMenuButton 
                    icon={ShoppingBag} 
                    label="Tienda" 
                    onClick={() => scrollToSection("tienda")}
                  />
                </div>
              </div>

              {/* Bottom Left */}
              <div className="absolute bottom-[20%] left-[18%] transform -translate-x-1/2 translate-y-1/2 animate-bounce" style={{ animationDelay: '0.2s' }}>
                <div className="bg-white/90 rounded-full p-4 shadow-[0_12px_30px_-8px_hsl(199_89%_48%/0.5)] backdrop-blur-sm border-4 border-secondary/30">
                  <DuckMenuButton 
                    icon={Heart} 
                    label="Donar" 
                    onClick={() => scrollToSection("donaciones")}
                  />
                </div>
              </div>

              {/* Bottom Center Left */}
              <div className="absolute bottom-[12%] left-[35%] transform -translate-x-1/2 translate-y-1/2 animate-float" style={{ animationDelay: '0.4s' }}>
                <div className="bg-white/90 rounded-full p-4 shadow-[0_12px_30px_-8px_hsl(199_89%_48%/0.5)] backdrop-blur-sm border-4 border-primary/30">
                  <DuckMenuButton 
                    icon={Target} 
                    label="Misión" 
                    onClick={() => scrollToSection("mision")}
                  />
                </div>
              </div>

              {/* Bottom Center Right */}
              <div className="absolute bottom-[12%] right-[35%] transform translate-x-1/2 translate-y-1/2 animate-bounce" style={{ animationDelay: '0.6s' }}>
                <div className="bg-white/90 rounded-full p-4 shadow-[0_12px_30px_-8px_hsl(199_89%_48%/0.5)] backdrop-blur-sm border-4 border-accent/30">
                  <DuckMenuButton 
                    icon={Mail} 
                    label="Contacto" 
                    onClick={() => scrollToSection("contacto")}
                  />
                </div>
              </div>

              {/* Bottom Right */}
              <div className="absolute bottom-[20%] right-[18%] transform translate-x-1/2 translate-y-1/2 animate-float" style={{ animationDelay: '0.8s' }}>
                <div className="bg-white/90 rounded-full p-4 shadow-[0_12px_30px_-8px_hsl(199_89%_48%/0.5)] backdrop-blur-sm border-4 border-secondary/30">
                  <DuckMenuButton 
                    icon={Sparkles} 
                    label="Sorpresas" 
                    onClick={() => scrollToSection("sorpresas")}
                  />
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
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div 
                  key={i}
                  className="aspect-square bg-muted rounded-3xl border-4 border-primary/20 overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_30px_-8px_hsl(199_89%_48%/0.4)] cursor-pointer"
                >
                  <div className="w-full h-full flex items-center justify-center text-6xl">
                    🦆
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>
        </section>

        {/* Videos Section */}
        <section id="videos" className="scroll-mt-20">
          <SectionCard title="🎬 Videos del Patito" description="¡Disfruta de los mejores momentos en video!">
            <div className="grid md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i}
                  className="aspect-video bg-muted rounded-3xl border-4 border-accent/30 overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_30px_-8px_hsl(199_89%_48%/0.4)] cursor-pointer flex items-center justify-center"
                >
                  <Video className="w-20 h-20 text-accent" />
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
                <h3 className="text-3xl font-bold text-primary mb-4">✨ El Viaje del Patito Milagro ✨</h3>
                <p className="text-xl text-foreground leading-relaxed">
                  Una hermosa historia sobre amistad, valentía y amor. 
                  El Patito Milagro emprende una aventura mágica para ayudar a sus amigos 
                  y descubrir el verdadero significado de la felicidad. 
                  ¡Una experiencia inolvidable para toda la familia! 🌟
                </p>
              </div>
              <Button 
                size="lg" 
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
                Con tu donación, podemos seguir llevando alegría y valores a más niños. 
                ¡Cada contribución cuenta y hace posible que el Patito Milagro siga volando alto! 🦆💫
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

        {/* Misión y Visión Section */}
        <section id="mision" className="scroll-mt-20">
          <div className="grid md:grid-cols-2 gap-8">
            <SectionCard title="🎯 Nuestra Misión">
              <p className="text-lg text-foreground leading-relaxed">
                Llevar alegría, valores y enseñanzas positivas a todos los niños a través de 
                las aventuras del Patito Milagro. Inspirar amor, amistad y valentía en cada 
                corazón pequeño. 💛
              </p>
            </SectionCard>
            
            <SectionCard title="🌟 Nuestra Visión">
              <p className="text-lg text-foreground leading-relaxed">
                Ser el espectáculo infantil más querido y significativo, creando recuerdos 
                inolvidables y formando una generación de niños felices, seguros y llenos 
                de esperanza. ✨
              </p>
            </SectionCard>
          </div>
        </section>

        {/* Contacto Section */}
        <section id="contacto" className="scroll-mt-20">
          <SectionCard title="📧 Contáctanos" description="¡Nos encantaría saber de ti!">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-muted p-6 rounded-3xl border-4 border-primary/20">
                  <h4 className="text-xl font-bold text-primary mb-2">📱 Teléfono</h4>
                  <p className="text-lg text-foreground">+52 123 456 7890</p>
                </div>
                <div className="bg-muted p-6 rounded-3xl border-4 border-accent/20">
                  <h4 className="text-xl font-bold text-accent mb-2">✉️ Email</h4>
                  <p className="text-lg text-foreground">hola@patitomilagro.com</p>
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
              <div className="bg-gradient-to-br from-primary/30 to-secondary/30 p-8 rounded-3xl border-4 border-primary/20 text-center space-y-4 transform transition-all hover:scale-105 cursor-pointer">
                <div className="text-6xl animate-bounce">🎨</div>
                <h4 className="text-xl font-bold text-primary">Dibujos para Colorear</h4>
              </div>
              <div className="bg-gradient-to-br from-accent/30 to-primary/30 p-8 rounded-3xl border-4 border-accent/20 text-center space-y-4 transform transition-all hover:scale-105 cursor-pointer">
                <div className="text-6xl animate-wiggle">🎵</div>
                <h4 className="text-xl font-bold text-accent">Canciones</h4>
              </div>
              <div className="bg-gradient-to-br from-secondary/30 to-accent/30 p-8 rounded-3xl border-4 border-secondary/20 text-center space-y-4 transform transition-all hover:scale-105 cursor-pointer">
                <div className="text-6xl animate-sparkle">🎮</div>
                <h4 className="text-xl font-bold text-secondary">Juegos</h4>
              </div>
            </div>
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
