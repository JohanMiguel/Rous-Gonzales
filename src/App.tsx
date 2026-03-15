/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Gamepad2, 
  Moon, 
  Trees, 
  Heart, 
  User, 
  Briefcase, 
  GraduationCap, 
  Instagram, 
  Linkedin, 
  Mail,
  Camera,
  Music,
  Film,
  Share2
} from 'lucide-react';

// Importar imágenes
const profile = new URL('./img/profile.jpeg', import.meta.url).href;
const familia = new URL('./img/familia.jpeg', import.meta.url).href;
const pareja = new URL('./img/pareja.jpeg', import.meta.url).href;


const img1 = new URL('./img/WhatsApp Image 2026-03-13 at 8.36.11 PM (2).jpeg', import.meta.url).href;
const img2 = new URL('./img/WhatsApp Image 2026-03-13 at 8.36.11 PM (3).jpeg', import.meta.url).href;
const img3 = new URL('./img/WhatsApp Image 2026-03-13 at 8.36.11 PM (4).jpeg', import.meta.url).href;
const img4 = new URL('./img/WhatsApp Image 2026-03-13 at 8.36.11 PM (5).jpeg', import.meta.url).href;
const img5 = new URL('./img/WhatsApp Image 2026-03-13 at 8.36.11 PM (6).jpeg', import.meta.url).href;
const img6 = new URL('./img/WhatsApp Image 2026-03-13 at 8.36.11 PM.jpeg', import.meta.url).href;

// Imágenes mascotas
const gato = new URL('./img/mascotas.jpeg', import.meta.url).href;
 
const GlassCard = ({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number, key?: React.Key }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    className={`glass-card reflection-container ${className}`}
  >
    {children}
  </motion.div>
);

const Photo = ({ src, alt, className = "" }: { src: string, alt: string, className?: string }) => (
  <div className={`relative w-full h-full group overflow-hidden ${className}`}>
    <img 
      src={src} 
      alt={alt} 
      className="w-full h-full object-coVínculoser transition-transform duration-700 group-hover:scale-110"
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen text-white font-sans selection:bg-cyan-500/30">
      <div className="mesh-bg" />
      
      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="glass px-8 py-3 rounded-full flex items-center gap-8 border-white/10 backdrop-blur-md">
          <a href="#hero" className="text-sm font-medium hover:text-cyan-300 transition-colors">Inicio</a>
          <a href="#acerca" className="text-sm font-medium hover:text-cyan-300 transition-colors">Acerca de</a>
          <a href="#experiencia" className="text-sm font-medium hover:text-cyan-300 transition-colors">Experiencia</a>
          <a href="#esencia" className="text-sm font-medium hover:text-cyan-300 transition-colors">Esencia</a>
          <a href="#vinculos" className="text-sm font-medium hover:text-cyan-300 transition-colors">Vínculos</a>
          <a href="#mascotas" className="text-sm font-medium hover:text-cyan-300 transition-colors">Mascotas</a>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-20 space-y-32">
        
        {/* Hero Section */}
        <section id="hero" className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 text-xs font-semibold tracking-widest uppercase text-cyan-300">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                Disponible para nuevos retos
              </div>
              <h1 className="text-6xl lg:text-8xl font-bold tracking-tighter leading-none">
                Reina del <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-lavender-300 to-emerald-300">
                  Rosario
                </span>
              </h1>
              <div className="space-y-2 text-sm text-white/50">
                <p><span className="font-semibold text-white/70">Nombre:</span> Reina del Rosario González Ramírez</p>
                <p><span className="font-semibold text-white/70">Nacimiento:</span> 22 de agosto de 1985</p>
                <p><span className="font-semibold text-white/70">Contacto:</span> <a href="mailto:Rousgonz2218@gmail.com" className="text-cyan-300 hover:text-cyan-200">Rousgonz2218@gmail.com</a></p>
              </div>
              <p className="text-xl text-white/60 max-w-md leading-relaxed">
                Soy Psicóloga en formación y Ejecutiva Tech. Me considero una persona 
introspectiva, estratégica y en constante búsqueda de significado. 
Creo en el poder de la empatía como brújula profesional y en la tecnología 
como herramienta de transformación humana. 

Me inspiran las personas auténticas, los espacios que respiran calma y 
elegancia, y la idea de construir un mundo donde el negocio y el corazón 
caminen juntos. Disfuto la estética, la profundidad y todo lo que tiene 
una vibra genuina: desde conversaciones sin filtro hasta interfaces 
que respetan al usuario.

Estoy en proceso de mejora constante, con disciplina y curiosidad como 
brújulas. Mi misión: ser puente entre mundos, liderando desde la empatía 
y la innovación.
              </p>
              
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative aspect-square lg:aspect-[4/5]"
            >
              <div className="absolute inset-0 glass rounded-[3rem] overflow-hidden rotate-3 scale-95 opacity-50" />
              <div className="absolute inset-0 glass rounded-[3rem] overflow-hidden -rotate-2 scale-98 opacity-70" />
              <div className="relative h-full glass rounded-[3rem] overflow-hidden border-white/30">
                <Photo 
                  src={profile} 
                  alt="Reina del Rosario Profile" 
                />
                
              </div>
            </motion.div>
          </div>
        </section>

        {/* Sección "Acerca de mí" */}
        <section id="acerca" className="space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold tracking-tight">Acerca de mí</h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  Mi enfoque profesional une la psicología con el desarrollo de soluciones digitales. Como formación activa en Psicología, aplico principios del comportamiento humano para diseñar procesos y productos que realmente conecten con las personas. Mi objetivo es humanizar la tecnología, asegurando que cada herramienta digital sea intuitiva, empática y responda a las necesidades reales de quienes la usan. Utilizo el análisis de datos y la observación del comportamiento para crear estrategias que no solo funcionan técnicamente, sino que generan valor y confianza a largo plazo.
                </p>
              </div>
            </div>
            <GlassCard className="h-96 group">
              <Photo src={profile} alt="Acerca de mí" />
            </GlassCard>
          </div>
        </section>

        {/* Sección "Experiencia Profesional" */}
        <section id="experiencia" className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">Experiencia Profesional</h2>
            <p className="text-white/40">Mi camino profesional y logros relevantes.</p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: 'Estudiante de Psicología',
                company: 'Formación Académica',
                description: 'Profundización en comportamiento humano, cognición y dinámica emocional. Aplicación práctica de teorías psicológicas en contextos corporativos y desarrollo personal continuo.',
                highlights: ['Teorías Conductuales', 'Psicología Organizacional', 'Desarrollo Personal']
              }
            ].map((job, i) => (
              <GlassCard key={i} className="p-8 lg:p-12" delay={i * 0.1}>
                <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Briefcase size={20} className="text-cyan-400" />
                      <h3 className="text-2xl font-bold">{job.title}</h3>
                    </div>
                    <p className="text-white/60 font-medium">{job.company}</p>
                   </div>
                </div>
                <p className="text-white/70 mb-6 leading-relaxed">{job.description}</p>
                <div className="flex flex-wrap gap-3">
                  {job.highlights.map((highlight, idx) => (
                    <span key={idx} className="px-4 py-2 glass rounded-full text-xs font-medium text-cyan-300/80 border border-cyan-300/20">
                      {highlight}
                    </span>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Bento Grid "Pasatiempos" */}
        <section id="esencia" className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">Mis Pasatiempos</h2>
            <p className="text-white/40">Lo que me recarga, me inspira y me hace sonreír.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-auto md:h-[600px]">
            {/* Tarjeta Grande: Escuchar Música */}
            <GlassCard className="md:col-span-2 md:row-span-2 group">
              <div className="relative h-full">
                <Photo src="https://picsum.photos/seed/music-vibes/800/800" alt="Escuchar Música" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                  <div className="glass w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Music className="text-cyan-300" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Escuchar Música</h3>
                  <p className="text-white/70 text-sm max-w-xs">
Acompaño mis días con música que me ayuda a desconectar o simplemente a ponerle ritmo a lo que estoy haciendo. Es mi forma de procesar el día                  </p>
                </div>
              </div>
            </GlassCard>

            {/* Tarjeta Mediana: Salir al Parque */}
            <GlassCard className="md:col-span-2 group">
              <div className="relative h-full">
                <Photo src="https://picsum.photos/seed/park-nature/800/400" alt="Salir al Parque" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                  <div className="glass w-10 h-10 rounded-xl flex items-center justify-center mb-3">
                    <Trees className="text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold">Salir al Parque</h3>
                  <p className="text-white/70 text-xs">Me gusta salir a caminar para despejar la mente, tomar un poco de aire fresco y disfrutar de un momento de tranquilidad al aire libre.</p>
                </div>
              </div>
            </GlassCard>

            {/* Tarjeta Pequeña 1: Ver Pelis */}
            <GlassCard className="group">
              <div className="relative h-full">
                <Photo src="https://picsum.photos/seed/cinema-movies/400/400" alt="Ver Pelis" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
                  <Film className="text-rose-400 mb-2" size={20} />
                  <h3 className="text-lg font-bold">Ver Pelis</h3>
                  <p className="text-white/60 text-[10px]">Disfruto de una buena película para relajarme; me gusta quedarme pensando en la historia o en lo que los personajes me enseñaron."</p>
                </div>
              </div>
            </GlassCard>

            {/* Tarjeta Pequeña 2: Ver Redes Sociales */}
            <GlassCard className="group">
              <div className="relative h-full">
                <Photo src="https://picsum.photos/seed/social-connect/400/400" alt="Ver Redes Sociales" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
                  <Share2 className="text-lavender-400 mb-2" size={20} />
                  <h3 className="text-lg font-bold">Redes Sociales</h3>
                  <p className="text-white/60 text-[10px]">Uso mis redes para guardar momentos especiales, compartir lo que me inspira y mantenerme conectada con lo que me importa.</p>
                </div>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* Galería "Vínculos" */}
        <section id="vinculos" className="space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight">Vínculos</h2>
              <p className="text-white/40 max-w-md">Historias, familia y el amor que me acompaña desde siempre.</p>
            </div>
            <div className="glass px-6 py-3 rounded-full text-xs font-medium text-white/60">
              Desliza para explorar →
            </div>
          </div>

          <div className="relative">
            <div className="flex overflow-x-auto gap-6 pb-8 snap-x no-scrollbar">
              {[
                { title: 'Familia', image: familia },
                { title: 'Marleny', image: pareja },
                { title: 'Infancia', image: img1 },
                { title: 'Raíces', image: img2 },
                { title: 'Compañera', image: img3 },
                { title: 'Recuerdos', image: img4 },
                { title: 'Unión', image: img5 },
                { title: 'Aventura', image: img6 }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex-none w-72 h-96 glass rounded-3xl overflow-hidden snap-center reflection-container group"
                >
                  <Photo src={item.image} alt={item.title} />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-sm font-medium tracking-wide uppercase text-cyan-300/80">{item.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sección "Hijos de 4 Patas" */}
        <section id="mascotas" className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">Hijos de 4 Patas</h2>
            <p className="text-white/40">Mis compañeros más fieles: mi perro y mi gato.</p>
          </div>

          <div className="flex justify-center">
            <div className="w-full lg:w-2/3">
              {[
                { type: 'Mis Mascotas', image: gato },
               ].map((pet, i) => (
                <GlassCard key={i} className="w-full aspect-square rounded-[4rem] group" delay={i * 0.1}>
                  <Photo src={pet.image} alt={pet.type} />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/20 backdrop-blur-sm">
                    <span className="glass px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
                      {pet.type}
                    </span>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Pasatiempos */}
        <section className="glass rounded-[4rem] p-12 lg:p-20 text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Cuando no estoy trabajando...</h2>
            <p className="text-white/40">Mis formas favoritas de recargar energía.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-12 lg:gap-24">
            {[
              { icon: Gamepad2, label: 'Videojuegos', color: 'text-cyan-400' },
              { icon: Moon, label: 'Dormir', color: 'text-lavender-400' },
              { icon: Trees, label: 'Aire Libre', color: 'text-emerald-400' }
            ].map((hobby, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="flex flex-col items-center gap-4"
              >
                <div className="w-20 h-20 glass rounded-3xl flex items-center justify-center group">
                  <hobby.icon size={32} className={`${hobby.color} transition-transform duration-500 group-hover:scale-125`} />
                </div>
                <span className="text-sm font-medium text-white/60">{hobby.label}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-20 border-t border-white/10 text-center space-y-8">
          <div className="flex justify-center gap-6">
            <a href="#" className="text-white/40 hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-white/40 hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-white/40 hover:text-white transition-colors">Email</a>
          </div>
          <p className="text-xs text-white/20 tracking-widest uppercase">
            © 2026 Reina del Rosario 
          </p>
        </footer>
      </main>
    </div>
  );
}
