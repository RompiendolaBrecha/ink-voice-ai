/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Layout from './components/Layout';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import VoiceLab from './pages/VoiceLab';
import KnowledgeBase from './pages/KnowledgeBase';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleStart = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveTab('dashboard');
  };

  if (!isLoggedIn) {
    return <Landing onStart={handleStart} />;
  }

  return (
    <Layout 
      activeTab={activeTab} 
      setActiveTab={setActiveTab}
      onLogout={handleLogout}
    >
      {activeTab === 'dashboard' && <Dashboard />}
      {activeTab === 'voice-lab' && <VoiceLab />}
      {activeTab === 'knowledge' && <KnowledgeBase />}
      {activeTab === 'settings' && (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-4">
          <div className="w-20 h-20 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant">
            <span className="material-symbols-outlined text-4xl">settings</span>
          </div>
          <h2 className="text-2xl font-headline font-bold">Configuración</h2>
          <p className="text-on-surface-variant max-w-xs">Ajustes de cuenta, integraciones y facturación próximamente.</p>
        </div>
      )}
    </Layout>
  );
}
