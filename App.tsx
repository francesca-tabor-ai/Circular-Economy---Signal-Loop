
import React, { useState } from 'react';
import { ViewType } from './types';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import FanExperience from './components/FanExperience';
import Marketplace from './components/Marketplace';
import StrategyAI from './components/StrategyAI';
import About from './components/About';
import FounderAI from './components/FounderAI';
import { MOCK_CREATOR, FOUNDER_IMAGE } from './constants';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>(ViewType.LANDING_PAGE);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const navItems = [
    { id: ViewType.CREATOR_DASHBOARD, label: 'Creator Hub', icon: 'Dashboard' },
    { id: ViewType.FAN_EXPERIENCE, label: 'Fan Experience', icon: 'Loyalty' },
    { id: ViewType.MARKETPLACE, label: 'Marketplace', icon: 'Market' },
    { id: ViewType.STRATEGY_AI, label: 'AI Strategy', icon: 'Intelligence' },
    { id: ViewType.ABOUT, label: 'About Us', icon: 'Info' },
  ];

  // Show landing page without sidebar
  if (currentView === ViewType.LANDING_PAGE) {
    return (
      <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
        {/* Header with Dashboard button */}
        <header className="sticky top-0 z-50 glass border-b border-gray-100 px-6 md:px-10 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-accent-gradient shadow-sm"></div>
            <span className="font-heading text-lg font-bold tracking-tight text-gray-950">SignalLoop</span>
          </div>
          <button
            onClick={() => setCurrentView(ViewType.CREATOR_DASHBOARD)}
            className="bg-gray-950 hover:bg-gray-800 text-white transition-all px-6 py-2.5 rounded-full text-sm font-bold tracking-tight shadow-md shadow-gray-200"
          >
            Dashboard
          </button>
        </header>

        <main className="w-full">
          <Landing onNavigate={setCurrentView} />
        </main>
      </div>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden bg-white text-gray-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Navigation */}
      <aside className="w-64 border-r border-gray-100 bg-gray-50/30 flex flex-col shrink-0">
        <div className="p-8 flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-accent-gradient shadow-sm"></div>
          <span className="font-heading text-lg font-bold tracking-tight text-gray-950">SignalLoop</span>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200 group ${
                currentView === item.id 
                ? 'bg-white text-gray-950 border border-gray-200 shadow-sm' 
                : 'text-gray-500 hover:text-gray-950 hover:bg-white hover:border-gray-100 border border-transparent'
              }`}
            >
              <span className={`text-xs font-heading font-semibold tracking-wide uppercase ${currentView === item.id ? 'text-gray-900' : 'text-gray-400 group-hover:text-gray-600'}`}>
                {item.label}
              </span>
            </button>
          ))}
        </nav>

        <div className="p-6">
          <div className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-2xl shadow-sm">
            <img src={MOCK_CREATOR.avatar} className="w-8 h-8 rounded-full object-cover" alt="Profile" />
            <div className="overflow-hidden">
              <p className="text-xs font-bold text-gray-900 truncate">{MOCK_CREATOR.name}</p>
              <p className="text-[10px] text-gray-400 truncate leading-none uppercase tracking-wider">{MOCK_CREATOR.handle}</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Surface */}
      <main className="flex-1 overflow-y-auto relative bg-[#FCFCFD]">
        <header className="sticky top-0 z-20 glass border-b border-gray-100 px-10 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-sm font-heading font-bold text-gray-950 uppercase tracking-[0.1em]">
              {navItems.find(i => i.id === currentView)?.label}
            </h1>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 px-4 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span className="text-[11px] font-bold text-gray-600 uppercase tracking-wider">Live MRR: $12,450</span>
            </div>
            <button className="bg-gray-950 hover:bg-gray-800 text-white transition-all px-5 py-2 rounded-full text-xs font-bold tracking-tight shadow-md shadow-gray-200">
              New Drop
            </button>
          </div>
        </header>

        <div className="p-10 max-w-6xl mx-auto min-h-full">
          {currentView === ViewType.CREATOR_DASHBOARD && <Dashboard />}
          {currentView === ViewType.FAN_EXPERIENCE && <FanExperience />}
          {currentView === ViewType.MARKETPLACE && <Marketplace />}
          {currentView === ViewType.STRATEGY_AI && <StrategyAI />}
          {currentView === ViewType.ABOUT && <About />}
        </div>

        {/* Floating Chat UI */}
        <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end">
          {isChatOpen && (
            <div className="mb-4 w-[400px] h-[650px] bg-white border border-gray-100 rounded-[32px] shadow-2xl overflow-hidden flex flex-col animate-in slide-in-from-bottom-4 duration-300">
              <FounderAI onClose={() => setIsChatOpen(false)} currentView={currentView} />
            </div>
          )}
          <button
            onClick={() => setIsChatOpen(!isChatOpen)}
            className={`group relative w-16 h-16 rounded-2xl overflow-hidden shadow-2xl transition-all hover:scale-105 active:scale-95 border-2 ${isChatOpen ? 'border-gray-900 ring-4 ring-gray-100' : 'border-white'}`}
          >
            {isChatOpen ? (
              <div className="absolute inset-0 bg-gray-950/80 flex items-center justify-center text-white z-10 transition-opacity">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            ) : (
              <div className="absolute inset-0 bg-accent-gradient opacity-0 group-hover:opacity-20 transition-opacity z-10" />
            )}
            <img 
              src={FOUNDER_IMAGE} 
              alt="Adrian Kovač" 
              className={`w-full h-full object-cover transition-all duration-500 ${isChatOpen ? 'scale-110 blur-[1px]' : 'scale-100'}`} 
            />
          </button>
        </div>
      </main>
    </div>
  );
};

export default App;
