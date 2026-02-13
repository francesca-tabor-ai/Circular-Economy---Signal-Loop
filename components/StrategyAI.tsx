
import React, { useState } from 'react';
import { getExperienceDropIdeas, hasApiKey } from '../services/geminiService';
import { MOCK_CREATOR } from '../constants';

const StrategyAI: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [ideas, setIdeas] = useState<any[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!hasApiKey()) {
      setError('GOOGLE_API_KEY_REQUIRED');
      return;
    }

    setIsGenerating(true);
    setError(null);
    
    try {
      const context = `${MOCK_CREATOR.name} is a ${MOCK_CREATOR.niche} creator with ${MOCK_CREATOR.followers} followers. Focus on building identity scarcity and high ARPU.`;
      const result = await getExperienceDropIdeas(context);
      setIdeas(result);
    } catch (err: any) {
      if (err.message === 'GOOGLE_API_KEY_REQUIRED') {
        setError('GOOGLE_API_KEY_REQUIRED');
      } else {
        setError('An error occurred while generating ideas. Please try again.');
      }
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-16 py-10 animate-in fade-in duration-700">
      <div className="space-y-6">
        <div className="w-12 h-1 bg-accent-gradient rounded-full"></div>
        <h2 className="text-5xl font-heading font-extrabold text-gray-950 tracking-tighter">
          Intelligence Engine
        </h2>
        <p className="text-xl text-gray-400 font-light max-w-2xl leading-relaxed">
          Circular monetization requires precise identity engineering. Our AI models analyze your unique cultural leverage to architect compounding revenue loops.
        </p>
        <button 
          onClick={handleGenerate}
          disabled={isGenerating || !hasApiKey()}
          className="px-10 py-4 bg-gray-950 text-white disabled:bg-gray-100 disabled:text-gray-300 rounded-[20px] font-bold text-sm tracking-tight hover:bg-gray-800 transition-all shadow-xl shadow-gray-100"
        >
          {isGenerating ? 'Analyzing Cultural Leverage...' : 'Generate Loop Strategy'}
        </button>
      </div>

      {error === 'GOOGLE_API_KEY_REQUIRED' && (
        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-8 max-w-2xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="text-2xl">⚠️</div>
            <div className="flex-1">
              <h3 className="font-heading font-bold text-gray-950 mb-2">Google API Key Required</h3>
              <p className="text-gray-700 mb-4">
                This feature requires a Google Gemini API key to function. Please set your <code className="bg-gray-100 px-2 py-1 rounded text-sm">GEMINI_API_KEY</code> in the <code className="bg-gray-100 px-2 py-1 rounded text-sm">.env.local</code> file.
              </p>
              <p className="text-sm text-gray-600">
                The platform will continue to work without the API key, but AI-powered features like strategy generation will be unavailable.
              </p>
            </div>
          </div>
        </div>
      )}

      {error && error !== 'GOOGLE_API_KEY_REQUIRED' && (
        <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8 max-w-2xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="text-2xl">❌</div>
            <div className="flex-1">
              <h3 className="font-heading font-bold text-gray-950 mb-2">Error</h3>
              <p className="text-gray-700">{error}</p>
            </div>
          </div>
        </div>
      )}

      {ideas && (
        <div className="space-y-8 pb-20">
          {ideas.map((idea, i) => (
            <div key={i} className="bg-white border border-gray-100 p-12 rounded-[40px] relative overflow-hidden group card-shadow hover:border-gray-200 transition-all">
              <div className="flex flex-col md:flex-row gap-12">
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Strategy Pass 0{i+1}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest leading-none">${idea.price} Target</span>
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-gray-950 tracking-tight">{idea.title}</h3>
                  <p className="text-gray-500 font-medium leading-relaxed">{idea.description}</p>
                </div>
                <div className="md:w-72 shrink-0 bg-gray-50 p-8 rounded-[32px] border border-gray-100">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Identity Scarcity Logic</p>
                  <p className="text-sm text-gray-700 italic leading-relaxed">"{idea.scarcityLogic}"</p>
                </div>
              </div>
              
              <div className="mt-12 flex gap-4">
                <button className="flex-1 py-4 bg-gray-50 hover:bg-gray-100 rounded-2xl font-bold text-sm tracking-tight text-gray-950 transition-colors">
                  Archive Draft
                </button>
                <button className="flex-1 py-4 bg-gray-950 text-white hover:bg-gray-800 rounded-2xl font-bold text-sm tracking-tight transition-all">
                  Initialize Drop
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {!ideas && !isGenerating && (
        <div className="py-24 text-center border-t border-gray-100">
          <p className="text-sm font-bold text-gray-300 uppercase tracking-[0.2em]">System Idling</p>
        </div>
      )}
    </div>
  );
};

export default StrategyAI;
