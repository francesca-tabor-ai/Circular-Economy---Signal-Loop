
import React, { useState, useEffect, useRef, Suspense, lazy } from 'react';
import { ViewType } from './types';
import Landing from './components/Landing';
import FounderAI from './components/FounderAI';
import { MOCK_CREATOR, FOUNDER_IMAGE } from './constants';

// Lazy load components for better performance
const Dashboard = lazy(() => import('./components/Dashboard'));
const FanExperience = lazy(() => import('./components/FanExperience'));
const Marketplace = lazy(() => import('./components/Marketplace'));
const StrategyAI = lazy(() => import('./components/StrategyAI'));
const About = lazy(() => import('./components/About'));

// Loading component with micro-interaction
const LoadingSpinner: React.FC = () => (
  <div className="flex items-center justify-center min-h-[400px]">
    <div className="relative">
      <div className="w-12 h-12 border-4 border-gray-200 border-t-gray-950 rounded-full animate-spin"></div>
      <div className="absolute inset-0 w-12 h-12 border-4 border-transparent border-r-emerald-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}></div>
    </div>
  </div>
);

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>(ViewType.LANDING_PAGE);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const mainContentRef = useRef<HTMLDivElement>(null);
  const previousViewRef = useRef<ViewType>(ViewType.LANDING_PAGE);

  // Scroll to top on navigation with smooth animation
  useEffect(() => {
    if (currentView !== previousViewRef.current) {
      setIsNavigating(true);
      
      // Scroll to top smoothly
      const scrollToTop = () => {
        if (currentView === ViewType.LANDING_PAGE) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (mainContentRef.current) {
          mainContentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
        }
      };

      // Small delay for smooth transition
      setTimeout(() => {
        scrollToTop();
        setIsNavigating(false);
      }, 100);

      previousViewRef.current = currentView;
    }
  }, [currentView]);

  const navItems = [
    { id: ViewType.CREATOR_DASHBOARD, label: 'Creator Hub', icon: 'Dashboard' },
    { id: ViewType.FAN_EXPERIENCE, label: 'Fan Experience', icon: 'Loyalty' },
    { id: ViewType.MARKETPLACE, label: 'Marketplace', icon: 'Market' },
    { id: ViewType.STRATEGY_AI, label: 'AI Strategy', icon: 'Intelligence' },
    { id: ViewType.ABOUT, label: 'About Us', icon: 'Info' },
  ];

  // Enhanced navigation handler with micro-interaction
  const handleNavigation = (view: ViewType) => {
    if (view !== currentView) {
      setIsNavigating(true);
      setCurrentView(view);
    }
  };

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
            onClick={() => handleNavigation(ViewType.CREATOR_DASHBOARD)}
            className="bg-gray-950 hover:bg-gray-800 text-white transition-all duration-200 px-6 py-2.5 rounded-full text-sm font-bold tracking-tight shadow-md shadow-gray-200 hover:shadow-lg hover:scale-105 active:scale-95"
          >
            Dashboard
          </button>
        </header>

        <main className="w-full">
          <Landing onNavigate={handleNavigation} />
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
              onClick={() => handleNavigation(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-300 group relative overflow-hidden ${
                currentView === item.id 
                ? 'bg-white text-gray-950 border border-gray-200 shadow-sm' 
                : 'text-gray-500 hover:text-gray-950 hover:bg-white hover:border-gray-100 border border-transparent'
              }`}
            >
              {/* Micro-interaction: Active indicator */}
              {currentView === item.id && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent-gradient rounded-r-full transition-all duration-300" />
              )}
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <span className={`relative text-xs font-heading font-semibold tracking-wide uppercase transition-all duration-200 ${currentView === item.id ? 'text-gray-900' : 'text-gray-400 group-hover:text-gray-600'}`}>
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
      <main ref={mainContentRef} className="flex-1 overflow-y-auto relative bg-[#FCFCFD] scroll-smooth">
        <header className="sticky top-0 z-20 glass border-b border-gray-100 px-10 py-5 flex items-center justify-between backdrop-blur-md">
          <div className="overflow-hidden">
            <h1 
              key={currentView}
              className="text-sm font-heading font-bold text-gray-950 uppercase tracking-[0.1em] slide-in-from-left-4"
            >
              {navItems.find(i => i.id === currentView)?.label}
            </h1>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 px-4 py-1.5 rounded-full hover:bg-gray-100 transition-colors duration-200 group">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse group-hover:animate-none"></span>
              <span className="text-[11px] font-bold text-gray-600 uppercase tracking-wider">Live MRR: $12,450</span>
            </div>
            <button className="bg-gray-950 hover:bg-gray-800 text-white transition-all duration-200 px-5 py-2 rounded-full text-xs font-bold tracking-tight shadow-md shadow-gray-200 hover:shadow-lg hover:scale-105 active:scale-95">
              New Drop
            </button>
          </div>
        </header>

        <div className={`p-10 max-w-6xl mx-auto min-h-full transition-opacity duration-300 ${isNavigating ? 'opacity-50' : 'opacity-100'}`}>
          <Suspense fallback={<LoadingSpinner />}>
            {currentView === ViewType.CREATOR_DASHBOARD && (
              <div key="dashboard" className="fade-in slide-in-from-bottom-4">
                <Dashboard />
              </div>
            )}
            {currentView === ViewType.FAN_EXPERIENCE && (
              <div key="fan" className="fade-in slide-in-from-bottom-4">
                <FanExperience />
              </div>
            )}
            {currentView === ViewType.MARKETPLACE && (
              <div key="marketplace" className="fade-in slide-in-from-bottom-4">
                <Marketplace />
              </div>
            )}
            {currentView === ViewType.STRATEGY_AI && (
              <div key="strategy" className="fade-in slide-in-from-bottom-4">
                <StrategyAI />
              </div>
            )}
            {currentView === ViewType.ABOUT && (
              <div key="about" className="fade-in slide-in-from-bottom-4">
                <About />
              </div>
            )}
          </Suspense>
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
            className={`group relative w-16 h-16 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 border-2 ${isChatOpen ? 'border-gray-900 ring-4 ring-gray-100' : 'border-white hover:shadow-3xl'}`}
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
