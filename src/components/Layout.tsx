import React from 'react';
import { motion } from 'motion/react';
import { 
  LayoutDashboard, 
  Mic2, 
  BookOpen, 
  Settings, 
  Share2, 
  HelpCircle, 
  LogOut,
  Bell,
  UserCircle,
  Plus
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onLogout: () => void;
}

export default function Layout({ children, activeTab, setActiveTab, onLogout }: LayoutProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Panel Control', icon: LayoutDashboard },
    { id: 'voice-lab', label: 'Laboratorio de Voz', icon: Mic2 },
    { id: 'knowledge', label: 'Base de Conocimientos', icon: BookOpen },
    { id: 'settings', label: 'Configuración', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-surface text-on-surface">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full hidden lg:flex flex-col z-40 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-2xl w-64 border-r border-zinc-200/10 shadow-2xl shadow-primary/5">
        <div className="px-6 py-8 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-container flex items-center justify-center shadow-lg">
              <span className="text-white font-black text-xl">I</span>
            </div>
            <div>
              <h1 className="text-primary-container font-black text-lg leading-none font-headline">Studio AI</h1>
              <p className="text-[10px] text-on-surface-variant tracking-widest mt-1 uppercase">Vivid Ink Studio</p>
            </div>
          </div>
        </div>

        <button className="mb-6 mx-4 bg-gradient-to-br from-primary to-primary-container text-white py-3 px-4 rounded-xl shadow-lg font-bold text-sm flex items-center justify-center gap-2 active:scale-95 transition-all">
          <Plus size={18} />
          Nuevo Tatuaje
        </button>

        <nav className="flex-1 px-2 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 hover:translate-x-1 ${
                activeTab === item.id
                  ? 'bg-gradient-to-br from-primary to-primary-container text-white shadow-lg'
                  : 'text-on-surface-variant hover:bg-surface-container-low'
              }`}
            >
              <item.icon size={20} />
              <span className="font-headline text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="mt-auto p-4 border-t border-outline-variant/10 space-y-1">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-primary transition-all">
            <HelpCircle size={18} />
            <span className="text-xs font-label">Ayuda</span>
          </button>
          <button 
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-red-500 transition-all"
          >
            <LogOut size={18} />
            <span className="text-xs font-label">Cerrar Sesión</span>
          </button>
        </div>
      </aside>

      {/* Top Bar */}
      <header className="fixed top-0 left-0 lg:left-64 right-0 h-16 z-30 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl flex justify-between items-center px-6 shadow-sm">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tighter text-primary-container font-headline">Ink & Precision</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 bg-primary/10 px-3 py-1.5 rounded-full">
            <span className="text-[10px] font-bold text-primary uppercase">150 Créditos</span>
          </div>
          <button className="bg-primary hover:opacity-90 transition-opacity text-white text-xs font-bold px-4 py-2 rounded-full active:scale-95 transition-transform">
            Mejorar Plan
          </button>
          <div className="flex items-center gap-3 ml-2 text-on-surface-variant">
            <Bell size={20} className="cursor-pointer hover:text-primary transition-colors" />
            <UserCircle size={24} className="cursor-pointer hover:text-primary transition-colors" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="lg:ml-64 pt-16 min-h-screen">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="p-6 md:p-10"
        >
          {children}
        </motion.div>
      </main>

      {/* Mobile Nav */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 lg:hidden bg-white/90 backdrop-blur-lg rounded-t-3xl shadow-lg border-t border-outline-variant/10">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all ${
              activeTab === item.id ? 'text-primary' : 'text-on-surface-variant'
            }`}
          >
            <item.icon size={20} />
            <span className="text-[10px] font-medium mt-1">{item.label.split(' ')[0]}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
