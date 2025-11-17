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

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-accent via-background to-muted">
      <MusicPlayer />
      
      {/* Hero Section with Navigation */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/30 to-transparent" />
        
        <div className="container mx-auto px-4 py-8 relative z-10">
          {/* Header with Logo */}
          <div className="text-center mb-8">
            <div className="inline-block animate-float">
              <img 
                src={patitoHero} 
                alt="Patito Milagro"
                className="w-48 h-48 object-cover rounded-full shadow-[0_20px_50px_-12px_hsl(45_100%_51%/0.4)] border-8 border-primary/30"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-primary drop-shadow-[0_4px_20px_rgba(255,193,7,0.5)] mt-4">
              ¡Bienvenidos al Mundo de<br />
              <span className="text-secondary">Patito Milagro!</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground font-bold max-w-3xl mx-auto mt-4">
              Un lugar lleno de alegría, amor y magia ✨🦆💛
            </p>
          </div>

          {/* Duck-shaped Navigation Menu */}
          <div className="bg-card/80 backdrop-blur-sm rounded-[3rem] border-4 border-primary/30 shadow-[0_12px_40px_-8px_hsl(45_100%_51%/0.4)] p-8 mb-8">
            <h2 className="text-3xl font-bold text-center text-primary mb-8">
              🦆 Menú de Navegación 🦆
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-6 justify-items-center">
              <DuckMenuButton 
                icon={Camera} 
                label="Fotos" 
                onClick={() => scrollToSection("fotos")}
              />
              <DuckMenuButton 
                icon={Video} 
                label="Videos" 
                onClick={() => scrollToSection("videos")}
              />
              <DuckMenuButton 
                icon={Theater} 
                label="Obra" 
                onClick={() => scrollToSection("obra")}
              />
              <DuckMenuButton 
                icon={Calendar} 
                label="Funciones" 
                onClick={() => scrollToSection("funciones")}
              />
              <DuckMenuButton 
                icon={ShoppingBag} 
                label="Tienda" 
                onClick={() => scrollToSection("tienda")}
              />
              <DuckMenuButton 
                icon={Heart} 
                label="Donar" 
                onClick={() => scrollToSection("donaciones")}
              />
              <DuckMenuButton 
                icon={Target} 
                label="Misión" 
                onClick={() => scrollToSection("mision")}
              />
              <DuckMenuButton 
                icon={Mail} 
                label="Contacto" 
                onClick={() => scrollToSection("contacto")}
              />
              <DuckMenuButton 
                icon={Sparkles} 
                label="Sorpresas" 
                onClick={() => scrollToSection("sorpresas")}
              />
            </div>
          </div>

          {/* Welcome Message */}
          <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-[3rem] border-4 border-primary/30 p-8 text-center shadow-[0_8px_20px_-4px_hsl(45_100%_51%/0.3)]">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              ¡Hola Amiguitos! 👋
            </h2>
            <p className="text-xl text-foreground leading-relaxed max-w-4xl mx-auto">
              Estoy muy feliz de que estén aquí. En este mundo mágico encontrarán 
              fotos, videos, nuestra obra de teatro, y muchas sorpresas más. 
              ¡También pueden comprar playeras, peluches y juguetes del Patito Milagro! 🎉
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/30 rounded-full animate-float blur-xl" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/30 rounded-full animate-bounce blur-xl" />
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
