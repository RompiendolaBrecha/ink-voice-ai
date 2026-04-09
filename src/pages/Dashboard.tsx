import React from 'react';
import { motion } from 'motion/react';
import { 
  TrendingUp, 
  MessageSquare, 
  Mic2, 
  Users, 
  Search,
  MoreHorizontal,
  Instagram
} from 'lucide-react';

export default function Dashboard() {
  const stats = [
    { label: 'Conversaciones Totales', value: '2,481', trend: '+14.2%', icon: MessageSquare, color: 'text-primary' },
    { label: 'Respuestas de IA', value: '1,892', subValue: '412 Voz', icon: Mic2, color: 'text-orange-500' },
    { label: 'Tasa de Conversión', value: '24.8%', trend: '+2.1%', icon: TrendingUp, color: 'text-secondary' },
  ];

  const interactions = [
    {
      id: 1,
      user: 'elara.inked',
      avatar: 'https://picsum.photos/seed/elara/100/100',
      message: '"Busco una manga neo-tradicional. ¿Tienen hueco el mes que viene para una consulta?"',
      time: 'hace 2m',
      status: 'Gestionado por IA',
      voice: true
    },
    {
      id: 2,
      user: 'marcus_vibe',
      avatar: 'https://picsum.photos/seed/marcus/100/100',
      message: '"Espera, si pago el depósito hoy, ¿puedo cambiar un poco el diseño más adelante?"',
      time: 'hace 14m',
      status: 'Requiere Humano',
      voice: false
    },
    {
      id: 3,
      user: 'sarah_codes',
      avatar: 'https://picsum.photos/seed/sarah/100/100',
      message: '"¡Gracias! El enlace de reserva funcionó perfectamente. ¡Nos vemos el día 12!"',
      time: 'hace 1h',
      status: 'Gestionado por IA',
      voice: true
    }
  ];

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-4xl font-headline font-bold text-on-background tracking-tighter">Conversaciones</h2>
          <p className="text-on-surface-variant mt-2 font-body max-w-md">
            El artesano digital de tu estudio está gestionando actualmente <span className="text-primary-container font-bold">12 consultas activas</span>.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-2.5 rounded-full bg-surface-container-high text-on-surface text-sm font-medium hover:bg-surface-container-highest transition-colors">
            Toda la Actividad
          </button>
          <button className="px-5 py-2.5 rounded-full bg-gradient-to-br from-primary to-primary-container text-white text-sm font-bold shadow-lg shadow-primary/20 transition-transform active:scale-95">
            Nueva Campaña
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className={`absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform ${stat.color}`}>
              <stat.icon size={80} />
            </div>
            <div className="relative z-10">
              <p className="text-on-surface-variant font-label uppercase tracking-widest text-[10px] mb-2">{stat.label}</p>
              <h3 className="text-4xl font-headline font-bold">{stat.value}</h3>
              {stat.subValue && <p className="text-xs text-on-surface-variant mt-1 font-medium">{stat.subValue}</p>}
              {stat.trend && (
                <div className="mt-4 flex items-center gap-2 text-emerald-500 text-sm font-bold">
                  <TrendingUp size={14} />
                  <span>{stat.trend} desde la semana pasada</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Main Activity Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Activity Feed */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-headline font-bold tracking-tight">Interacciones Recientes</h4>
            <div className="flex gap-4">
              <button className="text-xs font-label text-primary font-bold border-b-2 border-primary pb-1">Todas</button>
              <button className="text-xs font-label text-on-surface-variant hover:text-on-surface transition-colors pb-1">Requiere Atención</button>
            </div>
          </div>
          
          <div className="space-y-4">
            {interactions.map((item) => (
              <motion.div 
                key={item.id}
                whileHover={{ x: 5 }}
                className="bg-white hover:bg-surface-container-low transition-colors rounded-2xl p-5 border border-outline-variant/10 group"
              >
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <img 
                      src={item.avatar} 
                      alt={item.user} 
                      className="w-12 h-12 rounded-full object-cover border-2 border-surface shadow-sm"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center border-2 border-white">
                      <Instagram size={10} className="text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h5 className="font-bold text-sm">{item.user}</h5>
                      <span className="text-[10px] text-on-surface-variant">{item.time}</span>
                    </div>
                    <p className="text-on-surface-variant text-sm line-clamp-1 mb-3 italic">{item.message}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-tighter ${
                          item.status === 'Gestionado por IA' ? 'bg-emerald-500/10 text-emerald-600' : 'bg-amber-500/10 text-amber-600'
                        }`}>
                          {item.status}
                        </span>
                        {item.voice && (
                          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-bold bg-primary/10 text-primary uppercase tracking-tighter">
                            <Mic2 size={10} />
                            Voz Activa
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-3">
                        <button className="p-2 hover:bg-surface-container-high rounded-lg transition-colors">
                          <MoreHorizontal size={18} className="text-on-surface-variant" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Rail */}
        <div className="space-y-8">
          {/* Live Voice Node */}
          <div className="bg-zinc-900 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <Mic2 size={20} className="text-primary-container" />
                <h4 className="font-bold text-sm uppercase tracking-widest">Nodo de Voz IA</h4>
              </div>
              <div className="h-32 bg-black/40 rounded-2xl flex items-center justify-center gap-1.5 px-4">
                {[...Array(12)].map((_, i) => (
                  <div 
                    key={i} 
                    className="w-1 bg-primary-container rounded-full animate-wave"
                    style={{ 
                      height: `${Math.random() * 60 + 20}%`,
                      animationDelay: `${i * 0.1}s`
                    }}
                  />
                ))}
              </div>
              <p className="text-[10px] text-center mt-4 text-zinc-500 font-label italic uppercase tracking-wider">
                "Procesando intención de estilo neo-tradicional..."
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none"></div>
          </div>

          {/* Studio Health */}
          <div className="bg-white rounded-3xl p-6 border border-outline-variant/10 shadow-sm">
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Salud del Estudio</h4>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-[10px] uppercase font-bold text-on-surface-variant mb-2">
                  <span>Precisión de IA</span>
                  <span className="text-primary">98%</span>
                </div>
                <div className="h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[98%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[10px] uppercase font-bold text-on-surface-variant mb-2">
                  <span>Latencia de Voz</span>
                  <span className="text-secondary">140ms</span>
                </div>
                <div className="h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden">
                  <div className="h-full bg-secondary w-[85%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
