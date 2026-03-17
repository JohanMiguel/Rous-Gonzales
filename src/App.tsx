import { motion } from "motion/react";
import {
  Heart,
  Sparkles,
  Brain,
  Users,
  UserPlus,
  Music,
  MapPin,
  Film,
  Share2,
  Gamepad2,
  Moon,
  Trees,
  Mail,
  Dog,
  Cat,
  Calendar,
} from "lucide-react";

// Imágenes desde src/img (Hero y Mascotas)
import imgProfile from "./img/profile.jpeg";
import imgMascotas from "./img/mascotas.jpeg";

// Imágenes para Vínculos
import imgFamilia from "./img/familia.jpeg";
import imgInfancia from "./img/infancia.jpeg";
import imgPareja from "./img/pareja.jpeg";
import imgSelfieConNovia from "./img/selfie con novia.jpeg";
import imgSelfieNovia from "./img/selfie novia.jpeg";
import imgFamilia3 from "./img/familia 3.jpeg";
import imgPijama from "./img/pijama.jpeg";
import imgFamilia5 from "./img/familia 5.jpeg";

import { Header } from "./components/Header";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-sage-soft selection:text-sage-accent">
      <Header />
      {/* Hero Section */}
      <section
        id="inicio"
        className="relative min-h-screen flex items-center px-6 lg:px-24 pt-24 pb-20 overflow-hidden"
      >
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage-soft/30 text-sage-accent rounded-full text-sm font-medium border border-sage-soft">
              <Sparkles size={16} />
              <span>✨ Disponible para nuevos retos</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-serif leading-tight text-stone-900">
              Reina del Rosario: <br />
              <span className="italic text-sage-accent">Psicología, Tecnología y Corazón.</span>
            </h1>

            <div className="inline-flex items-center gap-2 text-stone-600 text-sm font-medium">
              <Calendar className="text-sage-accent shrink-0" size={18} aria-hidden />
              <span>Nacimiento: 22 de agosto de 1985</span>
            </div>

            <div className="space-y-4 max-w-lg">
              <p className="text-xl text-stone-700 leading-relaxed">
                Soy una persona amable y muy carismática; amo los animales y mi futura carrera. Los
                animales son para mí seres de luz, y mi familia el pilar de mi vida.
              </p>
              <p className="text-lg text-stone-500 leading-relaxed">
                También soy introspectiva y estratégica: creo en la tecnología como herramienta de
                transformación humana.
              </p>
            </div>
            
            <div className="flex gap-4">
              <a href="#contacto" className="px-8 py-4 bg-stone-900 text-white rounded-full hover:bg-stone-800 transition-colors">
                Hablemos
              </a>
              <a href="#trayectoria" className="px-8 py-4 border border-stone-200 rounded-full hover:bg-stone-50 transition-colors">
                Mi Trayectoria
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white">
              <img
                src={imgProfile}
                alt="Reina del Rosario"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-sage-soft rounded-full -z-10 blur-2xl opacity-60"></div>
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-nude-clay rounded-full -z-10 blur-3xl opacity-60"></div>
          </motion.div>
        </div>
      </section>

      {/* Humanizando la Tecnología Section */}
      <section className="py-24 px-6 lg:px-24 bg-nude-clay/40">
        <motion.div 
          {...fadeIn}
          className="container mx-auto max-w-4xl text-center space-y-8"
        >
          <div className="inline-block p-4 bg-white rounded-3xl shadow-sm mb-4">
            <Heart className="text-sage-accent" size={32} />
          </div>
          <h2 className="text-4xl font-serif text-stone-900">Humanizando la Tecnología</h2>
          <p className="text-2xl text-stone-700 leading-relaxed font-light italic">
            "Mi misión es unir la psicología con el mundo digital para crear herramientas empáticas e intuitivas que realmente resuenen con la experiencia humana."
          </p>
          <div className="h-1 w-24 bg-sage-soft mx-auto rounded-full"></div>
        </motion.div>
      </section>

      {/* Mi Trayectoria Section */}
      <section id="trayectoria" className="py-24 px-6 lg:px-24">
        <div className="container mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-4xl font-serif text-stone-900 mb-4">Mi Trayectoria</h2>
            <p className="text-stone-600">Formación y especialización en el comportamiento humano.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Teorías Conductuales", 
                icon: <Brain className="text-sage-accent" />, 
                desc: "Análisis profundo del comportamiento y los procesos de aprendizaje." 
              },
              { 
                title: "Psicología Organizacional", 
                icon: <Users className="text-sage-accent" />, 
                desc: "Optimización del talento humano y cultura en entornos digitales." 
              },
              { 
                title: "Desarrollo Personal", 
                icon: <UserPlus className="text-sage-accent" />, 
                desc: "Acompañamiento en procesos de transformación y crecimiento individual." 
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                {...fadeIn}
                transition={{ delay: idx * 0.2 }}
                className="p-10 bg-white rounded-[3rem] shadow-sm border border-stone-100 hover:shadow-md transition-shadow group"
              >
                <div className="w-14 h-14 bg-nude-sand rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-serif text-stone-900 mb-3">{item.title}</h3>
                <p className="text-stone-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Esencia & Recarga Section */}
      <section id="esencia" className="py-24 px-6 lg:px-24 bg-nude-sand">
        <div className="container mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-4xl font-serif text-stone-900 mb-4">Esencia & Recarga</h2>
            <p className="text-stone-600">Lo que mantiene mi mente en equilibrio.</p>
          </motion.div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Música", icon: <Music />, desc: "Procesar el día" },
              { name: "Caminar", icon: <MapPin />, desc: "Despejar la mente" },
              { name: "Cine", icon: <Film />, desc: "Historias que enseñan" },
              { name: "Redes", icon: <Share2 />, desc: "Conexión y momentos" }
            ].map((hobby, idx) => (
              <motion.div 
                key={idx}
                {...fadeIn}
                className="flex flex-col items-center p-8 bg-white/50 backdrop-blur-sm rounded-[2.5rem] text-center border border-white"
              >
                <div className="text-sage-accent mb-4">{hobby.icon}</div>
                <h4 className="font-serif text-stone-900">{hobby.name}</h4>
                <p className="text-xs text-stone-500 mt-1">{hobby.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vínculos Section */}
      <section id="vinculos" className="py-24 px-6 lg:px-24">
        <div className="container mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-4xl font-serif text-stone-900 mb-4">Vínculos</h2>
            <p className="text-stone-600">Galería emocional de mis raíces y afectos.</p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { title: "Familia", img: imgFamilia },
              { title: "Marleny", img: imgSelfieConNovia },
              { title: "Infancia", img: imgInfancia },
              { title: "Raíces", img: imgFamilia3 },
              { title: "Amistad", img: imgSelfieNovia },
              { title: "Pareja", img: imgPareja },
              { title: "Recuerdos", img: imgPijama },
              { title: "Legado", img: imgFamilia5 },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                className="relative aspect-square w-full overflow-hidden rounded-[2rem] group"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <span className="text-white font-serif text-xl">{item.title}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hijos de 4 Patas Section */}
      <section id="mascotas" className="py-24 px-6 lg:px-24 bg-sage-soft/20">
        <div className="container mx-auto">
          <motion.div 
            {...fadeIn}
            className="bg-white rounded-[4rem] p-12 lg:p-20 flex flex-col lg:flex-row items-center gap-12 shadow-sm"
          >
            <div className="flex-1 space-y-6">
              <div className="flex gap-4">
                <Dog className="text-sage-accent" size={40} />
                <Cat className="text-sage-accent" size={40} />
              </div>
              <h2 className="text-4xl font-serif text-stone-900">Hijos de 4 Patas</h2>
              <p className="text-xl text-stone-600 leading-relaxed">
                Mi perro y mi gato son parte fundamental de mi hogar y mi paz. Ellos me enseñan sobre el amor incondicional y la importancia de estar presente en el ahora.
              </p>
            </div>
            <div className="flex-1 w-full">
              <div className="aspect-video rounded-[3rem] overflow-hidden shadow-lg">
                <img
                  src={imgMascotas}
                  alt="Mascotas"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fuera del Radar Section */}
      <section id="fuera-del-radar" className="py-24 px-6 lg:px-24">
        <div className="container mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-4xl font-serif text-stone-900 mb-4">Fuera del Radar</h2>
            <p className="text-stone-600">Cuando no estoy trabajando, me encuentras aquí.</p>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Videojuegos", 
                icon: <Gamepad2 />, 
                img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600",
                desc: "Desconexión lúdica y estrategia."
              },
              { 
                title: "Dormir", 
                icon: <Moon />, 
                img: "https://images.unsplash.com/photo-1520277739336-7bf67edfa768?auto=format&fit=crop&q=80&w=600",
                desc: "El descanso sagrado para recargar."
              },
              { 
                title: "Aire Libre", 
                icon: <Trees />, 
                img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=600",
                desc: "Naturaleza que reconecta el alma."
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                {...fadeIn}
                transition={{ delay: idx * 0.2 }}
                className="group relative h-64 rounded-[3rem] overflow-hidden shadow-sm"
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent p-8 flex flex-col justify-end">
                  <div className="flex items-center gap-3 text-white mb-2">
                    <span className="p-2 bg-white/20 backdrop-blur-md rounded-xl">{item.icon}</span>
                    <h3 className="text-xl font-serif">{item.title}</h3>
                  </div>
                  <p className="text-white/80 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="py-20 px-6 lg:px-24 bg-stone-900 text-nude-bone rounded-t-[4rem]">
        <div className="container mx-auto text-center space-y-8">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl font-serif mb-6">¿Conectamos?</h2>
            <a 
              href="mailto:Rousgonz2218@gmail.com" 
              className="inline-flex items-center gap-3 text-2xl font-light hover:text-sage-soft transition-colors"
            >
              <Mail size={24} />
              Rousgonz2218@gmail.com
            </a>
          </motion.div>
          
          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
            <p>© 2026 Reina del Rosario. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <span className="hover:text-white transition-colors cursor-pointer">Privacidad</span>
              <span className="hover:text-white transition-colors cursor-pointer">Términos</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
