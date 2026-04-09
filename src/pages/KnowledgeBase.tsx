import React from 'react';
import { motion } from 'motion/react';
import { 
  FileText, 
  Plus, 
  Search, 
  ChevronRight, 
  Info,
  DollarSign,
  MapPin,
  Clock,
  ShieldAlert
} from 'lucide-react';

export default function KnowledgeBase() {
  const categories = [
    { icon: DollarSign, title: 'Precios y Depósitos', count: 12, color: 'bg-emerald-500' },
    { icon: Clock, title: 'Horarios y Citas', count: 8, color: 'bg-blue-500' },
    { icon: ShieldAlert, title: 'Cuidados y Salud', count: 15, color: 'bg-amber-500' },
    { icon: MapPin, title: 'Ubicación y Contacto', count: 5, color: 'bg-purple-500' },
  ];

  const recentDocs = [
    { title: 'Política de Cancelación 2024', date: 'Actualizado hace 2h', type: 'Documento' },
    { title: 'Guía de Cuidados Post-Tatuaje', date: 'Actualizado ayer', type: 'Guía' },
    { title: 'Lista de Precios por Tamaño', date: 'Actualizado hace 3 días', type: 'Tabla' },
  ];

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-4xl font-headline font-bold tracking-tighter">Base de Conocimientos</h2>
          <p className="text-on-surface-variant mt-2 font-body max-w-md">
            Entrena a tu IA con la información real de tu estudio para que nunca dé una respuesta incorrecta.
          </p>
        </div>
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Buscar en el cerebro de tu IA..."
            className="pl-12 pr-6 py-3 rounded-full bg-white border border-outline-variant/10 w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-3xl border border-outline-variant/10 shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <div className={`w-12 h-12 rounded-2xl ${cat.color} text-white flex items-center justify-center mb-6 shadow-lg`}>
              <cat.icon size={24} />
            </div>
            <h3 className="font-bold text-sm mb-1">{cat.title}</h3>
            <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">{cat.count} Entradas</p>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-lg font-headline">Documentos Recientes</h4>
            <button className="flex items-center gap-2 text-primary font-bold text-xs hover:gap-3 transition-all">
              Ver todos <ChevronRight size={14} />
            </button>
          </div>
          
          <div className="bg-white rounded-[2rem] border border-outline-variant/10 overflow-hidden">
            {recentDocs.map((doc, i) => (
              <div 
                key={i}
                className={`flex items-center justify-between p-6 hover:bg-surface-container-low transition-colors cursor-pointer ${
                  i !== recentDocs.length - 1 ? 'border-b border-outline-variant/10' : ''
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface-variant">
                    <FileText size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm">{doc.title}</h5>
                    <p className="text-[10px] text-on-surface-variant font-medium">{doc.date}</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2 py-1 rounded bg-surface-container-high text-on-surface-variant uppercase tracking-tighter">
                  {doc.type}
                </span>
              </div>
            ))}
          </div>

          <button className="w-full py-6 border-2 border-dashed border-outline-variant/20 rounded-[2rem] flex flex-col items-center justify-center gap-2 text-on-surface-variant hover:border-primary hover:text-primary hover:bg-primary/5 transition-all group">
            <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
              <Plus size={20} />
            </div>
            <span className="text-sm font-bold">Añadir nueva información</span>
          </button>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-primary to-primary-container rounded-[2rem] p-8 text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <Info size={32} className="mb-6 opacity-50" />
              <h4 className="text-xl font-bold font-headline mb-4 leading-tight">¿Cómo funciona el cerebro de tu IA?</h4>
              <p className="text-sm opacity-90 leading-relaxed mb-6">
                Cada documento que subes es procesado por nuestro motor neuronal. La IA no solo lee el texto, entiende el contexto de tu estudio para dar respuestas precisas.
              </p>
              <button className="w-full py-3 bg-white text-primary rounded-xl font-bold text-sm hover:scale-105 transition-transform">
                Ver Tutorial
              </button>
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
