import React from 'react';
import { motion } from 'motion/react';
import { 
  Zap, 
  Clock, 
  MessageSquare, 
  Calendar, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Mic
} from 'lucide-react';

interface LandingProps {
  onStart: () => void;
}

export default function Landing({ onStart }: LandingProps) {
  return (
    <div className="min-h-screen bg-surface text-on-surface overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white font-black text-lg">I</span>
            </div>
            <span className="text-xl font-bold font-headline tracking-tighter text-primary-container">InkVoice AI</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Funciones</a>
            <a href="#benefits" className="text-sm font-medium hover:text-primary transition-colors">Beneficios</a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Precios</a>
          </div>
          <button 
            onClick={onStart}
            className="bg-primary text-white px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform active:scale-95"
          >
            Empezar Ahora
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6">
              <Sparkles size={14} />
              LA REVOLUCIÓN DEL TATUAJE DIGITAL
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-headline leading-none tracking-tighter mb-6">
              Deja de responder mensajes, <span className="text-primary-container">empieza a tatuar.</span>
            </h1>
            <p className="text-lg text-on-surface-variant mb-10 max-w-lg leading-relaxed">
              InkVoice AI es tu asistente personal que responde DMs, resuelve dudas y agenda citas con tu propia voz y estilo. Recupera 2 horas de tu día y aumenta tus conversiones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onStart}
                className="bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 shadow-xl shadow-primary/20 hover:scale-105 transition-transform"
              >
                Crear mi Asistente Gratis
                <ArrowRight size={20} />
              </button>
              <div className="flex items-center gap-3 px-6 py-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <img 
                      key={i}
                      src={`https://picsum.photos/seed/artist${i}/100/100`} 
                      className="w-10 h-10 rounded-full border-2 border-surface"
                      alt="Artist"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-on-surface-variant">+500 tatuadores ya lo usan</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNiHlUvRsfQrkOue5jjCgB_krMd8VjOlYAcn6gVUFG-xv6U3alXuv63BvycNu1bx8FTApdc4RrAdrow_oCYvmgoEEHU09LaywBdareETkRENx6zfdWyIb2kFUyH2ZffnOBUfQjfD1KG1daXrBJnTk91XuKtwfzpTWv_QZUPSdTn9zyq1lmVdOXMepxu8WVtWRYk2akZTNFZPXPBFFmNzz_LHHf_OcPDsCPvKLTBpehnCNrRCikOs7Nk7-dSL4OZqsQWHdEbkM0EUg" 
                alt="Tattoo Artist"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-xs font-bold text-white uppercase tracking-widest">IA Respondiendo en vivo</span>
                </div>
                <p className="text-white text-sm italic">"Hola! El mínimo del estudio es 80€. Para una rosa pequeña en el antebrazo..."</p>
              </div>
            </div>
            {/* Decorative blobs */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -z-10"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary-container/20 rounded-full blur-[100px] -z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 px-6 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-headline mb-4">Diseñado por y para tatuadores</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">Entendemos tu flujo de trabajo. InkVoice AI no es solo un bot, es un miembro experto de tu equipo.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Mic,
                title: "Clonación de Voz Real",
                desc: "Tus clientes recibirán notas de voz con tu timbre real. Cercanía y confianza instantánea."
              },
              {
                icon: MessageSquare,
                title: "Respuesta Inteligente",
                desc: "Entrenado en tus estilos, precios y políticas. Responde como tú lo harías."
              },
              {
                icon: Calendar,
                title: "Agenda Automatizada",
                desc: "Sincroniza tu calendario y deja que la IA gestione los huecos libres y depósitos."
              }
            ].map((f, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-outline-variant/10"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <f.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold font-headline mb-8 leading-tight">
              Recupera tu tiempo creativo y <span className="text-primary">aumenta tus ingresos.</span>
            </h2>
            <div className="space-y-6">
              {[
                "Atención 24/7 sin estar pegado al móvil.",
                "Filtra clientes curiosos de clientes reales.",
                "Reduce el 'no-show' con recordatorios automáticos.",
                "Imagen de marca profesional y tecnológica."
              ].map((b, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-lg font-medium">{b}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-vivid-carbon p-12 rounded-[3rem] text-white relative overflow-hidden">
            <div className="relative z-10">
              <div className="text-6xl font-black font-headline text-primary-container mb-2">85%</div>
              <p className="text-xl font-bold mb-8">Menos tiempo respondiendo DMs</p>
              <div className="space-y-4">
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-primary-container w-[85%]"></div>
                </div>
                <p className="text-sm text-surface-variant opacity-60 italic">"Desde que uso InkVoice, puedo concentrarme 100% en el diseño mientras mi asistente cierra las citas por mí." - Alex, Vivid Ink Studio</p>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px]"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-primary">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold font-headline mb-8 leading-tight">
            ¿Listo para llevar tu estudio al siguiente nivel?
          </h2>
          <p className="text-xl mb-12 opacity-90">Únete a la élite de tatuadores que ya están automatizando su éxito.</p>
          <button 
            onClick={onStart}
            className="bg-white text-primary px-10 py-5 rounded-2xl font-black text-xl shadow-2xl hover:scale-105 transition-transform active:scale-95"
          >
            Empezar Gratis Ahora
          </button>
          <p className="mt-6 text-sm opacity-60">No requiere tarjeta de crédito. Configuración en 5 minutos.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white font-black text-xs">I</span>
            </div>
            <span className="text-lg font-bold font-headline tracking-tighter text-primary-container">InkVoice AI</span>
          </div>
          <div className="flex gap-8 text-sm text-on-surface-variant">
            <a href="#" className="hover:text-primary">Privacidad</a>
            <a href="#" className="hover:text-primary">Términos</a>
            <a href="#" className="hover:text-primary">Contacto</a>
          </div>
          <p className="text-xs text-on-surface-variant opacity-60">© 2024 InkVoice AI. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
