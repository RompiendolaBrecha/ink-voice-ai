import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mic, 
  Play, 
  Square, 
  RefreshCw, 
  CheckCircle2, 
  Volume2,
  Settings2,
  Sparkles
} from 'lucide-react';

export default function VoiceLab() {
  const [isRecording, setIsRecording] = useState(false);
  const [step, setStep] = useState(1);

  const phrases = [
    "Hola, soy el asistente de Vivid Ink Studio. ¿En qué puedo ayudarte hoy?",
    "El precio mínimo para una sesión de tatuaje es de ochenta euros.",
    "Para reservar tu cita, necesitamos un depósito previo de cincuenta euros.",
    "Recuerda venir bien hidratado y haber comido antes de tu sesión."
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold">
          <Sparkles size={14} />
          CLONACIÓN DE VOZ NEURONAL
        </div>
        <h2 className="text-4xl font-headline font-bold tracking-tighter">Laboratorio de Voz</h2>
        <p className="text-on-surface-variant font-body max-w-xl mx-auto">
          Entrena a tu asistente para que hable exactamente como tú. Solo necesitamos 4 frases para capturar tu esencia.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Recording Area */}
        <div className="md:col-span-2 bg-white rounded-[2.5rem] p-10 border border-outline-variant/10 shadow-xl shadow-primary/5 relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex justify-between items-center mb-12">
              <div className="flex gap-2">
                {[1, 2, 3, 4].map((s) => (
                  <div 
                    key={s} 
                    className={`h-1.5 w-8 rounded-full transition-all duration-500 ${
                      s <= step ? 'bg-primary' : 'bg-surface-container-high'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Paso {step} de 4</span>
            </div>

            <div className="min-h-[120px] mb-12">
              <motion.p 
                key={step}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl font-headline font-medium text-center leading-relaxed italic"
              >
                "{phrases[step - 1]}"
              </motion.p>
            </div>

            <div className="flex flex-col items-center gap-8">
              <div className="relative">
                {isRecording && (
                  <motion.div 
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="absolute inset-0 bg-primary/20 rounded-full"
                  />
                )}
                <button 
                  onClick={() => setIsRecording(!isRecording)}
                  className={`relative z-10 w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl ${
                    isRecording 
                      ? 'bg-red-500 text-white scale-110' 
                      : 'bg-primary text-white hover:scale-105 active:scale-95'
                  }`}
                >
                  {isRecording ? <Square size={32} /> : <Mic size={32} />}
                </button>
              </div>

              <div className="flex gap-4">
                <button 
                  disabled={step === 1}
                  onClick={() => setStep(s => s - 1)}
                  className="p-3 rounded-full bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high disabled:opacity-30 transition-all"
                >
                  <RefreshCw size={20} />
                </button>
                <button 
                  onClick={() => setStep(s => Math.min(4, s + 1))}
                  className="px-8 py-3 rounded-full bg-on-surface text-white font-bold text-sm hover:opacity-90 transition-all"
                >
                  Siguiente Frase
                </button>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
        </div>

        {/* Settings & Preview */}
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 border border-outline-variant/10 shadow-sm">
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
              <Settings2 size={16} className="text-primary" />
              Parámetros
            </h4>
            <div className="space-y-6">
              <div>
                <label className="text-[10px] font-bold text-on-surface-variant uppercase mb-2 block">Tono Emocional</label>
                <div className="flex gap-2">
                  {['Calmado', 'Energético', 'Formal'].map((t) => (
                    <button key={t} className="flex-1 py-2 rounded-lg bg-surface-container-low text-[10px] font-bold hover:bg-primary/10 hover:text-primary transition-all">
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-[10px] font-bold text-on-surface-variant uppercase mb-2 block">Velocidad</label>
                <input type="range" className="w-full accent-primary" />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-zinc-900 to-black rounded-3xl p-6 text-white shadow-xl">
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
              <Volume2 size={16} className="text-primary-container" />
              Vista Previa
            </h4>
            <div className="bg-white/5 rounded-2xl p-4 border border-white/10 mb-4">
              <div className="flex items-center gap-3">
                <button className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-white">
                  <Play size={14} fill="currentColor" />
                </button>
                <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-primary-container w-1/3"></div>
                </div>
              </div>
            </div>
            <p className="text-[10px] text-zinc-500 italic">"Escucha cómo suena tu asistente con los ajustes actuales."</p>
          </div>
        </div>
      </div>
    </div>
  );
}
